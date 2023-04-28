import React from "react";
import classNames from "classnames";
import "components/Button/Button.scss";
import "components/Button/ButtonDarkMode.scss";

interface Props {
    label: string,
    onClick?:(event: MouseEvent) => void,
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    size?: "small" | "large" | "responsive",
    variant?: "default" | "primary" | "secondary" | "third"
}

const isLarge = (size = "large") => {
    return size === "large";
}

const isResponsive = (size = "responsive") => {
    return size === "responsive";
}

const isDisabled = (disabled = false) => {
    return disabled === true;
}



const setButtonClasses = (
    variant = "default",
    size = "small",
    disabled = false
) => {
    const resSize = isLarge(size)
        ? "button--large"
        : isResponsive(size)
            ? "button--responsive"
            : "";
    const resDisabled = isDisabled(disabled) ? "button--disabled" : "";
    let resVariant;
    switch (variant) {
        case "primary":
            resVariant = "button--primary";
            break;
        case "secondary":
            resVariant = "button--secondary";
            break;
        case "third":
            resVariant = "button--third";
            break;
        default:
            resVariant = "";
    }
    return classNames(resSize, resVariant, resDisabled);

}

export const Button = ({
                           label,
                           type,
                           variant = "default",
                           size = "small",
                           disabled = false,
                           onClick }: Props) => {
 return (
     <button
         className={classNames("button", setButtonClasses(variant, size, disabled))}
         type={type}
         disabled={disabled}
         onClick={() => onClick}
     >{label}</button>
 )
}
