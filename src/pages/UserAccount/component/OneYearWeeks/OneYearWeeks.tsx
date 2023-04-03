import React, {useEffect, useState} from "react";
import { CustomCheckbox } from "src/pages/UserAccount/component/Checkbox/CustomCheckbox";

import "src/pages/UserAccount/component/OneYearWeeks/OneYearWeeks.scss";

interface Props {
    yearWeeks: Array<{checked: false, color?: string}>
}

export const OneYearWeeks = ({yearWeeks}: Props) => {
    return (
      <div className="one-year-container">
          {yearWeeks.map((week, index) => (
              <CustomCheckbox isDefaultActive={week.checked} key={index} />
          ))}
      </div>
    )
}