import React, {FunctionComponent, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import dayjs from "dayjs";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

import {Layout} from "src/components/Layout/Layout";
import {OneYearWeeks} from "src/pages/UserAccount/component/OneYearWeeks/OneYearWeeks";
import "src/pages/UserAccount/UserAccount.scss";

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

const BIRTH_DATE = "07.08.1996";
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const AVERAGE_LIFE_YEARS = 80;

const getColoredCheckbox = (birthDate: string) => {
    const endDate = new Date();
    const startDate = new Date(birthDate);
    const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return Math.round(Math.floor((utc2 - utc1) / _MS_PER_DAY)/7);
}



const coloredNumber = getColoredCheckbox(BIRTH_DATE);

export const divideArrayIntoChunks = (array: Array<number>, chunkSize:number) => {
    const chunks = [];
    const items = [...array];
    while (items.length) {
        chunks.push(
            items.splice(0, chunkSize)
        )
    }
    return chunks
}

const produceArrayOfWeeks = (array: Array<number>, passedWeeks = 0) => {
    const arrayToDevelop = JSON.parse(JSON.stringify(array));
    return arrayToDevelop.map(value => {
        return {
            checked: value + passedWeeks  + 1 <= coloredNumber
        }
    })
}

const getAllWeeks = (birthDate: string, averageLifeYears?: number) => {
    const birthYear = dayjs(birthDate).year();
    const years = Array.from(Array(averageLifeYears).keys());
    let weeksAccumulator = 0;
    return years.map(year => {
        const weeksInCurrentYear = dayjs().year(birthYear + year).isoWeeksInYear();
        const res = produceArrayOfWeeks(Array.from(Array(weeksInCurrentYear).keys()), weeksAccumulator);
        weeksAccumulator = weeksAccumulator + weeksInCurrentYear;
        return res;
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
                <div className="years-container">
                    {getAllWeeks(BIRTH_DATE, AVERAGE_LIFE_YEARS)
                        .map((chunk, index) =>
                        <OneYearWeeks yearWeeks={chunk} key={index} />
                    )}
                </div>
            </Layout>
        </>
    )
}