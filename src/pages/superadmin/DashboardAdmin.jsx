import { useState } from "react";

export default function DashboardAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-950 text-white flex">
      {/* SIDEBAR */}
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
          <a href="/dashboard/super-admin/" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-chart-line mr-3 text-violet-400"></i>
            Dashboard
          </a>
          <a href="/dashboard/super-admin/condominios" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-building mr-3 text-violet-400"></i>
            Condomínios
          </a>
          <a href="/dashboard/super-admin/moradores" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-users mr-3 text-violet-400"></i>
            Moradores
          </a>
          <a href="/dashboard/super-admin/cobrancas" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Cobranças
          </a>
          <a href="/dashboard/super-admin/ocorrencias" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-tools mr-3 text-violet-400"></i>
            Ocorrências
          </a>
          <a href="/dashboard/super-admin/configuracoes" className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-gear mr-3 text-violet-400"></i>
            Configurações
          </a>
        </nav>
      </aside>

      {/* BACKDROP MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-9000"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 md:ml-64 overflow-x-hidden"> {/* ADIÇÃO: overflow-x-hidden para prevenir vazamentos do conteúdo */}
        {/* HEADER */}
        <header
          className="
            bg-blue-900/40 backdrop-blur-xl border-b border-blue-800
            fixed top-0 right-0 left-0 md:left-64
            h-16 flex items-center justify-between px-4 sm:px-6 shadow-lg
            z-9990
          "
        >
          {/* Botão mobile */}
          <button
            className="md:hidden text-xl sm:text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <h2 className="text-lg sm:text-xl font-bold tracking-wide"> {/* AJUSTE: tamanho do título para mobile */}
            Painel Administrativo
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* NOTIFICAÇÕES */}
            <button className="relative text-xl sm:text-2xl text-violet-400 hover:text-violet-300 transition-all"> {/* 👈 AJUSTE: tamanho do ícone */}
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

            {/* PERFIL */}
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80 hidden sm:block">Admin</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center"> {/* 👈 AJUSTE: tamanho do avatar */}
                <i className="fas fa-user text-white text-base"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10"> {/* 👈 AJUSTE: padding e margem superior para telas pequenas */}
          
          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* 👈 ALTERADO: grid-cols-1 para coluna única no mobile (padrão) */}
            
            {/* CARD 1 (Aplicadas classes de prevenção de vazamento e ajustes de tamanho) */}
            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-building text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
              <div className="min-w-0"> {/* 👈 CHAVE: min-w-0 para permitir que o texto trunque */}
                <p className="text-white/70 text-xs sm:text-sm truncate">Condomínios</p>
                <h3 className="text-xl sm:text-2xl font-bold truncate">18</h3>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-users text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
              <div className="min-w-0">
                <p className="text-white/70 text-xs sm:text-sm truncate">Moradores</p>
                <h3 className="text-xl sm:text-2xl font-bold truncate">325</h3>
              </div>
            </div>

            {/* CARD 3 (Título longo: Cobranças Pendentes) */}
            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-file-invoice-dollar text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
              <div className="min-w-0">
                <p className="text-white/70 text-xs sm:text-sm truncate">Cobranças Pendentes</p> {/* 👈 CHAVE: truncate para evitar vazamento */}
                <h3 className="text-xl sm:text-2xl font-bold truncate">42</h3>
              </div>
            </div>

            {/* CARD 4 (Título longo: Ocorrências Abertas) */}
            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-tools text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
              <div className="min-w-0">
                <p className="text-white/70 text-xs sm:text-sm truncate">Ocorrências Abertas</p> {/* 👈 CHAVE: truncate para evitar vazamento */}
                <h3 className="text-xl sm:text-2xl font-bold truncate">7</h3>
              </div>
            </div>
          </div>

          {/* FILTROS + BUSCA */}
          <div className="bg-blue-900/30 border border-blue-800 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md"> {/* 👈 AJUSTE: padding para mobile */}
            <h3 className="text-lg sm:text-xl font-bold mb-4">Filtrar Registros</h3> {/* 👈 AJUSTE: tamanho do título */}

            {/* 👈 ALTERADO: grid-cols-1 no mobile para empilhar, e sm:grid-cols-3 para tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> 
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white"
              />

              <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
                <option className="bg-blue-900">Status</option>
                <option className="bg-blue-900">Ativo</option>
                <option className="bg-blue-900">Inativo</option>
              </select>

              <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold">
                Filtrar
              </button>
            </div>
          </div>

          {/* TABELA */}
          <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
            <table className="min-w-[700px] w-full text-left border-collapse text-sm">
              <thead>
                <tr className="text-violet-300 border-b border-blue-800">
                  <th className="p-3 whitespace-nowrap">ID</th>
                  <th className="p-3 whitespace-nowrap">Nome</th>
                  <th className="p-3 whitespace-nowrap">Email</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 text-center whitespace-nowrap">Ações</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-blue-800/40 hover:bg-blue-900/40"
                  >
                    <td className="p-3 whitespace-nowrap">{i}</td>
                    <td className="p-3 whitespace-nowrap">Usuário {i}</td>
                    <td className="p-3 whitespace-nowrap">user{i}@gmail.com</td>
                    <td className="p-3 whitespace-nowrap">
                      <span className="px-3 py-1 bg-green-600/40 rounded-lg text-xs"> {/* AJUSTE: tamanho da fonte do status */}
                        Ativo
                      </span>
                    </td>

                    {/* ÍCONES */}
                    <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base"> {/* AJUSTE: tamanho dos ícones e espaçamento */}
                      <button className="text-blue-300 hover:text-blue-200">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="text-yellow-300 hover:text-yellow-200">
                        <i className="fas fa-edit"></i>
                      </button>

                      <button className="text-red-400 hover:text-red-300">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINAÇÃO */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4"> {/* ALTERADO: flex-col no mobile, flex-row a partir de sm */}
              <p className="opacity-70 text-xs sm:text-sm"> {/* AJUSTE: tamanho da fonte */}
                Mostrando 1 a 5 de 25 registros
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm">
                  1
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  2
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  3
                </button>

                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}