import { ExpenseItem } from "./ExpenseItem"
import { Expense } from "../types/expense"

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {
    return (
        <ul>
            {expenses.map(expense => <ExpenseItem key={expense.id} />)}
        </ul>
    )
}