// types/expense.ts
export type ExpenseCategory =
  | "Food"
  | "Rent"
  | "Transportation"
  | "Entertainment"
  | "Utilities"
  | "Healthcare"
  | "Shopping"
  | "Savings"
  | "Other";

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
  currency: string;
  description?: string; // Optional description
}
