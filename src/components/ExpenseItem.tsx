import { useMemo } from "react"
import { Expense, OnRemoveExpense } from "../types/expense"

export const ExpenseItem = ({ expense, onRemoveExpense }: { expense: Expense, onRemoveExpense: OnRemoveExpense }) => {

    const { amount, currency, description, dateCreated, _id } = expense

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
            <span className="expense-date">{ formattedDate }</span>
            <button className="expense-remove" onClick={() => onRemoveExpense(_id)}>X</button>
        </li>
    )
}