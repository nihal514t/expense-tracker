import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        Menu
      </h2>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Expenses
        </Link>

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg transition"
        >
          Reports
        </Link>

      </div>
    </aside>
  );
}

export default Sidebar;