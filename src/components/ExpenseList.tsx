import { ExpenseItem } from "./ExpenseItem"
import { Expense } from "../types/expense"

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {

    return (
        <ul className="expense-list">
            {expenses.map(expense => <ExpenseItem key={expense._id} expense={expense} />)}
        </ul>
    )
}