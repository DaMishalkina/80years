import React, {FunctionComponent, useEffect, useState} from "react";
import {Layout} from "../../components/Layout/Layout";
import {useHistory} from "react-router-dom";
import {CustomCheckbox} from "src/pages/UserAccount/component/Checkbox/CustomCheckbox";
import {OneYearWeeks} from "src/pages/UserAccount/component/OneYearWeeks/OneYearWeeks";
import "src/pages/UserAccount/UserAccount.scss";

const BIRTH_DATE = "07.08.1996";
const ALL_WEEKS = 5000;
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const WEEKS_IN_YEAR = 52;

const getColoredCheckbox = (birthDate: string) => {
    const endDate = new Date();
    const startDate = new Date(birthDate);
    const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return Math.round(Math.floor((utc2 - utc1) / _MS_PER_DAY)/7);
}

const coloredNumber = getColoredCheckbox(BIRTH_DATE);
const weeksArray = Array.from(Array(ALL_WEEKS).keys());

export const divideArrayIntoChunks = (array: Array<number>, chunkSize:number) => {
    const chunks = [];
    const items = array;
    while (items.length) {
        chunks.push(
            items.splice(0, chunkSize)
        )
    }

    return chunks
}

const produceArrayOfWeeks = (array: Array<number>) => {
    const arrayToDevelop = JSON.parse(JSON.stringify(array));
    console.log(arrayToDevelop)
    return arrayToDevelop.map(value => {
        return {
            checked: value + 1 <= coloredNumber
        }
    })
}


export const UserAccount:FunctionComponent = ({}) => {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleCheck = () => {
        setIsActive(!isActive)
    }

    // useEffect(() => {
    //     const isUserLogged = !!localStorage.getItem("user");
    //     isUserLogged ? setIsAuth(isUserLogged) : history.push("/");
    // }, [localStorage.getItem("user")])
    return (
        <>
            <Layout>
                <div>User Account!</div>
                <div className="checkboxes-container">
                    {divideArrayIntoChunks(produceArrayOfWeeks(weeksArray), WEEKS_IN_YEAR)
                        .map((chunk, index) =>
                        <OneYearWeeks yearWeeks={chunk} key={index} />
                    )}
                    {/*{weeksArray.map((item, index) => (*/}
                    {/*    <CustomCheckbox*/}
                    {/*        isDefaultActive={index <= coloredNumber}*/}
                    {/*        key={index}*/}
                    {/*        disabled={index <= coloredNumber} />*/}
                    {/*))}*/}
                </div>
            </Layout>
        </>
    )
}