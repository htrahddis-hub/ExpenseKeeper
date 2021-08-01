import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card"
import './ExpenseItem.css';
function ExpenseItem(props) {

  function handleClick(event) {
    props.deleteExpense(event.target.value);
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate}/>
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">₹{props.expenseAmount}</div>
        <button className="expense-item__del" onClick={handleClick} value={props.keys}></button>
      </div>    
    </Card>
    </li>
  )
}

export default ExpenseItem;