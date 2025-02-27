import { pages } from "../data/pages";

export default function NavBar() {
  return (
    <div
      id="navbar"
      className="md:ml-15 md:w-full md:flex md:justify-start text-white"
    >
      <ul className="md:flex md:p-1 md:gap-4 child:cursor-pointer items-center text-lg font-semibold">
        {pages &&
          Object.entries(pages).map(([pageName, file]) => (
            <li key={file}>
              <a href={file}>{pageName}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
