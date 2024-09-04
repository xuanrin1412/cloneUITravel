import Mail from "../assets/img/mail.svg"
import Dot from "../assets/img/dotTestimonial.svg"

const NewsLetter = () => {
    return <div className="relative rounded-[32px] w-container mx-auto bg-[#FACD49] bg-opacity-[8%]">
        <div className="py-[128px] px-[40px] lg:px-[64px] flex flex-col text-center ">
            <h3 className="text-[23px] leading-[120%] text-[#F85E9F] uppercase tracking-widest pb-8">subscribe to our newsletter</h3>
            <h2 className="text-[40px] xl:text-[50px] desktop:text-[55px] leading-[120%] font-semibold pb-16">Prepare yourself & let’s explore the beauty of the world</h2>
            <div className="  flex justify-center items-center  gap-4 lg:gap-16">
                <div className="flex-1 bg-white flex  items-center rounded-[32px] pr-5 md:pr-10">
                    <div className="px-5 md:px-[34px]">
                        <img src={Mail} alt="" />
                    </div>
                    <input type="text" className="flex-1 h-[60px] lg:h-[75px] desktop:h-[94px] outline-none text-[23px] leading-[120%] text-[#191825] text-opacity-[75%]" placeholder="Your Email" />
                </div>
                <button className="bg-[#5D50C6] h-[60px] lg:h-[75px] desktop:h-[94px] rounded-[32px] px-4 lg:px-16 text-white text-[23px] leading-[120%]">Subscribe</button>
            </div>
        </div>
        <div className="top-[-43px] left-[-43px] absolute"><img src={Dot} alt="" /></div>
    </div>;
};

export default NewsLetter;
