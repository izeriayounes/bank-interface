import React from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Button from "../components/Button";
import Link from "../components/Link";

export default function Withdrawal() {
  const amounts = [100, 500, 200, 1000, 300, 2000, 400];

  const handleClick = (amount) => {
    // Your post function logic here
    console.log(`Amount to be posted: ${amount}`);
    // You can replace the console log with your actual post function logic
  };

  return (
    <div>
      <div className="text-2xl text-gray-800 text-center font-bold mb-6">
        Please choose the desired amount
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-72 px-20">
        {amounts.map((amount, index) => (
          <Button key={index} onClick={() => handleClick(amount)}>
            <div className="flex items-center justify-between px-4">
              {index % 2 === 0 ? (
                <GoTriangleLeft size={40} />
              ) : (
                <span className="text-lg">MAD {amount}</span>
              )}
              {index % 2 !== 0 ? (
                <GoTriangleRight size={40} />
              ) : (
                <span className="text-lg">MAD {amount}</span>
              )}
            </div>
          </Button>
        ))}
        <Button>
          <Link to="/other-sum">
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">OTHER AMOUNT</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/choices">
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">GO BACK</span>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
