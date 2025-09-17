import { useState } from 'react';
import Calendar from 'react-calendar';
import "./CSS/Calendar.css"
import "../App.css";

function ThisMonth() {
    const [date, setDate] = useState(new Date());

    return (
        <div class="month_main">
            <div class="month_goals">
                <h2>Goals for This Month</h2>
            </div>
            <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    )
}

export default ThisMonth;
