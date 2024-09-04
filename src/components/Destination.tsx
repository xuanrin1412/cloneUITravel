import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Star from "../assets/img/star.svg"
import Multiplications from "../assets/img/multiplications.svg"

const Destination = () => {
    return <div className="w-11/12 lg:w-10/12 xl:w-container mx-auto  flex flex-col pb-[128px]">
        <div className="flex justify-between items-center py-[65.5px]">
            <div>
                <h3 className="text-[#F85E9F] text-[23px] leading-[120%] tracking-widest uppercase font-medium pb-4" >Top destination</h3>
                <h2 className="text-[40px] xl:text-[44px] leading-[120%] font-medium">Exprove top destination</h2>
            </div>
            <div className="flex gap-8">
                <button className="h-[70px] w-[70px] desktop:h-[100px] desktop:w-[100px] flex items-center justify-center border rounded-full"><FaArrowLeft /></button>
                <button className=" shadow-box h-[70px] w-[70px] desktop:h-[100px] desktop:w-[100px] bg-[#5D50C6] text-white flex items-center justify-center border rounded-full"><FaArrowRight /></button>
            </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-[31px] relative">
            <div className=" rounded-b-3xl shadow-box-3">
                <div className="w-full h-[300px] desktop:h-[350px]">
                    <img src="https://www.bontravelindia.com/wp-content/uploads/2023/03/Best-Beach-Resorts-in-Maldives.jpg" className="h-full w-full object-cover rounded-t-3xl" alt="" />
                </div>
                <div className="p-8">
                    <div className="flex pb-4">
                        <h3 className="text-lg desktop:text-[23px] leading-[120%]">Paradise Beach, Bantayan Island</h3>
                        <span className="text-lg desktop:text-[23px] leading-[120%] text-[#F85E9F]">$550.16</span>
                    </div>
                    <p className="pb-4 desktop:pb-8 text-[#191825] text-opacity-50">Rome, Italy</p>
                    <div className="flex items-center gap-[10px]"><span className="text-lg desktop:text-[23px] leading-[120%] text-[#FF5722]">4.8</span><img src={Star} alt="" /></div>
                </div>
            </div>
            <div className=" rounded-b-3xl shadow-box-3">
                <div className="w-full h-[300px] desktop:h-[350px]">
                    <img src="https://wallpapers.com/images/featured/maldives-23wyvlaqa7aydqny.jpg" className="h-full w-full object-cover rounded-t-3xl" alt="" />
                </div>
                <div className="p-8">
                    <div className="flex pb-4">
                        <h3 className="text-lg desktop:text-[23px] leading-[120%]">Paradise Beach, Bantayan Island</h3>
                        <span className="text-lg desktop:text-[23px] leading-[120%] text-[#F85E9F]">$550.16</span>
                    </div>
                    <p className="pb-4 desktop:pb-8 text-[#191825] text-opacity-50">Rome, Italy</p>
                    <div className="flex items-center gap-[10px]"><span className="text-lg desktop:text-[23px] leading-[120%] text-[#FF5722]">4.8</span><img src={Star} alt="" /></div>
                </div>
            </div>
            <div className=" rounded-b-3xl shadow-box-3">
                <div className="w-full h-[300px] desktop:h-[350px]">
                    <img src="https://wallpaperaccess.com/full/1098480.jpg" className="h-full w-full object-cover rounded-t-3xl" alt="" />
                </div>
                <div className="p-8">
                    <div className="flex pb-4">
                        <h3 className="text-lg desktop:text-[23px] leading-[120%]">Paradise Beach, Bantayan Island</h3>
                        <span className="text-lg desktop:text-[23px] leading-[120%] text-[#F85E9F]">$550.16</span>
                    </div>
                    <p className="pb-4 desktop:pb-8 text-[#191825] text-opacity-50">Rome, Italy</p>
                    <div className="flex items-center gap-[10px]"><span className="text-lg desktop:text-[23px] leading-[120%] text-[#FF5722]">4.8</span><img src={Star} alt="" /></div>
                </div>
            </div>

            <div className="absolute right-0 xl:right-[-135px] -top-[38px]">
                <div><img src={Multiplications} alt="" /></div>
            </div>
        </div>
    </div>;
};

export default Destination;
