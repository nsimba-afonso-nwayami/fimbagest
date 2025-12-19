import CondoLayout from "./components/CondoLayout";

export default function DashboardCondoAdmin() {
  // --- Dados de Exemplo (Focados em UM Condomínio: "Residencial Jardins") ---
  const sumarioCondo = [
    {
      titulo: "Taxa de Inadimplência",
      valor: "8.5%",
      icone: "fas fa-hand-holding-dollar",
      cor: "text-red-400",
    },
    {
      titulo: "Ocorrências Abertas",
      valor: "5",
      icone: "fas fa-tools",
      cor: "text-yellow-400",
    },
    {
      titulo: "Unidades Totais",
      valor: "120",
      icone: "fas fa-house-user",
      cor: "text-violet-400",
    },
    {
      titulo: "Reservas para Hoje",
      valor: "2",
      icone: "fas fa-calendar-check",
      cor: "text-green-400",
    },
  ];

  // Dados de exemplo para tabela de inadimplência (focada apenas neste condomínio)
  const dummyInadimplencia = [
    { unidade: "B-102", morador: "António Manuel", meses: 2, valor: 90000.0 },
    { unidade: "A-301", morador: "Elsa Rocha", meses: 1, valor: 45000.0 },
    { unidade: "B-405", morador: "João Pedro", meses: 3, valor: 135000.0 },
  ];

  // Função auxiliar para formatar moeda
  const formatCurrency = (value) => {
    return value
      .toLocaleString("pt-AO", {
        style: "currency",
        currency: "AOA",
        minimumFractionDigits: 2,
      })
      .replace("AOA", "Kz");
  };

  return (
    <CondoLayout title="Dashboard do Condomínio">
      {/* CARDS (KPIs Operacionais) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sumarioCondo.map((card, index) => (
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

      {/* GRÁFICOS E WIDGETS DE ACESSO RÁPIDO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* WIDGET 1: INADIMPLÊNCIA CRÍTICA (2/3 da largura) */}
        <div className="lg:col-span-2 bg-gray-900/30 border border-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
            Inadimplência Crítica{" "}
            <i className="fas fa-sack-xmark text-red-400"></i>
          </h3>
          <p className="text-sm opacity-70 mb-4">
            Unidades com pagamentos atrasados há mais de 30 dias.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-red-300 border-b border-gray-800">
                  <th className="p-3">Unidade</th>
                  <th className="p-3">Morador</th>
                  <th className="p-3">Meses em Atraso</th>
                  <th className="p-3">Valor Total</th>
                </tr>
              </thead>
              <tbody>
                {dummyInadimplencia.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800/40 hover:bg-gray-900/40"
                  >
                    <td className="p-3 font-semibold text-violet-400">
                      {item.unidade}
                    </td>
                    <td className="p-3">{item.morador}</td>
                    <td className="p-3 text-red-400">{item.meses}</td>
                    <td className="p-3 font-bold">
                      {formatCurrency(item.valor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button className="text-sm text-violet-400 hover:text-violet-300 transition">
              Ver Relatório Completo <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>

        {/* WIDGET 2: AVISOS RECENTES (1/3 da largura) */}
        <div className="lg:col-span-1 bg-gray-900/30 border border-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-4">
          <h3 className="text-xl font-bold flex justify-between items-center">
            Avisos Recentes <i className="fas fa-bullhorn text-blue-400"></i>
          </h3>

          <div className="space-y-4">
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-sm">
                Corte de Água Programado (Torre A)
              </p>
              <p className="text-xs opacity-60">Hoje, das 14h às 16h.</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
              <p className="font-semibold text-sm">
                Manutenção Elevador Social
              </p>
              <p className="text-xs opacity-60">Início: 15/12/2025</p>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-sm">
                Assembleia Geral Extraordinária
              </p>
              <p className="text-xs opacity-60">
                Agenda e documentos anexados.
              </p>
            </div>
          </div>

          <button className="w-full text-sm py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg">
            Criar Novo Aviso
          </button>
        </div>
      </div>
    </CondoLayout>
  );
}