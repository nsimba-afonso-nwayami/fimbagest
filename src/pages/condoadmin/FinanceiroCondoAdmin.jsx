import { useState } from "react";

export default function FinanceiroCondoAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Dados de Exemplo Financeiro ---
  const formatCurrency = (value) => {
    // Uso de "pt-AO" e substituição de "AOA" por "Kz" (Kwanza) para formatação de moeda Angolana
    return value.toLocaleString("pt-AO", {
      style: "currency",
      currency: "AOA",
      minimumFractionDigits: 2,
    }).replace("AOA", "Kz");
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
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR */}
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
        <p className="text-sm text-white/60 mb-8 truncate">Residencial Jardins</p>

        {/* MENU: Destaque 'Financeiro' */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-gauge-high mr-3 text-violet-400"></i>
            Dashboard
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-user-friends mr-3 text-violet-400"></i>
            Moradores
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold">
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Financeiro
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-violet-400"></i>
            Comunicação
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-calendar-alt mr-3 text-violet-400"></i>
            Reservas
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-wrench mr-3 text-violet-400"></i>
            Ocorrências
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
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
            Financeiro / Cobranças
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
              <span className="text-sm opacity-80 hidden sm:block">Síndico</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-base"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          
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
                
                {/* FILTRO DE MÊS */}
                <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                    <option value="">Todos os Meses</option>
                    <option value="07">Julho</option>
                    <option value="06">Junho</option>
                    <option value="05">Maio</option>
                    {/* Mais meses... */}
                </select>

                {/* FILTRO DE STATUS */}
                <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                    <option value="">Todos os Status</option>
                    <option value="Em Aberto">Em Aberto</option>
                    <option value="Pago">Pago</option>
                    <option value="Atrasado">Atrasado</option>
                </select>

                {/* CAMPO DE BUSCA */}
                <input
                    type="text"
                    placeholder="Buscar por referência ou unidade..."
                    className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white flex-1 min-w-[200px]"
                />
              </div>

              {/* BOTÃO PARA GERAÇÃO/RELATÓRIO */}
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
                      <td className="p-3 whitespace-nowrap">
                        {cobranca.morador}
                      </td>
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

                      {/* ÍCONES */}
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
                <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm">
                  1
                </button>
                <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
                  2
                </button>
                <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
                  3
                </button>

                <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}