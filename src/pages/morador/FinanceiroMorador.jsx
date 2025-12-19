import { useState } from "react";
import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function FinanceiroMorador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");

  // --- MOCKUP DE DADOS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  const dadosFinanceiros = {
    saldoDevedor: 105000.0,
    totalPagoAno: 1020000.0,
    boletosEmAberto: 3,
  };

  const boletosMock = [
    { id: 301, descricao: "Condomínio - Dez/2025", vencimento: "10/12/2025", valor: 85000.0, status: "Aberto" },
    { id: 302, descricao: "Condomínio - Nov/2025", vencimento: "10/11/2025", valor: 85000.0, status: "Pago" },
    { id: 303, descricao: "Multa por Barulho (01/12)", vencimento: "20/12/2025", valor: 15000.0, status: "Atrasado" },
    { id: 304, descricao: "Fundo de Reserva", vencimento: "10/12/2025", valor: 5000.0, status: "Aberto" },
    { id: 305, descricao: "Condomínio - Out/2025", vencimento: "10/10/2025", valor: 85000.0, status: "Pago" },
    { id: 306, descricao: "Taxa Extra - Paisagismo", vencimento: "05/09/2025", valor: 20000.0, status: "Pago" },
  ];

  const formatCurrency = (value) => {
    return value.toLocaleString("pt-AO", {
      style: "currency",
      currency: "AOA",
    });
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pago": return "bg-teal-600/30 text-teal-300";
      case "Aberto": return "bg-blue-600/30 text-blue-300";
      case "Atrasado": return "bg-red-600/30 text-red-300";
      default: return "bg-gray-700/50 text-white/70";
    }
  };

  const filteredBoletos = boletosMock.filter((boleto) => {
    const matchesSearchTerm =
      boleto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boleto.vencimento.includes(searchTerm);
    const matchesStatus = filterStatus === "Todos" || boleto.status === filterStatus;
    return matchesSearchTerm && matchesStatus;
  });

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      avisoCount={0} 
      title="Financeiro"
    >
      {/* CARTÕES DE RESUMO FINANCEIRO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">Saldo Devedor</p>
            <i className="fas fa-exclamation-triangle text-red-400 text-xl"></i>
          </div>
          <p className="text-3xl font-bold mt-2 text-red-400">{formatCurrency(dadosFinanceiros.saldoDevedor)}</p>
          <p className="text-xs text-white/50 mt-1">Faturas em aberto ou atrasadas</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">Faturas Pendentes</p>
            <i className="fas fa-receipt text-blue-400 text-xl"></i>
          </div>
          <p className="text-3xl font-bold mt-2 text-blue-400">{dadosFinanceiros.boletosEmAberto}</p>
          <p className="text-xs text-white/50 mt-1">Inclui faturas a vencer</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">Total Pago (2025)</p>
            <i className="fas fa-hand-holding-usd text-teal-400 text-xl"></i>
          </div>
          <p className="text-3xl font-bold mt-2 text-teal-400">{formatCurrency(dadosFinanceiros.totalPagoAno)}</p>
          <p className="text-xs text-white/50 mt-1">Soma de faturas quitadas</p>
        </div>
      </div>

      {/* LISTAGEM DE BOLETOS */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-xl font-bold text-teal-400">Histórico de Boletos</h3>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
            <i className="fas fa-download"></i> Gerar Extrato
          </button>
        </div>

        {/* FILTROS E PESQUISA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar descrição ou vencimento..."
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"></i>
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500 transition text-white/80 w-full sm:w-40"
          >
            <option value="Todos">Todos Status</option>
            <option value="Aberto">Em Aberto</option>
            <option value="Atrasado">Atrasado</option>
            <option value="Pago">Pago</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase">Descrição</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase">Vencimento</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-white/50 uppercase">Valor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredBoletos.length > 0 ? (
                filteredBoletos.map((boleto) => (
                  <tr key={boleto.id} className="hover:bg-gray-800/60 transition">
                    <td className="px-4 py-4 font-medium text-white">{boleto.descricao}</td>
                    <td className="px-4 py-4 text-sm text-white/70">{boleto.vencimento}</td>
                    <td className="px-4 py-4 text-sm text-right font-bold">{formatCurrency(boleto.valor)}</td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(boleto.status)}`}>
                        {boleto.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium">
                      {boleto.status !== "Pago" ? (
                        <button className={`hover:underline flex items-center gap-1 ${boleto.status === "Atrasado" ? "text-red-400" : "text-blue-400"}`}>
                          <i className="fas fa-file-pdf"></i> Pagar / Ver
                        </button>
                      ) : (
                        <button className="text-teal-400 hover:underline flex items-center gap-1">
                          <i className="fas fa-check-circle"></i> Comprovante
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-white/50">Nenhum registro encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutMorador>
  );
}