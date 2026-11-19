import "./Calendar.css"   // you can create this later

function Calendar() {
  return (
    <div className="calendar">
      <h2 className="calendar-title">Calendar</h2>

      <div className="calendar-header">
        <button type="button">←</button>
        <span>November 2026</span>
        <button type="button">→</button>
      </div>

      <div className="calendar-grid">
        {/* Days of the week */}
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>

        {/* Simple placeholder days – we will make this dynamic later */}
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