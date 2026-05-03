import { useState } from 'react';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const addTransaction = () => {
    if (!amount) return;
    setTransactions([...transactions, { amount: Number(amount), type }]);
    setAmount('');
  };

  const balance = transactions.reduce((acc: number, t: any) => {
    return t.type === 'income' ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="container">
      <h1>💰 Spending Tracker</h1>

      <div className="card">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button onClick={addTransaction}>Add</button>
      </div>

      <h2>Balance: {balance}</h2>

      <ul>
        {transactions.map((t: any, i) => (
          <li key={i}>
            {t.type}: {t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
