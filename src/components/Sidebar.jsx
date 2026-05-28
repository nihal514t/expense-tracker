import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>

      <div className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/expenses"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Expenses
        </Link>

        <Link
          to="/reports"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Reports
        </Link>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={logout}
          className="bg-red-500 w-full py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
