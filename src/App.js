import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import uuid from "uuid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const singleExpense = {
      id: uuid(),
      charge,
      amount
    };
    setExpenses([...expenses, singleExpense]);

    setCharge("");
    setAmount("");
  };

  return (
    <>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending:
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
