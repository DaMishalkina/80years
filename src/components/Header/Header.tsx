import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {auth} from "firebaseSetup";
import { useHistory } from "react-router-dom";
import "components/Header/Header.scss";

interface Props {
    text?: string;
}

export const Header = ({}: Props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const history = useHistory();
    const logout = async () => {
        await auth.signOut();
        localStorage.removeItem("user");
        history.push("/");

    }
    const toggleNavigation = () => {
        setIsToggled(!isToggled);
    }
    useEffect(() => {
        setIsAuth(!!localStorage.getItem("user"))
    }, [localStorage.getItem("user")])
    return (
        <header className="header">
            <NavLink className="logo__link header__link" to={"/"}>80years</NavLink>
            <label
                aria-label="Collapse or expand the menu"
                className="hamburger-button header__button"
            >
                <input
                    aria-haspopup="true"
                    aria-expanded={isToggled}
                    className="hamburger-button__input"
                    type="checkbox"
                    onChange={toggleNavigation}
                />
                <span aria-hidden="true" className="hamburger-button__span"></span>
                <span aria-hidden="true" className="hamburger-button__span"></span>
                <span aria-hidden="true" className="hamburger-button__span"></span>
            </label>
            <div className={classNames("navigation header__navigation", isToggled && "navigation--opened")}>
                <div className="navigation__container">
                    {history?.location?.pathname !== "/weeks_tracker" &&
                        <NavLink
                            className="link header__link"
                            to={"/weeks_tracker"}
                        >
                            Weeks Tracker
                        </NavLink>
                    }
                    {!isAuth ?
                        <div className="navigation__item">
                            <NavLink
                                className="header__link link "
                                to={"/login"}
                            >
                                Log in
                            </NavLink>
                            <NavLink
                                className="signup-link header__link"
                                to={"/signup"}
                            >
                                Sign up
                            </NavLink>
                        </div>
                        :
                        <button onClick={logout}>Log out</button>
                    }
                </div>
            </div>
        </header>
    )
}