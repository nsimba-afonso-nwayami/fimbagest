import { Link, useNavigate } from "react-router-dom";

export default function SidebarAdmin({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você adicionaria a lógica de limpar tokens/sessão
    console.log("Logout realizado");
    navigate("/login");
  };

  return (
    <>
      <aside
        className={`
          bg-blue-900/40 backdrop-blur-xl border-r border-blue-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-9999 flex flex-col
        `}
      >
        {/* BOTÃO FECHAR MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <h1 className="text-2xl font-bold mb-10 tracking-wide mt-6 md:mt-0">
          Fimba<span className="text-violet-400">Gest</span>
        </h1>

        {/* MENU */}
        <nav className="space-y-4 text-lg flex-1">
          <Link
            to="/dashboard/super-admin/"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-chart-line mr-3 text-violet-400"></i>
            Dashboard
          </Link>
          <Link
            to="/dashboard/super-admin/condominios"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-building mr-3 text-violet-400"></i>
            Condomínios
          </Link>
          <Link
            to="/dashboard/super-admin/moradores"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-users mr-3 text-violet-400"></i>
            Moradores
          </Link>
          <Link
            to="/dashboard/super-admin/cobrancas"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Cobranças
          </Link>
          <Link
            to="/dashboard/super-admin/ocorrencias"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-tools mr-3 text-violet-400"></i>
            Ocorrências
          </Link>
          <Link
            to="/dashboard/super-admin/configuracoes"
            className="block p-3 rounded-lg hover:bg-blue-800/40 cursor-pointer transition-colors"
          >
            <i className="fas fa-gear mr-3 text-violet-400"></i>
            Configurações
          </Link>
        </nav>

        {/* SEÇÃO DE LOGOUT (Fixada no rodapé da Sidebar) */}
        <div className="mt-auto pt-6 border-t border-blue-800/60">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* BACKDROP MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}