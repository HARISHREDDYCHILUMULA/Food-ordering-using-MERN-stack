import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/user";

declare global{
    namespace Express{
        interface Request{
            auth0ID: string;
            userId: string;
        }
    }
}

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIANCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256',
});

export const jwtParse=async(req: Request, res: Response, next: NextFunction)=>{
    const { authorization }=req.headers;
    if(!authorization || !authorization.startsWith("Bearer ")){
        res.sendStatus(401);
    }

    const token = authorization ? authorization.split(" ")[1] : undefined;
    if (!token) {
        return res.sendStatus(401);
    }
    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0ID = decoded.sub;
        const user = await User.findOne({ auth0ID });
        if (!user) {
            return res.sendStatus(401);
        }
        req.auth0ID = auth0ID as string;
        req.userId = user._id.toString();
        next();
    } catch (error) {
        res.sendStatus(401);
    }
}