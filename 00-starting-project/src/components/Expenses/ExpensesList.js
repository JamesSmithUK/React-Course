import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) =>{

    let expensesContent = <p>No expenses Found</p>

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }

    return <ul className="expenses-list">
        {props.items.map(expense => 
            <ExpenseItem 
                key = {expense.id}
                date = {expense.date} 
                price = {expense.amount} 
                title = {expense.title}>
            </ExpenseItem>
        )}
    </ul>

}

export default ExpensesList