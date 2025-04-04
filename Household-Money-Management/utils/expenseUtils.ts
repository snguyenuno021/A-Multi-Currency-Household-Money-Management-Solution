// utils/expenseUtils.ts
import { Expense, ExpenseCategory } from "@/types/expense";

/**
 * Categorizes an expense based on description keywords.
 */
export const categorizeExpense = (description: string): ExpenseCategory => {
  const lowerDesc = description.toLowerCase();

  if (lowerDesc.includes("grocery") || lowerDesc.includes("restaurant") || lowerDesc.includes("food")) {
    return "Food";
  } else if (lowerDesc.includes("rent") || lowerDesc.includes("mortgage")) {
    return "Rent";
  } else if (lowerDesc.includes("uber") || lowerDesc.includes("bus") || lowerDesc.includes("gas")) {
    return "Transportation";
  } else if (lowerDesc.includes("movie") || lowerDesc.includes("netflix")) {
    return "Entertainment";
  } else if (lowerDesc.includes("electricity") || lowerDesc.includes("water")) {
    return "Utilities";
  } else if (lowerDesc.includes("doctor") || lowerDesc.includes("pharmacy")) {
    return "Healthcare";
  } else if (lowerDesc.includes("clothes") || lowerDesc.includes("shopping")) {
    return "Shopping";
  } else if (lowerDesc.includes("savings") || lowerDesc.includes("investment")) {
    return "Savings";
  }

  return "Other"; // Default category
};

/**
 * Groups expenses by category and calculates total for each category.
 */
export const getExpensesByCategory = (expenses: Expense[]): Record<ExpenseCategory, number> => {
  return expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {} as Record<ExpenseCategory, number>);
};
