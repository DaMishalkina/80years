import React, {FunctionComponent, useState} from "react";
import {Layout} from "components/Layout/Layout";
import {WeeksSection} from "components/WeeksSection/WeeksSectionComponent/WeeksSection";
import {AppDataForm} from "components/AppDataForm/AppDataForm";

const AVERAGE_LIFE_YEARS = 80;

export const TryWeeksTracker: FunctionComponent = ({}) => {
    const [birthDate, setBirthDate] = useState("");
    const [totalYears, setTotalYears] = useState(AVERAGE_LIFE_YEARS);
    const [isFormOpened, setFormOpened] = useState(true);
    const toggleForm = () => {
        setFormOpened((prev) => !prev)
    }
    const onSubmit = (data: {birthDate: string, totalYears: number}) => {
        setFormOpened(false);
        setBirthDate(data.birthDate);
        setTotalYears(data.totalYears);
    }
    return (
        <>
            <Layout>
                {!isFormOpened && <button onClick={toggleForm}>Form</button>}
                {isFormOpened &&
                    <AppDataForm
                    onSubmit={onSubmit}
                    defaultTotalYears={totalYears}
                    defaultBirthDate={birthDate} />
                }
               <WeeksSection birthDate={birthDate} totalYears={totalYears} />
            </Layout>
        </>
    )
}