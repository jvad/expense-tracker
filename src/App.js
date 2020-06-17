import React from "react";
import ExpLogo from "./ExpLogo";
import Balance from "./Balance";
import IncExp from "./IncExp";
import History from "./History";
import Footer from "./Footer";
import AddTransaction from "./AddTransaction";
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <ExpLogo />
        <div className="wrapper">
          {/* <ExpLogo /> */}
          <Balance></Balance>
          <IncExp></IncExp>
          <History></History>
          <AddTransaction></AddTransaction>
          <Footer></Footer>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
