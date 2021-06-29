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
  const filteredData = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );
  let displayData = <p>No Expenses Found</p>;
  if (filteredData.length > 0) {
    displayData = filteredData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div className="expenses">
      <ExpensesFilter onChangeYear={selectedYear} selected={year} />
      {displayData}
    </div>
  );
};

export default Expenses;
