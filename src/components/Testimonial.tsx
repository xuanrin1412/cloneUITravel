import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Star from "../assets/img/star2.svg";
import LayerViolet from "../assets/img/Layer-violet.svg";

const data = [
    {
        id: 1,
        image: "https://assets.vogue.com/photos/60b907e097494a8c355fb6ae/master/w_2560%2Cc_limit/1119%252003_TB2_TB1.jpg",
        name: "Mark Smith",
        job: "Travel Enthusiast",
        des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45.",
    },
    {
        id: 2,
        image: "https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022-mobile.jpg",
        name: "Jane Doe",
        job: "Food Blogger",
        des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        id: 3,
        image: "https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg",
        name: "John Doe",
        job: "Photographer",
        des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-fit py-[200px] lg:py-[124px]">
            <div className="w-[85%] md:w-[77.8%] mx-auto flex items-center">
                <button
                    onClick={prevSlide}
                    className="h-[70px] w-[70px] xl:h-[100px] xl:w-[100px] border bg-white rounded-full flex items-center justify-center"
                >
                    <FaArrowLeft />
                </button>
                <div className="flex-1 flex">
                    <div className="flex flex-col gap-8 xl:gap-16 text-center items-center overflow-hidden">
                        <div>
                            <h3 className="uppercase text-[23px] leading-[120%] text-[#F85E9F] pb-4">Testimonials</h3>
                            <h2 className="text-[44px] leading-[120%] font-semibold">Trust our clients</h2>
                        </div>
                        <div className="flex flex-col ">
                            <div key={data[currentIndex].id} className="flex flex-col">
                                <div className="h-[128px] w-[128px] mx-auto mb-2">
                                    <img
                                        src={data[currentIndex].image}
                                        alt={data[currentIndex].name}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col text-center gap-6 xl:gap-8">
                                    <div className="text-[20px] font-semibold text-[#191825] text-opacity-50 flex justify-center">
                                        <span className="text-[#FF5722]">{data[currentIndex].name}</span>
                                        / {data[currentIndex].job}
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                    </div>
                                    <p className="px-12 text-[23px] leading-[160%] text-[#191825] text-opacity-75">
                                        {data[currentIndex].des}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit mx-auto flex gap-4">
                            {data.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-6 w-6 rounded-full ${currentIndex === index ? "bg-[#F85E9F]" : "bg-gray-100"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={nextSlide}
                    className="h-[70px] w-[70px] xl:h-[100px] xl:w-[100px] flex items-center justify-center bg-[#5D50C6] rounded-full shadow-box-2"
                >
                    <FaArrowRight className="text-white" />
                </button>
            </div>
            <div className="absolute top-[100px] lg:top-[-120px] xl:top-[-248px] left-0 -z-10">
                <img src={LayerViolet} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;
