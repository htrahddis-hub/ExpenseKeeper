import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';

function Expense(props) {

  const [filteredYear, setFilteredYear] = React.useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };

    return(
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((props)=>{
        return(
          <ExpenseItem
          key={props.id} 
          expenseTitle={props.title}
          expenseDate={props.date}
          expenseAmount={props.amount}
         />
        )
      })}
        </Card>
    )
}

export default Expense;