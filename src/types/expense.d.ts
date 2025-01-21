export type Expense = {
  _id: string;
  description: string;
  amount: number;
  currency: string;
  dateCreated: number;
};

export type OnAddExpense = (expense: Expense) => void;
