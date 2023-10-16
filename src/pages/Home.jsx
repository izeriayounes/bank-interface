import Link from "../components/Link";

export default function Home() {
  return (
    <div className="mt-24 text-center">
      <p className=" text-2xl text-white mb-10">Please insert your card GAB</p>
      <span class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to={"/login"}>Insert</Link>
      </span>
    </div>
  );
}
