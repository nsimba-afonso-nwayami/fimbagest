import { useState } from "react";
import React from "react";

export default function MinhasOcorrenciasMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Função utilitária para mapear status para classes de cor de fundo
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Em Andamento':
        return 'bg-blue-600/30 text-blue-300';
      case 'Concluída':
        return 'bg-teal-600/30 text-teal-300';
      case 'Pendente':
        return 'bg-yellow-600/30 text-yellow-300';
      case 'Cancelada':
        return 'bg-red-600/30 text-red-300';
      default:
        return 'bg-gray-700/50 text-white/70';
    }
  };
  
  // Função utilitária para mapear prioridade para classes de cor de texto
  const getPrioridadeClasses = (prioridade) => {
    switch (prioridade) {
        case 'Alta':
            return 'text-red-400 font-bold';
        case 'Média':
            return 'text-yellow-400';
        case 'Baixa':
            return 'text-gray-400';
        default:
            return 'text-white/70';
    }
  };

  // --- LÓGICA DE FILTRAGEM ---
  const filteredOcorrencias = ocorrenciasMock.filter(ocorrencia => {
    const matchesSearchTerm = 
      ocorrencia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ocorrencia.tipo.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = 
      filterStatus === "Todos" || ocorrencia.status === filterStatus;
      
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
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
            <i className="fas fa-wrench mr-3 text-teal-400"></i>
            Minhas Ocorrências
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
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
            Minhas Ocorrências
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
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button 
              className="px-6 py-3 bg-red-600 hover:bg-red-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2"
            >
              <i className="fas fa-plus-circle"></i>
              Abrir Nova Ocorrência
            </button>
            
            <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1">
                {/* INPUT DE PESQUISA */}
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
                
                {/* SELECT DE FILTRO POR STATUS */}
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

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Ocorrências Reportadas ({filteredOcorrencias.length})</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Título
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Prioridade
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
                  {filteredOcorrencias.length > 0 ? (
                    filteredOcorrencias.map((ocorrencia) => (
                      <tr 
                        key={ocorrencia.id} 
                        className="hover:bg-gray-800/60 transition"
                      >
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          #{ocorrencia.id}
                        </td>
                        <td className="px-4 py-4 max-w-xs truncate font-medium text-white">
                          {ocorrencia.titulo}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          {ocorrencia.tipo}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          {ocorrencia.data}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                            <span className={getPrioridadeClasses(ocorrencia.prioridade)}>
                                {ocorrencia.prioridade}
                            </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span 
                            className={`
                              px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${getStatusClasses(ocorrencia.status)}
                            `}
                          >
                            {ocorrencia.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button 
                            className="text-sm p-1 rounded text-teal-400 hover:opacity-80 transition"
                          >
                            <i className="fas fa-eye"></i> Detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-8 text-white/50">
                        Nenhuma ocorrência encontrada com os filtros aplicados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-white/50 mt-4">
                *Ocorrências pendentes ou em andamento podem ser detalhadas clicando em "Detalhes".
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}