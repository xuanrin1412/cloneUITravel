import Airbnb from "../assets/logoPartner/airbnb.svg"
import Booking from "../assets/logoPartner/booking.svg"
import Expedia from "../assets/logoPartner/expedia.svg"
import Rbitz from "../assets/logoPartner/rbitz.svg"
import Tripadvisor from "../assets/logoPartner/tripadvisor.svg"
import UpTriangle from "../assets/logoPartner/upTriangle.svg"
import BlurYellow from "../assets/logoPartner/blurYellow.svg"
const BannerPartner = () => {
    return <div className="relative my-[64px] w-full">
        <div className="py-[64px]  lg:w-10/12 xl:w-container mx-auto  flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between">
            <div><img src={Tripadvisor} alt="Tripadvisor" /></div>
            <div><img src={Expedia} alt="Expedia" /></div>
            <div><img src={Booking} alt="Booking" /></div>
            <div><img src={Airbnb} alt="Airbnb" /></div>
            <div><img src={Rbitz} alt="Rbitz" /></div>
        </div>
        <div className="absolute top-[-66px] left-[38px] flex  gap-[23.5px]">
            <div className="flex flex-col gap-[25.5px]">
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
            </div>
            <div className="flex flex-col gap-[25.5px] pt-[25.5px]">
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
                <img src={UpTriangle} alt="" />
            </div>
        </div>
        <div className="absolute right-0 -top-[540px] -z-10"><img src={BlurYellow} alt="" /></div>
    </div>;
};

export default BannerPartner;
