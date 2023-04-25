import React, {useState, useRef} from "react";
import "components/Forms/AppDataForm/AppDataFormWrapper.scss";
import {TextInput} from "components/TextInput/TextInput";
import {Form} from "../Form";

interface Props {
    defaultBirthDate?: string,
    defaultTotalYears?: number,
    onSubmit: (data: {birthDate: string, totalYears?: number }) => void


}

const valDate = (date) => {
    const dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
    if (date.match(dateformat)) {
        const operator = date.split('/');

        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        const day = parseInt(datepart[0]);
        const month = parseInt(datepart[1]);
        const year = parseInt(datepart[2]);

        const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(month > 12){
            return false;
        }
        if (month == 1 || month > 2) {
            if (day > listOfDays[month - 1]) {
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                return false;
            }
            else
            if ((leapYear == true) && (day > 29)) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}


export const  AppDataFormWrapper = ({
                                 defaultBirthDate = "",
                                 defaultTotalYears = 80,
                                 onSubmit}
                                 : Props) => {
    const [birthDate, setBirthDate] = useState(defaultBirthDate);
    const [totalYears, setTotalYears] = useState(defaultTotalYears.toString());
    const [isError, setIsError] = useState(false);

    const formRef = useRef();
    const onBirtDateChange = () => {
        setIsError(false);
        const formData = new FormData(formRef.current);
        const value = formData.get("birthDate") as string;
        const length = value.length;

        if(length === 2) {
          setBirthDate(`${value}/`);
        }

        if(length === 5) {
            setBirthDate(`${value}/`);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            birthDate: formData.get("birthDate") as string,
            totalYears: Number(formData.get("totalYears"))
        }
        valDate(data.birthDate) ? onSubmit(data) : setIsError(true);
    }

    return (
        <>
            <Form
                inputs={[
                    {value: birthDate, placeholder: "DD/MM/YYYY", name: "birthDate", onChange: onBirtDateChange, isError: isError},
                    {value: totalYears, name: "totalYears"}
                ]}
                formRef={formRef}
                onSubmit={handleSubmit}
                error={isError && "Invalid date format"}
            />
        </>
    )
}