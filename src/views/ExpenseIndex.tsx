import { useState } from 'react'
import { ExpenseList} from '../components/ExpenseList'
const demoExpenses = [
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
        currency: 'NIS',
        dateCreated: 1719969200
    }
]

export const ExpenseIndex = () => {
    const [expenses, setExpenses] = useState(demoExpenses)

    return (
        <main className="expense-index">
            <h1>Expense Index</h1>
            <ExpenseList expenses={expenses}/>
        </main>
    )
}