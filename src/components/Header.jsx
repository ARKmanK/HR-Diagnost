import NavBar from "./NavBar";
import redbullLogo from "../img/RedBullRacing.svg";

export default function Header() {
  return (
    <div className="bg-blue-950 md:min-h-90px p-4 flex flex-col md:flex-row items-center md:items-start pb-7">
      <img
        src={redbullLogo}
        className="max-h-[50px] max-w-[150px] mt-4 md:mt-2"
        alt="Red Bull Racing"
      />
      <NavBar />
    </div>
  );
}
