import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  function addExpense(newExpense) {
    const expenseData={
      ...newExpense,
      date: new Date(newExpense.date),
      id: Math.random().toString()
    }
    props.addExpense(expenseData);
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
      <ExpenseForm onAddExpense={addExpense} onCancel={stopEditingHandler}/>
      )}
    </div>
  )
}

export default NewExpense;