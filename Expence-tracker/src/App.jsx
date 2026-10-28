import { useState } from "react";
import "./App.css";

function App(){
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense(e){
    e.preventDefault();

    if(!title.trim() || Number(amount) <= 0) return ;

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  }
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  )
  function deleteExpense(id){
    setExpenses(expenses.filter((expense) => expense.id !==id));
  }
  return(
    <div>
      <h2>Expense Tracker</h2>

      <form onSubmit={addExpense}>
        <input placeholder="Expense Name" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input type="number" min="0.01" step="0.01" placeholder="Amount (₹)"
        value={amount} onChange={(e) => setAmount(e.target.value)}/>

        <button type="submit" > Add Expense</button>
      </form>
      <h3>Expenses</h3>
      {
        expenses.map((expense) => (
          <p key={expense.id}>
            {expense.title} -₹{expense.amount.toFixed(2)}{""}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </p>
        ))
      }

      {expenses.length === 0 && <p>No expenses added yet.</p>}
      <h3>Total:  ₹{total.toFixed(2)}</h3>
    </div>

    
  )
}

export default App;