import React from "react";

interface IButton {
    classNameStyle: string,
    title: React.ReactNode;
}
const Button: React.FC<IButton> = ({ classNameStyle, title }) => {
    return <button className={`rounded-full py-4 px-8  ${classNameStyle}`}>{title}</button>
};
export default Button;
