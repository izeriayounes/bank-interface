import inpt_logo from "../assets/Logo_inpt.PNG";

export default function Header() {
  return (
    <div>
      <img src={inpt_logo} alt="" className="mx-auto w-1/6 mt-4" />
      <hr className="text-white border border-2 mb-6 mt-6 mx-80 " />
    </div>
  );
}
