import "./Calendar.css";
import { DEFAULT_CATEGORIES } from "./categories";

function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <span className="calendar-title">2026.11</span>

        <div className="calendar-filters">
          {DEFAULT_CATEGORIES.map((category) => (
            <div className="filter-item" key={category.id}>
              <span
                className="filter-circle"
                style={{ backgroundColor: category.color }}
              ></span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-grid">
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>

        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="day">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;