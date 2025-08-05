import { Link } from "react-router";
import "app/app.css";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center px-10 py-5 bg-blue-800 dark:bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Jovan Finesta</h1>
        <nav className="grid grid-cols-3 items-center text-center gap-x-2 mx-auto">
          {/* colorscheme toggle button */}
          <Link to="/" className="justify-self-start transition duration-300 ease-in-out w-32 px-5 py-2 rounded-md hover:bg-blue-700 hover:text-white">About Me</Link>
          <Link to="/projects" className="justify-self-center transition duration-300 ease-in-out w-32 px-5 py-2 rounded-md hover:bg-blue-700 hover:text-white">Projects</Link>
        </nav>
    </div>
  );
}