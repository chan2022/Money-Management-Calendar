import "./Dashboard.css"
import Calendar from "./Calendar"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="notebook">
        <div className="notebook-binding">
          <div className="spring"></div>
        </div>

        <div className="notebook-page">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard