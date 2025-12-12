import { useState } from "react";
import React from 'react';

export default function NotFoundPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Nota: O Sidebar e Header são meramente visuais, sem lógica de rotas reais.

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      
      {/* SIDEBAR (Mockup da navegação Condomínio Admin) */}
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 
        `}
      >
        {/* BOTÃO FECHAR MOBILE (ADICIONADO) */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-red-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-4 tracking-wide mt-6 md:mt-0">
          <span className="text-violet-400">Condo</span> Admin
        </h1>
        <p className="text-sm text-white/60 mb-8 truncate">Residencial Jardins</p>

        {/* MENU: Destaca o estado de erro, mantendo a estrutura */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer text-white/50">
            <i className="fas fa-gauge-high mr-3"></i>
            Dashboard
          </a>
          <div className="block p-3 rounded-lg bg-red-800/40 text-red-300 font-semibold border-l-4 border-red-500">
            <i className="fas fa-exclamation-triangle mr-3"></i>
            Página de Erro
          </div>
          {/* ... Outros itens de menu desativados ... */}
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer text-white/50">
            <i className="fas fa-gears mr-3"></i>
            Configurações
          </a>
        </nav>
      </aside>

      {/* BACKDROP MOBILE (ADICIONADO) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        
        {/* HEADER (Mockup) */}
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

          {/* Perfil */}
          <div className="flex items-center gap-3">
              <span className="text-sm opacity-80 hidden sm:block">Síndico</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-base"></i>
              </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL (Centralização do Erro 404) */}
        <main className="mt-16 p-4 sm:p-6 flex items-center justify-center min-h-[calc(100vh-64px)]">
            <div className="text-center bg-gray-900/50 border border-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl max-w-lg w-full backdrop-blur-md">
                
                {/* Ícone de Erro */}
                <div className={`text-8xl sm:text-9xl mb-4 text-red-500`}>
                    <i className="fas fa-satellite-dish"></i>
                </div>

                {/* Código do Status */}
                <h1 className="text-7xl sm:text-9xl font-extrabold mb-4 tracking-wider text-violet-400">
                    404
                </h1>
                
                {/* Título */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Página Não Encontrada
                </h2>

                {/* Mensagem Detalhada */}
                <p className="text-white/70 text-base sm:text-lg mb-8">
                    Ops! Parece que o endereço que você digitou está errado ou a página foi removida.
                </p>

                {/* Botões de Navegação */}
                <div className="space-y-4">
                    <button 
                    onClick={() => window.history.back()}
                    className="px-6 py-3 bg-gray-700/60 hover:bg-gray-700 transition font-semibold rounded-lg w-full sm:w-auto text-white/90 border border-gray-700 shadow-lg flex items-center justify-center gap-2 mx-auto"
                    >
                        <i className="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                    
                    <button 
                    onClick={() => window.location.href = '/'} 
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg w-full sm:w-auto text-white shadow-lg flex items-center justify-center gap-2 mx-auto"
                    >
                        <i className="fas fa-home"></i>
                        Ir para o Dashboard
                    </button>
                </div>
                
            </div>
        </main>
      </div>
    </div>
  );
}