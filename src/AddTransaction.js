import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const onsubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onsubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          autoComplete="off"
          placeholder="Enter Description.."
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="text"
          id="amount"
          placeholder="Enter Amount.."
          autoComplete="off"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
