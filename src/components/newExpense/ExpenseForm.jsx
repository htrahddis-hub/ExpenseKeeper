import React from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {

  const [expenseInput,setExpenseInput]=React.useState({
    title:'',
    amount:'',
    date:''
  });

  function handleChangeTitle(event) {
    setExpenseInput((prevState)=>{
      return{
        ...prevState,
        title:event.target.value
      }
    });
  }
  function handleChangeAmount(event) {
    setExpenseInput((prevState)=>{
      return{
        ...prevState,
        amount:event.target.value
      }
    });
  }
  function handleChangeDate(event) {
    setExpenseInput((prevState)=>{
      return{
        ...prevState,
        date:event.target.value
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onAddExpense(expenseInput);
    setExpenseInput({
      title:'',
      amount:'',
      date:''
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleChangeTitle} value={expenseInput.title}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={handleChangeAmount} value={expenseInput.amount}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={handleChangeDate} value={expenseInput.date}></input>
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;
