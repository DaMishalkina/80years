import React, {useEffect, useState} from "react";
import "components/WeeksSection/Checkbox/CustomCheckbox.scss";

export interface Props {
    isDefaultActive?: boolean;
    disabled?: boolean;
    id?: string | number;
    onChange?: () => void;
}

export const CustomCheckbox = ({
                                   isDefaultActive = false,
                                   disabled = false,
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
        <label className="custom-checkbox__container">
            <input
                id={id as string}
                className="custom-checkbox__input"
                type="checkbox"
                checked={isActive}
                onChange={onCheck}
                disabled={disabled}/>
            <span className="custom-checkbox__checkmark"></span>
        </label>
    )
}