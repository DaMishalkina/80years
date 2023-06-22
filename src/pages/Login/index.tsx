import React, {FunctionComponent} from "react";
import { SendingFormWrapper } from "components/Forms/SendingForm/SendingFormWrapper";
import "pages/Login/Login.scss";


export const Login: FunctionComponent = () => {
    return (
        <div className="login-container">
            <h1 className="login-container__title">Login Form</h1>
            <SendingFormWrapper />
        </div>
    )
}