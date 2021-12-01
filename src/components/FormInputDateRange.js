import React, { useState, Suspense } from "react";
import PageLoader from "./PageLoader";

const { DateRangePicker } = React.lazy(() => import("react-dates"));

const FormInputDateRange = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [calendarFocus, setCalendarFocus] = useState(null);

  return (
    <Suspense fallback={<PageLoader />}>
      <fieldset className="date-picker">
        <label>Wybierz zakres dat:</label>
        <DateRangePicker
          startDate={startDate}
          startDateId="startDateId"
          endDate={endDate}
          endDateId="endDateId"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate.startOf("day"));
            setEndDate(endDate.startOf("day"));
          }}
          focusedInput={calendarFocus}
          onFocusChange={(focusedInput) => setCalendarFocus(focusedInput)}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </fieldset>
    </Suspense>
  );
};

export default FormInputDateRange;
