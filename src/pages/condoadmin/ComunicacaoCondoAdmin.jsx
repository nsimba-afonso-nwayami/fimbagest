import CondoLayout from "./components/CondoLayout";

export default function ComunicacaoCondoAdmin() {
  // --- Dados de Exemplo de Comunicação ---
  const dummyComunicaciones = [
    {
      id: 201,
      titulo: "Corte Programado de Água (Torre A)",
      tipo: "Aviso",
      data: "10/07/2025",
      status: "Publicado",
      destinatarios: "Bloco A",
    },
    {
      id: 202,
      titulo: "Regras para Uso da Piscina no Verão",
      tipo: "Circular",
      data: "01/07/2025",
      status: "Publicado",
      destinatarios: "Todos",
    },
    {
      id: 203,
      titulo: "Lembrete: Pagamento da Taxa de Julho",
      tipo: "Mensagem",
      data: "25/06/2025",
      status: "Agendado",
      destinatarios: "Inadimplentes",
    },
    {
      id: 204,
      titulo: "Proposta de Novo Fornecedor de Segurança",
      tipo: "Aviso",
      data: "20/06/2025",
      status: "Rascunho",
      destinatarios: "Nenhum",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Publicado":
        return "bg-green-600/40 text-green-300";
      case "Rascunho":
        return "bg-gray-600/40 text-gray-300";
      case "Agendado":
        return "bg-blue-600/40 text-blue-300";
      default:
        return "bg-gray-600/40 text-gray-300";
    }
  };

  return (
    <CondoLayout title="Avisos & Comunicação">
      {/* BARRA DE AÇÕES: CRIAR E FILTROS */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* BUSCA GERAL */}
          <div className="relative w-full sm:flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>
            <input
              type="text"
              placeholder="Buscar por título ou conteúdo..."
              className="p-3 pl-10 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none focus:border-violet-500/50 placeholder:text-white/60 text-white w-full transition-all"
            />
          </div>

          {/* BOTÃO CRIAR */}
          <button className="px-5 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95">
            <i className="fas fa-plus-circle"></i>
            Criar Novo Aviso/Circular
          </button>
        </div>

        {/* FILTROS ADICIONAIS */}
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm opacity-70">Filtrar por:</p>

          <select className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none focus:border-violet-500/50">
            <option value="">Todos os Tipos</option>
            <option value="Aviso">Aviso (Urgente)</option>
            <option value="Circular">Circular (Regras)</option>
            <option value="Mensagem">Mensagem (Específico)</option>
          </select>

          <select className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none focus:border-violet-500/50">
            <option value="">Todos os Status</option>
            <option value="Publicado">Publicado</option>
            <option value="Agendado">Agendado</option>
            <option value="Rascunho">Rascunho</option>
          </select>
        </div>
      </div>

      {/* TABELA DE COMUNICAÇÕES */}
      <div className="overflow-hidden bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md mt-6">
        <h3 className="text-lg font-bold p-4 sm:p-6 border-b border-gray-800">
          Histórico de Comunicações
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-violet-300 border-b border-gray-800 bg-gray-800/20">
                <th className="p-4 whitespace-nowrap">ID</th>
                <th className="p-4 whitespace-nowrap">Título</th>
                <th className="p-4 whitespace-nowrap">Tipo</th>
                <th className="p-4 whitespace-nowrap">Data</th>
                <th className="p-4 whitespace-nowrap">Destinatários</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 text-center whitespace-nowrap">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyComunicaciones.map((comunicacao) => (
                <tr
                  key={comunicacao.id}
                  className="border-b border-gray-800/40 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="p-4 whitespace-nowrap text-xs opacity-70 font-mono">
                    #{comunicacao.id}
                  </td>
                  <td className="p-4 whitespace-nowrap font-medium max-w-xs truncate">
                    {comunicacao.titulo}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="flex items-center gap-2">
                      <i className={`fas ${comunicacao.tipo === 'Aviso' ? 'fa-exclamation-circle text-orange-400' : 'fa-info-circle text-blue-400'}`}></i>
                      {comunicacao.tipo}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap opacity-80">
                    {comunicacao.data}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/20">
                      {comunicacao.destinatarios}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                        comunicacao.status
                      )}`}
                    >
                      {comunicacao.status}
                    </span>
                  </td>

                  {/* ÍCONES DE AÇÃO */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3 text-base">
                      <button className="text-blue-300 hover:text-blue-100 p-1 transition" title="Ver Conteúdo">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="text-yellow-300 hover:text-yellow-100 p-1 transition" title="Editar">
                        <i className="fas fa-edit"></i>
                      </button>

                      <button className="text-red-400 hover:text-red-200 p-1 transition" title="Excluir">
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
            Mostrando 1 a 4 de 15 registros
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm font-bold shadow-lg shadow-violet-500/20">
              1
            </button>
            <button className="px-4 py-1 bg-gray-900/60 border border-gray-700 rounded-lg text-sm hover:bg-gray-700 transition">
              2
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