import { useState } from "react";
import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function MinhasReservasMorador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");

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

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Confirmada': return 'bg-teal-600/30 text-teal-300';
      case 'Pendente': return 'bg-yellow-600/30 text-yellow-300';
      case 'Cancelada': return 'bg-red-600/30 text-red-300';
      case 'Concluída': return 'bg-gray-700/50 text-gray-400';
      default: return 'bg-gray-700/50 text-white/70';
    }
  };

  const filteredReservas = reservasMock.filter(reserva => {
    const matchesSearchTerm = 
      reserva.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reserva.data.includes(searchTerm);
    const matchesStatus = filterStatus === "Todos" || reserva.status === filterStatus;
    return matchesSearchTerm && matchesStatus;
  });

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      avisoCount={0} 
      title="Minhas Reservas"
    >
      {/* CABEÇALHO DE AÇÕES */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button 
          className="px-6 py-3 bg-teal-600 hover:bg-teal-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2"
        >
          <i className="fas fa-calendar-plus"></i>
          Nova Reserva
        </button>
        
        <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1">
          <div className="relative w-full sm:w-60">
            <input
              type="text"
              placeholder="Buscar área ou data..."
              className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition placeholder-gray-500 text-white"
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
            <option value="Confirmada">Confirmada</option>
            <option value="Pendente">Pendente</option>
            <option value="Cancelada">Cancelada</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>
      </div>

      {/* TABELA DE RESERVAS */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
        <h3 className="text-xl font-bold mb-6 text-teal-400">
          Reservas Agendadas ({filteredReservas.length})
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Área Comum</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Data</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Horário</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredReservas.length > 0 ? (
                filteredReservas.map((reserva) => (
                  <tr key={reserva.id} className="hover:bg-gray-800/60 transition">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">#{reserva.id}</td>
                    <td className="px-4 py-4 whitespace-nowrap font-medium text-white">{reserva.area}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">{reserva.data}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">{reserva.hora}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(reserva.status)}`}>
                        {reserva.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        className={`text-sm p-1 rounded hover:opacity-80 transition 
                          ${reserva.status === 'Confirmada' || reserva.status === 'Pendente' ? 'text-red-400' : 'text-gray-500 cursor-not-allowed'}
                        `}
                        disabled={reserva.status === 'Concluída' || reserva.status === 'Cancelada'}
                        title={reserva.status === 'Concluída' || reserva.status === 'Cancelada' ? 'Não é possível cancelar' : 'Cancelar Reserva'}
                      >
                        <i className="fas fa-times-circle mr-1"></i> Cancelar
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
        
        <p className="text-xs text-white/50 mt-4 italic">
          *Reservas Pendentes estão aguardando aprovação da administração.
        </p>
      </div>
    </LayoutMorador>
  );
}