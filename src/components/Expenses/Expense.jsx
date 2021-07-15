import ExpenseItem from "./ExpenseItem";
import Card from "./Card"
import './Expense.css';

function Expense(props) {
    return(
        <Card className='expenses'>
            {props.items.map((props)=>{
        return(
          <ExpenseItem 
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