import React from 'react';
import Card from "../UI/Card"
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
  
  const [filteredYear, setFilteredYear] = React.useState(()=>{
    const x=new Date();
    return x.getFullYear().toString();
  });

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };
  const filteredExpense=props.items.filter((props)=>{
    return(
      props.date.getFullYear().toString()===filteredYear
    );
  });
  function onDeleteExpense(prop) {
    props.deleteExpense(prop);
  }
  return(
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList item={filteredExpense} deleteExpense={onDeleteExpense}/>
    </Card>
  )
}

export default Expense;