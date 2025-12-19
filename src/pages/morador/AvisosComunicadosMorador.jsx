import { useState } from "react";
import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function AvisosComunicadosMorador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Todos");

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

  const getTypeClasses = (tipo) => {
    switch (tipo) {
      case 'Urgente': return 'bg-red-600/30 text-red-300';
      case 'Manutenção': return 'bg-yellow-600/30 text-yellow-300';
      case 'Geral': return 'bg-blue-600/30 text-blue-300';
      default: return 'bg-gray-700/50 text-white/70';
    }
  };
  
  const getReadClasses = (lido) => {
      return lido ? 'opacity-70' : 'bg-gray-800 border-l-4 border-teal-400 font-semibold';
  };

  const filteredAvisos = avisosMock.filter(aviso => {
    const matchesSearchTerm = 
      aviso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aviso.conteudo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "Todos" || aviso.tipo === filterType;
    return matchesSearchTerm && matchesType;
  });

  const unreadCount = avisosMock.filter(aviso => !aviso.lido).length;

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      avisoCount={unreadCount} 
      title="Avisos & Comunicados"
    >
      {/* FILTROS (Mantendo seu layout original) */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        <div className="flex gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  placeholder="Buscar título ou conteúdo"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-teal-500 focus:border-teal-500 transition placeholder-gray-500 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"></i>
            </div>
            
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

      {/* LISTAGEM (Mantendo exatamente seu layout de cards) */}
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
                    <span className={`px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClasses(aviso.tipo)}`}>
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
    </LayoutMorador>
  );
}