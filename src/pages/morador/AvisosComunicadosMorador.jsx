import { useState } from "react";
import React from "react";

export default function AvisosComunicadosMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Todos"); // Estado para filtro por tipo

  // --- MOCKUP DE DADOS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  const avisosMock = [
    { 
        id: 401, 
        titulo: "Interrupção Programada de Água", 
        data: "15/12/2025", 
        tipo: "Manutenção", 
        conteudo: "Amanhã, das 9h às 12h, haverá corte de água para reparos na rede principal...", 
        lido: false 
    },
    { 
        id: 402, 
        titulo: "Assembleia Extraordinária - Orçamento 2026", 
        data: "05/12/2025", 
        tipo: "Geral", 
        conteudo: "Convocamos todos os moradores para a Assembleia no Salão de Festas, às 19h.", 
        lido: true 
    },
    { 
        id: 403, 
        titulo: "Alerta de Segurança: Portão Automático", 
        data: "12/12/2025", 
        tipo: "Urgente", 
        conteudo: "O portão de acesso principal está com problemas técnicos. Favor usar o portão secundário até a correção.", 
        lido: false 
    },
    { 
        id: 404, 
        titulo: "Troca de Senhas Wi-Fi da Área Comum", 
        data: "01/12/2025", 
        tipo: "Geral", 
        conteudo: "A senha do Wi-Fi do Espaço Gourmet foi atualizada. Nova senha disponível no mural de avisos.", 
        lido: true 
    },
    { 
        id: 405, 
        titulo: "Limpeza de Caixa d'Água Bloco C", 
        data: "25/11/2025", 
        tipo: "Manutenção", 
        conteudo: "A limpeza anual da caixa d'água do Bloco C será realizada na próxima semana...", 
        lido: true 
    },
  ];

  // Função utilitária para mapear tipo para classes de cor de fundo
  const getTypeClasses = (tipo) => {
    switch (tipo) {
      case 'Urgente':
        return 'bg-red-600/30 text-red-300';
      case 'Manutenção':
        return 'bg-yellow-600/30 text-yellow-300';
      case 'Geral':
        return 'bg-blue-600/30 text-blue-300';
      default:
        return 'bg-gray-700/50 text-white/70';
    }
  };
  
  // Função utilitária para destacar avisos não lidos
  const getReadClasses = (lido) => {
      // Destaque para não lidos
      return lido ? 'opacity-70' : 'bg-gray-800 border-l-4 border-teal-400 font-semibold';
  };

  // --- LÓGICA DE FILTRAGEM ---
  const filteredAvisos = avisosMock.filter(aviso => {
    const matchesSearchTerm = 
      aviso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aviso.conteudo.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = 
      filterType === "Todos" || aviso.tipo === filterType;
      
    return matchesSearchTerm && matchesType;
  });

  // Contagem de avisos não lidos para o menu
  const unreadCount = avisosMock.filter(aviso => !aviso.lido).length;

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
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-teal-400"></i>
            Financeiro
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold justify-between items-center">
            <span>
              <i className="fas fa-bell mr-3 text-teal-400"></i>
              Avisos & Comunicados
            </span>
            {unreadCount > 0 && (
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount}
                </span>
            )}
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
            Avisos & Comunicados
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
            
            <div className="flex gap-4 w-full sm:w-auto">
                {/* INPUT DE PESQUISA */}
                <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder="Buscar título ou conteúdo"
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition placeholder-gray-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"></i>
                </div>
                
                {/* SELECT DE FILTRO POR TIPO */}
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-gray-800/70 border border-gray-700 rounded-lg py-2 px-3 text-sm focus:ring-teal-500 focus:border-teal-500 transition text-white/80 w-40"
                >
                  <option value="Todos">Todos Tipos</option>
                  <option value="Urgente">Urgente</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Geral">Geral</option>
                </select>
            </div>

            <p className="text-sm text-white/60 flex items-center justify-end sm:justify-start">
                {unreadCount} aviso(s) novo(s)
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Caixa de Entrada ({filteredAvisos.length})</h3>

            <div className="space-y-4">
              {filteredAvisos.length > 0 ? (
                filteredAvisos.map((aviso) => (
                  <div 
                    key={aviso.id} 
                    className={`
                      p-4 rounded-lg cursor-pointer transition 
                      hover:bg-gray-800/80
                      ${getReadClasses(aviso.lido)}
                    `}
                    title="Clique para ler o aviso completo"
                  >
                    <div className="flex justify-between items-start">
                        <h4 className="text-lg truncate max-w-[80%]">
                            {aviso.titulo}
                        </h4>
                        <span 
                            className={`
                              px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${getTypeClasses(aviso.tipo)}
                            `}
                          >
                            {aviso.tipo}
                        </span>
                    </div>
                    <p className="text-sm text-white/70 mt-1 line-clamp-2">
                        {aviso.conteudo}
                    </p>
                    <div className="flex justify-between items-center text-xs text-white/50 mt-2">
                        <span>
                            <i className={`fas fa-${aviso.lido ? 'check-circle' : 'circle'} mr-1`}></i>
                            {aviso.lido ? 'Lido' : 'Novo Aviso'}
                        </span>
                        <span>
                            Publicado em {aviso.data}
                        </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-white/50">
                  Nenhum aviso ou comunicado encontrado com os filtros aplicados.
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}