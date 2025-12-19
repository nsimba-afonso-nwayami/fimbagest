import CondoLayout from "./components/CondoLayout";

export default function FinanceiroCondoAdmin() {
  // --- Dados de Exemplo Financeiro ---
  const formatCurrency = (value) => {
    // Uso de "pt-AO" e substituição de "AOA" por "Kz" (Kwanza) para formatação de moeda Angolana
    return value
      .toLocaleString("pt-AO", {
        style: "currency",
        currency: "AOA",
        minimumFractionDigits: 2,
      })
      .replace("AOA", "Kz");
  };

  const sumarioFinanceiro = [
    {
      titulo: "Total Faturado (Mês)",
      valor: formatCurrency(5400000.0),
      icone: "fas fa-sack-dollar",
      cor: "text-green-400",
    },
    {
      titulo: "Em Aberto",
      valor: formatCurrency(1350000.0),
      icone: "fas fa-clock",
      cor: "text-yellow-400",
    },
    {
      titulo: "Em Atraso (Inadimplência)",
      valor: formatCurrency(350000.0),
      icone: "fas fa-triangle-exclamation",
      cor: "text-red-400",
    },
    {
      titulo: "Receita (Ano)",
      valor: formatCurrency(58000000.0),
      icone: "fas fa-chart-line",
      cor: "text-violet-400",
    },
  ];

  const dummyCobrancas = [
    {
      ref: "JUL25-101",
      unidade: "A-101",
      morador: "António Manuel",
      valor: 45000.0,
      vencimento: "2025-07-10",
      status: "Em Aberto",
    },
    {
      ref: "JUN25-102",
      unidade: "B-205",
      morador: "Elsa Rocha",
      valor: 45000.0,
      vencimento: "2025-06-10",
      status: "Pago",
    },
    {
      ref: "MAI25-103",
      unidade: "C-301",
      morador: "João Pedro",
      valor: 45000.0,
      vencimento: "2025-05-10",
      status: "Atrasado",
    },
    {
      ref: "JUL25-104",
      unidade: "A-205",
      morador: "Carlos Silva",
      valor: 45000.0,
      vencimento: "2025-07-10",
      status: "Em Aberto",
    },
    {
      ref: "ABR25-105",
      unidade: "D-402",
      morador: "Maria Santos",
      valor: 45000.0,
      vencimento: "2025-04-10",
      status: "Atrasado",
    },
  ];

  const getStatusTag = (status) => {
    switch (status) {
      case "Pago":
        return "bg-green-600/40 text-green-300";
      case "Atrasado":
        return "bg-red-600/40 text-red-300";
      case "Em Aberto":
        return "bg-yellow-600/40 text-yellow-300";
      default:
        return "bg-gray-600/40 text-gray-300";
    }
  };

  return (
    <CondoLayout title="Financeiro / Cobranças">
      {/* CARDS (KPIs Financeiros) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sumarioFinanceiro.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-gray-900/50 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <i
              className={`${card.icone} text-3xl sm:text-4xl ${card.cor} shrink-0`}
            ></i>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-sm truncate">
                {card.titulo}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold truncate">
                {card.valor}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* TABELA DE COBRANÇAS */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-6">Lista de Cobranças</h3>

        {/* BARRA DE FILTROS E AÇÕES */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <p className="text-sm opacity-70">Filtrar por:</p>

            <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
              <option value="">Todos os Meses</option>
              <option value="07">Julho</option>
              <option value="06">Junho</option>
              <option value="05">Maio</option>
            </select>

            <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
              <option value="">Todos os Status</option>
              <option value="Em Aberto">Em Aberto</option>
              <option value="Pago">Pago</option>
              <option value="Atrasado">Atrasado</option>
            </select>

            <input
              type="text"
              placeholder="Buscar por referência ou unidade..."
              className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white flex-1 min-w-[200px]"
            />
          </div>

          <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto self-end">
            <i className="fas fa-file-export"></i>
            Gerar Cobranças do Mês
          </button>
        </div>

        {/* TABELA */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left border-collapse text-sm">
            <thead>
              <tr className="text-violet-300 border-b border-gray-800">
                <th className="p-3 whitespace-nowrap">Referência</th>
                <th className="p-3 whitespace-nowrap">Unidade</th>
                <th className="p-3 whitespace-nowrap">Morador</th>
                <th className="p-3 whitespace-nowrap">Valor</th>
                <th className="p-3 whitespace-nowrap">Vencimento</th>
                <th className="p-3 whitespace-nowrap">Status</th>
                <th className="p-3 text-center whitespace-nowrap">Ações</th>
              </tr>
            </thead>

            <tbody>
              {dummyCobrancas.map((cobranca, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800/40 hover:bg-gray-900/40"
                >
                  <td className="p-3 whitespace-nowrap font-mono text-xs opacity-70">
                    {cobranca.ref}
                  </td>
                  <td className="p-3 whitespace-nowrap text-violet-400 font-semibold">
                    {cobranca.unidade}
                  </td>
                  <td className="p-3 whitespace-nowrap">{cobranca.morador}</td>
                  <td className="p-3 whitespace-nowrap font-bold">
                    {formatCurrency(cobranca.valor)}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {cobranca.vencimento}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                        cobranca.status
                      )}`}
                    >
                      {cobranca.status}
                    </span>
                  </td>

                  {/* ÍCONES DE AÇÃO */}
                  <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                    <button
                      className="text-blue-300 hover:text-blue-200"
                      title="Ver Detalhes/2ª Via"
                    >
                      <i className="fas fa-file-invoice"></i>
                    </button>

                    <button
                      className="text-yellow-300 hover:text-yellow-200"
                      title="Registrar Pagamento"
                    >
                      <i className="fas fa-money-check-dollar"></i>
                    </button>

                    <button
                      className="text-red-400 hover:text-red-300"
                      title="Enviar Lembrete de Cobrança"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINAÇÃO */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 mt-4 border-t border-gray-800/40 gap-4">
          <p className="opacity-70 text-xs sm:text-sm">
            Mostrando 1 a 5 de 120 cobranças
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm font-bold">
              1
            </button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              2
            </button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              3
            </button>

            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </CondoLayout>
  );
}