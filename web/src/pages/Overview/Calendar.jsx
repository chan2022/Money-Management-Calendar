import "./Calendar.css";
import { DEFAULT_CATEGORIES } from "../constants/categories";
import { CURRENCIES } from "../constants/currencies";

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
              {[0, 1].map((entry) => (
                <div className="expense-entry" key={entry}>
                  {/* Category dropdown */}
                  <div className="category-selector">
                    <span
                      className="filter-circle"
                      style={{
                        backgroundColor: DEFAULT_CATEGORIES[0].color
                      }}
                    />

                    <select defaultValue="">
                      <option value="" disabled>
                        Category
                      </option>

                      {DEFAULT_CATEGORIES.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Currency and amount */}
                  <div className="expense-value">
                    <select defaultValue="EUR">
                      {CURRENCIES.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.symbol}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;