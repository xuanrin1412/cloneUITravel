
import IG from "../assets/img/ig.svg"
import FB from "../assets/img/fb.svg"
import Logo from "../assets/IntroPic/Logo";
import Twitter from "../assets/img/twitter.svg"
import Lete from "../assets/img/lete.svg"
const Footer = () => {
    return <div className="relative flex">
        <div className="w-10/12 xl:w-container flex justify-center mx-auto pt-[128px] pb-[86px] gap-[20px] lg:gap-[100px] desktop:gap-[153px]">
            <div className="w-fit lg:max-w-[278px]">
                <div className="flex items-center gap-4 pb-8">
                    <Logo />
                    <span className="text-2xl leading-10 font-bold">Travlog</span>
                </div>
                <div className=" pb-16 text-[22px] leading-[160%] text-[#191825] text-opacity-[50%]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has rootsin a piece of classical Latin literature from 45 BC.
                </div>
                <div className="flex gap-8">
                    <div ><img src={FB} alt="" /></div>
                    <div ><img src={Twitter} alt="" /></div>
                    <div ><img src={IG} alt="" /></div>
                </div>
            </div>
            <div className="flex-1 h-full">
                <div className=" flex justify-end gap-5 lg:gap-[60px] desktop:gap-[121px] text-lg leading-[160%] text-[#191825] text-opacity-[75%]" >
                    <div className="flex flex-col gap-8 text-nowrap">
                        <span className="text-[23px] text-[#191825] leading-[130%]">Company</span>
                        <span>About</span>
                        <span>Career</span>
                        <span>Mobile</span>
                    </div>
                    <div className="flex flex-col  gap-8 text-nowrap">
                        <span className="text-[23px] text-[#191825] leading-[130%]">Contact</span>
                        <span>Why Travlog?</span>
                        <span>Partner with us</span>
                        <span>FAQ's</span>
                        <span>Blog</span>
                    </div>
                    <div className="flex flex-col gap-8 ">
                        <span className="text-[23px] text-[#191825] leading-[130%]">Meet Us</span>
                        <span>+00 92 1234 56789</span>
                        <span>info@travlog.com</span>
                        <span>205. R Street, New York, BD23200</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-[-180px] right-0"><img src={Lete} alt="" /></div>
    </div >;
};

export default Footer;
