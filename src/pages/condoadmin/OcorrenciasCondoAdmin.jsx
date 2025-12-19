import CondoLayout from "./components/CondoLayout";

export default function OcorrenciasCondoAdmin() {
  // --- Dados de Exemplo de Ocorrências ---
  const sumarioOcorrencias = [
    {
      titulo: "Ocorrências Abertas",
      valor: 8,
      icone: "fas fa-clipboard-question",
      cor: "text-red-400",
    },
    {
      titulo: "Resolvidas (Mês)",
      valor: 12,
      icone: "fas fa-circle-check",
      cor: "text-green-400",
    },
    {
      titulo: "Prioridade Alta",
      valor: 3,
      icone: "fas fa-fire-flame-curved",
      cor: "text-orange-400",
    },
  ];

  const dummyOcorrencias = [
    {
      id: 401,
      titulo: "Luz do corredor Bloco A queimada",
      morador: "António Manuel",
      categoria: "Manutenção",
      prioridade: "Média",
      data: "2025-12-10",
      status: "Em Análise",
    },
    {
      id: 402,
      titulo: "Barulho excessivo no Bloco B (Noite)",
      morador: "Elsa Rocha",
      categoria: "Vizinhança",
      prioridade: "Alta",
      data: "2025-12-11",
      status: "Aberta",
    },
    {
      id: 403,
      titulo: "Sugestão para contentores de reciclagem",
      morador: "Joana Freitas",
      categoria: "Sugestão",
      prioridade: "Baixa",
      data: "2025-12-05",
      status: "Resolvida",
    },
    {
      id: 404,
      titulo: "Infiltração na garagem, setor G",
      morador: "Carlos Silva",
      categoria: "Estrutural",
      prioridade: "Alta",
      data: "2025-12-12",
      status: "Aberta",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Resolvida":
        return "bg-green-600/40 text-green-300";
      case "Em Análise":
        return "bg-yellow-600/40 text-yellow-300";
      case "Aberta":
        return "bg-red-600/40 text-red-300";
      case "Em Resolução":
        return "bg-blue-600/40 text-blue-300";
      default:
        return "bg-gray-600/40 text-gray-300";
    }
  };

  // Função auxiliar para obter a cor da prioridade
  const getPriorityTag = (prioridade) => {
    switch (prioridade) {
      case "Alta":
        return "text-red-400 font-bold";
      case "Média":
        return "text-yellow-400";
      case "Baixa":
        return "text-green-400";
      default:
        return "text-white/70";
    }
  };

  return (
    <CondoLayout title="Gestão de Ocorrências">
      {/* CARDS (KPIs de Ocorrências) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sumarioOcorrencias.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-gray-900/50 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <i className={`${card.icone} text-3xl sm:text-4xl ${card.cor} shrink-0`}></i>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-sm truncate">{card.titulo}</p>
              <h3 className="text-xl sm:text-2xl font-bold truncate">{card.valor}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* BARRA DE AÇÕES: CRIAR E FILTROS */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Buscar por título ou morador..."
            className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white w-full sm:flex-1"
          />
          <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
            <i className="fas fa-plus"></i>
            Novo Registo Interno
          </button>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm opacity-70">Filtrar por:</p>
          <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
            <option value="">Todos os Status</option>
            <option value="Aberta">Aberta</option>
            <option value="Em Análise">Em Análise</option>
            <option value="Em Resolução">Em Resolução</option>
            <option value="Resolvida">Resolvida</option>
          </select>

          <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
            <option value="">Todas as Prioridades</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>

          <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
            <option value="">Todas as Categorias</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Estrutural">Estrutural</option>
            <option value="Vizinhança">Vizinhança</option>
            <option value="Sugestão">Sugestão</option>
          </select>
        </div>
      </div>

      {/* TABELA DE OCORRÊNCIAS */}
      <div className="overflow-x-auto bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md mt-8">
        <h3 className="text-lg font-bold p-4 sm:p-6 border-b border-gray-800">
          Lista Detalhada de Reportes
        </h3>
        <table className="min-w-[1000px] w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-violet-300 border-b border-gray-800">
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Título/Descrição</th>
              <th className="p-3 whitespace-nowrap">Categoria</th>
              <th className="p-3 whitespace-nowrap">Reportado por</th>
              <th className="p-3 whitespace-nowrap">Data</th>
              <th className="p-3 whitespace-nowrap">Prioridade</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>

          <tbody>
            {dummyOcorrencias.map((ocorrencia) => (
              <tr
                key={ocorrencia.id}
                className="border-b border-gray-800/40 hover:bg-gray-900/40"
              >
                <td className="p-3 whitespace-nowrap text-xs opacity-70">{ocorrencia.id}</td>
                <td className="p-3 whitespace-nowrap font-medium max-w-xs truncate">
                  {ocorrencia.titulo}
                </td>
                <td className="p-3 whitespace-nowrap text-blue-300">{ocorrencia.categoria}</td>
                <td className="p-3 whitespace-nowrap">{ocorrencia.morador}</td>
                <td className="p-3 whitespace-nowrap">{ocorrencia.data}</td>
                <td className="p-3 whitespace-nowrap">
                  <span className={getPriorityTag(ocorrencia.prioridade)}>{ocorrencia.prioridade}</span>
                </td>
                <td className="p-3 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(ocorrencia.status)}`}>
                    {ocorrencia.status}
                  </span>
                </td>

                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                  <button className="text-blue-300 hover:text-blue-200" title="Ver Detalhes/Histórico">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-yellow-300 hover:text-yellow-200" title="Alterar Status">
                    <i className="fas fa-pen-to-square"></i>
                  </button>
                  <button className="text-green-500 hover:text-green-400" title="Marcar como Resolvida">
                    <i className="fas fa-check"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINAÇÃO */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
          <p className="opacity-70 text-xs sm:text-sm">Mostrando 1 a 4 de 28 ocorrências</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm">1</button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">2</button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">3</button>
            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </CondoLayout>
  );
}