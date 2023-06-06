import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {AppDataFormWrapper} from "components/Forms/AppDataForm/AppDataFormWrapper";
import {WeeksSection} from "components/WeeksSection/WeeksSectionComponent/WeeksSection";

const AVERAGE_LIFE_YEARS = 80;

interface Props {
    isAuth?: boolean,
    isNewUser?: boolean,
    handleSubmit?: (birthDate: string, totalYears: number) => void,
    defaultBirthDate?: string,
    defaultTotalYears?: number
}

export const Main = ({
                         // isAuth = false,
                         isNewUser = true,
                         handleSubmit,
                         defaultTotalYears = AVERAGE_LIFE_YEARS,
                         defaultBirthDate = ""}
                         : Props) => {
    const [birthDate, setBirthDate] = useState(defaultBirthDate);
    const [totalYears, setTotalYears] = useState(defaultTotalYears);
    const [isFormOpened, setFormOpened] = useState(isNewUser);
    useEffect(() => {
        setBirthDate(defaultBirthDate);
        setTotalYears(defaultTotalYears);
    }, [defaultBirthDate, defaultTotalYears])
    const toggleForm = () => {
        setFormOpened((prev) => !prev)
    }
    const onSubmit = (data: {birthDate: string, totalYears: number}) => {
        setFormOpened(false);
        setBirthDate(data.birthDate);
        setTotalYears(data.totalYears);
        typeof handleSubmit !== "undefined"
        && handleSubmit(data.birthDate, data.totalYears);
    }
    return (
        <section
            className="page-section page__section"
        >
            <div className="data-form__container page-section__form">
                <button
                    className={classNames("form-toggle data-form__toggle",
                        isFormOpened && "form-toggle--toggled"
                    )}
                    onClick={toggleForm}
                >
                    Your data
                    <svg
                        className={classNames("toggle-svg form-toggle__svg",
                            isFormOpened && "toggle-svg--rotated"
                        )}
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.0148 1.56389C11.0148 1.48354 10.9746 1.39314 10.9143 1.33287L10.4121 0.830636C10.3518 0.770368 10.2614 0.73019 10.1811 0.73019C10.1007 0.73019 10.0103 0.770368 9.95006 0.830636L6.00251 4.77818L2.05497 0.830636C1.9947 0.770368 1.9043 0.73019 1.82394 0.73019C1.73354 0.73019 1.65318 0.770368 1.59291 0.830636L1.09068 1.33287C1.03041 1.39314 0.990234 1.48354 0.990234 1.56389C0.990234 1.64425 1.03041 1.73465 1.09068 1.79492L5.77148 6.47573C5.83175 6.53599 5.92215 6.57617 6.00251 6.57617C6.08287 6.57617 6.17327 6.53599 6.23354 6.47573L10.9143 1.79492C10.9746 1.73465 11.0148 1.64425 11.0148 1.56389Z" fill="currentColor"/>
                    </svg>
                </button>
                {isFormOpened &&
                    <AppDataFormWrapper
                        formClassNames="data-form__form"
                        onSubmit={onSubmit}
                        defaultTotalYears={totalYears}
                        defaultBirthDate={birthDate}
                    />
                }
            </div>
            <WeeksSection birthDate={birthDate} totalYears={totalYears} />
        </section>
    )
}