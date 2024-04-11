import React from "react";
import { Transaction } from "./Transaction";

export const ListTransactions = ({transactions}) => {

  return (
    <div className="bg-gray-50 px-2">
      <ul className="relative -top-10"> 
      {
        transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)
      }
      </ul>
    </div>
  );
};
