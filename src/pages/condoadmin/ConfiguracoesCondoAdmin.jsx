import { useState } from "react";
import CondoLayout from "./components/CondoLayout";

export default function ConfiguracoesCondoAdmin() {
  const [secaoAtiva, setSecaoAtiva] = useState("dados"); // 'dados', 'regras', 'fornecedores', 'perfil'

  // --- Dados de Exemplo ---
  const dadosCondominio = {
    nome: "Residencial Jardins",
    endereco: "Rua das Acácias, 123 - Luanda, Angola",
    nif: "500012345",
    telefone: "+244 9XX XXX-XXX",
    email: "sindico.jardins@condoapp.ao",
  };

  const dadosAdmin = {
    nome: "António Manuel (Síndico)",
    unidade: "B-102",
    email: "sindico@admin.com",
    telefone: "940 XXX-XXX",
  };

  const fornecedoresDummy = [
    { nome: "Alpha Security", servico: "Segurança e Portaria", contato: "945 XXX-XXX" },
    { nome: "CleanPlus", servico: "Limpeza e Manutenção", contato: "921 XXX-XXX" },
    { nome: "ElectroFix", servico: "Manutenção Elétrica", contato: "933 XXX-XXX" },
  ];

  const regrasDummy = [
    { nome: "Convenção do Condomínio", data: "2020-01-15", status: "Publicado" },
    { nome: "Regimento Interno", data: "2023-11-01", status: "Publicado" },
    { nome: "Normas de Uso da Piscina", data: "2025-10-10", status: "Revisão" },
  ];

  // Componente Reutilizável para o Título da Seção
  const SecaoHeader = ({ titulo, descricao }) => (
    <div className="mb-6 border-b border-gray-800 pb-3">
      <h3 className="text-2xl font-bold text-violet-300">{titulo}</h3>
      <p className="text-sm opacity-70 mt-1">{descricao}</p>
    </div>
  );

  const inputClass = "p-3 rounded-lg bg-gray-900/40 border border-gray-700 focus:outline-none focus:border-violet-500 placeholder:text-white/60 text-white w-full transition-all";

  const renderConteudo = () => {
    switch (secaoAtiva) {
      case "dados":
        return (
          <div className="space-y-6">
            <SecaoHeader 
              titulo="Dados Gerais do Condomínio" 
              descricao="Atualize as informações de identificação e contato visíveis para os moradores."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-semibold mb-2 block">Nome do Condomínio</span>
                <input type="text" value={dadosCondominio.nome} readOnly className={inputClass + " opacity-80"} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold mb-2 block">NIF / Identificação Fiscal</span>
                <input type="text" value={dadosCondominio.nif} readOnly className={inputClass + " opacity-80"} />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold mb-2 block">Morada Completa</span>
              <input type="text" defaultValue={dadosCondominio.endereco} className={inputClass} />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-sm font-semibold mb-2 block">Telefone de Contato</span>
                <input type="text" defaultValue={dadosCondominio.telefone} className={inputClass} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold mb-2 block">Email Principal</span>
                <input type="email" defaultValue={dadosCondominio.email} className={inputClass} />
              </label>
            </div>
            <div className="pt-4 border-t border-gray-800">
                <button className="px-6 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg">
                    Guardar Alterações
                </button>
            </div>
          </div>
        );

      case "perfil":
        return (
            <div className="space-y-8">
              <div className="space-y-6">
                  <SecaoHeader 
                      titulo="Dados do Administrador (Síndico)" 
                      descricao="Atualize seu nome, email e contato. Estes dados identificam você no sistema."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Nome Completo</span>
                          <input type="text" defaultValue={dadosAdmin.nome} className={inputClass} />
                      </label>
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Unidade Associada</span>
                          <input type="text" defaultValue={dadosAdmin.unidade} readOnly className={inputClass + " opacity-70 bg-gray-900/50"} />
                      </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Email de Login</span>
                          <input type="email" defaultValue={dadosAdmin.email} className={inputClass} />
                      </label>
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Telefone Pessoal</span>
                          <input type="text" defaultValue={dadosAdmin.telefone} className={inputClass} />
                      </label>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                      <button className="px-6 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg">
                          Guardar Dados Pessoais
                      </button>
                  </div>
              </div>
              <div className="space-y-6 pt-6 border-t border-gray-800">
                  <SecaoHeader 
                      titulo="Alterar Senha" 
                      descricao="Use uma senha forte para manter a segurança da sua conta."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Senha Atual</span>
                          <input type="password" placeholder="********" className={inputClass} />
                      </label>
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Nova Senha</span>
                          <input type="password" placeholder="********" className={inputClass} />
                      </label>
                      <label className="block">
                          <span className="text-sm font-semibold mb-2 block">Confirmar Nova Senha</span>
                          <input type="password" placeholder="********" className={inputClass} />
                      </label>
                  </div>
                  <div className="pt-4">
                      <button className="px-6 py-2 bg-red-600 hover:bg-red-500 transition font-semibold rounded-lg shadow-lg">
                          Alterar Senha
                      </button>
                  </div>
              </div>
            </div>
        );

      case "regras":
        return (
          <div className="space-y-6">
            <SecaoHeader 
              titulo="Regras e Documentação" 
              descricao="Gerencie o Regimento Interno e outros documentos importantes para os moradores."
            />
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2">
                <i className="fas fa-upload"></i>
                Carregar Novo Documento
            </button>
            <div className="overflow-x-auto bg-gray-900/40 border border-gray-800 rounded-lg">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="text-violet-300 border-b border-gray-800">
                            <th className="p-3">Nome do Documento</th>
                            <th className="p-3">Última Atualização</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regrasDummy.map((regra, index) => (
                            <tr key={index} className="border-b border-gray-800/40 hover:bg-gray-800/40">
                                <td className="p-3 font-medium text-blue-300">{regra.nome}</td>
                                <td className="p-3 opacity-80">{regra.data}</td>
                                <td className="p-3">
                                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${regra.status === "Publicado" ? "bg-green-600/40 text-green-300" : "bg-yellow-600/40 text-yellow-300"}`}>
                                    {regra.status}
                                  </span>
                                </td>
                                <td className="p-3 text-center flex justify-center gap-4 text-base">
                                    <button className="text-blue-300 hover:text-blue-200"><i className="fas fa-download"></i></button>
                                    <button className="text-yellow-300 hover:text-yellow-200"><i className="fas fa-edit"></i></button>
                                    <button className="text-red-400 hover:text-red-300"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        );

      case "fornecedores":
        return (
          <div className="space-y-6">
            <SecaoHeader 
              titulo="Gestão de Fornecedores" 
              descricao="Lista de prestadores de serviços contratados pelo Condomínio."
            />
            <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center gap-2">
                <i className="fas fa-handshake"></i>
                Adicionar Novo Fornecedor
            </button>
            <div className="overflow-x-auto bg-gray-900/40 border border-gray-800 rounded-lg">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="text-violet-300 border-b border-gray-800">
                            <th className="p-3">Nome da Empresa</th>
                            <th className="p-3">Serviço Prestado</th>
                            <th className="p-3">Contato Principal</th>
                            <th className="p-3 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedoresDummy.map((fornecedor, index) => (
                            <tr key={index} className="border-b border-gray-800/40 hover:bg-gray-800/40">
                                <td className="p-3 font-medium">{fornecedor.nome}</td>
                                <td className="p-3 text-yellow-300">{fornecedor.servico}</td>
                                <td className="p-3 opacity-80">{fornecedor.contato}</td>
                                <td className="p-3 text-center flex justify-center gap-4 text-base">
                                    <button className="text-yellow-300 hover:text-yellow-200"><i className="fas fa-edit"></i></button>
                                    <button className="text-red-400 hover:text-red-300"><i className="fas fa-times-circle"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <CondoLayout title="Configurações">
      {/* NAVEGAÇÃO INTERNA (ABAS) */}
      <div className="flex border-b border-gray-700 space-x-4 overflow-x-auto mb-8">
        <button 
          className={`p-3 text-sm font-semibold transition whitespace-nowrap ${secaoAtiva === 'dados' ? 'border-b-2 border-violet-400 text-violet-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setSecaoAtiva('dados')}
        >
          <i className="fas fa-home mr-2"></i> Dados Gerais
        </button>
        <button 
          className={`p-3 text-sm font-semibold transition whitespace-nowrap ${secaoAtiva === 'perfil' ? 'border-b-2 border-violet-400 text-violet-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setSecaoAtiva('perfil')}
        >
          <i className="fas fa-user-gear mr-2"></i> Meu Perfil & Acesso
        </button>
        <button 
          className={`p-3 text-sm font-semibold transition whitespace-nowrap ${secaoAtiva === 'regras' ? 'border-b-2 border-violet-400 text-violet-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setSecaoAtiva('regras')}
        >
          <i className="fas fa-scroll mr-2"></i> Regras & Documentos
        </button>
        <button 
          className={`p-3 text-sm font-semibold transition whitespace-nowrap ${secaoAtiva === 'fornecedores' ? 'border-b-2 border-violet-400 text-violet-400' : 'text-white/70 hover:text-white'}`}
          onClick={() => setSecaoAtiva('fornecedores')}
        >
          <i className="fas fa-handshake mr-2"></i> Fornecedores
        </button>
      </div>

      {/* CONTAINER DO CONTEÚDO ATIVO */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md p-6 sm:p-8">
        {renderConteudo()}
      </div>
    </CondoLayout>
  );
}