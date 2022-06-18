import "./App.css";
import React from 'react'
import Expenses from "./components/Expenses/Expenses";
const App=() =>{
  const expenses = [
    {
      title: "Car insurance",
      amt: "290.7",
      dt: new Date(2022, 4, 3),
    },
    {
      title: "Toilet Paper",
      amt: "200",
      dt: new Date(2022,5,5),
    },
    {
      title: "Chips",
      amt: "288",
      dt: new Date(2022,6,5),
    },
    {
      title: "Tv rental",
      amt: "350",
      dt: new Date(2022, 7,7),
    },
  ];

  // return React.createElement('div',{},React.createElement('h2',{},'Let\'s Get Started'),React.createElement(Expenses,{expenses:expenses}));
  return (
    <div>
      <h2>Let's Get Started</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
