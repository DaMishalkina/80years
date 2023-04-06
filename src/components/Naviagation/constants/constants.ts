import {RouteItem} from "src/components/Naviagation/types/types";
import {Home} from "src/pages/Home";
import {Login} from "src/pages/Login";
import {Signup} from "src/pages/Signup";
import {UserAccount} from "src/pages/UserAccount";
import {TryWeeksTracker} from "src/pages/TryWeeksTracker";

/*PAGES TITLE*/
export const PAGE_TITLE_HOME = "Home";
export const PAGE_TITLE_SIGN_UP = "Sign up";
export const PAGE_TITLE_LOG_IN = "Log in";
export const PAGE_TITLE_USER_ACCOUNT = "User Account";
export const PAGE_TITLE_WEEKS_TRACKER = "Try Weeks Tracker";

export const ROUTES: Array<RouteItem> = [
    {
        key: "router-login",
        title: PAGE_TITLE_LOG_IN,
        tooltip: PAGE_TITLE_LOG_IN,
        path: "/login",
        enabled: true,
        component: Login,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-signup",
        title: PAGE_TITLE_SIGN_UP,
        tooltip: PAGE_TITLE_SIGN_UP,
        path: "/signup",
        enabled: true,
        component: Signup,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-weeks-tracker",
        title: PAGE_TITLE_WEEKS_TRACKER,
        tooltip: PAGE_TITLE_WEEKS_TRACKER,
        path: "/weeks_tracker",
        enabled: true,
        component: TryWeeksTracker,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-account",
        title: PAGE_TITLE_USER_ACCOUNT,
        tooltip: PAGE_TITLE_USER_ACCOUNT,
        path: "/my_account",
        enabled: true,
        component: UserAccount,
        appendDivider: true,
        type: "private"
    },
    {
        key: "router-home",
        title: PAGE_TITLE_HOME,
        tooltip: PAGE_TITLE_HOME,
        path: "/",
        enabled: true,
        component: Home,
        appendDivider: true,
        type: "guest"
    }
]