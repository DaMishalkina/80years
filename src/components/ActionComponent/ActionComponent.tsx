import React, {ReactElement} from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import "components/ActionComponent/ActionComponent.scss";
import "components/ActionComponent/ActionComponentDarkMode.scss";

interface Props {
    label: string,
    onClick?:() => void,
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    size?: "small" | "large" | "responsive",
    variant?: "default" | "primary" | "secondary" | "third",
    icon?: ReactElement,
    buttonClassName?: string,
    link?: string
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



const setActionComponentClasses = (
    variant = "default",
    size = "small",
    disabled = false
) => {
    const resSize = isLarge(size)
        ? "action--large"
        : isResponsive(size)
            ? "action--responsive"
            : "";
    const resDisabled = isDisabled(disabled) ? "action--disabled" : "";
    let resVariant;
    switch (variant) {
        case "primary":
            resVariant = "action--primary";
            break;
        case "secondary":
            resVariant = "action--secondary";
            break;
        case "third":
            resVariant = "action--third";
            break;
        default:
            resVariant = "";
    }
    return classNames(resSize, resVariant, resDisabled);

}

const isLink = (link) => {
    console.log(link)
    return link.length > 0;
}

export const ActionComponent = ({
                           label,
                           type,
                           variant = "default",
                           size = "small",
                           disabled = false,
                           icon,
                           onClick,
                           buttonClassName = "",
                           link = "" }: Props) => {
 return (
     <>
         {!isLink(link) ? (
             <button
                 className={classNames("action", buttonClassName, setActionComponentClasses(variant, size, disabled))}
                 type={type}
                 disabled={disabled}
                 onClick={onClick}
             >
                 {label}
                 {icon !== undefined && icon}
             </button>
         ) : (
             <NavLink
                 className={classNames("action", buttonClassName, setActionComponentClasses(variant, size, disabled))}
                 type={type}
                 to={link}
                 style={disabled ? {pointerEvents: "none"} : null}
             >
                 {label}
                 {icon !== undefined && icon}
             </NavLink>
         )}
     </>
 )
}
