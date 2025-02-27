import NavBar from "./NavBar";
import redbullLogo from "../img/RedBullRacing.svg";

export default function Header() {
  return (
    <div className="bg-blue-950 md:min-h-90px md:flex md:p-4 md:items-center">
      <img
        src={redbullLogo}
        className="max-h-[50px] max-w-[150px]"
        alt="Red Bull Racing"
      />
      <NavBar />
    </div>
  );
}
