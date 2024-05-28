import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; 
const UserNameMenu=()=>{
    const { user, logout }=useAuth0();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                <CircleUserRound className="text-orange-500"/>
                {user?.email}
            </DropdownMenuTrigger>
            

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="hover:text-orange-500 font-bold">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=>logout()} className="flex flex-1 hover:text-orange-500 font-bold">
                        Logout
                    </Button>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNameMenu;