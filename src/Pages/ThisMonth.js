import { useState } from 'react';
import Calendar from 'react-calendar';
import "./CSS/Calendar.css"
import "../App.css";

function ThisMonth() {
    const [date, setDate] = useState(new Date());

    return (
        <div class="month_main">
            <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    )
}

export default ThisMonth;
