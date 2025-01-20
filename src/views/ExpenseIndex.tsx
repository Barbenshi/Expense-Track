import { useEffect, useState } from 'react'
import { ExpenseList} from '../components/ExpenseList'
import { Expense } from '../types/expense'
import { AddExpense } from '../components/AddExpense'
const demoExpenses: Expense[] = [
    {
        id: "1",
        description: 'Rent',
        amount: 1000,
        currency: 'USD',
        dateCreated: 1709251200
    },
    {
        id: "2",
        description: 'Gelato',
        amount: 20,
        currency: 'USD',
        dateCreated: 1709969200
    },
    {
        id: "3",
        description: 'Ninja Blender',
        amount: 700,
        currency: 'ILS',
        dateCreated: 1720019600
    }
]

export const ExpenseIndex = () => {
    const [expenses, setExpenses] = useState<Expense[]| null>(null)

    useEffect(() => {
        setTimeout(() => {
            setExpenses(demoExpenses)
        }, 500);
    }, [])

    const onAddExpense = (expense: Expense) => {
        console.log('Adding expense...')
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