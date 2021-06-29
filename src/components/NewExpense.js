import React from "react";
import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const getFormData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onFormSubmit(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmitted={getFormData} />
    </div>
  );
};

export default NewExpense;
