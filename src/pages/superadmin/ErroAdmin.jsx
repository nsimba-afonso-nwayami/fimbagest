import { useState } from "react";
import { Link } from "react-router-dom";

export default function ErroAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-950 text-white flex">
      {/* SIDEBAR*/}
      <aside
        className={`
          bg-blue-900/40 backdrop-blur-xl border-r border-blue-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-9999 {/* Ajustado z-index para Tailwind standard: z-50 a z-[9999] */}
        `}
      >
        {/* BOTÃO FECHAR MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-10 tracking-wide mt-6 md:mt-0">
          Fimba<span className="text-violet-400">Gest</span>
        </h1>

        {/* MENU (Sem alterações necessárias na navegação) */}
        <nav className="space-y-4 text-lg">
          <Link
            to="/dashboard/super-admin/"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-chart-line mr-3 text-violet-400"></i>
            Dashboard
          </Link>
          <Link
            to="/dashboard/super-admin/condominios"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-building mr-3 text-violet-400"></i>
            Condomínios
          </Link>
          <Link
            to="/dashboard/super-admin/moradores"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-users mr-3 text-violet-400"></i>
            Moradores
          </Link>
          <Link
            to="/dashboard/super-admin/cobrancas"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Cobranças
          </Link>
          <Link
            to="/dashboard/super-admin/ocorrencias"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-tools mr-3 text-violet-400"></i>
            Ocorrências
          </Link>
          <Link
            to="/dashboard/super-admin/configuracoes"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-gear mr-3 text-violet-400"></i>
            Configurações
          </Link>
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
        {/* HEADER (Reutilizado) */}
        <header
          className="
            bg-blue-900/40 backdrop-blur-xl border-b border-blue-800
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

          <h2 className="text-lg sm:text-xl font-bold tracking-wide">
            Página de Erro
          </h2>

          {/* Perfil (Reutilizado) */}
          <div className="flex items-center gap-4 sm:gap-6">
             {/* ... (Botão Notificação e Perfil) ... */}
            <button className="relative text-xl sm:text-2xl text-violet-400 hover:text-violet-300 transition-all">
              <i className="fas fa-bell"></i>
              <span
                className="
                  absolute -top-1 -right-1 bg-red-500 text-white text-[10px]
                  w-4 h-4 rounded-full flex items-center justify-center font-bold
                "
              >
                3
              </span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80 hidden sm:block">Admin</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-base"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL DE ERRO */}
        <main className="mt-16 p-4 sm:p-6 flex items-center justify-center min-h-[calc(100vh-64px)]">
            <div className="text-center bg-blue-900/30 border border-blue-800 p-8 sm:p-12 rounded-xl shadow-2xl backdrop-blur-md max-w-lg">
                <i className="fas fa-bug text-violet-400 text-6xl sm:text-8xl mb-6 animate-pulse"></i>
                
                <h1 className="text-8xl sm:text-9xl font-extrabold text-white mb-4 tracking-wider">
                    404
                </h1>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-400">
                    PÁGINA NÃO ENCONTRADA
                </h2>
                
                <p className="text-lg mb-8 opacity-80">
                    Lamentamos, mas a página que você está tentando acessar não existe ou foi removida.
                </p>
                
                <a 
                    href="/dashboard/super-admin/" // Link fictício para o Dashboard
                    className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg"
                >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Voltar ao Dashboard
                </a>
            </div>
        </main>
      </div>
    </div>
  );
}