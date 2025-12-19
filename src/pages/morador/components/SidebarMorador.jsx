import React from "react";
import { Link } from "react-router-dom";

export default function SidebarMorador({ sidebarOpen, setSidebarOpen, dadosMorador }) {
  
  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de limpeza de token/session
    console.log("Fazendo logout...");
    window.location.href = "/auth/login";
  };

  return (
    <>
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300 overflow-y-auto 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
        `}
      >
        {/* Botão Fechar Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-indigo-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 tracking-wide mt-6 md:mt-0">
            <span className="text-teal-400">Condo</span> Residente
          </h1>
          {/* NOME DO CONDOMÍNIO */}
          <p className="text-sm text-white/60 mb-2 truncate font-medium">
            {dadosMorador.condominio}
          </p>
          <p className="text-sm text-white/70 mb-8 truncate">
            {dadosMorador.unidade}
          </p>

          {/* MENU */}
          <nav className="space-y-4 text-lg">
            <Link to="/dashboard/morador" className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
              <i className="fas fa-home mr-3 text-teal-400"></i>
              Dashboard
            </Link>
            <Link to="/dashboard/morador/reservas" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer transition">
              <i className="fas fa-calendar-alt mr-3 text-teal-400"></i>
              Minhas Reservas
            </Link>
            <Link to="/dashboard/morador/ocorrencias" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer transition">
              <i className="fas fa-wrench mr-3 text-teal-400"></i>
              Minhas Ocorrências
            </Link>
            <Link to="/dashboard/morador/financeiro" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer transition">
              <i className="fas fa-file-invoice-dollar mr-3 text-teal-400"></i>
              Financeiro
            </Link>
            <Link to="/dashboard/morador/avisos" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer transition">
              <i className="fas fa-bell mr-3 text-teal-400"></i>
              Avisos & Comunicados
            </Link>
            <Link to="/dashboard/morador/meu-perfil" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer transition">
              <i className="fas fa-user-circle mr-3 text-teal-400"></i>
              Meu Perfil
            </Link>
          </nav>
        </div>

        {/* BOTÃO DE LOGOUT - ADICIONADO AQUI */}
        <div className="mt-auto pt-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sair da Conta
          </button>
        </div>
      </aside>

      {/* BACKDROP MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}