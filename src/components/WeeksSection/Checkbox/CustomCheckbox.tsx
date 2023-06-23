import React, {useEffect, useState} from "react";
import classNames from "classnames";
import "components/WeeksSection/Checkbox/CustomCheckbox.scss";

export interface Props {
    isDefaultActive?: boolean,
    disabled?: boolean,
    id?: string | number,
    onChange?: () => void,
    color?: "default" | "primary" | "secondary"
}

const setCheckboxClassnames = (color = "default") => {
    let res;
    switch (color){
        case "primary":
            res = "custom-checkbox--primary";
            break;
        case "secondary":
            res = "custom-checkbox--secondary";
            break;
        default:
            res = "";
    }
    return res;
}

export const CustomCheckbox = ({
                                   isDefaultActive = false,
                                   //disabled = false,
                                   color = "default",
                                   id,
                                   onChange
                                }: Props) => {
    const [isActive, setIsActive] = useState(isDefaultActive);

    const onCheck = () => {
        onChange && onChange();
        setIsActive(!isActive)
    }
    useEffect(() => {
        setIsActive(isDefaultActive)
    }, [isDefaultActive])
    return (
        <label className={classNames("custom-checkbox", setCheckboxClassnames(color))}>
            <input
                id={id as string}
                className="custom-checkbox__input"
                type="checkbox"
                checked={isActive}
                onChange={onCheck}
                disabled={true}/>
            <span className="custom-checkbox__checkmark"></span>
        </label>
    )
}