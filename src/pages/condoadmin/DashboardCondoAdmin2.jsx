import { useState } from "react";

export default function DashboardCondoAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR (Nova Sidebar com foco Condomínio) */}
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 
        `}
      >
        {/* BOTÃO FECHAR MOBILE (ADICIONADO) */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-red-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-4 tracking-wide mt-6 md:mt-0">
          <span className="text-violet-400">Condo</span> Admin
        </h1>
        <p className="text-sm text-white/60 mb-8 truncate">
          Residencial Jardins
        </p>

        {/* MENU: Foco Operacional do Síndico (NOMES SIMPLIFICADOS AQUI) */}
        <nav className="space-y-4 text-lg">
          {/* Item Ativo */}
          <a
            href="/dashboard/condoadmin/"
            className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold"
          >
            <i className="fas fa-gauge-high mr-3 text-violet-400"></i>
            Dashboard
          </a>
          <a
            href="/dashboard/condoadmin/moradores"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-user-friends mr-3 text-violet-400"></i>
            Moradores
          </a>
          <a
            href="/dashboard/condoadmin/financeiro"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Financeiro
          </a>
          <a
            href="/dashboard/condoadmin/comunicacao"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-bell mr-3 text-violet-400"></i>
            Comunicação
          </a>
          <a
            href="/dashboard/condoadmin/reservas"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-calendar-alt mr-3 text-violet-400"></i>
            Reservas
          </a>
          <a
            href="/dashboard/condoadmin/ocorrencias"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-wrench mr-3 text-violet-400"></i>
            Ocorrências
          </a>
          <a
            href="/dashboard/condoadmin/configuracoes"
            className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer"
          >
            <i className="fas fa-gears mr-3 text-violet-400"></i>
            Configurações
          </a>
        </nav>
      </aside>

      {/* BACKDROP MOBILE (ADICIONADO) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        {/* HEADER (Adaptado) */}
        <header
          className="
            bg-gray-900/40 backdrop-blur-xl border-b border-gray-800
            fixed top-0 right-0 left-0 md:left-64
            h-16 flex items-center justify-between px-4 sm:px-6 shadow-lg
            z-30
          "
        >
          {/* Botão mobile */}
          <button
            className="md:hidden text-xl sm:text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <h2 className="text-lg sm:text-xl font-bold tracking-wide">
            Dashboard do Condomínio
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-xl sm:text-2xl text-violet-400 hover:text-violet-300 transition-all">
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
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80 hidden sm:block">
                Síndico
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-base"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
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
                  Ver Relatório Completo{" "}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* WIDGET 2: AVISOS RECENTES (1/3 da largura) */}
            <div className="lg:col-span-1 bg-gray-900/30 border border-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold flex justify-between items-center">
                Avisos Recentes{" "}
                <i className="fas fa-bullhorn text-blue-400"></i>
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
        </main>
      </div>
    </div>
  );
}
