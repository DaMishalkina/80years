import React, {FunctionComponent} from "react";
import { SendingFormWrapper } from "components/SendingForm/SendingFormWrapper";
import "pages/Login/Login.scss";


export const Login: FunctionComponent = () => {
    return (
        <div className="login-container">
            <h1>Login Form</h1>
            <SendingFormWrapper />
        </div>
    )
}