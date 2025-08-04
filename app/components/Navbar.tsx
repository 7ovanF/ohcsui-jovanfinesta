import { Link } from "react-router";
import "app/app.css";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-black">
        <h1>Jovan Finesta</h1>
        <nav>
          {/* colorscheme toggle button */}
          <Link to="/">About Me</Link>
          <Link to="/projects">Projects</Link>
        </nav>
    </div>
  );
}