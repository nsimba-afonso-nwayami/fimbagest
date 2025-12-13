import { useState } from "react";
import React from "react";

export default function FinanceiroMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");

  // --- MOCKUP DE DADOS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  // VALORES EM KWANZAS (AOA)
  const dadosFinanceiros = {
    saldoDevedor: 105000.0, // Kz 105.000,00
    totalPagoAno: 1020000.0, // Kz 1.020.000,00
    boletosEmAberto: 3,
  };

  // VALORES EM KWANZAS (AOA)
  const boletosMock = [
    {
      id: 301,
      descricao: "Condomínio - Dez/2025",
      vencimento: "10/12/2025",
      valor: 85000.0,
      status: "Aberto",
    },
    {
      id: 302,
      descricao: "Condomínio - Nov/2025",
      vencimento: "10/11/2025",
      valor: 85000.0,
      status: "Pago",
    },
    {
      id: 303,
      descricao: "Multa por Barulho (01/12)",
      vencimento: "20/12/2025",
      valor: 15000.0,
      status: "Atrasado",
    },
    {
      id: 304,
      descricao: "Fundo de Reserva",
      vencimento: "10/12/2025",
      valor: 5000.0,
      status: "Aberto",
    },
    {
      id: 305,
      descricao: "Condomínio - Out/2025",
      vencimento: "10/10/2025",
      valor: 85000.0,
      status: "Pago",
    },
    {
      id: 306,
      descricao: "Taxa Extra - Paisagismo",
      vencimento: "05/09/2025",
      valor: 20000.0,
      status: "Pago",
    },
  ];

  // Função utilitária para formatar moeda (Ajustada para AOA - Kwanza Angolano)
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-AO", {
      style: "currency",
      currency: "AOA",
    });
  };

  // Função utilitária para mapear status para classes de cor de fundo
  const getStatusClasses = (status) => {
    switch (status) {
      case "Pago":
        return "bg-teal-600/30 text-teal-300";
      case "Aberto":
        return "bg-blue-600/30 text-blue-300";
      case "Atrasado":
        return "bg-red-600/30 text-red-300";
      default:
        return "bg-gray-700/50 text-white/70";
    }
  };

  // --- LÓGICA DE FILTRAGEM ---
  const filteredBoletos = boletosMock.filter((boleto) => {
    const matchesSearchTerm =
      boleto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boleto.vencimento.includes(searchTerm);

    const matchesStatus =
      filterStatus === "Todos" || boleto.status === filterStatus;

    return matchesSearchTerm && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR (Morador) */}
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300 overflow-y-auto 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 
        `}
      >
        {/* Botão Fechar Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-indigo-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-4 tracking-wide mt-6 md:mt-0">
          <span className="text-teal-400">Condo</span> Residente
        </h1>
        {/* NOME DO CONDOMÍNIO */}
        <p className="text-sm text-white/60 mb-2 truncate font-medium">
          {dadosMorador.condominio}
        </p>
        <p className="text-sm text-white/70 mb-8 truncate">
          {dadosMorador.unidade}
        </p>

        {/* MENU */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-home mr-3 text-teal-400"></i>
            Dashboard
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-calendar-alt mr-3 text-teal-400"></i>
            Minhas Reservas
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-wrench mr-3 text-teal-400"></i>
            Minhas Ocorrências
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
            <i className="fas fa-file-invoice-dollar mr-3 text-teal-400"></i>
            Financeiro
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-teal-400"></i>
            Avisos & Comunicados
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-user-circle mr-3 text-teal-400"></i>
            Meu Perfil
          </a>
        </nav>
      </aside>

      {/* BACKDROP MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 md:ml-64 overflow-x-hidden">
        {/* HEADER (Morador) */}
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
            Financeiro
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-xl sm:text-2xl text-indigo-400 hover:text-indigo-300 transition-all">
              <i className="fas fa-bell"></i>
            </button>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-base font-semibold">
                {dadosMorador.nome[0]}
              </span>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          {/* CARTÕES DE RESUMO FINANCEIRO (EXTRATO) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Saldo Devedor */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/70">
                  Saldo Devedor
                </p>
                <i className="fas fa-exclamation-triangle text-red-400 text-xl"></i>
              </div>
              <p className="text-3xl font-bold mt-2 text-red-400">
                {formatCurrency(dadosFinanceiros.saldoDevedor)}
              </p>
              <p className="text-xs text-white/50 mt-1">
                Faturas em aberto e/ou atrasados
              </p>
            </div>

            {/* Boletos em Aberto */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/70">
                  Faturas Pendentes
                </p>
                <i className="fas fa-receipt text-blue-400 text-xl"></i>
              </div>
              <p className="text-3xl font-bold mt-2 text-blue-400">
                {dadosFinanceiros.boletosEmAberto}
              </p>
              <p className="text-xs text-white/50 mt-1">
                Inclui atrasados e a vencer
              </p>
            </div>

            {/* Total Pago no Ano */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/70">
                  Total Pago (2025)
                </p>
                <i className="fas fa-hand-holding-usd text-teal-400 text-xl"></i>
              </div>
              <p className="text-3xl font-bold mt-2 text-teal-400">
                {formatCurrency(dadosFinanceiros.totalPagoAno)}
              </p>
              <p className="text-xs text-white/50 mt-1">
                Soma de todas os faturass quitadas
              </p>
            </div>
          </div>

          {/* LISTAGEM DE BOLETOS */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 text-teal-400">
              Histórico de Boletos
            </h3>

            {/* FILTROS E PESQUISA */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="flex gap-4 w-full sm:w-auto">
                {/* INPUT DE PESQUISA */}
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    placeholder="Buscar descrição ou vencimento"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition placeholder-gray-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"></i>
                </div>

                {/* SELECT DE FILTRO POR STATUS */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500 transition text-white/80 w-40"
                >
                  <option value="Todos">Todos Status</option>
                  <option value="Aberto">Em Aberto</option>
                  <option value="Atrasado">Atrasado</option>
                  <option value="Pago">Pago</option>
                </select>
              </div>

              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto text-sm">
                <i className="fas fa-download"></i>
                Gerar Extrato
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Vencimento
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-white/50 uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredBoletos.length > 0 ? (
                    filteredBoletos.map((boleto) => (
                      <tr
                        key={boleto.id}
                        className="hover:bg-gray-800/60 transition"
                      >
                        <td className="px-4 py-4 max-w-sm truncate font-medium text-white">
                          {boleto.descricao}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          {boleto.vencimento}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-bold">
                          {formatCurrency(boleto.valor)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`
                              px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${getStatusClasses(boleto.status)}
                            `}
                          >
                            {boleto.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          {boleto.status !== "Pago" ? (
                            <button
                              className={`text-sm p-1 rounded hover:opacity-80 transition 
                                ${
                                  boleto.status === "Atrasado"
                                    ? "text-red-400"
                                    : "text-blue-400"
                                }
                              `}
                              title="Visualizar ou Baixar Boleto"
                            >
                              <i className="fas fa-file-pdf"></i> Pagar / Ver
                            </button>
                          ) : (
                            <button
                              className="text-sm p-1 rounded text-teal-400 hover:opacity-80 transition"
                              title="Visualizar Comprovante"
                            >
                              <i className="fas fa-check-circle"></i>{" "}
                              Comprovante
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-8 text-white/50"
                      >
                        Nenhum boleto encontrado com os filtros aplicados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-white/50 mt-4">
              *O valor do Saldo Devedor é a soma dos boletos com status 'Aberto'
              ou 'Atrasado'.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
