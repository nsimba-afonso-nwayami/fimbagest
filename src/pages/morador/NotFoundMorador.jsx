import React from "react";
import { Link } from "react-router-dom";
import LayoutMorador from "./components/LayoutMorador";

export default function NotFoundMorador() {
  
  // --- MOCKUP DE DADOS ESSENCIAIS ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
  };

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      title="Erro de Navegação"
    >
      {/* CONTEÚDO PRINCIPAL (Mantendo exatamente o seu layout de erro) */}
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center space-y-8 bg-gray-900/30 border border-gray-800 rounded-xl shadow-2xl p-8 sm:p-12 max-w-lg w-full backdrop-blur-md">
            
            {/* Ícone de Erro Grande */}
            <div className="flex justify-center mb-6">
              <i className="fas fa-exclamation-triangle text-red-500 text-6xl"></i>
            </div>
    
            {/* Título de Erro */}
            <h1 className="text-8xl font-extrabold text-teal-400">
              404
            </h1>
            
            {/* Mensagem Principal */}
            <h2 className="text-3xl font-bold tracking-tight text-white/90">
              Página Não Encontrada
            </h2>
            
            {/* Descrição */}
            <p className="text-lg text-white/70">
              Desculpe, o endereço que você tentou acessar não existe. Utilize o menu lateral para navegar.
            </p>

            {/* Ações de Retorno */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                to="/dashboard/morador"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 transition font-semibold rounded-lg text-white shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Ir para o Dashboard
              </Link>
            </div>
        </div>
      </div>
    </LayoutMorador>
  );
}