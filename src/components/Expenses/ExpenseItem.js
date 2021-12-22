import React, {useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate.js'



const ExpenseItem = (props) =>{

    const [expenseTitle, setTitle] = useState(props.title)
    let expensePrice = props.price

    const clickHandler = () =>{
        setTitle("updated")
    }


    return (
        <Card className = 'expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = 'expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className = 'expense-item__price'>{expensePrice}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem