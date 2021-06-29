import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const selectedYear = (data) => {
    setYear(data);
    props.newYear(data);
  };
  const [year, setYear] = useState("2020");
  return (
    <div className="expenses">
      <ExpensesFilter onChangeYear={selectedYear} selected={year} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
