import { Link } from "react-router";
import "app/app.css";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center px-10 py-5 bg-blue-800 dark:bg-gray-900 text-white">
        <h1 className="text-3xl font-bold animate-pulse">Jovan Finesta</h1>
        <nav className="grid grid-cols-2 items-center text-center gap-x-2 mx-auto">
          <Link to="/" className="transition duration-300 ease-in-out w-32 px-5 py-2 rounded-md hover:bg-blue-700 hover:text-white">About Me</Link>
          <Link to="/projects" className="transition duration-300 ease-in-out w-32 px-5 py-2 rounded-md hover:bg-blue-700 hover:text-white">Projects</Link>
        </nav>
        <a className="transition duration-300 ease-in-out rounded-md px-5 py-2 hover:bg-gray-700" href="https://github.com/7ovanF/ohcsui-jovanfinesta" target="blank_">Source Code</a>
    </div>
  );
}