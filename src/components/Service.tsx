import Earth from "../assets/servicesPic/earth.svg"
import Cloudy from "../assets/servicesPic/cloudy.svg"
import Booking from "../assets/servicesPic/booking.svg"
import { useEffect, useState } from "react";
const data = [
    {
        id: 1, title: "Best Tour Guide", paragrap: "What look like a small patch of purple grass, above five feet.", image: Earth
    },
    {
        id: 1, title: "Best Tour Guide", paragrap: "What look like a small patch of purple grass, above five feet.", image: Booking
    },
    {
        id: 1, title: "Best Tour Guide", paragrap: "What look like a small patch of purple grass, above five feet.", image: Cloudy
    },
]
const Service = () => {

    const [currentData, setCurrentData] = useState(0)
    const lastData = data.length - 1

    useEffect(() => {
        const internal = setInterval(() => {
            setCurrentData(currentData === lastData ? 0 : currentData + 1)
        }, 1500)
        return () => clearInterval(internal)

    }, [currentData, lastData])


    return <div className=" pl-[40px] lg:pl-[84px] xl:pl-paddingcontainer flex items-center overflow-hidden pb-16">
        <div className="">
            <h3 className="text-[#F85E9F] text-[23px] leading-[120%] tracking-widest uppercase font-medium pb-4" >Services</h3>
            <p className="text-[40px] xl:text-[44px] leading-[120%] w-[350px] lg:w-[444px]  max-w-[444px] font-medium">Our top value categories for you</p>
        </div>
        <div className="flex-1">
            <div className=" flex gap-[21px] overflow-hidden p-10  ">
                {data.map((item, index) => (
                    <div key={index} style={{ transform: `translateX(-${currentData * 100}%)` }} className={`${index == currentData ? " shadow-box-2 opacity-100" : "opacity-60"} transition-transform duration-500 ease-out w-[300px]  xl:w-[350px] h-[400px] xl:h-[443px] rounded-[32px]  bg-white p-8 xl:p-16 pb-0 text-center`}>
                        <div className="flex justify-center pb-16"><img src={item.image} alt="" /></div>
                        <div>
                            <h3 className="text-[24px] xl:text-[28px] leading-[120%] pb-8">{item.title}</h3>
                            <p className="font-Inter text-lg leading-[160%]  text-[#191825] text-opacity-50">{item.paragrap}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Service;
