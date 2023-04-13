import React, {ReactNode, FunctionComponent} from "react"
import { Header } from "components/Header/Header";

interface Props {
    children: ReactNode;
}


export const Layout:FunctionComponent<Props> = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}