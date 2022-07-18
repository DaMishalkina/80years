import React from "react";
import {NavLink, NavLink as Link} from "react-router-dom";
import classNames from "classnames";
import "src/components/Header/Header.scss";

interface Props {
    text?: string;
}

export const Header = ({ text }: Props) => {
    return (
        <header className="header">
            <p className="header__logo">80 years</p>
            <div>
                <NavLink to={"/login"}>Log in</NavLink>
            </div>
        </header>
    )
}