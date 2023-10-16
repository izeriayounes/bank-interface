import { useState } from "react";
import BackAndWithdrawButtons from "../components/BackAndWithdrawButtons";

export default function OtherAmount() {
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
        Please enter the desired amount
      </div>
      <input
        value={amount}
        onChange={handleAmountChange}
        className="text-xl bg-white font-bold p-4 rounded rounded-xl shadow-xl border-2 border-yellow-200"
      />
      <BackAndWithdrawButtons goBackTo={"/withdrawal"} />
    </div>
  );
}
