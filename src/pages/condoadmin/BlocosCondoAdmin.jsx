import CondoLayout from "./components/CondoLayout";

export default function BlocosCondoAdmin() {
  // --- Dados de Exemplo de Blocos ---
  const dummyBlocos = [
    {
      id: 1,
      nome: "Bloco A",
      totalUnidades: 48,
      responsavel: "Carlos Síndico",
      status: "Ativo",
      ultimaManutencao: "10/06/2025",
    },
    {
      id: 2,
      nome: "Bloco B",
      totalUnidades: 48,
      responsavel: "Ana Subsíndica",
      status: "Manutenção",
      ultimaManutencao: "05/07/2025",
    },
    {
      id: 3,
      nome: "Bloco C",
      totalUnidades: 32,
      responsavel: "Marcos Zelador",
      status: "Ativo",
      ultimaManutencao: "20/05/2025",
    },
    {
      id: 4,
      nome: "Bloco D",
      totalUnidades: 32,
      responsavel: "Nenhum",
      status: "Inativo",
      ultimaManutencao: "N/A",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-600/40 text-green-300";
      case "Manutenção":
        return "bg-orange-600/40 text-orange-300";
      case "Inativo":
        return "bg-red-600/40 text-red-300";
      default:
        return "bg-gray-600/40 text-gray-300";
    }
  };

  return (
    <CondoLayout title="Gestão de Blocos">
      {/* BARRA DE AÇÕES: CRIAR E FILTROS */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* BUSCA GERAL */}
          <div className="relative w-full sm:flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>
            <input
              type="text"
              placeholder="Buscar por nome do bloco ou responsável..."
              className="p-3 pl-10 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none focus:border-violet-500/50 placeholder:text-white/60 text-white w-full transition-all"
            />
          </div>

          {/* BOTÃO CRIAR */}
          <button className="px-5 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95">
            <i className="fas fa-plus-circle"></i>
            Adicionar Novo Bloco
          </button>
        </div>

        {/* FILTROS ADICIONAIS */}
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm opacity-70">Filtrar por:</p>

          <select className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none focus:border-violet-500/50">
            <option value="">Todos os Status</option>
            <option value="Ativo">Ativo</option>
            <option value="Manutenção">Em Manutenção</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>
      </div>

      {/* TABELA DE BLOCOS */}
      <div className="overflow-hidden bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md mt-6">
        <h3 className="text-lg font-bold p-4 sm:p-6 border-b border-gray-800">
          Listagem de Estruturas
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-violet-300 border-b border-gray-800 bg-gray-800/20">
                <th className="p-4 whitespace-nowrap">ID</th>
                <th className="p-4 whitespace-nowrap">Nome do Bloco</th>
                <th className="p-4 whitespace-nowrap">Qtd. Unidades</th>
                <th className="p-4 whitespace-nowrap">Responsável</th>
                <th className="p-4 whitespace-nowrap">Última Manutenção</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 text-center whitespace-nowrap">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyBlocos.map((bloco) => (
                <tr
                  key={bloco.id}
                  className="border-b border-gray-800/40 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="p-4 whitespace-nowrap text-xs opacity-70 font-mono">
                    #{bloco.id}
                  </td>
                  <td className="p-4 whitespace-nowrap font-medium">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-building text-violet-400"></i>
                      {bloco.nome}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    {bloco.totalUnidades} Apts
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700">
                      {bloco.responsavel}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap opacity-80 text-xs">
                    {bloco.ultimaManutencao}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                        bloco.status
                      )}`}
                    >
                      {bloco.status}
                    </span>
                  </td>

                  {/* ÍCONES DE AÇÃO */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3 text-base">
                      <button
                        className="text-blue-300 hover:text-blue-100 p-1 transition"
                        title="Ver Detalhes"
                      >
                        <i className="fas fa-search-plus"></i>
                      </button>

                      <button
                        className="text-yellow-300 hover:text-yellow-100 p-1 transition"
                        title="Editar"
                      >
                        <i className="fas fa-edit"></i>
                      </button>

                      <button
                        className="text-red-400 hover:text-red-200 p-1 transition"
                        title="Excluir"
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
            Mostrando {dummyBlocos.length} de {dummyBlocos.length} blocos
            cadastrados
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition opacity-50 cursor-not-allowed">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm font-bold shadow-lg shadow-violet-500/20">
              1
            </button>

            <button className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition opacity-50 cursor-not-allowed">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </CondoLayout>
  );
}
