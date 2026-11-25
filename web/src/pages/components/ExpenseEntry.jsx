import { useState, useRef, useEffect } from "react";
import "./ExpenseEntry.css";
import { DEFAULT_CATEGORIES } from "../constants/categories";
import { CURRENCIES } from "../constants/currencies";

function ExpenseEntry({ expense, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCategory = DEFAULT_CATEGORIES.find(
    (category) => category.id === expense.categoryId
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="expense-entry">
      <div
        className={`category-selector${isOpen ? " is-open" : ""}`}
        ref={dropdownRef}
      >
        <button
          type="button"
          className="filter-circle-btn"
          aria-label={`Choose category color, currently ${selectedCategory?.name ?? "Other"}`}
          aria-expanded={isOpen}
          style={{
            backgroundColor: selectedCategory?.color ?? "#E5E5E5",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {isOpen && (
          <div className="color-dropdown">
            {DEFAULT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                className="color-option"
                aria-label={category.name}
                title={category.name}
                style={{ backgroundColor: category.color }}
                onClick={() => {
                  onChange("categoryId", category.id);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <input
        className="expense-description"
        type="text"
        placeholder="Expense"
        value={expense.description ?? ""}
        onChange={(e) => onChange("description", e.target.value)}
      />

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