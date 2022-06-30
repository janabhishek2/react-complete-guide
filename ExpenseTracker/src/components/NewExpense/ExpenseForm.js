import React ,{ useState }from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

  const [title, settitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    settitle(event.target.value);
  };
  const amountChangeHandler=(event)=>{
    setAmount(event.target.value);
  };
  const dateChangeHandler=(event)=>{
    setDate(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseObject={
        title,
        amount,
        date
    };
    props.changeShow();
    props.onSaveExpenseData(expenseObject);

    settitle("");
    setAmount("");
    setDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01"  value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.changeShow}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
