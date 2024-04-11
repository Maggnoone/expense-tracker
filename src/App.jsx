import React, { useState } from "react";
import { ListTransactions } from "./components/ListTransactions";
import { Stats } from "./components/Stats";
import { Header } from "./components/Header";

const initialTransactions = [
  {
    type: "Income",
    name: "Monthly Salary",
    balance: 1150,
    date: "08-03-2024",
    id: "1",
  },
  {
    type: "Expense",
    name: "Buy some burgers",
    balance: 79,
    date: "17-04-2024",
    id: "3",
  },
  {
    type: "Income",
    name: "Landing Page",
    balance: 550,
    date: "11-02-2024",
    id: "4",
  },
];

export const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const onHandleTransactions = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-3 py-5">
        <div className="w-full bg-white text-gray-800 overflow-hidden border-4 border-white rounded-4xl shadow-lg relative max-w-[814px]">
          <Header onHandleTransactions={onHandleTransactions} />

          <ListTransactions transactions={transactions}/>

          <Stats transactions={transactions}/>
        </div>
      </div>
    </>
  );
};
