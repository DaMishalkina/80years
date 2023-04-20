import React, {useState, useEffect} from "react";
import {OneYearWeeks} from "components/WeeksSection/OneYearWeeks/OneYearWeeks";
import {ToggledOneYear} from "components/WeeksSection/ToggledOneYear/ToggledOneYear";
import dayjs from "dayjs";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "components/WeeksSection/WeeksSectionComponent/WeeksSection.scss";

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.extend(customParseFormat);


interface Props {
    birthDate: string;
    totalYears: number;
}

type OneYearWeeksType = Array<{checked: boolean}>;

type AllWeeksType = { weeks: OneYearWeeksType, mobileHidden: boolean }[];

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const calculateAge = (birthDate) => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const today = todayDate.getDate();
    const birthMonth = dayjs(birthDate).month();
    const  birthDay = dayjs(birthDate).date();
    let age = todayYear - dayjs(birthDate).year();

    if ( todayMonth < (birthMonth - 1))
    {
        age--;
    }
    if (((birthMonth - 1) == todayMonth) && (today < birthDay))
    {
        age--;
    }
    return age;
}


const convertDDMMYYYToDate = (dateString: string) => {
    return dayjs(dateString, "DD/MM/YYYY").toDate();

}

const createArrayFromNumber = (number: number) => {
    return Array.from(Array(number).keys());
}
const getColoredCheckbox = (birthDate: string) => {
    const endDate = new Date();
    const startDate = convertDDMMYYYToDate(birthDate);
    const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return Math.round(Math.floor((utc2 - utc1) / _MS_PER_DAY)/7);
}

export const produceArrayOfWeeks = (array: Array<number>, passedWeeks = 0, coloredNumber = 0) => {
    const arrayToDevelop = JSON.parse(JSON.stringify(array));
    return arrayToDevelop.map(value => {
        return {
            checked: value + passedWeeks  + 1 <= coloredNumber
        }
    })
}

export const getAllWeeks = (birthDate: Date | string, averageLifeYears: number, coloredNumber = 0) => {
    const birthYear = dayjs(birthDate).year();
    const years = createArrayFromNumber(averageLifeYears);
    let weeksAccumulator = 0;
    return years.map(year => {
        const currentYearDate = dayjs().year(birthYear + year);
        const weeksInCurrentYear = currentYearDate.isoWeeksInYear();
        const res = {
            weeks: produceArrayOfWeeks(
                createArrayFromNumber(weeksInCurrentYear), weeksAccumulator, coloredNumber
            ),
            mobileHidden: year < calculateAge(birthDate)
        };
        weeksAccumulator = weeksAccumulator + weeksInCurrentYear;
        return res;
    })
}
export const WeeksSection = ({birthDate, totalYears}: Props) => {
    const [coloredNumber, setColoredNumber] = useState(0 )
    const [allWeeks, setAllWeeks]= useState([] as AllWeeksType);
   useEffect(() => {
       setColoredNumber( () => {
           const res = getColoredCheckbox(birthDate);
           setAllWeeks(getAllWeeks(convertDDMMYYYToDate(birthDate), totalYears, res));
           return res;
       });
   }, [birthDate, totalYears])
    return (
        <div className="years-container">
            {birthDate.length > 0 && allWeeks
                .map((chunk, index) =>
                    chunk.mobileHidden ?
                        <ToggledOneYear key={index}>
                            <OneYearWeeks yearWeeks={chunk.weeks} key={index} />
                        </ToggledOneYear>
                        : <OneYearWeeks yearWeeks={chunk.weeks} key={index} />
                )}
        </div>
    )
}