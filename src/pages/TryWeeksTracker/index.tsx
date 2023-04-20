import React, {FunctionComponent, useState} from "react";
import {Layout} from "components/Layout/Layout";
import {WeeksSection} from "components/WeeksSection/WeeksSectionComponent/WeeksSection";
import {AppDataForm} from "components/AppDataForm/AppDataForm";
import "pages/TryWeeksTracker/index.scss";

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
            <Layout pageClassName="page-container">
                <section className="page__section">
                    {!isFormOpened && <button onClick={toggleForm}>Form</button>}
                    {isFormOpened &&
                        <AppDataForm
                            onSubmit={onSubmit}
                            defaultTotalYears={totalYears}
                            defaultBirthDate={birthDate} />
                    }
                    <WeeksSection birthDate={birthDate} totalYears={totalYears} />
                </section>
            </Layout>
        </>
    )
}