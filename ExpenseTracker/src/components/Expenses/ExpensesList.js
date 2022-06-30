import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expensesContent = <div>No Expenses found</div>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            expenseDate={exp.dt}
            expenseTitle={exp.title}
            expenseAmount={exp.amt}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
