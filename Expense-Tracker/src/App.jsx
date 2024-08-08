import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PoitiveExpense from "./Components/Positive-Value/PositiveExpense/PoitiveExpense";
import NagetiveExpense from "./Components/Positive-Value/Nagetive-value/NagetiveExpense";
import Input from "./Components/Positive-Value/Input/Input";

function App() {
  return (
    <>
      <div className="app h-full p-4 sm:w-[60%] xl:w-[30%] mx-auto">
        <h1 className="text-center text-xl lg:text-2xl font-mono font-bold lg:font-semibold mb-1">
          Expense Tracker By Umar
        </h1>
        <h5 className="text-center font-medium">CURRENT BALANCE</h5>
        <h2 className="text-center font-bold text-3xl">$4500.00</h2>
        <div className="display bg-white w-[100%] mx-auto p-6 flex justify-between items-center gap-3 mt-6 shadow-xl">
          <div className="income w-1/2">
            <h2 className="text-2xl font-medium text-center">Income</h2>
            <h2 className="text-2xl font-medium text-center text-[#b6960a]">
              5000.00
            </h2>
          </div>
          <div className="hr border-[1px] border-gray-300 h-12"></div>
          <div className="expenses w-1/2">
            <h2 className="text-2xl font-medium text-center">Expense</h2>
            <h2 className="text-2xl font-medium text-center text-[#2da3ad]">
              500.00
            </h2>
          </div>
        </div>
        <div className="history">
          <h1 className="text-center text-xl font-mono p-2 font-bold mt-6">
            Transaction History
          </h1>
          <div className="hr border-b-[1px] border-gray-400"></div>
          <PoitiveExpense />
          <NagetiveExpense />
        </div>
        <div className="new-transaction">
          <h1 className="text-center text-xl font-mono pb-2 font-bold mt-6">
            Add New Transaction
          </h1>
          <div className="hr border-b-[1px] border-gray-400"></div>
          <Input text={"Description"} placeholder={"Details of transaction"} type={"text"} />
          <Input text={"Transaction Amount"} placeholder={"Dollar Value of Transaction"} type={"number"} />
          <button className="w-full text-white font-semibold p-2 rounded-sm opacity-65 mt-3 text-center text-xl bg-blue-500">Add Transaction</button>
        </div>
      </div>
    </>
  );
}

export default App;
