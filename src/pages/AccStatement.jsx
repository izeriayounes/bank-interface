import { GoTriangleRight } from "react-icons/go";
import BackAndExitButtons from "../components/BackAndExitButtons";
import Button from "../components/Button";
import Link from "../components/Link";

export default function AccStatement() {
  return (
    <div className="px-20 mt-10">
      <div className="grid grid-cols-2 gap-60">
        <div></div>
        <Button>
          <Link to="/money-transfer">
            <div className="flex items-center justify-between pl-4">
              <span className="text-lg">MONEY TRANSFER</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
      </div>
      <BackAndExitButtons goBackTo={"/choices"} />
    </div>
  );
}
