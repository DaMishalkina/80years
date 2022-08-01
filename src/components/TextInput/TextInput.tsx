import React, {useState, useEffect} from "react";
import classNames from "classnames";
import "src/components/TextInput/TextInput.scss";

interface Props {
    defaultValue: string;
    onChange: (value: string) => void;
    id?: string;
    type?: "email" | "password" | "text" | "search";
    label?: string;
    placeholder?: string;
    error?: string;
}

export const TextInput = ({
                              label, type = "text",
                              id = "",
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
                {...(id.length > 0 && {id: id})}
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