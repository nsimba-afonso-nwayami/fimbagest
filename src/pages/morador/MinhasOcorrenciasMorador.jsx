import { useState } from "react";
import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function MinhasOcorrenciasMorador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");

  // --- MOCKUP DE DADOS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  const ocorrenciasMock = [
    { 
        id: 201, 
        titulo: "Vazamento no Teto da Garagem", 
        data: "20/11/2025", 
        tipo: "Manutenção", 
        status: "Em Andamento", 
        prioridade: "Alta" 
    },
    { 
        id: 202, 
        titulo: "Portão da Rua 3 com defeito", 
        data: "15/11/2025", 
        tipo: "Segurança", 
        status: "Concluída", 
        prioridade: "Média" 
    },
    { 
        id: 203, 
        titulo: "Barulho Excessivo no Apto 201", 
        data: "01/12/2025", 
        tipo: "Conduta", 
        status: "Pendente", 
        prioridade: "Baixa" 
    },
    { 
        id: 204, 
        titulo: "Lâmpada Queimada no Corredor", 
        data: "12/12/2025", 
        tipo: "Manutenção", 
        status: "Pendente", 
        prioridade: "Média" 
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Em Andamento': return 'bg-blue-600/30 text-blue-300';
      case 'Concluída': return 'bg-teal-600/30 text-teal-300';
      case 'Pendente': return 'bg-yellow-600/30 text-yellow-300';
      case 'Cancelada': return 'bg-red-600/30 text-red-300';
      default: return 'bg-gray-700/50 text-white/70';
    }
  };
  
  const getPrioridadeClasses = (prioridade) => {
    switch (prioridade) {
        case 'Alta': return 'text-red-400 font-bold';
        case 'Média': return 'text-yellow-400';
        case 'Baixa': return 'text-gray-400';
        default: return 'text-white/70';
    }
  };

  const filteredOcorrencias = ocorrenciasMock.filter(ocorrencia => {
    const matchesSearchTerm = 
      ocorrencia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ocorrencia.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "Todos" || ocorrencia.status === filterStatus;
    return matchesSearchTerm && matchesStatus;
  });

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      avisoCount={2} 
      title="Minhas Ocorrências"
    >
      {/* CABEÇALHO DE AÇÕES */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button 
          className="px-6 py-3 bg-red-600 hover:bg-red-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2"
        >
          <i className="fas fa-plus-circle"></i>
          Abrir Nova Ocorrência
        </button>
        
        <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1">
          <div className="relative w-full sm:w-60">
            <input
              type="text"
              placeholder="Buscar título ou tipo"
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"></i>
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500 transition text-white/80 w-36"
          >
            <option value="Todos">Todos Status</option>
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Concluída">Concluída</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>
      </div>

      {/* TABELA DE OCORRÊNCIAS */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-6 text-teal-400">Ocorrências Reportadas ({filteredOcorrencias.length})</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Título</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Data</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Prioridade</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredOcorrencias.length > 0 ? (
                filteredOcorrencias.map((ocorrencia) => (
                  <tr key={ocorrencia.id} className="hover:bg-gray-800/60 transition">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">#{ocorrencia.id}</td>
                    <td className="px-4 py-4 max-w-xs truncate font-medium text-white">{ocorrencia.titulo}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">{ocorrencia.tipo}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">{ocorrencia.data}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span className={getPrioridadeClasses(ocorrencia.prioridade)}>{ocorrencia.prioridade}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(ocorrencia.status)}`}>
                        {ocorrencia.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-sm p-1 rounded text-teal-400 hover:text-teal-300 transition flex items-center gap-1">
                        <i className="fas fa-eye"></i> Detalhes
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-white/50">Nenhuma ocorrência encontrada.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <p className="text-xs text-white/50 mt-4 italic">
          *Ocorrências pendentes ou em andamento podem ser detalhadas clicando em "Detalhes".
        </p>
      </div>
    </LayoutMorador>
  );
}