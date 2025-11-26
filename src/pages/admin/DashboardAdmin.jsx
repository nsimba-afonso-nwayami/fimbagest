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
          z-9999
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

        {/* MENU */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-chart-line mr-3 text-violet-400"></i>
            Dashboard
          </a>

          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-building mr-3 text-violet-400"></i>
            Condomínios
          </a>

          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-users mr-3 text-violet-400"></i>
            Moradores
          </a>

          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Cobranças
          </a>

          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
            <i className="fas fa-tools mr-3 text-violet-400"></i>
            Ocorrências
          </a>

          <a className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer">
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
      <div className="flex-1 md:ml-64">
        {/* HEADER */}
        <header
          className="
            bg-blue-900/40 backdrop-blur-xl border-b border-blue-800
            fixed top-0 right-0 left-0 md:left-64
            h-16 flex items-center justify-between px-6 shadow-lg
            z-9990
          "
        >
          {/* Botão mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <h2 className="text-xl font-bold tracking-wide">
            Painel Administrativo
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-6">
            {/* NOTIFICAÇÕES */}
            <button className="relative text-2xl text-violet-400 hover:text-violet-300 transition-all">
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
              <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-6 space-y-10">
          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD */}
            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-building text-4xl text-violet-400"></i>
              <div>
                <p className="text-white/70 text-sm">Condomínios</p>
                <h3 className="text-2xl font-bold">18</h3>
              </div>
            </div>

            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-users text-4xl text-violet-400"></i>
              <div>
                <p className="text-white/70 text-sm">Moradores</p>
                <h3 className="text-2xl font-bold">325</h3>
              </div>
            </div>

            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-file-invoice-dollar text-4xl text-violet-400"></i>
              <div>
                <p className="text-white/70 text-sm">Cobranças Pendentes</p>
                <h3 className="text-2xl font-bold">42</h3>
              </div>
            </div>

            <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
              <i className="fas fa-tools text-4xl text-violet-400"></i>
              <div>
                <p className="text-white/70 text-sm">Ocorrências Abertas</p>
                <h3 className="text-2xl font-bold">7</h3>
              </div>
            </div>
          </div>

          {/* FILTROS + BUSCA */}
          <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-xl shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4">Filtrar Registros</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none"
              />

              <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800">
                <option>Status</option>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>

              <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition">
                Filtrar
              </button>
            </div>
          </div>

          {/* TABELA */}
          <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-violet-300 border-b border-blue-800">
                  <th className="p-3">ID</th>
                  <th className="p-3">Nome</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-center">Ações</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-blue-800/40 hover:bg-blue-900/40"
                  >
                    <td className="p-3">{i}</td>
                    <td className="p-3">Usuário {i}</td>
                    <td className="p-3">user{i}@gmail.com</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-green-600/40 rounded-lg text-sm">
                        Ativo
                      </span>
                    </td>

                    {/* ÍCONES */}
                    <td className="p-3 text-center flex justify-center gap-4 text-lg">
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
            <div className="flex justify-between items-center mt-6">
              <p className="opacity-70 text-sm">
                Mostrando 1 a 5 de 25 registros
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg">
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button className="px-4 py-1 bg-violet-600 rounded-lg">
                  1
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg">
                  2
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg">
                  3
                </button>

                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg">
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
