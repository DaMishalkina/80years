import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {auth} from "firebaseSetup";
import { useHistory } from "react-router-dom";
import "components/Header/Header.scss";

interface Props {
    text?: string;
}

export const Header = ({}: Props) => {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();
    const logout = async () => {
        await auth.signOut();
        localStorage.removeItem("user");
        history.push("/");

    }
    useEffect(() => {
        setIsAuth(!!localStorage.getItem("user"))
    }, [localStorage.getItem("user")])
    return (
        <header className="header">
            <p className="header__logo">80 years</p>
            <div>
                {!isAuth ?
                    <NavLink to={"/login"}>Log in</NavLink>
                    :
                    <button onClick={logout}>Log out</button>
                }
            </div>
        </header>
    )
}