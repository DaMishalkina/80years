import React from "react";
import classNames from "classnames";
import "components/Toggle/Toggle.scss";

interface Props {
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    toggleLabel?: string
    icons?: { checked?: string, unchecked?: string },
    ariaLabel?: string,
    toggleClassname?: string,
}
export const Toggle = ({
                           checked,
                           onChange,
                           icons = {checked: "☼", unchecked: "☾"},
                           ariaLabel,
                           toggleLabel,
                           toggleClassname}
                           : Props) => {
    return (
       <label className={classNames("toggle", toggleClassname)}>
           <input
               onChange={onChange}
               aria-label={ariaLabel}
               className="toggle__input"
               type="checkbox" checked={checked}
           />
           {toggleLabel?.length > 0 &&
               <span className="toggle__label">{toggleLabel}</span>
           }
           <span className="toggle__container">
               {typeof icons?.checked !== "undefined" &&
                   <span className="toggle__icon">{icons.checked}</span>
               }
               <span className="toggle__slider"></span>
               {typeof icons?.unchecked !== "undefined" &&
                   <span className="toggle__icon">{icons.unchecked}</span>
               }
           </span>
       </label>
    )
}