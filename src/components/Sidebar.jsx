import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  LogOut,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext";

function Sidebar({
  isOpen,
}) {

  const { logout } =
    useAuth();

  const location =
    useLocation();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Expenses",
      path: "/expenses",
      icon: Wallet,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: BarChart3,
    },
  ];

  return (

    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-white/70 backdrop-blur-2xl border-r border-black/5 shadow-sm transition-all duration-300 z-40 flex flex-col ${
        isOpen
          ? "w-64"
          : "w-20"
      }`}
    >

      <div className="flex-1 px-3 py-6">

        <nav className="flex flex-col gap-2">

          {navItems.map(
            (item) => {

              const active =
                location.pathname ===
                item.path;

              const Icon =
                item.icon;

              return (

                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center rounded-2xl px-4 py-3 transition-all duration-300 overflow-hidden ${
                    active
                      ? "bg-black text-white shadow-md"
                      : "text-gray-700 hover:bg-black/5"
                  } ${
                    isOpen
                      ? "justify-start gap-4"
                      : "justify-center"
                  }`}
                >

                  <Icon
                    size={20}
                    strokeWidth={2}
                    className={`transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-gray-600 group-hover:text-black"
                    }`}
                  />

                  <div
                    className={`transition-all duration-300 whitespace-nowrap ${
                      isOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4 absolute"
                    }`}
                  >

                    <span className="font-medium text-sm tracking-tight">

                      {item.name}

                    </span>

                  </div>

                </Link>
              );
            }
          )}

        </nav>

      </div>

      <div className="p-3 border-t border-black/5">

        <button
          onClick={logout}
          className={`w-full rounded-2xl bg-red-500 text-white py-3 flex items-center transition-all duration-300 hover:bg-red-600 ${
            isOpen
              ? "justify-start gap-4 px-4"
              : "justify-center"
          }`}
        >

          <LogOut
            size={20}
            strokeWidth={2}
          />

          <div
            className={`transition-all duration-300 whitespace-nowrap ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 absolute"
            }`}
          >

            Logout

          </div>

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;