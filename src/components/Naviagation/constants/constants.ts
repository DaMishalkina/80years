import {RouteItem} from "src/components/Naviagation/types/types";
import {Home} from "src/pages/Home";
import {Login} from "src/pages/Login";
import {Signup} from "src/pages/Signup";

export const ROUTES: Array<RouteItem> = [
    {
        key: "router-login",
        title: "Login",
        tooltip: "Login",
        path: "/login",
        enabled: true,
        component: Login,
        appendDivider: true
    },
    {
        key: "router-signup",
        title: "Signup",
        tooltip: "Signup",
        path: "/signup",
        enabled: true,
        component: Signup,
        appendDivider: true
    },
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        appendDivider: true
    }
]