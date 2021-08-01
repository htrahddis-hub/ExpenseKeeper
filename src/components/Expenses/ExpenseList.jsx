import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
  if(props.item.length===0){
    return <h2 className="expenses-list__fallback">Found No Expense</h2>
  }

  return(
    <ul className='expenses-list'>
      {props.item.map((props)=>{
      return(
        <ExpenseItem
        key={props.id} 
        expenseTitle={props.title}
        expenseDate={props.date}
        expenseAmount={props.amount}
        />
      )})}
    </ul>
  );
}

export default ExpenseList;