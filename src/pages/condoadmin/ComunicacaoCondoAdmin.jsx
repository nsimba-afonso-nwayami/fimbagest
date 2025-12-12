import { useState } from "react";

export default function ComunicacaoCondoAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Dados de Exemplo de Comunicação ---
  const dummyComunicaciones = [
    {
      id: 201,
      titulo: "Corte Programado de Água (Torre A)",
      tipo: "Aviso",
      data: "10/07/2025",
      status: "Publicado",
      destinatarios: "Bloco A",
    },
    {
      id: 202,
      titulo: "Regras para Uso da Piscina no Verão",
      tipo: "Circular",
      data: "01/07/2025",
      status: "Publicado",
      destinatarios: "Todos",
    },
    {
      id: 203,
      titulo: "Lembrete: Pagamento da Taxa de Julho",
      tipo: "Mensagem",
      data: "25/06/2025",
      status: "Agendado",
      destinatarios: "Inadimplentes",
    },
    {
      id: 204,
      titulo: "Proposta de Novo Fornecedor de Segurança",
      tipo: "Aviso",
      data: "20/06/2025",
      status: "Rascunho",
      destinatarios: "Nenhum",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusTag = (status) => {
    switch (status) {
      case "Publicado":
        return "bg-green-600/40 text-green-300";
      case "Rascunho":
        return "bg-gray-600/40 text-gray-300";
      case "Agendado":
        return "bg-blue-600/40 text-blue-300";
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

        {/* MENU: Destaque 'Comunicação' */}
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
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold">
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
            Avisos & Comunicação
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
          
          {/* BARRA DE AÇÕES: CRIAR E FILTROS */}
          <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* BUSCA GERAL */}
                  <input
                      type="text"
                      placeholder="Buscar por título ou conteúdo..."
                      className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white w-full sm:flex-1"
                  />
                  
                  {/* BOTÃO CRIAR */}
                  <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                      <i className="fas fa-plus-circle"></i>
                      Criar Novo Aviso/Circular
                  </button>
              </div>

              {/* FILTROS ADICIONAIS */}
              <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-sm opacity-70">Filtrar por:</p>
                  
                  {/* FILTRO DE TIPO */}
                  <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                      <option value="">Todos os Tipos</option>
                      <option value="Aviso">Aviso (Urgente)</option>
                      <option value="Circular">Circular (Regras)</option>
                      <option value="Mensagem">Mensagem (Específico)</option>
                  </select>

                    {/* FILTRO DE STATUS */}
                  <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                      <option value="">Todos os Status</option>
                      <option value="Publicado">Publicado</option>
                      <option value="Agendado">Agendado</option>
                      <option value="Rascunho">Rascunho</option>
                  </select>
              </div>
          </div>


          {/* TABELA DE COMUNICAÇÕES */}
          <div className="overflow-x-auto bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-bold p-4 sm:p-6 border-b border-gray-800">Histórico de Comunicações</h3>
            <table className="min-w-[900px] w-full text-left border-collapse text-sm">
              <thead>
                <tr className="text-violet-300 border-b border-gray-800">
                  <th className="p-3 whitespace-nowrap">ID</th>
                  <th className="p-3 whitespace-nowrap">Título</th>
                  <th className="p-3 whitespace-nowrap">Tipo</th>
                  <th className="p-3 whitespace-nowrap">Data</th>
                  <th className="p-3 whitespace-nowrap">Destinatários</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 text-center whitespace-nowrap">Ações</th>
                </tr>
              </thead>

              <tbody>
                {dummyComunicaciones.map((comunicacao) => (
                  <tr
                    key={comunicacao.id}
                    className="border-b border-gray-800/40 hover:bg-gray-900/40"
                  >
                    <td className="p-3 whitespace-nowrap text-xs opacity-70">
                      {comunicacao.id}
                    </td>
                    <td className="p-3 whitespace-nowrap font-medium max-w-xs truncate">
                      {comunicacao.titulo}
                    </td>
                    <td className="p-3 whitespace-nowrap font-semibold">
                      {comunicacao.tipo}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {comunicacao.data}
                    </td>
                    <td className="p-3 whitespace-nowrap text-blue-300">
                      {comunicacao.destinatarios}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusTag(
                          comunicacao.status
                        )}`}
                      >
                        {comunicacao.status}
                      </span>
                    </td>

                    {/* ÍCONES */}
                    <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                      <button className="text-blue-300 hover:text-blue-200" title="Ver Conteúdo/Detalhes">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="text-yellow-300 hover:text-yellow-200" title="Editar Comunicação">
                        <i className="fas fa-edit"></i>
                      </button>

                      <button className="text-red-400 hover:text-red-300" title="Excluir Comunicação">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINAÇÃO */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
              <p className="opacity-70 text-xs sm:text-sm">
                Mostrando 1 a 4 de 15 registros
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