import React, {ReactNode} from "react";
import classNames from "classnames";
import "components/Modal/Modal.scss";

interface Props {
    children: ReactNode;
    isOpened?: boolean;
    onClick?:(event: MouseEvent) => void;
}

export const Modal = ({children, isOpened = false, onClick}: Props) => {
    return (
        <div>{children}</div>
    )
}