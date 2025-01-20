import { useMemo } from "react"
import { Expense } from "../types/expense"

export const ExpenseItem = ({ expense }: { expense: Expense }) => {

    const { amount, currency, description, dateCreated } = expense

    const formattedAmount = useMemo( () => new Intl.NumberFormat('he-IL', {
        style: 'currency',
        currency,
    }).format(amount), [amount, currency])

    const formattedDate = useMemo(() => {
        const date = new Date(dateCreated * 1000);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23', // Use 24-hour time format
        }).format(date);
    }, [dateCreated]);

    return (
        <li className="expense-item">
            <span className="expense-name">{ description }</span>
            <span className="expense-amount">{ formattedAmount }</span>
            <span className="expense-amount">{ formattedDate }</span>
        </li>
    )
}