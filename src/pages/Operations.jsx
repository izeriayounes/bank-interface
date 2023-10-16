import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Link from "../components/Link";
import Button from "../components/Button";

export default function Operations() {
  return (
    <div className="px-20 mt-10">
      <div className="grid grid-cols-2 gap-y-10 gap-x-72">
        <Button>
          <Link to="/change-pin">
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">CHANGE PIN CODE</span>
            </div>
          </Link>
        </Button>
        <Button>
          <Link>
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">DOTATION CONSULTATION</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
        <Button>
          <Link>
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">ASSIGN PHONE NUMBER</span>
            </div>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-72 mt-40">
        <Button>
          <Link to="/choices">
            <div className="flex items-center justify-between pr-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">GO BACK</span>
            </div>
          </Link>
        </Button>
        <div></div>
      </div>
    </div>
  );
}
