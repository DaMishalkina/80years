import React, {FunctionComponent, useState} from "react";
import {SendingForm} from "src/components/SendingForm/SendingForm";
import {LoginItem} from "src/components/SendingForm/types";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import classNames from "classnames";


export const Login: FunctionComponent = () => {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (item: LoginItem) => {
        if(item){
            console.log(1)
        }
        console.log(item)
    }
    return (
        <div>
            <h1>Login Form</h1>
           <SendingForm
               linkToAnotherForm="/signup"
               linkText="If you have not account yet, please sign up"
               onSubmit={(item) => handleSubmit(item)}
               defaultLoginValue={loginValue}
               defaultPasswordValue={passwordValue}
               error={error}/>
        </div>
    )
}