import React, {FunctionComponent} from "react";
import { SendingFormWrapper } from "components/SendingForm/SendingFormWrapper";
import "pages/Signup/Singup.scss";

export const Signup:FunctionComponent = () => {
    return (
        <div className="sign-up-container">
            <h1>Sign up Form</h1>
            <SendingFormWrapper type="signup" />
        </div>
    )
}