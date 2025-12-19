import CondoLayout from "./components/CondoLayout";

export default function MoradoresCondoAdmin() {
  // --- Dados de Exemplo (Focados no "Residencial Jardins") ---
  const dummyMoradores = [
    {
      id: 101,
      nome: "António Manuel",
      unidade: "B-102",
      bloco: "B",
      email: "antonio.m@email.com",
      telefone: "930 XXX-XXX",
      status: "Ativo",
    },
    {
      id: 102,
      nome: "Elsa Rocha",
      unidade: "A-301",
      bloco: "A",
      email: "elsa.r@email.com",
      telefone: "915 XXX-XXX",
      status: "Ativo",
    },
    {
      id: 103,
      nome: "Joana Freitas",
      unidade: "15-A",
      bloco: "15",
      email: "joana.f@email.com",
      telefone: "922 XXX-XXX",
      status: "Inativo",
    },
    {
      id: 104,
      nome: "Carlos Silva",
      unidade: "A-205",
      bloco: "A",
      email: "carlos.s@email.com",
      telefone: "945 XXX-XXX",
      status: "Ativo",
    },
  ];

  // Função auxiliar para obter a cor do status
  const getStatusColor = (status) => {
    return status === "Ativo"
      ? "bg-green-600/40 text-green-300"
      : "bg-red-600/40 text-red-300";
  };

  return (
    <CondoLayout title="Moradores e Unidades">
      {/* BARRA DE AÇÕES: BUSCA E ADICIONAR */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* BUSCA GERAL */}
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 focus:outline-none placeholder:text-white/60 text-white w-full sm:flex-1"
          />

          {/* BOTÃO ADICIONAR */}
          <button className="px-5 py-2 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
            <i className="fas fa-user-plus"></i>
            Cadastrar Novo Morador
          </button>
        </div>

        {/* FILTROS ADICIONAIS */}
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm opacity-70">Filtrar por:</p>

          {/* FILTRO DE STATUS */}
          <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
            <option value="">Todos os Status</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo (Bloqueado)</option>
          </select>

          {/* FILTRO DE BLOCO */}
          <select className="p-3 rounded-lg bg-gray-900/40 border border-gray-800 text-white text-sm focus:outline-none">
            <option value="">Todas as Unidades/Blocos</option>
            <option value="A">Bloco A</option>
            <option value="B">Bloco B</option>
            <option value="15">Outras</option>
          </select>
        </div>
      </div>

      {/* TABELA DE MORADORES */}
      <div className="overflow-x-auto bg-gray-900/30 border border-gray-800 rounded-xl shadow-xl backdrop-blur-md">
        <table className="min-w-[900px] w-full text-left border-collapse text-sm">
          <thead>
            <tr className="text-violet-300 border-b border-gray-800">
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Nome Completo</th>
              <th className="p-3 whitespace-nowrap">Unidade</th>
              <th className="p-3 whitespace-nowrap">Email</th>
              <th className="p-3 whitespace-nowrap">Telefone</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>

          <tbody>
            {dummyMoradores.map((morador) => (
              <tr
                key={morador.id}
                className="border-b border-gray-800/40 hover:bg-gray-900/40"
              >
                <td className="p-3 whitespace-nowrap">{morador.id}</td>
                <td className="p-3 whitespace-nowrap font-medium">
                  {morador.nome}
                </td>
                <td className="p-3 whitespace-nowrap text-violet-400 font-semibold">
                  {morador.unidade}
                </td>
                <td className="p-3 whitespace-nowrap">{morador.email}</td>
                <td className="p-3 whitespace-nowrap">{morador.telefone}</td>
                <td className="p-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(
                      morador.status
                    )}`}
                  >
                    {morador.status}
                  </span>
                </td>

                {/* ÍCONES DE AÇÃO */}
                <td className="p-3 text-center flex justify-center gap-3 sm:gap-4 text-base">
                  <button
                    className="text-blue-300 hover:text-blue-200"
                    title="Ver Detalhes/Histórico"
                  >
                    <i className="fas fa-eye"></i>
                  </button>

                  <button
                    className="text-yellow-300 hover:text-yellow-200"
                    title="Editar Morador/Unidade"
                  >
                    <i className="fas fa-edit"></i>
                  </button>

                  <button
                    className="text-red-400 hover:text-red-300"
                    title="Desativar/Remover Acesso"
                  >
                    <i className="fas fa-user-slash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINAÇÃO */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 gap-4">
          <p className="opacity-70 text-xs sm:text-sm">
            Mostrando 1 a 4 de 120 registros
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="px-4 py-1 bg-violet-600 rounded-lg text-sm font-bold">
              1
            </button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              2
            </button>
            <button className="px-4 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              3
            </button>

            <button className="px-3 py-1 bg-gray-900/40 border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </CondoLayout>
  );
}