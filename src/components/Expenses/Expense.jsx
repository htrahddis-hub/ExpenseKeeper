import React from 'react';
import Card from "../UI/Card"
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense(props) {

  const [filteredYear, setFilteredYear] = React.useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };
  const filteredExpense=props.items.filter((props)=>{
    return(
      props.date.getFullYear().toString()===filteredYear
    );
  });

  return(
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList item={filteredExpense}/>
    </Card>
  )
}

export default Expense;