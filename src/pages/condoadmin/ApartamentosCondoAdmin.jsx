import CondoLayout from "./components/CondoLayout";

export default function ApartamentosCondoAdmin() {
  // --- Dados de Exemplo de Apartamentos ---
  const dummyApartamentos = [
    {
      id: 501,
      unidade: "101",
      bloco: "Bloco A",
      morador: "Carlos Alberto",
      tipo: "Residencial",
      vagas: 2,
      status: "Ocupado",
    },
    {
      id: 502,
      unidade: "102",
      bloco: "Bloco A",
      morador: "Nenhum (Proprietário: Imobiliária X)",
      tipo: "Residencial",
      vagas: 1,
      status: "Vazio",
    },
    {
      id: 503,
      unidade: "201",
      bloco: "Bloco B",
      morador: "Ana Paula Souza",
      tipo: "Cobertura",
      vagas: 3,
      status: "Ocupado",
    },
    {
      id: 504,
      unidade: "305",
      bloco: "Bloco C",
      morador: "Marcos Viana",
      tipo: "Residencial",
      vagas: 1,
      status: "Em Reforma",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Ocupado":
        return "bg-green-600/40 text-green-300";
      case "Vazio":
        return "bg-gray-600/40 text-gray-300";
      case "Em Reforma":
        return "bg-yellow-600/40 text-yellow-300";
      default:
        return "bg-blue-600/40 text-blue-300";
    }
  };

  return (
    <CondoLayout title="Gestão de Apartamentos">
      {/* BARRA DE AÇÕES: CRIAR E FILTROS */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* BUSCA GERAL */}
          <div className="relative w-full sm:flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>
            <input
              type="text"
              placeholder="Buscar por unidade, morador ou bloco..."
              className="p-3 pl-10 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none focus:border-violet-500/50 placeholder:text-white/60 text-white w-full transition-all"
            />
          </div>

          {/* BOTÃO CRIAR */}
          <button className="px-5 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95">
            <i className="fas fa-plus-circle"></i>
            Cadastrar Unidade
          </button>
        </div>

        {/* FILTROS ADICIONAIS */}
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm opacity-70">Filtrar por:</p>

          <select className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none focus:border-violet-500/50">
            <option value="">Todos os Blocos</option>
            <option value="A">Bloco A</option>
            <option value="B">Bloco B</option>
            <option value="C">Bloco C</option>
          </select>

          <select className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none focus:border-violet-500/50">
            <option value="">Todos os Status</option>
            <option value="Ocupado">Ocupado</option>
            <option value="Vazio">Vazio</option>
            <option value="Reforma">Em Reforma</option>
          </select>
        </div>
      </div>

      {/* TABELA DE APARTAMENTOS */}
      <div className="overflow-hidden bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md mt-6">
        <h3 className="text-lg font-bold p-4 sm:p-6 border-b border-gray-800">
          Unidades Cadastradas
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-violet-300 border-b border-gray-800 bg-gray-800/20">
                <th className="p-4 whitespace-nowrap">ID</th>
                <th className="p-4 whitespace-nowrap">Unidade</th>
                <th className="p-4 whitespace-nowrap">Bloco</th>
                <th className="p-4 whitespace-nowrap">Morador Principal</th>
                <th className="p-4 whitespace-nowrap">Tipo/Vagas</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 text-center whitespace-nowrap">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyApartamentos.map((apt) => (
                <tr
                  key={apt.id}
                  className="border-b border-gray-800/40 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="p-4 whitespace-nowrap text-xs opacity-70 font-mono">
                    #{apt.id}
                  </td>
                  <td className="p-4 whitespace-nowrap font-bold text-violet-400">
                    Apto {apt.unidade}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-layer-group text-white/40"></i>
                      {apt.bloco}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap italic opacity-90">
                    {apt.morador}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span>{apt.tipo}</span>
                      <span className="text-xs text-white/50">
                        {apt.vagas} vagas
                      </span>
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                        apt.status
                      )}`}
                    >
                      {apt.status}
                    </span>
                  </td>

                  {/* ÍCONES DE AÇÃO */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3 text-base">
                      <button
                        className="text-blue-300 hover:text-blue-100 p-1 transition"
                        title="Ver Histórico"
                      >
                        <i className="fas fa-history"></i>
                      </button>

                      <button
                        className="text-yellow-300 hover:text-yellow-100 p-1 transition"
                        title="Editar Unidade"
                      >
                        <i className="fas fa-edit"></i>
                      </button>

                      <button
                        className="text-red-400 hover:text-red-200 p-1 transition"
                        title="Remover"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINAÇÃO */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-800 gap-4 bg-gray-800/10">
          <p className="opacity-70 text-xs sm:text-sm">
            Total de {dummyApartamentos.length} unidades nesta vista
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm font-bold shadow-lg shadow-violet-500/20">
              1
            </button>

            <button className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </CondoLayout>
  );
}
