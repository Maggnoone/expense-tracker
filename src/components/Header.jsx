import React from "react";
import { useState } from "react";

export const Header = ({ onHandleTransactions }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("Expense");
  const [date, setDate] = useState("2024-01-01");

  const reverseString = (str) => {
    return str.split("-").reverse().join("-");
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !balance || !type) return;

    const newTransaction = {
      type,
      name,
      balance,
      date: reverseString(date),
      id: crypto.randomUUID(),
    };

    onHandleTransactions(newTransaction);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full bg-gradient-to-br from-[#40D79E] to-[#3BB7B4] pt-3 pb-12 px-6 text-white">
        <div className="my-5 flex gap-2">
          <input
            type="text"
            className="w-30 text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-60"
            placeholder="Add new transaction..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="w-1/3 text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-60 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-60"
            placeholder="Add price"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
          />
          <select
            className="w-1/3 text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-0 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-30"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <button className="w-1/3 text-white bg-white hover:bg-[#3BB7B4] bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50 border-white">
            Add
          </button>
        </div>
        <div className="flex justify-between align-middle">
          <h1 className="text-3xl font-light mb-3">Expense Tracker</h1>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2024-01-01"
            max="2028-01-01"
            className="w-1/3 text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-0 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-30"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            data-date="" 
            data-date-format="DD MMMM YYYY"
          />
        </div>
      </div>
    </form>
  );
};
