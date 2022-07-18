import React, {FunctionComponent, useState} from "react";
import {SendingForm} from "src/components/SendingForm/SendingForm";
import {LoginItem} from "src/components/SendingForm/types";
import { auth } from "src/firebaseSetup";
import classNames from "classnames";
import "src/pages/Signup/Singup.scss";

export const Signup:FunctionComponent = () => {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (item: LoginItem) => {
        if(item.login.length > 0 && item.password.length > 0){
            auth.createUserWithEmailAndPassword(item.login, item.password)
                .then((response) => {
                    console.log(response)
                }).catch((error) => {
                    setErrorMessage(error.message)
            })
        } else {
            setErrorMessage("Empty!")
            console.log(errorMessage)
        }
        console.log(errorMessage)
    }
    return (
        <div className="sign-up-container">
            <h1>Sign up Form</h1>
            <SendingForm
                onSubmit={(item) => handleSubmit(item)}
                defaultLoginValue={loginValue}
                defaultPasswordValue={passwordValue}
                error={errorMessage}/>
        </div>
    )
}