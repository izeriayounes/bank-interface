import { useState } from "react";
import Link from "../components/Link";

export default function ChangePin() {
  const [password, setPassword] = useState("");
  const [isWrongPass, setIsWrongPass] = useState(false);

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    if (inputPassword.length <= 4 && /^\d*$/.test(inputPassword)) {
      setPassword(inputPassword);
    }
  };

  const handleDigitClick = (digit) => {
    if (password.length < 4) {
      setPassword(password + digit);
      setIsWrongPass(false);
    }
  };

  const handleClear = () => {
    setPassword("");
    setIsWrongPass(false);
  };

  const handleValidation = () => {
    // handle validation
  };
  const handleCancellation = () => {
    setPassword("");
    setIsWrongPass(false);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-100">
            Please insert your new PIN code
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          {isWrongPass && (
            <div className="text-red-600 -mb-5">Wrong password!</div>
          )}
          <div className="rounded-md shadow-md -space-y-px">
            <input
              className="w-full p-4 border border-gray-300 placeholder-gray-500 rounded-xl shadow-xl border-2 border-yellow-200"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="grid grid-cols-4 gap-4 bg-white rounded-md p-3 shadow-md">
            {[1, 2, 3].map((digit) => (
              <button
                key={digit}
                type="button"
                className="shadow-md group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-large rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="shadow-md group relative flex justify-center py-2 px-4 border border-red-500 text-sm font-large rounded-md text-red-500 bg-red-100 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleCancellation}
            >
              <Link to="/">Cancellation</Link>
            </button>
            {[4, 5, 6].map((digit) => (
              <button
                key={digit}
                type="button"
                className="shadow-md group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-large rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="shadow-md group relative flex justify-center py-2 px-4 border border-yellow-500 text-sm font-large rounded-md text-yellow-600 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={handleClear}
            >
              Clear
            </button>

            {[7, 8, 9].map((digit) => (
              <button
                key={digit}
                type="button"
                className="shadow-md group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-large rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="shadow-md group relative flex justify-center py-2 px-4 border border-green-500 text-sm font-large rounded-md text-green-500 bg-green-100 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleValidation}
            >
              Validation
            </button>

            {["", 0, "", ""].map((digit, index) => (
              <button
                key={index}
                type="button"
                className="shadow-md group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-large rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
