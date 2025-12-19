import DashboardLayout from "./components/DashboardLayout";

export default function ErroAdmin() {
  return (
    <DashboardLayout title="Página de Erro">
      {/* CONTEÚDO PRINCIPAL DE ERRO */}
      <div className="flex items-center justify-center min-h-[calc(100vh-160px)]">
        <div className="text-center bg-blue-900/30 border border-blue-800 p-8 sm:p-12 rounded-xl shadow-2xl backdrop-blur-md max-w-lg w-full">
          {/* ÍCONE COM ANIMAÇÃO */}
          <i className="fas fa-bug text-violet-400 text-6xl sm:text-8xl mb-6 animate-pulse"></i>
          
          <h1 className="text-8xl sm:text-9xl font-extrabold text-white mb-4 tracking-wider">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-400 uppercase">
            Página não encontrada
          </h2>
          
          <p className="text-lg mb-8 opacity-80 leading-relaxed">
            Lamentamos, mas a página que você está tentando acessar não existe ou foi removida do sistema.
          </p>
          
          {/* BOTÃO DE RETORNO */}
          <a 
            href="/dashboard/super-admin/" 
            className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 transition font-semibold rounded-lg shadow-lg"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Voltar ao Dashboard
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}