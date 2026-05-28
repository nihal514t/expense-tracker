import { useState } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen overflow-hidden bg-[#f5f5f7]">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex pt-16 h-screen">
        <Sidebar isOpen={isOpen} />

        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            isOpen ? "ml-64" : "ml-20"
          }`}
        >
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
