import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';

const FormInputDateRange = ({ 
    startDate,
    endDate,
    setStartDate,
    setEndDate }) => {

    const [calendarFocus, setCalendarFocus] = useState(null);

    return (<fieldset className='date-picker'>
                <label>Wybierz zakres dat:</label>
                <DateRangePicker
                    startDate={startDate}
                    startDateId="startDateId"
                    endDate={endDate}
                    endDateId="endDateId"
                    onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate.startOf('day'));
                        setEndDate(endDate.startOf('day'));
                    }}
                    focusedInput={calendarFocus}
                    onFocusChange={focusedInput => setCalendarFocus(focusedInput)}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </fieldset>);
}

export default FormInputDateRange;