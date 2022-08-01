import React, {FormEvent, useState} from "react";
import { auth } from "src/firebaseSetup";
import {LoginItem} from "src/components/SendingForm/types";
import { SendingForm } from "src/components/SendingForm/SendingForm";

interface Props {
    type?: "login" | "signup";
}

export const SendingFormWrapper = ({type = "login"}: Props) => {
    const [formData, setFormData] = useState({login: "", password: ""});
    const [errorMessage, setErrorMessage] = useState("");
    const handleInput = (value: string, id: string) => {
        setFormData({...formData, [id]: value});
    }
    const handleReset = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormData({login: "", password: ""});
    };
    const handleSubmit = async (item: LoginItem, event: FormEvent<HTMLFormElement>) => {
        if(item.login.length > 0 && item.password.length > 0){
            if(type === "login"){
                await auth.signInWithEmailAndPassword(item.login, item.password)
                    .then((response) => {
                        console.log(response)
                        handleReset(event)
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })
            } else {
                await auth.createUserWithEmailAndPassword(item.login, item.password)
                    .then((response) => {
                        handleReset(event);
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })
            }
        } else {
            setErrorMessage("Fields are required")
        }
    }
    return (
        <SendingForm
            onInput={(value, id) => handleInput(value, id)}
            formData={formData}
            onReset={(event) =>handleReset(event)}
            linkToAnotherForm={type === "login" ? "/signup" : ""}
            linkText={ type === "login" ? "If you have not account yet, please sign up" : ""}
            onSubmit={(item, event) => handleSubmit(item, event)}
            error={errorMessage}
        />
    )
}