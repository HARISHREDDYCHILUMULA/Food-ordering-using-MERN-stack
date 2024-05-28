import appDownload from "../assets/appDownload.png";
import landing from "../assets/landing.png";
const HomePage=()=>{
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl tracking-tight text-orange-600 font-bold">
                    Tuck into takeaway today
                </h1>
                <span className="text-xl"> Food is just a click away</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landing}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold tracking-tighter text-3xl">
                        Order takeaway even faster!
                    </span>
                    <span >
                        Download the RaiEats app for faster and personalized recommendations
                    </span>
                    <img src={appDownload}/>
                </div>
            </div>
        </div>
    );
};
export default HomePage;