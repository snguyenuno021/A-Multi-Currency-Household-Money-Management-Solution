// components/ExpenseTracker.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { Expense } from "@/types/expense";
import { categorizeExpense, getExpensesByCategory } from "@/utils/expenseUtils";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!description || !amount) return;

    const newExpense: Expense = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      category: categorizeExpense(description),
      date: new Date().toISOString(),
      currency: "USD",
      description,
    };

    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
  };

  const categorizedExpenses = getExpensesByCategory(expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Expense Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={addExpense} />

      {/* Display Expenses by Category */}
      <Text style={styles.subtitle}>Expenses by Category:</Text>
      <FlatList
        data={Object.entries(categorizedExpenses)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item[0]}: ${item[1].toFixed(2)}
          </Text>
        )}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
  },
});
