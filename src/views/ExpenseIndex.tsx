import { useEffect, useState } from 'react'
import { ExpenseList} from '../components/ExpenseList'
import { Expense } from '../types/expense'
import { AddExpense } from '../components/AddExpense'
import { expenseService } from '../services/expense.service'

export const ExpenseIndex = () => {
    const [expenses, setExpenses] = useState<Expense[]| null>(null)

    useEffect(() => {
        fetchExpenses()
    }, [])
    
    const fetchExpenses = async () => {
        const expenses: Expense[] = await expenseService.query()
        setExpenses(expenses)
    }

    const onAddExpense = async (expense: Expense) => {
        try {
            const newExpense: Expense = await expenseService.save(expense)
            setExpenses((prevExpenses: Expense[] | null) => {
                if (!prevExpenses || !prevExpenses.length) return [newExpense]
                return [...prevExpenses, newExpense];
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (!expenses) return <div>Loading expenses...</div>

    return (
        <main className="expense-index">
            <h1>Expense Index</h1>
            <ExpenseList expenses={expenses}/>
            <AddExpense onAddExpense={onAddExpense} />
        </main>
    )
}