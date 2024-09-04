
import Location from "../assets/img/location.svg"
import Discount from "../assets/img/discount.svg"
import Calender from "../assets/img/calender.svg"
import Map from "../assets/img/map.svg"
import DotKeyFeature from "../assets/img/dotdotKeyFeature.svg"
const KeyFeature = () => {
    return <div className="pl-0 lg:pl-[50px] xl:pl-paddingcontainer flex flex-col lg:flex-row items-center relative gap-6 desktop:gap-[42px]  ">
        <div className=" w-10/12 lg:w-[43.2%]">
            <div className="pb-8 desktop:pb-16">
                <h3 className="text-[#F85E9F] text-[23px] leading-[120%] tracking-widest uppercase font-medium pb-4">Key Features</h3>
                <h2 className="text-[44px] leading-[120%] font-medium pb-8">We offer best services</h2>
                <p className="font-Inter text-lg leading-[160%] text-[#191825] text-opacity-50">Contrary to popular belieft Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="">
                <div className="flex items-center gap-8 p-6 desktop:p-8 ">
                    <div className="h-[80px] w-[80px] desktop:h-[100px] desktop:w-[100px] rounded-3xl bg-[#FF5722] flex items-center justify-center">
                        <img src={Location} alt="Location" />
                    </div>
                    <div>
                        <h4 className="text-[23px] leading-[120%]">We offer best services</h4>
                        <p className="text-[18px] text-[#191825] text-opacity-50 leading-[160%]">Lorem sit consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="flex items-center gap-8 border p-6 desktop:p-8 rounded-3xl">
                    <div className="h-[80px] w-[80px] desktop:h-[100px] desktop:w-[100px] rounded-3xl bg-[#FACD49] flex items-center justify-center">
                        <img src={Calender} alt="Location" />
                    </div>
                    <div>
                        <h4 className="text-[23px] leading-[120%]">We offer best services</h4>
                        <p className="text-[18px] text-[#191825] text-opacity-50 leading-[160%]">Lorem sit consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="flex items-center gap-8 p-6 desktop:p-8">
                    <div className="h-[80px] w-[80px] desktop:h-[100px] desktop:w-[100px] rounded-3xl bg-[#F85E9F] flex items-center justify-center">
                        <img src={Discount} alt="Location" />
                    </div>
                    <div>
                        <h4 className="text-[23px] leading-[120%]">We offer best services</h4>
                        <p className="text-[18px] text-[#191825] text-opacity-50 leading-[160%]">Lorem sit consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex-1 flex w-full pl-[80px] md:pl-[150px] lg:pl-0 lg:w-fit">
            <div className="h-[400px] lg:h-[500px] xl:h-[565px] desktop:h-[665px] w-[300px] xl:w-[343px] desktop:w-[443px] relative">
                <img
                    className="h-full w-full object-cover rounded-[500px]" src="https://cdn.sailing-whitsundays.com/web/images/articles/1900/alexander-stewart-snorkle-whitsundays.jpg" alt="" />

                <div className="absolute right-[-180px] desktop:right-[-93px] bottom-[-135px] h-[450px] desktop:h-[516px] w-[300px] desktop:w-[371px] p-[20px] bg-white rounded-[500px]">
                    <img className=" rounded-[500px]  w-full h-full object-cover" src="https://polkerrisbeach.com/wp-content/uploads/2022/10/polkerris-beach-swim-blog-benefits-one.jpg" alt="" />
                </div>
                <div className="absolute right-[-119px] top-[81px] py-2 desktop:py-4 px-4 desktop:px-8 bg-white rounded-[500px] flex items-center gap-4">
                    <img src={Map} alt="" /><span className="text-[23px] leading-[120%]">Paradise on Earth</span>
                </div>
            </div>
        </div>
        <div className="absolute right-[30px] lg:right-0 top-[-80px] lg:top-[50px] desktop:top-[-10px] -z-10"><img src={DotKeyFeature} alt="" /></div>
    </div>;
};

export default KeyFeature;
