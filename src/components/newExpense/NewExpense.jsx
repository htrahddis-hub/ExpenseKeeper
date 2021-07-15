import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

  function addExpense(newExpense) {
    const expenseData={
      ...newExpense,
      Date: new Date(newExpense.Date),
      id: Math.random().toString()
    }
    props.addExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addExpense}/>
    </div>
  )
}

export default NewExpense;