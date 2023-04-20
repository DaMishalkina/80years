import React, {ReactElement, useState} from "react";
import 'components/WeeksSection/ToggledOneYear/ToggledOneYear.scss';


interface Props {
    children: ReactElement;
}

export const ToggledOneYear = ({children}: Props) => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        !isToggled
            ? <button onClick={() => setIsToggled(!isToggled)}>Press me</button>
            : children
    )
}