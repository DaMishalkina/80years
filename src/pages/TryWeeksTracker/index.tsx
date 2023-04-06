import React, {FunctionComponent, useState} from "react";
import {Layout} from "src/components/Layout/Layout";
import {WeeksSection} from "src/components/WeeksSection/WeeksSectionComponent/WeeksSection";
import {AppDataForm} from "src/components/AppDataForm/AppDataForm";

const AVERAGE_LIFE_YEARS = 80;

export const TryWeeksTracker: FunctionComponent = ({}) => {
    const [birthDate, setBirthDate] = useState("");
    const [totalYears, setTotalYears] = useState(AVERAGE_LIFE_YEARS);
    const onSubmit = (date, years) => {
        setBirthDate(date);
        setTotalYears(years);
    }
    return (
        <>
            <Layout>
                <AppDataForm
                    onSubmit={onSubmit}
                    defaultTotalYears={totalYears}
                    defaultBirthDate={birthDate} />
               <WeeksSection birthDate={birthDate} totalYears={totalYears} />
            </Layout>
        </>
    )
}