import { useState } from "react";

export default function ReservasCondoAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Dados de Exemplo de Reservas ---
  const sumarioReservas = [
    {
      titulo: "Pedidos Pendentes",
      valor: 2,
      icone: "fas fa-circle-question",
      cor: "text-yellow-400",
    },
    {
      titulo: "Reservas Confirmadas (Mês)",
      valor: 15,
      icone: "fas fa-calendar-check",
      cor: "text-green-400",
    },
    {
      titulo: "Área Mais Reservada",
      valor: "Churrasqueira 1",
      icone: "fas fa-fire-burner",
      cor: "text-violet-400",
    },
  ];

  const dummyReservas = [
    {
      id: 301,
      area: "Salão de Festas",
      morador: "António Manuel",
      data: "2025-12-24",
      periodo: "Noite",
      status: "Pendente",
    },
    {
      id: 302,
      area: "Churrasqueira 2",
      morador: "Elsa Rocha",
      data: "2025-12-15",
      periodo: "Tarde",
      status: "Confirmada",
    },
    {
      id: 303,
      area: "Quadra Polidesportiva",
      morador: "Joana Freitas",
      data: "2025-12-26",
      periodo: "Manhã",
      status: "Pendente",
    },
    {
      id: 304,
      area: "Salão Gourmet",
      morador: "Carlos Silva",
      data: "2025-12-31",
      periodo: "Dia Inteiro",
      status: "Rejeitada",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Confirmada":
        return "bg-green-600/40 text-green-300";
      case "Pendente":
        return "bg-yellow-600/40 text-yellow-300";
      case "Rejeitada":
        return "bg-red-600/40 text-red-300";
      default:
        return "bg-gray-600/40 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR (Reutilizado com foco no Condomínio) */}
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

        {/* MENU: Destaque 'Reservas' */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-gauge-high mr-3 text-violet-400"></i>
            Dashboard
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-user-friends mr-3 text-violet-400"></i>
            Moradores
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Financeiro
          </a>
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-violet-400"></i>
            Comunicação
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold">
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
            Gestão de Reservas
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
          
          {/* CARDS (Sumário de Reservas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sumarioReservas.map((card, index) => (
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

          {/* BARRA DE AÇÕES: CONFIGURAÇÃO E CALENDÁRIO */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            
            {/* BOTÃO VER CALENDÁRIO */}
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                <i className="fas fa-calendar-day"></i>
                Ver Calendário Completo
            </button>

            {/* BOTÃO GERIR ÁREAS */}
            <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                <i className="fas fa-gear"></i>
                Gerir Áreas Comuns (Config)
            </button>
          </div>

          {/* TABELA DE PEDIDOS PENDENTES/RECENTES */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6">Pedidos de Reserva Recentes</h3>

            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="text-violet-300 border-b border-gray-800">
                    <th className="p-3 whitespace-nowrap">ID</th>
                    <th className="p-3 whitespace-nowrap">Área</th>
                    <th className="p-3 whitespace-nowrap">Morador</th>
                    <th className="p-3 whitespace-nowrap">Data</th>
                    <th className="p-3 whitespace-nowrap">Período</th>
                    <th className="p-3 whitespace-nowrap">Status</th>
                    <th className="p-3 text-center whitespace-nowrap">Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {dummyReservas.map((reserva) => (
                    <tr
                      key={reserva.id}
                      className="border-b border-gray-800/40 hover:bg-gray-900/40"
                    >
                      <td className="p-3 whitespace-nowrap text-xs opacity-70">
                        {reserva.id}
                      </td>
                      <td className="p-3 whitespace-nowrap font-medium text-blue-300">
                        {reserva.area}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        {reserva.morador}
                      </td>
                      <td className="p-3 whitespace-nowrap font-semibold">
                        {reserva.data}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        {reserva.periodo}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                            reserva.status
                          )}`}
                        >
                          {reserva.status}
                        </span>
                      </td>

                      {/* ÍCONES DE AÇÃO */}
                      <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                        {reserva.status === "Pendente" ? (
                            <>
                                <button className="text-green-500 hover:text-green-400" title="Aprovar Reserva">
                                    <i className="fas fa-check-circle"></i>
                                </button>

                                <button className="text-red-500 hover:text-red-400" title="Rejeitar Reserva">
                                    <i className="fas fa-times-circle"></i>
                                </button>
                            </>
                        ) : (
                            <button className="text-blue-300 hover:text-blue-200" title="Ver Detalhes">
                                <i className="fas fa-eye"></i>
                            </button>
                        )}
                        
                        <button className="text-yellow-300 hover:text-yellow-200" title="Mudar Status">
                            <i className="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}