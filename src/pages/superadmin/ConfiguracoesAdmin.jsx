import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";

export default function ConfiguracoesAdmin() {
  const [activeTab, setActiveTab] = useState("perfil");

  // --- Dados de Exemplo para a Tabela de Usuários ---
  const dummyUsuarios = [
    { id: 1, nome: "Admin Geral", email: "admin@fimbagest.com", perfil: "Super Admin", status: "Ativo" },
    { id: 2, nome: "Moderador Financeiro", email: "financeiro@fimbagest.com", perfil: "Moderador", status: "Ativo" },
    { id: 3, nome: "Suporte Técnico", email: "suporte@fimbagest.com", perfil: "Suporte", status: "Inativo" },
  ];

  // --- Renderização de Conteúdo por Aba (Mantida exatamente como a original) ---
  const renderContent = () => {
    switch (activeTab) {
      case "perfil":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Meu Perfil e Dados Pessoais</h3>
            <p className="text-white/70">Gerencie seu nome, email e outras informações de contato.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Nome Completo</label>
                        <input type="text" defaultValue="Admin Geral" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none text-white" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Email de Contato</label>
                        <input type="email" defaultValue="admin@fimbagest.com" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none text-white" />
                    </div>
                </div>
                <div className="space-y-3 p-4 bg-blue-900/30 rounded-lg border border-blue-800 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-violet-600 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-user text-white text-4xl"></i>
                    </div>
                    <p className="text-sm opacity-70">Clique para mudar a foto de perfil</p>
                    <button className="text-sm px-4 py-1 bg-blue-700/60 rounded-lg hover:bg-blue-600">
                        Carregar Imagem
                    </button>
                </div>
            </div>
            <button className="px-5 py-2 bg-green-600 hover:bg-green-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm mt-6">
                <i className="fas fa-save"></i>
                Salvar Dados Pessoais
            </button>
          </div>
        );

      case "seguranca":
        return (
            <div className="space-y-6 max-w-lg">
                <h3 className="text-xl font-bold">Segurança e Autenticação</h3>
                <p className="text-white/70">Use uma senha forte e única para proteger sua conta.</p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Senha Atual</label>
                        <input type="password" placeholder="Digite sua senha atual" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Nova Senha</label>
                        <input type="password" placeholder="Mínimo 8 caracteres" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Confirme a Nova Senha</label>
                        <input type="password" placeholder="Digite a nova senha novamente" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white" />
                    </div>
                </div>
                <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm mt-6">
                    <i className="fas fa-key"></i>
                    Alterar Senha
                </button>
          </div>
        );

      case "usuarios":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Usuários do Sistema</h3>
                <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm">
                    <i className="fas fa-user-plus"></i>
                    Adicionar Novo Usuário
                </button>
            </div>
            <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
                <table className="min-w-[800px] w-full text-left border-collapse text-sm">
                <thead>
                    <tr className="text-violet-300 border-b border-blue-800">
                    <th className="p-3 whitespace-nowrap">ID</th>
                    <th className="p-3 whitespace-nowrap">Nome</th>
                    <th className="p-3 whitespace-nowrap">Email</th>
                    <th className="p-3 whitespace-nowrap">Perfil</th>
                    <th className="p-3 whitespace-nowrap">Status</th>
                    <th className="p-3 text-center whitespace-nowrap">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyUsuarios.map((user) => (
                    <tr key={user.id} className="border-b border-blue-800/40 hover:bg-blue-900/40">
                        <td className="p-3 whitespace-nowrap">{user.id}</td>
                        <td className="p-3 whitespace-nowrap font-medium">{user.nome}</td>
                        <td className="p-3 whitespace-nowrap">{user.email}</td>
                        <td className="p-3 whitespace-nowrap text-violet-400">{user.perfil}</td>
                        <td className="p-3 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${user.status === "Ativo" ? "bg-green-600/40" : "bg-red-600/40"}`}>
                            {user.status}
                        </span>
                        </td>
                        <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                        <button className="text-yellow-300 hover:text-yellow-200" title="Editar Permissões">
                            <i className="fas fa-user-gear"></i>
                        </button>
                        <button className="text-red-400 hover:text-red-300" title="Remover Usuário">
                            <i className="fas fa-trash"></i>
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </div>
        );

      case "sistema":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Configurações Globais</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-xl shadow-lg space-y-4">
                    <h4 className="text-lg font-semibold text-violet-400"><i className="fas fa-dollar-sign mr-2"></i>Financeiro</h4>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Taxa de Inadimplência Padrão (%)</label>
                        <input type="number" defaultValue="2.0" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none text-white" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Moeda Padrão</label>
                        <select className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
                            <option className="bg-blue-900">AOA (Kwanza Angolano)</option>
                            <option className="bg-blue-900">USD (Dólar Americano)</option>
                        </select>
                    </div>
                </div>
                <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-xl shadow-lg space-y-4">
                    <h4 className="text-lg font-semibold text-violet-400"><i className="fas fa-plug mr-2"></i>Integrações</h4>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">API de Pagamento</label>
                        <input type="text" placeholder="Chave da API de Pagamento" className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 focus:outline-none placeholder:text-white/60 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 opacity-70">Notificações por Email</label>
                        <select className="w-full p-3 rounded-lg bg-blue-900/40 border border-blue-800 text-white">
                            <option className="bg-blue-900">Ativo</option>
                            <option className="bg-blue-900">Inativo</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="px-5 py-2 bg-green-600 hover:bg-green-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm mt-6">
                <i className="fas fa-save"></i>
                Salvar Alterações
            </button>
          </div>
        );

      case "logs":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Logs de Auditoria Recentes</h3>
             <div className="overflow-x-auto bg-blue-900/30 border border-blue-800 rounded-xl shadow-xl backdrop-blur-md">
                <table className="min-w-[1000px] w-full text-left border-collapse text-sm">
                <thead>
                    <tr className="text-violet-300 border-b border-blue-800">
                    <th className="p-3 whitespace-nowrap">ID</th>
                    <th className="p-3 whitespace-nowrap">Data/Hora</th>
                    <th className="p-3 whitespace-nowrap">Usuário</th>
                    <th className="p-3 whitespace-nowrap">Ação</th>
                    <th className="p-3 whitespace-nowrap">Objeto Afetado</th>
                    <th className="p-3 whitespace-nowrap">IP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-blue-800/40 hover:bg-blue-900/40"><td className="p-3">98</td><td className="p-3">11/12/2025 18:05</td><td className="p-3">Admin Geral</td><td className="p-3 text-yellow-400">Edição</td><td className="p-3">Config. Taxas</td><td className="p-3">192.168.1.5</td></tr>
                    <tr className="border-b border-blue-800/40 hover:bg-blue-900/40"><td className="p-3">97</td><td className="p-3">11/12/2025 17:55</td><td className="p-3">Moderador Financeiro</td><td className="p-3 text-green-400">Criação</td><td className="p-3">Condomínio 'Aurora'</td><td className="p-3">10.0.0.22</td></tr>
                </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center pt-3">
                <p className="opacity-70 text-sm">Use o filtro de data no topo da página para buscar logs mais antigos.</p>
                <button className="px-5 py-2 bg-blue-600/40 border border-blue-600 hover:bg-blue-500/40 transition font-semibold rounded-lg shadow-lg flex items-center gap-2 text-sm">
                    <i className="fas fa-download"></i>
                    Baixar Logs (CSV)
                </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout title="Configurações do Sistema">
      {/* ABAS DE NAVEGAÇÃO - Mantidas com seu layout original */}
      <div className="flex flex-wrap border-b border-blue-800">
          <TabButton title="Meu Perfil" icon="fas fa-user-circle" tab="perfil" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton title="Segurança" icon="fas fa-lock" tab="seguranca" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton title="Usuários & Permissões" icon="fas fa-users-gear" tab="usuarios" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton title="Configurações Gerais" icon="fas fa-screwdriver-wrench" tab="sistema" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton title="Logs de Auditoria" icon="fas fa-shield-halved" tab="logs" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* CONTEÚDO DA ABA ATIVA */}
      <div className="bg-blue-900/30 border border-blue-800 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md">
          {renderContent()}
      </div>
    </DashboardLayout>
  );
}

// Componente auxiliar TabButton original
const TabButton = ({ title, icon, tab, activeTab, setActiveTab }) => (
    <button
        onClick={() => setActiveTab(tab)}
        className={`
            px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all
            flex items-center gap-2
            ${activeTab === tab
                ? 'text-violet-400 border-b-2 border-violet-400 bg-blue-900/40'
                : 'text-white/70 hover:text-white hover:bg-blue-900/20'
            }
        `}
    >
        <i className={icon}></i>
        {title}
    </button>
);