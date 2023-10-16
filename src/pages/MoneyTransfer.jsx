import { useState } from "react";
import BackAndWithdrawButtons from "../components/BackAndWithdrawButtons";

export default function MoneyTranser() {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    if (/^\d*$/.test(inputAmount)) {
      setAmount(inputAmount);
    }
  };

  return (
    <div className="text-center px-20">
      <div className="text-2xl text-gray-800 font-bold mb-10">
        Please enter the recipient's account number
      </div>

      <input
        className="w-1/2 text-xl bg-white font-bold p-4 rounded rounded-xl shadow-xl border-2 border-yellow-200"
        onChange={handleAmountChange}
        name="money-transfer"
        value={amount}
      />
      <BackAndWithdrawButtons goBackTo={"/account-statement"} />
    </div>
  );
}
