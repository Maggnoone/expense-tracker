import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <>
      {transaction !== null && (
        <li
          className={`mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent ${
            transaction?.type === "Income"
              ? "hover:border-green-500"
              : "hover:border-red-600"
          }`}
          key={transaction.id}
        >
          <div className="flex items-center justify-between">
            <div className="w-full max-w-[200px] text-md leading-none flex items-center">
              <span
                className={
                  transaction?.type === "Income"
                    ? "text-3xl text-green-500"
                    : "text-3xl text-red-600"
                }
              >
                &bull;
              </span>
              <div className="text-sm mx-2">{transaction.name}</div>
            </div>

            <div className="ml-5 flex justify-center w-full max-w-[200px] text-sm text-gray-400">
              <span className="">{transaction.date}</span>
            </div>

            <div className="max-w-[200px] text-md leading-none flex items-center justify-around w-full">
              <div></div>
              <div
                className={
                  transaction?.type === "Income"
                    ? "text-sm text-green-500"
                    : "text-sm text-red-600"
                }
              >
                $ {transaction.balance}
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
};
