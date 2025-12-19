import DashboardLayout from "./components/DashboardLayout";

export default function MoradoresAdmin() {
  // Dados de exemplo
  const dummyMoradores = [
    { id: 101, nome: "António Manuel", condominio: "Residencial Jardins", unidade: "B-102", email: "antonio@mail.com", status: "Ativo" },
    { id: 102, nome: "Sofia Teixeira", condominio: "Edifício Atlântico Sul", unidade: "501", email: "sofia@mail.com", status: "Ativo" },
    { id: 103, nome: "Carlos Silva", condominio: "Residencial Jardins", unidade: "A-205", email: "carlos@mail.com", status: "Inativo" },
    { id: 104, nome: "Joana Freitas", condominio: "Central Plaza", unidade: "15-A", email: "joana@mail.com", status: "Ativo" },
    { id: 105, nome: "Miguel Neves", condominio: "Villas do Rio Kwanza", unidade: "V-03", email: "miguel@mail.com", status: "Ativo" },
  ];

  const sumarioMoradores = [
    { titulo: "Total de Moradores", valor: "325", icone: "fas fa-users", cor: "text-violet-400" },
    { titulo: "Moradores Ativos", valor: "310", icone: "fas fa-user-check", cor: "text-green-400" },
    { titulo: "Moradores Inativos", valor: "15", icone: "fas fa-user-slash", cor: "text-red-400" },
    { titulo: "Unidades Vazias", valor: "48", icone: "fas fa-door-open", cor: "text-yellow-400" },
  ];

  return (
    <DashboardLayout title="Gestão de Moradores">
      {/* CARDS (Sumário de Moradores) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sumarioMoradores.map((card, index) => (
          <div
            key={index}
            className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <i className={`${card.icone} text-3xl sm:text-4xl ${card.cor} shrink-0`}></i>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-sm truncate">{card.titulo}</p>
              <h3 className="text-xl sm:text-2xl font-bold truncate">{card.valor}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FILTROS + BUSCA */}
      <div className="bg-blue-900/30 border border-blue-800 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Buscar e Filtrar Moradores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white col-span-1 sm:col-span-2"
          />
          <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
            <option className="bg-blue-900">Condomínio (Todos)</option>
            <option className="bg-blue-900">Residencial Jardins</option>
            <option className="bg-blue-900">Edifício Atlântico Sul</option>
            <option className="bg-blue-900">Central Plaza</option>
          </select>
          <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold">Filtrar</button>
        </div>
      </div>

      {/* TABELA DE MORADORES */}
      <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
        <table className="min-w-[900px] w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-violet-300 border-b border-blue-800">
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Nome</th>
              <th className="p-3 whitespace-nowrap">Condomínio</th>
              <th className="p-3 whitespace-nowrap">Unidade</th>
              <th className="p-3 whitespace-nowrap">Email</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dummyMoradores.map((morador) => (
              <tr key={morador.id} className="border-b border-blue-800/40 hover:bg-blue-900/40">
                <td className="p-3 whitespace-nowrap">{morador.id}</td>
                <td className="p-3 whitespace-nowrap font-medium">{morador.nome}</td>
                <td className="p-3 whitespace-nowrap">{morador.condominio}</td>
                <td className="p-3 whitespace-nowrap text-violet-400">{morador.unidade}</td>
                <td className="p-3 whitespace-nowrap">{morador.email}</td>
                <td className="p-3 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${morador.status === "Ativo" ? "bg-green-600/40" : "bg-red-600/40"}`}>
                    {morador.status}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                  <button className="text-blue-300 hover:text-blue-200" title="Ver Perfil">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-yellow-300 hover:text-yellow-200" title="Editar">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-red-400 hover:text-red-300" title="Remover">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINAÇÃO */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
          <p className="opacity-70 text-xs sm:text-sm">Mostrando 1 a 5 de 325 registros</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm">1</button>
            <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">2</button>
            <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">3</button>
            <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
