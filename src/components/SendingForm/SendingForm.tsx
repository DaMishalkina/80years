import React, {FormEvent, useEffect, useState} from "react";
import {TextInput} from "src/components/TextInput/TextInput";
import {Button} from "src/components/Button/Button";
import {NavLink,} from "react-router-dom";
import {LoginItem} from "src/components/SendingForm/types";
import classNames from "classnames";
import "src/components/SendingForm/SendingForm.scss";

interface Props {
    loginLabel?: string;
    passwordLabel?: string;
    defaultLoginValue?: string;
    defaultPasswordValue?: string;
    onSubmit:(item: LoginItem) => void;
    error?: string;
    linkToAnotherForm?: string;
    linkText?: string;
}

export const SendingForm = ({
                                defaultLoginValue= "",
                                defaultPasswordValue = "",
                                error = "",
                                loginLabel = "",
                                passwordLabel = "",
                                linkToAnotherForm = "",
                                linkText = "",
                                onSubmit}: Props) => {
    const [loginValue, setLoginValue] = useState(defaultLoginValue);
    const [passwordValue, setPasswordValue] = useState(defaultPasswordValue);
    const [isError, setIsError] = useState(error);
    const handleReset = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoginValue("");
        setPasswordValue("")
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(loginValue.length > 0 && passwordValue?.length > 0){
            setIsError("");
            const newDataItem: LoginItem = {
               login: loginValue,
               password: passwordValue
            }
            onSubmit(newDataItem);
            handleReset(event);
        } else {
            setIsError("Empty!");
        }
    };
    useEffect(() => {
        setIsError(error)
    }, [error])
    return (
        <form
            className="form-container"
            onSubmit={(event) => handleSubmit(event)}
            onReset={(event) => handleReset(event)}
        >
            <TextInput
                label={loginLabel}
                defaultValue={loginValue}
                error={isError}
                onChange={(value) => {
                    setLoginValue(value)
                    setIsError("")
                }} />
            <TextInput
                label={passwordLabel}
                defaultValue={passwordValue}
                error={isError}
                onChange={(value) => {
                    setPasswordValue(value)
                    setIsError("")
                }}
                type="password" />
            {isError.length > 0 && (
                <div className="form-container__error-container error-container">
                    <span className="error-container__message">{error}</span>
                </div>
            )}
            <div className="form-container__buttons">
                <Button label="Submit" type="submit" />
                <Button label="Reset" type="reset" />
                {linkToAnotherForm?.length > 0 && (
                    <NavLink to={linkToAnotherForm}>{linkText}</NavLink>
                )}
            </div>
        </form>
    )

};