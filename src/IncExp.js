import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const IncExp = () => {
  const { transactions } = useContext(GlobalContext);
  const amnt = transactions.map((transaction) => transaction.amount);
  const income = amnt
    .filter((item) => item > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);
  const expense =
    amnt.filter((item) => item < 0).reduce((a, b) => (a += b), 0) *
    -(1).toFixed(2);
  return (
    <div className="incEx">
      <div className="brderToEx">
        Income <span className="incS">${income}</span>
      </div>
      <div>
        Expense <span className="expS">${expense}</span>
      </div>
    </div>
  );
};

export default IncExp;
