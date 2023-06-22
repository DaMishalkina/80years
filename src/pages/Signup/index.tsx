import React, {FunctionComponent} from "react";
import { SendingFormWrapper } from "components/Forms/SendingForm/SendingFormWrapper";
import "pages/Signup/Singup.scss";

export const Signup:FunctionComponent = () => {
    return (
        <div className="sign-up-container">
            <h1 className="sign-up-container__title">Sign up Form</h1>
            <SendingFormWrapper type="signup" />
        </div>
    )
}