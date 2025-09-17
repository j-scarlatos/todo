import '../App.css';

function Home() {
    return (
        <div class="home_page">
            <div class="main">
                <form class="todo_form">
                    <div id="task_input">
                        <label for="task">Add a Task</label>
                        <input type="text" id="task" name="task" required="true"></input>
                    </div>
                    <div id="priority_input">
                        <label for="priority">Priority</label>
                        <input type="number" id="priority" name="priority" min="1" max="10"></input>
                    </div>
                    <div>
                        <label for="expiration">How Many Days Will it Take?</label>
                        <input type="number" id="expiration" name="expiration" required="true"></input>
                    </div>
                    <div>
                        <label for="repeat">Repeat?</label>
                        <input type="checkbox" id="repeat" name="repeat"></input>
                    </div>             
                </form>

                <div class="bottom_main">
                    <div class="today_todo">
                        <div class="todays_todos_todo">
                            
                        </div>
                        <div class="todays_finished_todos">
                            <h2>You've Completed:</h2>
                        </div>
                    </div>

                    <div class="longterm_todo">
                        <div class="week_left_todo">
                            <h2>Left for This Week:</h2>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                            </ul>
                        </div>
                        <div class="month_left_todo">
                            <h2>Left for This Month:</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
