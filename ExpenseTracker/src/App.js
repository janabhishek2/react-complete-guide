import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const initial = [
    {
      id: "e1",
      title: "Car insurance",
      amt: "290.7",
      dt: new Date(2022, 4, 3),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amt: "200",
      dt: new Date(2022, 5, 5),
    },
    {
      id: "e3",
      title: "Chips",
      amt: "288",
      dt: new Date(2022, 6, 5),
    },
    {
      id: "e4",
      title: "Tv rental",
      amt: "350",
      dt: new Date(2022, 7, 7),
    },
  ];
  const [expenses, setExpenses] = useState(initial);

  const handleAddExpense = (exp) => {

    const newExp = {
      id: Math.random().toString(),
      amt: +exp.amount,
      title: exp.title,
      dt: new Date(exp.date),
    };
    setExpenses((prev) => {
      return [newExp, ...prev];
    });
  };

  // return React.createElement('div',{},React.createElement('h2',{},'Let\'s Get Started'),React.createElement(Expenses,{expenses:expenses}));

  return (
    <div>
      <NewExpense
        onAddExpense={handleAddExpense}
      />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
