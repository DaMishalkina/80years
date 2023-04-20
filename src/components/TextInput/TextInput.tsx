import React, {useState, useEffect} from "react";
import classNames from "classnames";
import "components/TextInput/TextInput.scss";

interface Props {
    defaultValue?: string | number;
    onChange?: (value: string) => void;
    id?: string;
    type?: "email" | "password" | "text" | "search";
    label?: string;
    placeholder?: string;
    error?: boolean;
    name?: string;
}

export const TextInput = ({
                              label,
                              type = "text",
                              id = "",
                              error = false,
                              defaultValue,
                              onChange,
                              placeholder = "",
                              name
                            }: Props) => {
    const [keyValue, setKeyValue] = useState(defaultValue);
    useEffect(() => {
        setKeyValue(defaultValue);
    }, [defaultValue])
    return (
        <label className="text-input-container">
            {label}
            <input
                name={name}
                {...(id.length > 0 && {id: id})}
                className={classNames(
                    "text-input-container__input",
                    error
                        ? "text-input-container__input--error"
                        : ""
                )}
                type={type}
                placeholder={placeholder}
                value={keyValue}
                onChange={(event) => {
                    setKeyValue(event?.target?.value);
                    onChange && onChange(event?.target?.value);
                }}
            />
        </label>
    )
}