import Logo from "../assets/IntroPic/Logo";
import Blur from "../assets/img/Blur";
import Button from "./Button";

const Header = () => {
    return <header className="relative flex h-header w-full mb-2
 desktop:mb-16 ">
        <div className="w-11/12 lg:w-10/12 xl:w-container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4"><Logo /><span className="text-2xl font-bold">Travlog</span></div>
            <nav className=" text-sm  text-[#191825] text-opacity-50 hidden md:flex justify-between gap-8 lg:gap-16">
                <a href="" className="">Home</a>
                <a href="">Discover</a>
                <a href="">Special Deals</a>
                <a href="">Contact</a>
            </nav>
            <article className="text-sm flex gap-8 ">
                <button>Log In</button>
                <Button classNameStyle="bg-[#5D50C6] text-[#EEEEEE]" title="Sign Up" />
            </article>
        </div>
        <div className="absolute top-0 left-0 -z-10"><Blur /></div>
    </header>;
};

export default Header;
