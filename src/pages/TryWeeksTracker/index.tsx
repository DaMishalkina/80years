import React, {FunctionComponent} from "react";
import {Layout} from "components/Layout/Layout";
import {Main} from "components/Main/Main";
import "pages/TryWeeksTracker/index.scss";



export const TryWeeksTracker: FunctionComponent = ({}) => {


    return (
        <>
            <Layout pageClassName="page-container">
                <Main />
            </Layout>
        </>
    )
}