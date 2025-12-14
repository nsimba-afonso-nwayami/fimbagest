import { useState } from "react";
import { Link } from "react-router-dom";

export default function OcorrenciasAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dados de exemplo para a tabela de ocorrências
  const dummyOcorrencias = [
    {
      id: 7001,
      titulo: "Fuga de água na torre B",
      condominio: "Residencial Jardins",
      prioridade: "Alta",
      status: "Em Progresso",
      dataAbertura: "2025-12-05",
    },
    {
      id: 7002,
      titulo: "Lâmpada do estacionamento queimada",
      condominio: "Edifício Atlântico Sul",
      prioridade: "Baixa",
      status: "Aberta",
      dataAbertura: "2025-12-10",
    },
    {
      id: 7003,
      titulo: "Portão da entrada principal avariado",
      condominio: "Central Plaza",
      prioridade: "Média",
      status: "Fechada",
      dataAbertura: "2025-11-28",
    },
    {
      id: 7004,
      titulo: "Reclamação de barulho excessivo (Unidade 10-C)",
      condominio: "Residencial Jardins",
      prioridade: "Média",
      status: "Aberta",
      dataAbertura: "2025-12-11",
    },
  ];

  // Dados de exemplo para os cards de sumário
  const sumarioOcorrencias = [
    {
      titulo: "Total de Ocorrências",
      valor: "128",
      icone: "fas fa-list-check",
      cor: "text-violet-400",
    },
    {
      titulo: "Abertas",
      valor: "42",
      icone: "fas fa-exclamation-circle",
      cor: "text-red-400",
    },
    {
      titulo: "Em Progresso",
      valor: "35",
      icone: "fas fa-history",
      cor: "text-yellow-400",
    },
    {
      titulo: "Fechadas (Mês)",
      valor: "51",
      icone: "fas fa-circle-check",
      cor: "text-green-400",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusColor = (status) => {
    switch (status) {
      case "Aberta":
        return "bg-red-600/40";
      case "Em Progresso":
        return "bg-yellow-600/40";
      case "Fechada":
        return "bg-green-600/40";
      default:
        return "bg-gray-600/40";
    }
  };
  
  // Função auxiliar para obter a cor da prioridade
  const getPriorityColor = (prioridade) => {
    switch (prioridade) {
      case "Alta":
        return "text-red-400";
      case "Média":
        return "text-yellow-400";
      case "Baixa":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white flex">
      {/* SIDEBAR */}
      <aside
        className={`
          bg-blue-900/40 backdrop-blur-xl border-r border-blue-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-9999 {/* Ajustado z-index para Tailwind standard: z-50 a z-[9999] */}
        `}
      >
        {/* BOTÃO FECHAR MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-10 tracking-wide mt-6 md:mt-0">
          Fimba<span className="text-violet-400">Gest</span>
        </h1>

        {/* MENU (Sem alterações necessárias na navegação) */}
        <nav className="space-y-4 text-lg">
          <Link
            to="/dashboard/super-admin/"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-chart-line mr-3 text-violet-400"></i>
            Dashboard
          </Link>
          <Link
            to="/dashboard/super-admin/condominios"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-building mr-3 text-violet-400"></i>
            Condomínios
          </Link>
          <Link
            to="/dashboard/super-admin/moradores"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-users mr-3 text-violet-400"></i>
            Moradores
          </Link>
          <Link
            to="/dashboard/super-admin/cobrancas"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Cobranças
          </Link>
          <Link
            to="/dashboard/super-admin/ocorrencias"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-tools mr-3 text-violet-400"></i>
            Ocorrências
          </Link>
          <Link
            to="/dashboard/super-admin/configuracoes"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer"
          >
            <i className="fas fa-gear mr-3 text-violet-400"></i>
            Configurações
          </Link>
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
        {/* HEADER (Reutilizado) */}
        <header
          className="
            bg-blue-900/40 backdrop-blur-xl border-b border-blue-800
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
            Gestão de Ocorrências
          </h2>

          {/* Notificações + Perfil (Reutilizado) */}
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
              <span className="text-sm opacity-80 hidden sm:block">Admin</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-base"></i>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          
          {/* BOTÃO CRIAR OCORRÊNCIA MANUAL */}
          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2">
              <i className="fas fa-plus"></i>
              Registrar Ocorrência
            </button>
          </div>

          {/* CARDS (Sumário de Ocorrências) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sumarioOcorrencias.map((card, index) => (
              <div
                key={index}
                className="bg-blue-900/40 border border-blue-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 sm:gap-4 hover:bg-blue-900/50 hover:scale-[1.02] transition-all cursor-pointer"
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

          {/* FILTROS + BUSCA */}
          <div className="bg-blue-900/30 border border-blue-800 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Buscar e Filtrar Ocorrências
            </h3>

            {/* Filtros de Condomínio, Status e Prioridade */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Buscar por título ou descrição..."
                className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white col-span-1 sm:col-span-1"
              />

              <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
                <option className="bg-blue-900">Condomínio (Todos)</option>
                <option className="bg-blue-900">Residencial Jardins</option>
                <option className="bg-blue-900">Central Plaza</option>
              </select>

              <select className="p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
                <option className="bg-blue-900">Status (Todos)</option>
                <option className="bg-blue-900">Aberta</option>
                <option className="bg-blue-900">Em Progresso</option>
                <option className="bg-blue-900">Fechada</option>
              </select>

              <button className="p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold">
                Filtrar
              </button>
            </div>
          </div>

          {/* TABELA DE OCORRÊNCIAS */}
          <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
            <table className="min-w-[1000px] w-full text-left border-collapse text-sm">
              <thead>
                <tr className="text-violet-300 border-b border-blue-800">
                  <th className="p-3 whitespace-nowrap">ID</th>
                  <th className="p-3 whitespace-nowrap">Título</th>
                  <th className="p-3 whitespace-nowrap">Condomínio</th>
                  <th className="p-3 whitespace-nowrap">Aberto em</th>
                  <th className="p-3 whitespace-nowrap">Prioridade</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 text-center whitespace-nowrap">Ações</th>
                </tr>
              </thead>

              <tbody>
                {dummyOcorrencias.map((ocorrencia) => (
                  <tr
                    key={ocorrencia.id}
                    className="border-b border-blue-800/40 hover:bg-blue-900/40"
                  >
                    <td className="p-3 whitespace-nowrap">{ocorrencia.id}</td>
                    <td className="p-3 font-medium max-w-xs truncate">
                      {ocorrencia.titulo}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {ocorrencia.condominio}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                       {/* Formata a data */}
                      {ocorrencia.dataAbertura.split('-').reverse().join('/')}
                    </td>
                    <td className="p-3 whitespace-nowrap font-semibold">
                      <span className={`${getPriorityColor(ocorrencia.prioridade)}`}>
                         <i className="fas fa-circle text-[8px] mr-2"></i>
                         {ocorrencia.prioridade}
                      </span>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                          ocorrencia.status
                        )}`}
                      >
                        {ocorrencia.status}
                      </span>
                    </td>

                    {/* ÍCONES */}
                    <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                      <button className="text-blue-300 hover:text-blue-200" title="Ver Detalhes">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="text-yellow-300 hover:text-yellow-200" title="Editar/Mudar Status">
                        <i className="fas fa-edit"></i>
                      </button>

                      <button className="text-red-400 hover:text-red-300" title="Excluir">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINAÇÃO (Reutilizado) */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
              <p className="opacity-70 text-xs sm:text-sm">
                Mostrando 1 a 4 de 128 registros
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm">
                  1
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  2
                </button>
                <button className="px-4 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
                  3
                </button>

                <button className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded-lg text-sm">
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