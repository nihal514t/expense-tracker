import { PanelLeft, Search, Bell } from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Navbar({ isOpen, setIsOpen }) {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/70 backdrop-blur-2xl border-b border-black/5">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-2xl flex items-center justify-center hover:bg-black/5 transition-all duration-300 active:scale-95"
          >
            <PanelLeft size={20} strokeWidth={2} className="text-gray-700" />
          </button>

          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-tight text-gray-900">
              Expense Tracker
            </span>

            <span className="text-xs text-gray-500">Finance Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 px-4 rounded-2xl bg-black text-white flex items-center justify-center text-sm font-medium shadow-sm">
            {user?.name?.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
