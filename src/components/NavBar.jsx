import { pages } from "../data/pages";

export default function NavBar() {
  return (
    <div
      id="navbar"
      className="md:ml-15 md:w-full md:flex md:justify-start text-white mt-7 md:mt-0 bg-indigo-950 md:bg-transparent rounded-3xl"
    >
      <ul className="md:flex md:p-1 md:gap-4 child:cursor-pointer items-center md:items-center text-md font-semibold px-7 w-full">
        {pages &&
          Object.entries(pages).map(([pageName, file]) => (
            <li key={file} className="hover:text-gray-300 text-nowrap my-3">
              <a href={file} className="p-2">
                {pageName}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
