import React, {ReactNode, FunctionComponent} from "react"
import { Header } from "components/Header/Header";

interface Props {
    children: ReactNode;
    pageClassName?: string;
}


export const Layout:FunctionComponent<Props> = ({children, pageClassName = ""}) => {
    return (
        <div className={pageClassName}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}