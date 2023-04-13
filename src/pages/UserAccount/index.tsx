import React, {FunctionComponent, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {Layout} from "components/Layout/Layout";
import "pages/UserAccount/UserAccount.scss";



export const UserAccount:FunctionComponent = ({}) => {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const isUserLogged = !!localStorage.getItem("user");
        isUserLogged ? setIsAuth(isUserLogged) : history.push("/");
    }, [localStorage.getItem("user")])

    return (
        <>
            <Layout>
                <div>User Account!</div>
            </Layout>
        </>
    )
}