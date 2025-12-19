import DashboardLayout from "./components/DashboardLayout";

export default function DashboardAdmin() {
  return (
    <DashboardLayout title="Painel Administrativo">
      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
          <i className="fas fa-building text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
          <div className="min-w-0">
            <p className="text-white/70 text-xs sm:text-sm truncate">
              Condomínios
            </p>
            <h3 className="text-xl sm:text-2xl font-bold truncate">18</h3>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
          <i className="fas fa-users text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
          <div className="min-w-0">
            <p className="text-white/70 text-xs sm:text-sm truncate">
              Moradores
            </p>
            <h3 className="text-xl sm:text-2xl font-bold truncate">325</h3>
          </div>
        </div>
        {/* CARD 3 (Título longo: Cobranças Pendentes) */}
        <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
          <i className="fas fa-file-invoice-dollar text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
          <div className="min-w-0">
            <p className="text-white/70 text-xs sm:text-sm truncate">
              Cobranças Pendentes
            </p>
            <h3 className="text-xl sm:text-2xl font-bold truncate">42</h3>
          </div>
        </div>
        {/* CARD 4 (Título longo: Ocorrências Abertas) */}
        <div className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer">
          <i className="fas fa-tools text-3xl sm:text-4xl text-violet-400 shrink-0"></i>
          <div className="min-w-0">
            <p className="text-white/70 text-xs sm:text-sm truncate">
              Ocorrências Abertas
            </p>
            <h3 className="text-xl sm:text-2xl font-bold truncate">7</h3>
          </div>
        </div>
      </div>
      {/* FILTROS + BUSCA */}
      <div className="bg-blue-900/30 border border-blue-800 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Filtrar Registros</h3>
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
                  <span className="px-3 py-1 bg-green-600/40 rounded-lg text-xs">
                    Ativo
                  </span>
                </td>

                {/* ÍCONES */}
                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
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
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <p className="opacity-70 text-xs sm:text-sm">
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
    </DashboardLayout>
  );
}
