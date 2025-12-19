import React, { useState } from "react";
import SidebarMorador from "./SidebarMorador";
import HeaderMorador from "./HeaderMorador";

export default function LayoutMorador({ children, dadosMorador, avisoCount, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <SidebarMorador 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        dadosMorador={dadosMorador} 
      />
      
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        <HeaderMorador 
          title={title}
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          dadosMorador={dadosMorador}
          avisoCount={avisoCount}
        />
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          {children}
        </main>
      </div>
    </div>
  );
}