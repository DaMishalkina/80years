import React, {useState, useEffect} from "react";
import {OneYearWeeks} from "components/WeeksSection/OneYearWeeks/OneYearWeeks";
import dayjs from "dayjs";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import useMediaQuery from "services/hooks/useMediaQuery";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "components/WeeksSection/WeeksSectionComponent/WeeksSection.scss";

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.extend(customParseFormat);


interface Props {
    birthDate: string,
    totalYears: number
}

type OneYearWeeksType = Array<{checked: boolean}>;

type AllWeeksType = OneYearWeeksType[];

const _MS_PER_DAY = 1000 * 60 * 60 * 24;


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
        const res = produceArrayOfWeeks(
                createArrayFromNumber(weeksInCurrentYear), weeksAccumulator, coloredNumber
            );
        weeksAccumulator = weeksAccumulator + weeksInCurrentYear;
        return res;
    })
}

const getProgressPercent = (chunk: OneYearWeeksType) => {
    const checkedItems = chunk?.filter(week => week.checked);
    return checkedItems?.length > 0 ? (checkedItems?.length/chunk?.length)*100 : 0;
}

export const WeeksSection = ({birthDate, totalYears}: Props) => {
    const [coloredNumber, setColoredNumber] = useState(0 )
    const [allWeeks, setAllWeeks]= useState([] as AllWeeksType);
    const isMobile = useMediaQuery("(max-width: 765px)");
    useEffect(() => {
        setColoredNumber( () => {
            const res = getColoredCheckbox(birthDate);
            setAllWeeks(getAllWeeks(convertDDMMYYYToDate(birthDate), totalYears, res));
            return res;
        });
        }, [birthDate, totalYears])
    return (
        <div className="years__wrapper">
            {birthDate.length > 0 &&
                <>
                    {isMobile && <div className="years__head"></div>}
                    <div className="а years__container">
                        {allWeeks.map((chunk, index) =>
                            isMobile ?
                                <div key={index} className="progress-bar years-container__progress-bar">
                                    <div className="progress-bar__item" style={{ width: `${getProgressPercent(chunk)}%` }}></div>
                                </div>
                                :
                            <OneYearWeeks yearWeeks={chunk} key={index} />
                        )}
                    </div>
                </>
            }
        </div>
    )
}