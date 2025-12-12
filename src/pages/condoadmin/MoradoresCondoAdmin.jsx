import { useState } from "react";

export default function MoradoresCondoAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- Dados de Exemplo (Focados no "Residencial Jardins") ---
  const dummyMoradores = [
    {
      id: 101,
      nome: "António Manuel",
      unidade: "B-102",
      bloco: "B",
      email: "antonio.m@email.com",
      telefone: "930 XXX-XXX",
      status: "Ativo",
    },
    {
      id: 102,
      nome: "Elsa Rocha",
      unidade: "A-301",
      bloco: "A",
      email: "elsa.r@email.com",
      telefone: "915 XXX-XXX",
      status: "Ativo",
    },
    {
      id: 103,
      nome: "Joana Freitas",
      unidade: "15-A",
      bloco: "15", // Assumindo '15' como bloco para simplificar
      email: "joana.f@email.com",
      telefone: "922 XXX-XXX",
      status: "Inativo",
    },
    {
      id: 104,
      nome: "Carlos Silva",
      unidade: "A-205",
      bloco: "A",
      email: "carlos.s@email.com",
      telefone: "945 XXX-XXX",
      status: "Ativo",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusColor = (status) => {
    return status === "Ativo" ? "bg-green-600/40 text-green-300" : "bg-red-600/40 text-red-300";
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
        
        {/* MENU: Destaque 'Moradores' */}
        <nav className="space-y-4 text-lg">
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-gauge-high mr-3 text-violet-400"></i>
            Dashboard
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold">
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
            Moradores e Unidades
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
          
          {/* BARRA DE AÇÕES: BUSCA E ADICIONAR (COM NOVOS FILTROS) */}
          <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* BUSCA GERAL */}
                  <input
                      type="text"
                      placeholder="Buscar por nome ou email..."
                      className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white w-full sm:flex-1"
                  />
                  
                  {/* BOTÃO ADICIONAR */}
                  <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                      <i className="fas fa-user-plus"></i>
                      Cadastrar Novo Morador
                  </button>
              </div>

              {/* FILTROS ADICIONAIS */}
              <div className="flex flex-wrap gap-4 items-center">
                  <p className="text-sm opacity-70">Filtrar por:</p>
                  
                  {/* FILTRO DE STATUS */}
                  <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                      <option value="">Todos os Status</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo (Bloqueado)</option>
                  </select>

                  {/* FILTRO DE BLOCO */}
                  <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
                      <option value="">Todas as Unidades/Blocos</option>
                      <option value="A">Bloco A</option>
                      <option value="B">Bloco B</option>
                      <option value="15">Outras</option>
                      {/* Mais opções de bloco/torre... */}
                  </select>
              </div>
          </div>


          {/* TABELA DE MORADORES */}
          <div className="overflow-x-auto bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md">
            <table className="min-w-[900px] w-full text-left border-collapse text-sm">
              <thead>
                <tr className="text-violet-300 border-b border-gray-800">
                  <th className="p-3 whitespace-nowrap">ID</th>
                  <th className="p-3 whitespace-nowrap">Nome Completo</th>
                  <th className="p-3 whitespace-nowrap">Unidade</th>
                  <th className="p-3 whitespace-nowrap">Email</th>
                  <th className="p-3 whitespace-nowrap">Telefone</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 text-center whitespace-nowrap">Ações</th>
                </tr>
              </thead>

              <tbody>
                {dummyMoradores.map((morador) => (
                  <tr
                    key={morador.id}
                    className="border-b border-gray-800/40 hover:bg-gray-900/40"
                  >
                    <td className="p-3 whitespace-nowrap">{morador.id}</td>
                    <td className="p-3 whitespace-nowrap font-medium">
                      {morador.nome}
                    </td>
                    <td className="p-3 whitespace-nowrap text-violet-400 font-semibold">
                      {morador.unidade}
                    </td>
                    <td className="p-3 whitespace-nowrap">{morador.email}</td>
                    <td className="p-3 whitespace-nowrap">{morador.telefone}</td>
                    <td className="p-3 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                          morador.status
                        )}`}
                      >
                        {morador.status}
                      </span>
                    </td>

                    {/* ÍCONES */}
                    <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                      <button className="text-blue-300 hover:text-blue-200" title="Ver Detalhes/Histórico">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="text-yellow-300 hover:text-yellow-200" title="Editar Morador/Unidade">
                        <i className="fas fa-edit"></i>
                      </button>

                      <button className="text-red-400 hover:text-red-300" title="Desativar/Remover Acesso">
                        <i className="fas fa-user-slash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINAÇÃO */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
              <p className="opacity-70 text-xs sm:text-sm">
                Mostrando 1 a 4 de 120 registros
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