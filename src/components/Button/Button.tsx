import React from "react";
import classNames from "classnames";
import "components/Button/Button.scss";

interface Props {
    label: string;
    onClick?:(event: MouseEvent) => void;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    variant?: "default" | "cancel";
}

const isDefault = (variant = "default") => {
    return variant === "default";
};

export const Button = ({label, type, variant = "default", disabled = false, onClick }: Props) => {
 return (
     <button
         className={classNames("button", isDefault(variant) ? "button_default" : "button_cancel")}
         type={type}
         disabled={disabled}
         onClick={() => onClick}
     >{label}</button>
 )
}
