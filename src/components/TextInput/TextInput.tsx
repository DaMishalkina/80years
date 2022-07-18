import React, {useState, useEffect} from "react";
import classNames from "classnames";
import "src/components/TextInput/TextInput.scss";

interface Props {
    type?: "email" | "password" | "text" | "search";
    label?: string;
    placeholder?: string;
    defaultValue: string;
    onChange: (value: string) => void;
    error?: string;
}

export const TextInput = ({
                              label, type = "text",
                              error = "",
                              defaultValue,
                              onChange,
                              placeholder = ""}: Props) => {
    const [keyValue, setKeyValue] = useState(defaultValue);
    useEffect(() => {
        setKeyValue(defaultValue);
    }, [defaultValue])
    return (
        <label className="text-input-container">
            {label}
            <input
                className={classNames(
                    "text-input-container__input",
                    error?.length > 0
                        ? "text-input-container__input--error"
                        : ""
                )}
                type={type}
                placeholder={placeholder}
                value={keyValue}
                onChange={(event) => {
                    setKeyValue(event?.target?.value);
                    onChange(event?.target?.value);
                }}/>
        </label>
    )
}