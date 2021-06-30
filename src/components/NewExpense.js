import React, { useState } from "react";
import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [FormType, setFormType] = useState(false);

  const getFormData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onFormSubmit(expenseData);
    setFormType(false);
  };
  const updateFormType = () => {
    setFormType(true);
  };
  const updateFormTypeFromChild = () => {
    setFormType(false);
  };
  return (
    <div className="new-expense">
      {!FormType && (
        <button type="button" onClick={updateFormType}>
          Add Expense
        </button>
      )}
      {FormType && (
        <ExpenseForm
          onFormSubmitted={getFormData}
          onCancel={updateFormTypeFromChild}
        />
      )}
    </div>
  );
};

export default NewExpense;
