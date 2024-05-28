const Footer=()=>{
    return(
        <div className="bg-orange-500 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">RaiEats.com</span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </span>
            </div>
        </div>
    );
};
export default Footer;