import { Link, useNavigate } from "react-router-dom";

export default function SidebarCondoAdmin({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <aside
        className={`
          bg-gray-900/40 backdrop-blur-xl border-r border-gray-800 
          w-64 fixed top-0 left-0 h-screen p-6 shadow-xl
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
        `}
      >
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-red-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        <h1 className="text-2xl font-bold mb-4 tracking-wide mt-6 md:mt-0">
          <span className="text-violet-400">Condo</span> Admin
        </h1>
        <p className="text-sm text-white/60 mb-8 truncate">Residencial Jardins</p>
        
        <nav className="space-y-4 text-lg flex-1">
          <Link to="/dashboard/condoadmin/" className="block p-3 rounded-lg bg-gray-800 cursor-pointer border-l-4 border-violet-400 font-semibold">
            <i className="fas fa-gauge-high mr-3 text-violet-400"></i>
            Dashboard
          </Link>
          <Link to="/dashboard/condoadmin/moradores" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-user-friends mr-3 text-violet-400"></i>
            Moradores 
          </Link>
          <Link to="/dashboard/condoadmin/financeiro" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-file-invoice-dollar mr-3 text-violet-400"></i>
            Financeiro
          </Link>
          <Link to="/dashboard/condoadmin/comunicacao" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-bell mr-3 text-violet-400"></i>
            Comunicação
          </Link>
          <Link to="/dashboard/condoadmin/reservas" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-calendar-alt mr-3 text-violet-400"></i>
            Reservas
          </Link>
          <Link to="/dashboard/condoadmin/ocorrencias" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-wrench mr-3 text-violet-400"></i>
            Ocorrências
          </Link>
          <Link to="/dashboard/condoadmin/configuracoes" className="block p-3 rounded-lg hover:bg-gray-800/40 cursor-pointer">
            <i className="fas fa-gears mr-3 text-violet-400"></i>
            Configurações
          </Link>
        </nav>

        {/* BOTÃO DE LOGOUT ADICIONADO */}
        <div className="mt-auto pt-6 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sair
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}