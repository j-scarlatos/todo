import '../App.css'

function ThisWeek() {
    return(
        <div class="weekly_main">
            <div class="this_week_tracker">
                <h2>Plans This Week</h2>
                <table>
                    <tr class="weekdays">
                        <td><p>Sun</p></td>
                        <td><p>M</p></td>
                        <td><p>T</p></td>
                        <td><p>W</p></td>
                        <td><p>Th</p></td>
                        <td><p>F</p></td>
                        <td><p>Sa</p></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <button class="add_event">Add Event</button>
            </div>

            <div class="left_todo_thisweek">
                <h2>What Do You Have Left?</h2>
            </div>
        </div>
    )
}

export default ThisWeek;
