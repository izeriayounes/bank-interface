import BackAndExitButtons from "../components/BackAndExitButtons";

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
      <BackAndExitButtons goBackTo={"/choices"} />
    </div>
  );
}
