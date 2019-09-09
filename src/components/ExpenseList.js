import React from "react";
import Item from "./ExpenseItem";

const ExpenseList = ({ expenses, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
        </button>
      )}
    </>
  );
};

export default ExpenseList;
