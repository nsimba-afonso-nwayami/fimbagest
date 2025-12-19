import { useState } from "react";
import SidebarCondoAdmin from "./SidebarCondoAdmin";
import HeaderCondoAdmin from "./HeaderCondoAdmin";

export default function CondoLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <SidebarCondoAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        <HeaderCondoAdmin 
          title={title} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          {children}
        </main>
      </div>
    </div>
  );
}