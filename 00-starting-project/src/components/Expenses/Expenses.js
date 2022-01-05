import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import React, {useState} from "react";

const Expenses = (props) =>{
    const [yearFilter, setYearFilter] = useState('2020')
    const filterChangeHandler = selectedYear =>{
        setYearFilter(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearFilter
    })

    return(
        <div>
            <Card className = "expenses">
                <ExpensesFilter selected = {yearFilter} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    )

}



export default Expenses