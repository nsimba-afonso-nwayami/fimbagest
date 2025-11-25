import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-6 md:px-16 relative">
      {/* Redes Sociais */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="#"
          className="text-xl p-2 rounded-full bg-white/10 backdrop-blur-md 
                 hover:bg-violet-600 hover:scale-110 transition-all"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="#"
          className="text-xl p-2 rounded-full bg-white/10 backdrop-blur-md
                 hover:bg-violet-600 hover:scale-110 transition-all"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="#"
          className="text-xl p-2 rounded-full bg-white/10 backdrop-blur-md
                 hover:bg-violet-600 hover:scale-110 transition-all"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="#"
          className="text-xl p-2 rounded-full bg-white/10 backdrop-blur-md
                 hover:bg-violet-600 hover:scale-110 transition-all"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Linha divisória */}
      <div className="w-full h-px bg-white/20 mb-6"></div>

      {/* Texto de copy */}
      <p className="text-center text-sm opacity-70">
        © {new Date().getFullYear()} FimbaGest — Todos os direitos reservados.
      </p>
    </footer>
  );
}
