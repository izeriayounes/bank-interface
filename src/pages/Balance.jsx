import { GoTriangleRight } from "react-icons/go";
import BackAndExitButtons from "../components/BackAndExitButtons";
import Button from "../components/Button";
import Link from "../components/Link";

export default function Balance() {
  return (
    <div className="text-center px-20 text-2xl font-semibold text-gray-800">
      <div className="mb-10">You balance is</div>
      <div>
        Balance:
        <span className="bg-white text-purple-700 shadow-xl rounded-md px-10 py-2 ml-4 border border-2 border-yellow-200">
          MAD 1000.00
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-72 mt-10 -mb-10">
        <div></div>
        <Button>
          <Link to="/money-transfer">
            <div className="flex items-center justify-between pl-4">
              <span className="text-lg">GET ACCOUNT RECEIPT</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
      </div>
      <BackAndExitButtons goBackTo={"/choices"} />
    </div>
  );
}
