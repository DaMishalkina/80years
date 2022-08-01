import React, {FormEvent, useEffect, useState} from "react";
import {TextInput} from "src/components/TextInput/TextInput";
import {Button} from "src/components/Button/Button";
import {NavLink,} from "react-router-dom";
import {LoginItem} from "src/components/SendingForm/types";
import classNames from "classnames";
import "src/components/SendingForm/SendingForm.scss";

interface Props {
    formData: {login: string, password: string};
    onInput: (value: string, id: string) => void;
    onSubmit:(item: LoginItem, event: FormEvent<HTMLFormElement>) => void;
    onReset: (event: FormEvent<HTMLFormElement>) => void;
    loginLabel?: string;
    passwordLabel?: string;
    error?: string;
    linkToAnotherForm?: string;
    linkText?: string;
}

export const SendingForm = ({

                                formData,
                                onInput,
                                error = "",
                                loginLabel = "",
                                passwordLabel = "",
                                linkToAnotherForm = "",
                                linkText = "",
                                onReset,
                                onSubmit}: Props) => {
    const [isError, setIsError] = useState(error);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(formData.login.length > 0 && formData.password?.length > 0 && error?.length === 0){
            setIsError("");
            const newDataItem: LoginItem = formData;
            onSubmit(newDataItem, event);
        } else {
            setIsError("Fields are required");
        }
    };
    useEffect(() => {
        setIsError(error);
    }, [error])
    return (
        <form
            className="form-container"
            onSubmit={(event) => handleSubmit(event)}
            onReset={(event) => {
                onReset(event)
            }}
        >
            <TextInput
                label={loginLabel}
                defaultValue={formData.login}
                error={isError}
                onChange={(value) => {
                    onInput(value, "login")
                    setIsError("")
                }} />
            <TextInput
                label={passwordLabel}
                defaultValue={formData.password}
                error={isError}
                onChange={(value) => {
                    onInput(value, "password")
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