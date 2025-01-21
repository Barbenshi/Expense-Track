import { useState } from "react"
import { expenseService } from '../services/expense.service'
import { OnAddExpense } from "../types/expense"
import { useForm } from "../customHooks/useForm"

export const AddExpense = ({ onAddExpense }: { onAddExpense: OnAddExpense }) => {
    const [expense, handleChange, setExpense] = useForm(expenseService.getEmptyExpense())

    const handleOnAddExpense = () => {
        onAddExpense({ ...expense })
        setExpense(expenseService.getEmptyExpense())
    }

    return (
        <div className="add-expense">
            <input type="text" value={expense.description} name="description" placeholder='Add new expense...' onChange={handleChange}/>
            <input type="number" value={expense.amount} name="amount" placeholder='Write amount' min={1} onChange={handleChange} />
            <select value={expense.currency} name="currency" onChange={handleChange}>
                <option value="USD">&#36;</option>
                <option value="ILS">&#8362;</option>
                <option value="EUR">&#8364;</option>
            </select>
            <button onClick={handleOnAddExpense}>Add</button>
        </div>
    )
}