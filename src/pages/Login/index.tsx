import React, {FunctionComponent} from "react";
import { SendingFormWrapper } from "src/components/SendingForm/SendingFormWrapper";
import "src/pages/Login/Login.scss";


export const Login: FunctionComponent = () => {
    return (
        <div className="login-container">
            <h1>Login Form</h1>
            <SendingFormWrapper />
        </div>
    )
}