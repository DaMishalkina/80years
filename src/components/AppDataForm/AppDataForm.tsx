import React, {useState} from "react";
import "src/components/AppDataForm/AppDataForm.scss";
import {TextInput} from "src/components/TextInput/TextInput";

interface Props {
    defaultBirthDate?: string,
    defaultTotalYears?: number,
    onSubmit: (birthDate: string, totalYears?: number, event?: SubmitEvent) => void


}

export const  AppDataForm = ({
                                 defaultBirthDate = "",
                                 defaultTotalYears = 80,
                                 onSubmit}
                                 : Props) => {
    const [birthDate, setBirthDate] = useState(defaultBirthDate);
    const [totalYears, setTotalYears] = useState(defaultTotalYears.toString());
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(birthDate, Number(totalYears))
    }
    return (
       <form>
           <TextInput defaultValue={birthDate} onChange={setBirthDate} />
           <TextInput defaultValue={totalYears} onChange={setTotalYears} />
          <button type="submit" onClick={handleSubmit}>Submit</button>
       </form>
    )
}