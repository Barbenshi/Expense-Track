import { Expense } from '../types/expense';

declare module './expense.service' {
    export const expenseService: {
        query: () => Promise<Expense[]>,
        save: (expense : Expense) => Promise<Expense>,
        getEmptyExpense: () => Expense
    }
}