import { useState } from "react"
import { AddExpenseProps } from "../types/expense"

export const AddExpense = ({ onAddExpense }: { onAddExpense: AddExpenseProps}) => {
    const [expense, setExpence] = useState({})

    return (
        <div className="add-expense">
            <input type="text" placeholder='Add new expense...'/>
            <input type="number" placeholder='Write amount' min={1} />
            <select>
                <option value="USD">&#36;</option>
                <option value="ILS" selected>&#8362;</option>
            </select>
            <button onClick={() => onAddExpense(expense)}>Add</button>
        </div>
    )
}