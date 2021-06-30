import "../css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const selectedYear = (data) => {
    setYear(data);
    props.newYear(data);
  };
  const [year, setYear] = useState("2020");
  const filteredData = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  return (
    <div className="expenses">
      <ExpensesFilter onChangeYear={selectedYear} selected={year} />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList items={filteredData} />
    </div>
  );
};

export default Expenses;
