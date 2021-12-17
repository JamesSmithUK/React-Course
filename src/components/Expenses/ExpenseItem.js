import './ExpenseItem.css'
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate.js'
const ExpenseItem = (props) =>{



    const expenseTitle = props.title
    const expensePrice = props.price

    return (
        <Card className = 'expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = 'expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className = 'expense-item__price'>{expensePrice}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem