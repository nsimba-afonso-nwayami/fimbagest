import { useState } from "react";
import React from "react";

export default function MinhasReservasMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos"); // Estado para filtro de status

  // --- MOCKUP DE DADOS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  const reservasMock = [
    { id: 101, area: "Salão de Festas", data: "31/12/2025", hora: "19:00", status: "Confirmada", cor: "text-teal-400" },
    { id: 102, area: "Churrasqueira 1", data: "25/12/2025", hora: "12:00", status: "Pendente", cor: "text-yellow-400" },
    { id: 103, area: "Quadra Poliesportiva", data: "01/11/2025", hora: "10:00", status: "Concluída", cor: "text-gray-400" },
    { id: 104, area: "Espaço Gourmet", data: "15/01/2026", hora: "18:00", status: "Cancelada", cor: "text-red-400" },
    { id: 105, area: "Piscina (Eventos)", data: "05/01/2026", hora: "14:00", status: "Confirmada", cor: "text-teal-400" },
    { id: 106, area: "Churrasqueira 2", data: "10/01/2026", hora: "12:00", status: "Pendente", cor: "text-yellow-400" },
  ];

  // Função utilitária para mapear status para classes de cor de fundo
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Confirmada':
        return 'bg-teal-600/30 text-teal-300';
      case 'Pendente':
        return 'bg-yellow-600/30 text-yellow-300';
      case 'Cancelada':
        return 'bg-red-600/30 text-red-300';
      case 'Concluída':
        return 'bg-gray-700/50 text-gray-400';
      default:
        return 'bg-gray-700/50 text-white/70';
    }
  };
  
  // --- LÓGICA DE FILTRAGEM ---
  const filteredReservas = reservasMock.filter(reserva => {
    const matchesSearchTerm = 
      reserva.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reserva.data.includes(searchTerm);
      
    const matchesStatus = 
      filterStatus === "Todos" || reserva.status === filterStatus;
      
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
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
            <i className="fas fa-calendar-alt mr-3 text-teal-400"></i>
            Minhas Reservas
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
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
            Minhas Reservas
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
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2"
            >
              <i className="fas fa-calendar-plus"></i>
              Nova Reserva
            </button>
            
            <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1">
                {/* INPUT DE PESQUISA */}
                <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder="Buscar área ou data (ex: Churrasqueira, 31/12)"
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
                  <option value="Confirmada">Confirmada</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Cancelada">Cancelada</option>
                  <option value="Concluída">Concluída</option>
                </select>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Reservas Agendadas ({filteredReservas.length})</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Área Comum
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">
                      Horário
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
                  {filteredReservas.length > 0 ? (
                    filteredReservas.map((reserva) => (
                      <tr 
                        key={reserva.id} 
                        className="hover:bg-gray-800/60 transition"
                      >
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          #{reserva.id}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap font-medium text-white">
                          {reserva.area}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          {reserva.data}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">
                          {reserva.hora}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span 
                            className={`
                              px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${getStatusClasses(reserva.status)}
                            `}
                          >
                            {reserva.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button 
                            className={`text-sm p-1 rounded hover:opacity-80 transition 
                              ${reserva.status === 'Confirmada' || reserva.status === 'Pendente' ? 'text-red-400' : 'text-gray-500 cursor-not-allowed'}
                            `}
                            disabled={reserva.status === 'Concluída' || reserva.status === 'Cancelada'}
                            title={reserva.status === 'Concluída' || reserva.status === 'Cancelada' ? 'Não é possível cancelar' : 'Cancelar Reserva'}
                          >
                            <i className="fas fa-times-circle"></i> Cancelar
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-8 text-white/50">
                        Nenhuma reserva encontrada com os filtros aplicados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-white/50 mt-4">
                *Reservas Pendentes estão aguardando aprovação da administração.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}