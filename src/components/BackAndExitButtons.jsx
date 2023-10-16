import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Button from "./Button";
import Link from "./Link";

export default function BackAndExitButtons({ goBackTo }) {
  return (
    <div className="grid grid-cols-2 gap-72 mt-60">
      <Button>
        <Link to={goBackTo}>
          <div className="flex items-center justify-between pr-4">
            <GoTriangleLeft size={40} />
            <span className="text-lg">GO BACK</span>
          </div>
        </Link>
      </Button>
      <Button>
        <Link to="/">
          <div className="flex items-center justify-between pl-4">
            <span className="text-lg">EXIT</span>
            <GoTriangleRight size={40} />
          </div>
        </Link>
      </Button>
    </div>
  );
}
