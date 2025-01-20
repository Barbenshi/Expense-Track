export type Expense = {
    id: string;
    description: string;
    amount: number;
    currency: string;
    dateCreated: number;
  }

  export type AddExpenseProps = {
    onAddExpense: (expense: Expense) => void; // Define the type for the function
};