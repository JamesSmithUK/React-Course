import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

const Expenses = (props) =>{
    const [yearFilter, setYearFilter] = useState()
    const filterChangeHandler = selectedYear =>{
        setYearFilter(selectedYear)
    }
    return(
        <div>
            <Card className = "expenses">
            <ExpensesFilter selected = {yearFilter} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem date = {props.items[0].date} price = {props.items[0].amount} title = {props.items[0].title}></ExpenseItem>
                <ExpenseItem date = {props.items[1].date} price = {props.items[1].amount} title = {props.items[1].title}></ExpenseItem>
                <ExpenseItem date = {props.items[2].date} price = {props.items[2].amount} title = {props.items[2].title}></ExpenseItem>
                <ExpenseItem date = {props.items[3].date} price = {props.items[3].amount} title = {props.items[3].title}></ExpenseItem>
            </Card>
        </div>
    )

}



export default Expenses