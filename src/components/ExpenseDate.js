import "../css/ExpenseDate.css";
const ExpenseDate = (props) => {
  console.log(props.dat);
  return (
    // {}
    <div className="expense-date">
      <div className="expense-date__month">
        {props.dat.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">{props.dat.getFullYear()}</div>
      <div className="expense-date__day">{props.dat.toLocaleString('en-US', { day: '2-digit' })}</div>
    </div>
  );
};

export default ExpenseDate;
