import "./App.css";
import Header from "./components/Header";
import Route from "./components/Route";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Choices from "./pages/Choices";
import Balance from "./pages/Balance";
import Withdrawal from "./pages/Withdrawal";
import OtherAmount from "./pages/otherAmount";
import AccStatement from "./pages/AccStatement";
import MoneyTranser from "./pages/MoneyTransfer";
import Operations from "./pages/Operations";
import ChangePin from "./pages/ChangePin";

function App() {
  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Home />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/choices"}>
        <Choices />
      </Route>
      <Route path={"/balance"}>
        <Balance />
      </Route>
      <Route path={"/withdrawal"}>
        <Withdrawal />
      </Route>
      <Route path={"/other-sum"}>
        <OtherAmount />
      </Route>
      <Route path={"/account-statement"}>
        <AccStatement />
      </Route>
      <Route path={"/money-transfer"}>
        <MoneyTranser />
      </Route>
      <Route path={"/operations"}>
        <Operations />
      </Route>
      <Route path={"/change-pin"}>
        <ChangePin />
      </Route>
    </div>
  );
}

export default App;
