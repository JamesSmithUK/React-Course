import React, {useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate.js'



const ExpenseItem = (props) =>{
    let expensePrice = props.price
    return (
        <li>
        <Card className = 'expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = 'expense-item__description'>
                <h2>{props.title}</h2>
                <div className = 'expense-item__price'>{expensePrice}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem