import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      <h1 className="text-2xl font-bold text-blue-600">
        Expense Tracker
      </h1>

      <div className="flex items-center gap-4">

        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;