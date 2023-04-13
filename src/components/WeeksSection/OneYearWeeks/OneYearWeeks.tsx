import React from "react";
import { CustomCheckbox } from "components/WeeksSection/Checkbox/CustomCheckbox";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

import "components/WeeksSection/OneYearWeeks/OneYearWeeks.scss";

interface Props {
    yearWeeks: Array<{checked: boolean}>
}

export const OneYearWeeks = ({
                                 yearWeeks
                                 }
                                 : Props) => {

    return (
      <div className="one-year-container">
          {yearWeeks.map((week, index) => (
              <CustomCheckbox
                  id={index}
                  disabled={week.checked}
                  isDefaultActive={week.checked}
                  key={index}
              />
          ))}
      </div>
    )
}