import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Button from "../components/Button";
import Link from "../components/Link";

export default function Withdrawal() {
  return (
    <div>
      <div className="text-2xl text-gray-800 text-center font-bold mb-6">
        Please choose the desired amount
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-72 px-20">
        <Button>
          <div className="flex items-center justify-between px-4">
            <GoTriangleLeft size={40} />
            <span className="text-lg">MAD 100</span>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <span className="text-lg">MAD 500</span>
            <GoTriangleRight size={40} />
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <GoTriangleLeft size={40} />
            <span className="text-lg">MAD 200</span>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <span className="text-lg">MAD 1000</span>
            <GoTriangleRight size={40} />
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <GoTriangleLeft size={40} />
            <span className="text-lg">MAD 300</span>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <span className="text-lg">MAD 2000</span>
            <GoTriangleRight size={40} />
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between px-4">
            <GoTriangleLeft size={40} />
            <span className="text-lg">MAD 400</span>
          </div>
        </Button>
        <Button>
          <Link to="/other-sum">
            <div className="flex items-center justify-between px-4">
              <span className="text-lg">OTHER AMOUNT</span>
              <GoTriangleRight size={40} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
