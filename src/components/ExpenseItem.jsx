import './ExpenseItem.css';
function ExpenseItem() {
  return (
    
    <div className="expense-item">
      <div>April 16th, 2020</div>
      <div className="expense-item__description">
        <h2>Food</h2>
        <div className="expense-item__price">199.99</div>
      </div>    
    </div>
  )
}

export default ExpenseItem;