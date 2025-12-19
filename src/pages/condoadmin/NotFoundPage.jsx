import React from 'react';
import CondoLayout from "./components/CondoLayout";

export default function NotFoundPage() {
  
  return (
    <CondoLayout title="Erro de Navegação">
      {/* CONTEÚDO PRINCIPAL (Centralização do Erro 404) */}
      <main className="flex items-center justify-center min-h-[calc(100vh-160px)]">
        <div className="text-center bg-gray-900/50 border border-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl max-w-lg w-full backdrop-blur-md">
          
          {/* Ícone de Erro */}
          <div className="text-8xl sm:text-9xl mb-4 text-red-500">
            <i className="fas fa-satellite-dish"></i>
          </div>

          {/* Código do Status */}
          <h1 className="text-7xl sm:text-9xl font-extrabold mb-4 tracking-wider text-violet-400">
            404
          </h1>
          
          {/* Título */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Página Não Encontrada
          </h2>

          {/* Mensagem Detalhada */}
          <p className="text-white/70 text-base sm:text-lg mb-8">
            Ops! Parece que o endereço que você digitou está errado ou a página foi removida.
          </p>

          {/* Botões de Navegação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-700/60 hover:bg-gray-700 transition font-semibold rounded-lg w-full sm:w-auto text-white/90 border border-gray-700 shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              Voltar
            </button>
            
            <button 
              onClick={() => window.location.href = '/'} 
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg w-full sm:w-auto text-white shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-home"></i>
              Ir para o Dashboard
            </button>
          </div>
        </div>
      </main>
    </CondoLayout>
  );
}