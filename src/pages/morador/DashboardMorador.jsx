import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function DashboardMorador() {
  // --- MOCKUP DE DADOS DO MORADOR ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
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

  const avisosRecentes = [
    { id: 1, titulo: "Manutenção da Piscina", data: "10/12/2025", lido: false },
    { id: 2, titulo: "Comunicado: Taxa Extra", data: "05/12/2025", lido: false },
    { id: 3, titulo: "Feira de Natal", data: "01/12/2025", lido: true },
  ];

  // Extrai o primeiro nome para a saudação
  const primeiroNome = dadosMorador.nome.split(" ")[0];

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      avisoCount={sumarioMorador[0].valor}
      title={`Olá, ${primeiroNome}!`}
    >
      {/* Título Interno da Seção */}
      <h2 className="text-2xl font-bold tracking-tight">Resumo da Unidade</h2>

      {/* CARDS (Sumário do Morador) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sumarioMorador.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900/40 border border-gray-800 backdrop-blur-xl p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-4 hover:bg-gray-900/50 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <i className={`${card.icone} text-3xl sm:text-4xl ${card.cor} shrink-0`}></i>
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
              className={`flex flex-col items-start p-4 rounded-xl transition hover:scale-[1.02] text-left border border-transparent hover:border-white/10 ${acao.cor}`}
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
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Avisos Recentes</h3>
          <button className="text-sm font-medium text-teal-400 hover:text-teal-300 transition">
            Ver Todos <i className="fas fa-chevron-right ml-1 text-xs"></i>
          </button>
        </div>

        <div className="space-y-3">
          {avisosRecentes.map((aviso) => (
            <div
              key={aviso.id}
              className={`p-4 rounded-lg flex items-center justify-between transition cursor-pointer 
                ${
                  aviso.lido
                    ? "bg-gray-800/30 text-white/60 hover:bg-gray-800/50 border border-transparent"
                    : "bg-indigo-900/20 border border-indigo-500/30 text-white font-medium hover:bg-indigo-900/30"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <i
                  className={`fas fa-circle text-[8px] ${
                    aviso.lido ? "text-gray-600" : "text-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]"
                  }`}
                ></i>
                <span className="text-sm sm:text-base">{aviso.titulo}</span>
              </div>
              <span className="text-[10px] sm:text-xs opacity-60 shrink-0 ml-4">{aviso.data}</span>
            </div>
          ))}
        </div>
      </div>
    </LayoutMorador>
  );
}