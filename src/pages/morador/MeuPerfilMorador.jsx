import { useState } from "react";
import React from "react";

export default function MeuPerfilMorador() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    // Lógica para enviar dados atualizados
    alert("Dados Pessoais atualizados com sucesso!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Senha alterada!");
    // Lógica para alterar senha
    alert("Senha alterada com sucesso!");
  };

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
          <a className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-teal-400"></i>
            Avisos & Comunicados
          </a>
          {/* Item Ativo */}
          <a className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-teal-400 font-semibold">
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
            Meu Perfil e Configurações
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
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-4 sm:p-6">
            
            {/* ABAS DE NAVEGAÇÃO */}
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

            {/* CONTEÚDO DA ABA */}
            <div>
                {/* -------------------- ABA: DADOS PESSOAIS -------------------- */}
                {activeTab === 'pessoal' && (
                    <form onSubmit={handleSavePessoal} className="space-y-6">
                        <h3 className="text-xl font-bold text-teal-400">Informações de Contato e Pessoais</h3>

                        {/* Campos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nome */}
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
                            {/* Email */}
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
                            {/* Telefone */}
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
                            {/* Data de Nascimento */}
                            <div>
                                <label htmlFor="nascimento" className="block text-sm font-medium text-white/70">Data de Nascimento</label>
                                <input
                                    type="date"
                                    id="nascimento"
                                    defaultValue={dadosMorador.dataNascimento}
                                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white/90"
                                />
                            </div>
                            {/* BI */}
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

                        {/* Campos de Senha */}
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

        </main>
      </div>
    </div>
  );
}