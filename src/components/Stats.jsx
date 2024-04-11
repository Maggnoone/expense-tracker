import React from 'react'

export const Stats = ({ transactions, onDeleteTransactions }) => {
  const expenses = transactions.filter((el) => el.type !== "Income");
  const incomes = transactions.filter((el) => el.type !== "Expense");

  const sumProperties = (array, propertyName = "balance") => {
    let total = 0;

    for (let obj of array) {
      if (
        obj.hasOwnProperty(propertyName) &&
        typeof obj[propertyName] === "number"
      ) {
        total += obj[propertyName];
      }
    }

    return total;
  };

  return (
    <div className="px-5 bg-white pt-2 pb-2">
      <div className="flex">
        <div className="flex-1 group">
          <a
            href="#"
            id="incomes-border"
            className="flex items-end justify-center text-center mx-auto px-4 w-3/5 text-green-500 border-b-2 border-transparent"
          >
            <span className="block px-1">
              <h3>$ {sumProperties(incomes)}</h3>
              <span className="block text-xs pb-1">Incomes</span>
            </span>
          </a>
        </div>
        <div className="flex-1 group">
          <a
            href="#"
            id="expenses-border"
            className="flex items-end justify-center text-center mx-auto px-4 w-3/5 text-red-600 border-b-2 border-transparent"
          >
            <span className="block px-1">
              <h3>$ {sumProperties(expenses)}</h3>
              <span className="block text-xs pb-1">Expenses</span>
            </span>
          </a>
        </div>
        <div className="flex-1 group">
          <a
            href="#"
            id="total-border"
            className="flex items-end justify-center text-center mx-auto px-4 w-3/5 text-gray-600 border-b-2 border-transparent"
          >
            <span className="block px-1">
              <h3>
                $ {Math.abs(sumProperties(incomes) - sumProperties(expenses))}
              </h3>
              <span className="block text-xs pb-1">
                {sumProperties(incomes) - sumProperties(expenses) > 0
                  ? "Total saved"
                  : "In Debt"}
              </span>
            </span>
          </a>
        </div>
        <button
          onClick={() => onDeleteTransactions()}
          className="w-1/4 text-[#40D79E] bg-white hover:bg-[#40D79E] bg-opacity-20 rounded-full border-2 border-[#40D79E] hover:border-transparent hover:text-white focus:border-white focus:border-opacity-0 focus:outline-none px-3 py-1 leading-none text-sm transition-colors placeholder-white placeholder-opacity-30"
        >
          Clear Transactions
        </button>
      </div>
    </div>
  );
};
