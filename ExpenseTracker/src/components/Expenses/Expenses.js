

import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [selectedYear, setselectedYear] = useState("2020");
  const handleYearSelect = (event) => {
    setselectedYear(event.target.value);
  };
  let expenses;
  expenses = props.expenses.filter(
    (exp) => exp.dt.getFullYear().toString() === selectedYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter value={selectedYear} onSelectYear={handleYearSelect} />
		<ExpensesChart expenses={expenses}/>
        <ExpensesList items={expenses}/>
      </Card>
    </>
  );
}

export default Expenses;
