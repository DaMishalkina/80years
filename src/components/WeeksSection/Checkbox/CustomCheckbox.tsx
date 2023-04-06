import React, {useEffect, useState} from "react";

interface Props {
    isDefaultActive?: boolean;
    disabled?: boolean;
    // onCheck: () => void;
}

export const CustomCheckbox = ({isDefaultActive = false, disabled = false}: Props) => {
    const [isActive, setIsActive] = useState(isDefaultActive);

    const onCheck = () => {
        setIsActive(!isActive)
    }
    useEffect(() => {
        setIsActive(isDefaultActive)
    }, [isDefaultActive])
    return (
        <label>
            <input
                type="checkbox"
                checked={isActive}
                onChange={onCheck}
                disabled={disabled}/>
        </label>
    )
}