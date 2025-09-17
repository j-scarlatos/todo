import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.js'
import ThisWeek from './Pages/ThisWeek.js';
import ThisMonth from './Pages/ThisMonth.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1 class="header">To Do App</h1>
      <nav class="head_nav">
        <Link class="nav_links" to="/">Today</Link>
        <Link class="nav_links" to="/weekly">This Week</Link>
        <Link class="nav_links" to="/monthly">This Month</Link>
        <Link class="nav_links" to="/events">Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/weekly" element={< ThisWeek />} />
        <Route path="/monthly" element={< ThisMonth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
