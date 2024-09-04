
import Coupon from "../assets/img/coupon.svg"
import TravelPointBanner from "../assets/img/bannerTravelPoint.svg"
const TravelPoint = () => {
    return <div className="pr-[40px] lg:pr-[84px] desktop:pr-[165px]  flex flex-col lg:flex-row  w-full items-center pb-[110px] gap-10 lg:gap-0">
        <div className="w-full lg:w-[50%]  xl:w-[60%] desktop:w-fit">
            <img src={TravelPointBanner} className="" alt="" />
        </div>
        <div className="pl-[42px] flex-1">
            <div className="pb-16">
                <h3 className="text-[#F85E9F] text-[23px] leading-[120%] tracking-widest uppercase font-medium pb-4" >Travel Point</h3>
                <h2 className="text-[44px] leading-[120%] font-medium pb-8">We helping you find your dream location</h2>
                <p className="font-Inter text-lg leading-[160%] text-[#191825] text-opacity-50">Contrary to popular belieft Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                <div className="border rounded-[32px] py-6 xl:py-8 text-center">
                    <h2 className="text-[35px] leading-[120%] text-[#FF5722] pb-4">500+</h2>
                    <p className="font-Inter text-lg leading-[160%] text-[#191825]">Holiday Package</p>
                </div>
                <div className="relative border rounded-[32px] py-6 xl:py-8 text-center">
                    <h2 className="text-[35px] leading-[120%] text-[#FF5722] pb-4">100</h2>
                    <p className="font-Inter text-lg leading-[160%] text-[#191825]">Luxury Hotel</p>
                    <div className="absolute -top-[53px] right-[-40px] xl:right-[-76px] w-[60px] h-[60px] md:h-[90px] md:w-[90px] xl:h-[112px] xl:w-[112px] flex items-center justify-center bg-[#FACD49] z-50 rounded-full"><img src={Coupon} alt="" /></div>
                </div>
                <div className="border rounded-[32px] py-6 xl:py-8 text-center">
                    <h2 className="text-[35px] leading-[120%] text-[#FF5722] pb-4">7</h2>
                    <p className="font-Inter text-lg leading-[160%] text-[#191825]">Premeum Airlines</p>
                </div>
                <div className="border rounded-[32px] py-6 xl:py-8 text-center">
                    <h2 className="text-[35px] leading-[120%] text-[#FF5722] pb-4">2k+</h2>
                    <p className="font-Inter text-lg leading-[160%] text-[#191825]">Happy Customer</p>
                </div>
            </div>
        </div>
    </div>;
};

export default TravelPoint;
