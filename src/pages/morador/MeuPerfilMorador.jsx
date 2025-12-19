import { useState } from "react";
import React from "react";
import LayoutMorador from "./components/LayoutMorador";

export default function MeuPerfilMorador() {
  const [activeTab, setActiveTab] = useState("pessoal"); // 'pessoal' ou 'seguranca'

  // --- MOCKUP DE DADOS DO MORADOR ---
  const dadosMorador = {
    nome: "Joana Freitas",
    unidade: "Apto 103, Bloco C",
    condominio: "Residencial Jardins",
    email: "joana.freitas@mail.com",
    telefone: "+244 912 345 678", // Formato angolano
    dataNascimento: "1990-05-15",
    bi: "123456789LA045",
  };

  // Funções de manipulação (MOCKUP)
  const handleSavePessoal = (e) => {
    e.preventDefault();
    console.log("Dados Pessoais Salvos!");
    alert("Dados Pessoais atualizados com sucesso!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Senha alterada!");
    alert("Senha alterada com sucesso!");
  };

  return (
    <LayoutMorador 
      dadosMorador={dadosMorador} 
      title="Meu Perfil e Configurações"
    >
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
        
        {/* ABAS DE NAVEGAÇÃO (Mantendo seu layout original) */}
        <div className="border-b border-gray-800 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                    onClick={() => setActiveTab('pessoal')}
                    className={`
                        whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition
                        ${activeTab === 'pessoal' 
                            ? 'border-teal-400 text-teal-400' 
                            : 'border-transparent text-white/70 hover:text-white hover:border-gray-300'
                        }
                    `}
                >
                    <i className="fas fa-user-edit mr-2"></i> Dados Pessoais
                </button>
                <button
                    onClick={() => setActiveTab('seguranca')}
                    className={`
                        whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition
                        ${activeTab === 'seguranca' 
                            ? 'border-teal-400 text-teal-400' 
                            : 'border-transparent text-white/70 hover:text-white hover:border-gray-300'
                        }
                    `}
                >
                    <i className="fas fa-lock mr-2"></i> Segurança
                </button>
            </nav>
        </div>

        {/* CONTEÚDO DA ABA (Mantendo seus campos e estrutura) */}
        <div>
            {/* -------------------- ABA: DADOS PESSOAIS -------------------- */}
            {activeTab === 'pessoal' && (
                <form onSubmit={handleSavePessoal} className="space-y-6">
                    <h3 className="text-xl font-bold text-teal-400">Informações de Contato e Pessoais</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-white/70">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                defaultValue={dadosMorador.nome}
                                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/70">Email (Não Editável)</label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={dadosMorador.email}
                                className="mt-1 block w-full bg-gray-700/50 border border-gray-700 rounded-md shadow-sm py-2 px-3 cursor-not-allowed text-white/50"
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="telefone" className="block text-sm font-medium text-white/70">Telefone</label>
                            <input
                                type="tel"
                                id="telefone"
                                defaultValue={dadosMorador.telefone}
                                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="nascimento" className="block text-sm font-medium text-white/70">Data de Nascimento</label>
                            <input
                                type="date"
                                id="nascimento"
                                defaultValue={dadosMorador.dataNascimento}
                                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="bi" className="block text-sm font-medium text-white/70">Nº do BI / Identificação</label>
                            <input
                                type="text"
                                id="bi"
                                defaultValue={dadosMorador.bi}
                                className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-600 hover:bg-teal-500 transition font-semibold rounded-lg text-white shadow-md flex items-center gap-2"
                        >
                            <i className="fas fa-save"></i> Salvar Alterações
                        </button>
                    </div>
                </form>
            )}

            {/* -------------------- ABA: SEGURANÇA -------------------- */}
            {activeTab === 'seguranca' && (
                <form onSubmit={handleChangePassword} className="space-y-6 max-w-lg">
                    <h3 className="text-xl font-bold text-teal-400">Alterar Palavra-Passe</h3>

                    <p className="text-sm text-white/70">
                        Use uma senha forte, combinando letras maiúsculas e minúsculas, números e símbolos, para proteger sua conta.
                    </p>

                    <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-white/70">Palavra-Passe Atual</label>
                        <input
                            type="password"
                            id="current-password"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-white/70">Nova Palavra-Passe</label>
                        <input
                            type="password"
                            id="new-password"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-white/70">Confirmar Nova Palavra-Passe</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                            required
                        />
                    </div>
                    
                    <div className="pt-4 border-t border-gray-800 flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-red-600 hover:bg-red-500 transition font-semibold rounded-lg text-white shadow-md flex items-center gap-2"
                        >
                            <i className="fas fa-key"></i> Alterar Senha
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </LayoutMorador>
  );
}