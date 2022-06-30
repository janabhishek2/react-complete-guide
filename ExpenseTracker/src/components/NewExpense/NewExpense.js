import React  , { useState }from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [show, setShow] = useState(true);
  const handleChangeShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <div className="new-expense">
      {show && (
        <button type="button" onClick={handleChangeShow}>
          Add Expense
        </button>
      )}
      {!show && (
        <ExpenseForm
          onSaveExpenseData={props.onAddExpense}
          changeShow={handleChangeShow}
        />
      )}
    </div>
  );
}

export default NewExpense;
