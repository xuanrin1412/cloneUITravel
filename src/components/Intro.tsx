import Button from "./Button";
import Bag from "../assets/img/Bag";
import Play from "../assets/img/Play";
import Plane from "../assets/img/plane.svg";
import Layer from "../assets/img/layer.svg";
import Person from "../assets/img/person.svg";

const Intro = () => {
    return <section className="px-[40px] md:px-0 md:pl-[40px] lg:pl-[84px] xl:pl-paddingcontainer  lg:pr-[40px] xl:pr-[76px]  ">
        <div className="flex flex-col md:flex-row w-full h-full md:items-center ">
            {/* left side */}
            <div className=" md:w-[40%] lg:w-[35.6%]  flex flex-col gap-11">
                <Button
                    classNameStyle="bg-white text-[#F85E9F] flex items-center gap-5 w-fit"
                    title={<><span className="text-sm">Explore the world!</span><Bag /></>}
                />
                <h1 className="text-[40px] lg:text-[60px]  min-[1281px]:text-[69px] leading-[120%] ">Travel <span className="text-[#F85E9F]">top destination </span>of the world</h1>
                <p className="font-Inter text-[16px] leading-[160%] text-[#191825] text-opacity-50">We always make sure out customer happy by poviding as many choise as possible</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <Button
                        classNameStyle="bg-[#5D50C6] text-[#EEEEEE] w-full lg:w-fit shadow-box "
                        title="Get started"
                    />
                    <Button
                        classNameStyle="bg-white text-black w-full lg:w-fit flex gap-3 border items-center justify-center"
                        title={<><Play />Watch Demo</>}
                    />
                </div>
            </div>
            <div className="relative flex-1 h-full">
                <div className="absolute top-0 left-0 -z-10">
                    <img src={Layer} className="" alt="" />
                </div>
                <div className=" w-full h-full pl-[35px]
                lg:pl-[51px] desktop:pl-[91px] pr-[30px]  lg:pr-[66px] desktop:pr-[106px] pt-[35px] desktop:pt-[75px]">
                    <div className=" grid grid-cols-2 items-center gap-[31px] desktop:gap-[31px]">
                        <div className="flex flex-col gap-8">
                            <div className="relative h-[300px] ">
                                <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/04/maya-bay-koh-phi-phi-thailand.jpg?ssl=1" alt="" className="h-full w-full object-cover rounded-[32px]" />
                                <div className="absolute shadow-box  -left-[26px] -bottom-[26px] h-16 w-16 rounded-full bg-[#F85E9F] flex items-center justify-center"><img src={Plane} alt="" /></div>
                            </div>
                            <div className="h-[300px] ">
                                <img src="https://saltyluxe.com/wp-content/uploads/2020/07/DSC0503.jpg" alt="" className="h-full w-full object-cover rounded-[32px]" />
                            </div>
                        </div>
                        <div className="relative h-[400px] ">
                            <img src="https://www.undp.org/sites/g/files/zskgke326/files/2024-04/pexels-pixabay-417351_2.jpg" alt="" className="h-full w-full object-cover rounded-[32px]" />
                            <div className="absolute shadow-box  left-[69px] -bottom-[112px] h-16 w-16 rounded-full bg-[#FF5722] flex items-center justify-center"><img src={Person} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Intro;
