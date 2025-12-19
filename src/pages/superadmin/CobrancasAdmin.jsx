import DashboardLayout from "./components/DashboardLayout";

export default function CobrancasAdmin() {
  // Dados de exemplo originais
  const dummyCobrancas = [
    { id: 5001, condominio: "Residencial Jardins", morador: "António Manuel", unidade: "B-102", valor: 45000.0, vencimento: "2025-11-10", status: "Pago" },
    { id: 5002, condominio: "Edifício Atlântico Sul", morador: "Sofia Teixeira", unidade: "501", valor: 38000.0, vencimento: "2025-12-10", status: "Em Aberto" },
    { id: 5003, condominio: "Residencial Jardins", morador: "Carlos Silva", unidade: "A-205", valor: 45000.0, vencimento: "2025-10-10", status: "Atrasado" },
    { id: 5004, condominio: "Central Plaza", morador: "Joana Freitas", unidade: "15-A", valor: 52000.0, vencimento: "2025-12-10", status: "Em Aberto" },
    { id: 5005, condominio: "Villas do Rio Kwanza", morador: "Miguel Neves", unidade: "V-03", valor: 30000.0, vencimento: "2025-09-10", status: "Atrasado" },
  ];

  const sumarioCobrancas = [
    { titulo: "Total Faturado (Mês)", valor: "150.8M Kz", icone: "fas fa-sack-dollar", cor: "text-violet-400" },
    { titulo: "Em Aberto (Total)", valor: "45.2M Kz", icone: "fas fa-hourglass-half", cor: "text-blue-400" },
    { titulo: "Em Atraso (Total)", valor: "12.5M Kz", icone: "fas fa-triangle-exclamation", cor: "text-red-400" },
    { titulo: "Cobranças Pagas (Mês)", valor: "105.6M Kz", icone: "fas fa-circle-check", cor: "text-green-400" },
  ];

  // Suas funções auxiliares mantidas
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-AO", {
      style: "currency",
      currency: "AOA",
      minimumFractionDigits: 2,
    }).replace("AOA", "Kz");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pago": return "bg-green-600/40";
      case "Em Aberto": return "bg-blue-600/40";
      case "Atrasado": return "bg-red-600/40";
      default: return "bg-gray-600/40";
    }
  };

  return (
    <DashboardLayout title="Gestão de Cobranças">
      {/* BOTÃO GERAR / EXPORTAR */}
      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm sm:text-base">
          <i className="fas fa-file-export"></i>
          <span className="hidden sm:inline">Exportar Relatório</span>
          <span className="sm:hidden">Exportar</span>
        </button>
        <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm sm:text-base">
          <i className="fas fa-plus"></i>
          Criar Cobrança
        </button>
      </div>

      {/* CARDS (Sumário de Cobranças) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sumarioCobrancas.map((card, index) => (
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
        <h3 className="text-lg sm:text-xl font-bold mb-4">Buscar e Filtrar Cobranças</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Buscar por morador ou unidade..."
            className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white col-span-1 sm:col-span-2"
          />
          <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
            <option className="bg-blue-900">Condomínio (Todos)</option>
            <option className="bg-blue-900">Residencial Jardins</option>
            <option className="bg-blue-900">Central Plaza</option>
          </select>
          <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
            <option className="bg-blue-900">Status (Todos)</option>
            <option className="bg-blue-900">Em Aberto</option>
            <option className="bg-blue-900">Atrasado</option>
            <option className="bg-blue-900">Pago</option>
          </select>
          <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold">
            Filtrar
          </button>
        </div>
      </div>

      {/* TABELA DE COBRANÇAS */}
      <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
        <table className="min-w-[1100px] w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-violet-300 border-b border-blue-800">
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Condomínio</th>
              <th className="p-3 whitespace-nowrap">Morador</th>
              <th className="p-3 whitespace-nowrap">Unidade</th>
              <th className="p-3 whitespace-nowrap">Vencimento</th>
              <th className="p-3 whitespace-nowrap">Valor</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dummyCobrancas.map((cobranca) => (
              <tr key={cobranca.id} className="border-b border-blue-800/40 hover:bg-blue-900/40">
                <td className="p-3 whitespace-nowrap">{cobranca.id}</td>
                <td className="p-3 whitespace-nowrap">{cobranca.condominio}</td>
                <td className="p-3 whitespace-nowrap font-medium">{cobranca.morador}</td>
                <td className="p-3 whitespace-nowrap text-violet-400">{cobranca.unidade}</td>
                <td className="p-3 whitespace-nowrap">
                  {cobranca.vencimento.split('-').reverse().join('/')}
                </td>
                <td className="p-3 whitespace-nowrap font-semibold">
                  {formatCurrency(cobranca.valor)}
                </td>
                <td className="p-3 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(cobranca.status)}`}>
                    {cobranca.status}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                  <button className="text-blue-300 hover:text-blue-200" title="Ver Detalhes">
                    <i className="fas fa-receipt"></i>
                  </button>
                  <button className="text-yellow-300 hover:text-yellow-200" title="Editar">
                    <i className="fas fa-edit"></i>
                  </button>
                  {cobranca.status !== "Pago" && (
                    <button className="text-green-400 hover:text-green-300" title="Marcar como Pago">
                      <i className="fas fa-money-check-dollar"></i>
                    </button>
                  )}
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
          <p className="opacity-70 text-xs sm:text-sm">Mostrando 1 a 5 de 1.842 registros</p>
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