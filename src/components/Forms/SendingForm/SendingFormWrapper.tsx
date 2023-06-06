import React, {FormEvent, useState} from "react";
import { auth } from "firebaseSetup";
import {LoginItem} from "components/Forms/SendingForm/types";
import { useHistory } from "react-router-dom";
import {Form} from "components/Forms/Form";

interface Props {
    type?: "login" | "signup"
}

export const SendingFormWrapper = ({type = "login"}: Props) => {
    const history = useHistory();
    const [formData, setFormData] = useState({login: "", password: ""});
    const [error, setError] = useState("");
    const handleInput = (value: string, id: string) => {
        setError("");
        setFormData({...formData, [id]: value});
    }
    const handleReset = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormData({login: "", password: ""});
    };
    const checkFieldsFilling = () => {
        if(formData.login.length > 0 && formData.password?.length > 0 && error?.length === 0){
            setError("");
            return formData;
        } else {
            setError("Fields are required");
        }
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataItem: LoginItem = checkFieldsFilling();
        if(dataItem){
            if(type === "login"){
                await auth.signInWithEmailAndPassword(dataItem.login, dataItem.password)
                    .then((response) => {
                        localStorage.setItem("user", JSON.stringify(response.user))
                        handleReset(event);
                        history.push("/my_account");
                    }).catch((error) => {
                        setError(error.message)
                    })
            } else {
                await auth.createUserWithEmailAndPassword(dataItem.login, dataItem.password)
                    .then((response) => {
                        localStorage.setItem("user", JSON.stringify(response.user));
                        history.push("/my_account");
                        handleReset(event);
                    }).catch((error) => {
                        setError(error.message)
                    })
            }
        }
    }
    const setInputs = () => {
        return Object.entries(formData).map(data => {
            const [key, value] = data;
            return {value: value, placeholder: key, id: key, isError: error.length > 0, type: key === "password" ? "password" as const : "email" as const}
        })
    }

    return (
        <Form
            inputs={setInputs()}
            onSubmit={handleSubmit}
            onReset={handleReset}
            onChange={handleInput}
            error={error}
            links={type === "login" ? [{path: "/signup", text: "If you have not an account yet, please sign up"}] : []}
        />
    )
}