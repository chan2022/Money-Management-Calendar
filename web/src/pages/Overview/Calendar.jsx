import "./Calendar.css"

function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <span>2026.11</span>
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
  )
}

export default Calendar