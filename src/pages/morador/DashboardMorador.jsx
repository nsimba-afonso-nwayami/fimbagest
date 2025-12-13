import { useState } from "react";
import React from "react";

export default function DashboardMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // --- MOCKUP DE DADOS DO MORADOR ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins", // ADICIONADO
    proximaReserva: {
      area: "Salão de Festas",
      data: "2026-01-20",
      status: "Confirmada",
    },
  };

  const sumarioMorador = [
    {
      titulo: "Avisos Não Lidos",
      valor: 3,
      icone: "fas fa-envelope-open-text",
      cor: "text-indigo-400",
    },
    {
      titulo: "Ocorrências Abertas",
      valor: 1,
      icone: "fas fa-exclamation-triangle",
      cor: "text-red-400",
    },
    {
      titulo: "Próxima Reserva",
      valor: dadosMorador.proximaReserva.area,
      icone: "fas fa-calendar-alt",
      cor: "text-teal-400",
    },
  ];

  const acoesRapidas = [
    {
      titulo: "Nova Reserva",
      descricao: "Agende churrasqueiras, salões e quadras.",
      icone: "fas fa-calendar-plus",
      cor: "bg-teal-600/30 text-teal-300",
    },
    {
      titulo: "Abrir Ocorrência",
      descricao: "Reporte problemas ou solicite manutenção.",
      icone: "fas fa-wrench",
      cor: "bg-red-600/30 text-red-300",
    },
    {
      titulo: "Ver Extrato",
      descricao: "Acesse boletos e histórico financeiro.",
      icone: "fas fa-file-invoice-dollar",
      cor: "bg-yellow-600/30 text-yellow-300",
    },
  ];
  
  // Lista de Avisos Recentes (Mockup)
  const avisosRecentes = [
    { id: 1, titulo: "Manutenção da Piscina", data: "10/12/2025", lido: false },
    { id: 2, titulo: "Comunicado: Taxa Extra", data: "05/12/2025", lido: false },
    { id: 3, titulo: "Feira de Natal", data: "01/12/2025", lido: true },
  ];


  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* SIDEBAR (Morador) - CLASSE 'overflow-y-auto' ADICIONADA */}
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

        {/* MENU: Destaque 'Dashboard' */}
        <nav className="space-y-4 text-lg">
          {/* Item Ativo */}
          <a href="/dashboard/morador" className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
            <i className="fas fa-home mr-3 text-teal-400"></i>
            Dashboard
          </a>
          <a href="/dashboard/morador/reservas" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-calendar-alt mr-3 text-teal-400"></i>
            Minhas Reservas
          </a>
          <a href="/dashboard/morador/ocorrencias" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-wrench mr-3 text-teal-400"></i>
            Minhas Ocorrências
          </a>
          <a href="/dashboard/morador/financeiro" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-teal-400"></i>
            Financeiro
          </a>
          <a href="/dashboard/morador/avisos" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-teal-400"></i>
            Avisos & Comunicados
          </a>
          <a href="/dashboard/morador/meu-perfil" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
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
            Olá, {dadosMorador.nome.split(" ")[0]}!
          </h2>

          {/* Notificações + Perfil */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-xl sm:text-2xl text-indigo-400 hover:text-indigo-300 transition-all">
              <i className="fas fa-bell"></i>
              <span
                className="
                  absolute -top-1 -right-1 bg-red-500 text-white text-[10px]
                  w-4 h-4 rounded-full flex items-center justify-center font-bold
                "
              >
                {sumarioMorador[0].valor}
              </span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80 hidden sm:block">
                {dadosMorador.unidade}
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-base font-semibold">
                  {dadosMorador.nome[0]}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="mt-20 p-4 sm:p-6 space-y-8 sm:space-y-10">
          
          <h2 className="text-2xl font-bold">Resumo da Unidade</h2>

          {/* CARDS (Sumário do Morador) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sumarioMorador.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-4 hover:bg-gray-900/50 hover:scale-[1.02] transition-all cursor-pointer"
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

          {/* SEÇÃO: AÇÕES RÁPIDAS */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 text-teal-400">Ações Rápidas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {acoesRapidas.map((acao, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-start p-4 rounded-xl transition hover:scale-[1.02] text-left ${acao.cor}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`${acao.icone} text-2xl`}></i>
                    <span className="text-lg font-semibold">{acao.titulo}</span>
                  </div>
                  <p className="text-sm opacity-80">{acao.descricao}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* SEÇÃO: AVISOS E COMUNICADOS RECENTES */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
                Avisos Recentes
                <button className="text-sm font-medium text-teal-400 hover:text-teal-300">Ver Todos</button>
            </h3>

            <div className="space-y-3">
                {avisosRecentes.map((aviso) => (
                    <div 
                        key={aviso.id} 
                        className={`p-4 rounded-lg flex items-center justify-between transition cursor-pointer 
                            ${aviso.lido ? 'bg-gray-800/50 text-white/70 hover:bg-gray-800/80' : 'bg-indigo-900/30 border border-indigo-700/50 text-white font-semibold hover:bg-indigo-900/40'}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <i className={`fas fa-circle text-xs ${aviso.lido ? 'text-gray-500' : 'text-indigo-400'}`}></i>
                            <span>{aviso.titulo}</span>
                        </div>
                        <span className="text-xs shrink-0 ml-4">{aviso.data}</span>
                    </div>
                ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}