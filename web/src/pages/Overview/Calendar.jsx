import { useState } from "react";
import "./Calendar.css";
import { DEFAULT_CATEGORIES } from "../constants/categories";
import ExpenseEntry from "../components/ExpenseEntry";

function Calendar() {
  const [expenses, setExpenses] = useState(() =>
    Array.from({ length: 30 }, () =>
      Array.from({ length: 6 }, () => ({
        categoryId: "other",
        description: "",
        currency: "EUR",
        amount: "",
      }))
    )
  );

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
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
          (day) => (
            <div className="day-name" key={day}>
              {day}
            </div>
          )
        )}

        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="day">
            <div className="day-number">{i + 1}</div>

            <div className="expense-entries">
              {[0, 1, 2, 3, 4, 5].map((entryIndex) => (
                <ExpenseEntry
                  key={entryIndex}
                  expense={expenses[i][entryIndex]}
                  onChange={(field, value) => {
                    setExpenses((currentExpenses) =>
                      currentExpenses.map((dayExpenses, dayIndex) =>
                        dayIndex === i
                          ? dayExpenses.map((entry, index) =>
                              index === entryIndex
                                ? { ...entry, [field]: value }
                                : entry
                            )
                          : dayExpenses
                      )
                    );
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;