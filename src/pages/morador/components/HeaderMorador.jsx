import React from "react";

export default function HeaderMorador({ sidebarOpen, setSidebarOpen, dadosMorador, avisoCount, title }) {
  return (
    <header
      className="
        bg-gray-900/40 backdrop-blur-xl border-b border-gray-800
        fixed top-0 right-0 left-0 md:left-64
        h-16 flex items-center justify-between px-4 sm:px-6 shadow-lg
        z-30
      "
    >
      <button
        className="md:hidden text-xl sm:text-2xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* TÍTULO DINÂMICO */}
      <h2 className="text-lg sm:text-xl font-bold tracking-wide">
        {title}
      </h2>

      <div className="flex items-center gap-4 sm:gap-6">
        <button className="relative text-xl sm:text-2xl text-indigo-400 hover:text-indigo-300 transition-all">
          <i className="fas fa-bell"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {avisoCount}
          </span>
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm opacity-80 hidden sm:block">
            {dadosMorador.unidade}
          </span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white text-base font-semibold">
              {dadosMorador.nome[0]}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}