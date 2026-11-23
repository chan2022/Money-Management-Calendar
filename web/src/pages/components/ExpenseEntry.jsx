
import "./ExpenseEntry.css";
import { DEFAULT_CATEGORIES } from "../constants/categories";
import { CURRENCIES } from "../constants/currencies";

function ExpenseEntry({ expense, onChange }) {
  const selectedCategory = DEFAULT_CATEGORIES.find(
    (category) => category.id === expense.categoryId
  );

  return (
    <div className="expense-entry">

      {/* Category selection */}
      <div className="category-selector">
        <span
          className="filter-circle"
          style={{
            backgroundColor: selectedCategory?.color ?? "#E5E5E5"
          }}
        />

        <select
          value={expense.categoryId}
          onChange={(e) => onChange("categoryId", e.target.value)}
        >
          {DEFAULT_CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Currency and expense amount */}
      <div className="expense-value">
        <select
          value={expense.currency}
          onChange={(e) => onChange("currency", e.target.value)}
        >
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
          value={expense.amount}
          onChange={(e) =>
            onChange(
              "amount",
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />
      </div>

    </div>
  );
}

export default ExpenseEntry;
