import React from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/newExpense/NewExpense";

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expenses,setExpenses]=React.useState(()=>
  JSON.parse(localStorage.getItem('data'))||[]);

  function handleAddExpense(expense) {


    let data=JSON.parse(localStorage.getItem('data'))||[];
    data.push(expense);
    localStorage.setItem('data',JSON.stringify(data));
    setExpenses((prevValue)=>{
      return [expense,...prevValue];
    })
  }
  function onDeleteExpense(prop) {
    let data=JSON.parse(localStorage.getItem('data'))||[];
    data=data.filter(curr=>curr.id!==prop);
    localStorage.setItem('data',JSON.stringify(data));
    setExpenses((prevValue)=>{
      return(
        prevValue.filter(props=>props.id!==prop)
      )
    })
  }
  return (
    <div>
      <NewExpense addExpense={handleAddExpense}/>
      <Expense items={expenses} deleteExpense={onDeleteExpense}/>
    </div>
  );
}

export default App;
