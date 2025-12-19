export default function HeaderAdmin({ sidebarOpen, setSidebarOpen, title }) {
  return (
    <header
      className="
        bg-blue-900/40 backdrop-blur-xl border-b border-blue-800
        fixed top-0 right-0 left-0 md:left-64
        h-16 flex items-center justify-between px-4 sm:px-6 shadow-lg
        z-30
      "
    >
      {/* BOTÃO MOBILE */}
      <button
        className="md:hidden text-xl sm:text-2xl"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <h2 className="text-lg sm:text-xl font-bold tracking-wide">
        {title}
      </h2>

      {/* NOTIFICAÇÕES + PERFIL */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="relative text-xl sm:text-2xl text-violet-400">
          <i className="fas fa-bell"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm opacity-80 hidden sm:block">Admin</span>
          <div className="w-9 h-9 bg-violet-600 rounded-full flex items-center justify-center">
            <i className="fas fa-user text-white"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
