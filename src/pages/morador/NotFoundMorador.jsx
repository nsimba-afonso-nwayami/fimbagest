import { useState } from "react";
import React from "react";

// Este componente utiliza a estrutura de layout do morador para manter a Sidebar e Header.
export default function NotFoundMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // --- MOCKUP DE DADOS ESSENCIAIS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };
  

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR (Mantida para consistência de layout) */}
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300 overflow-y-auto 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 
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

        {/* MENU (Apenas links de navegação) */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-home mr-3 text-teal-400"></i>
            Dashboard
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-calendar-alt mr-3 text-teal-400"></i>
            Minhas Reservas
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-wrench mr-3 text-teal-400"></i>
            Minhas Ocorrências
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-teal-400"></i>
            Financeiro
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-teal-400"></i>
            Avisos & Comunicados
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-user-circle mr-3 text-teal-400"></i>
            Meu Perfil
          </a>
        </nav>
      </aside>

      {/* BACKDROP MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        {/* HEADER (Mantido para consistência de layout) */}
        <header
          className="
            bg-gray-900/40 backdrop-blur-xl border-b border-gray-800
            fixed top-0 right-0 left-0 md:left-64
            h-16 flex items-center justify-between px-4 sm:px-6 shadow-lg
            z-30
          "
        >
          {/* Botão mobile */}
          <button
            className="md:hidden text-xl sm:text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <h2 className="text-lg sm:text-xl font-bold tracking-wide text-red-400">
            Erro de Navegação
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-xl sm:text-2xl text-indigo-400 hover:text-indigo-300 transition-all">
              <i className="fas fa-bell"></i>
            </button>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-base font-semibold">
                {dadosMorador.nome[0]}
              </span>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL (Centralizando o erro 404) */}
        <main className="mt-16 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="text-center space-y-8 bg-gray-900/30 border border-gray-800 rounded-xl shadow-2xl p-8 sm:p-12 max-w-lg w-full">
                
                {/* Ícone de Erro Grande */}
                <div className="flex justify-center mb-6">
                  <i className="fas fa-exclamation-triangle text-red-500 text-6xl"></i>
                </div>
        
                {/* Título de Erro */}
                <h1 className="text-8xl font-extrabold text-teal-400">
                  404
                </h1>
                
                {/* Mensagem Principal */}
                <h2 className="text-3xl font-bold tracking-tight text-white/90">
                  Página Não Encontrada
                </h2>
                
                {/* Descrição */}
                <p className="text-lg text-white/70">
                  Desculpe, o endereço que você tentou acessar não existe. Utilize o menu lateral para navegar.
                </p>

                {/* Ações de Retorno */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <a
                    href="/dashboard/morador"
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-arrow-left"></i>
                    Ir para o Dashboard
                  </a>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}