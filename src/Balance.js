import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amnt = transactions.map((transaction) => transaction.amount);
  const total = amnt.reduce((a, b) => (a += b), 0).toFixed(2);
  return (
    <div className="balance">
      Your Balance:
      <div className="blnc"> ${total}</div>
    </div>
  );
};

export default Balance;
