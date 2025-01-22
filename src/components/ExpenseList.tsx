import { ExpenseItem } from "./ExpenseItem"
import { Expense, OnRemoveExpense } from "../types/expense"

export const ExpenseList = ({ expenses, onRemoveExpense }: { expenses: Expense[], onRemoveExpense: OnRemoveExpense }) => {

    console.log(onRemoveExpense);
    

    return (
        <ul className="expense-list">
            <div className="expense-title flex">
                <h6>Expense Name</h6>
                <h6>Amount Spent</h6>
                <h6>Date Of Expense</h6>
            </div>
            {expenses.map(expense => <ExpenseItem key={expense._id} expense={expense} onRemoveExpense={onRemoveExpense} />)}
        </ul>
    )
}