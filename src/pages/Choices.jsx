import Button from "../components/Button";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Link from "../components/Link";

export default function Choices() {
  return (
    <div className="px-20">
      <div className="text-2xl text-gray-800 text-center font-bold mb-16">
        Welcome Mr/Ms. John Alice
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-72">
        <Button>
          <Link to="/balance">
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">BALANCE</span>
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/withdrawal">
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">WITHDRAWAL</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/account-statement">
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">ACCOUNT STATEMENT</span>
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/operations">
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">OPERATIONS ON ACCOUNT</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/">
            <div className="flex items-center justify-between px-4">
              <GoTriangleLeft size={40} />
              <span className="text-lg">EXIT</span>
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/other-services">
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">OTHER SEVICES</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
