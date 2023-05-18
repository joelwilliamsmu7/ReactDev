import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.89,
    date: new Date(2022, 5, 13),
  },
  {
    id: "e2",
    title: "LG Ultrawide Monitor",
    amount: 670,
    date: new Date(2022, 9, 26),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 345.9,
    date: new Date(2022, 11, 21),
  },
  {
    id: "e4",
    title: "Office Supplies",
    amount: 294.84,
    date: new Date(2022, 12, 6),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    //console.log(expenses);
  };

  /**
   * return React.createElement(
   * 'div',
   * {},
   * React.createElement('h2',{}, 'Lets Get started!'),
   * React.createElement(Expenses, {items: expenses })
   * ):
   * **/

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
