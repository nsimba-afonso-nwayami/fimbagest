import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full sticky top-0 z-1000
        flex items-center justify-between
        py-8 px-6 md:px-10 shadow-md
        bg-blue-950
      "
    >
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-white capitalize">
        FimbaGest
      </Link>

      {/* Overlay (fundo escurecido ao abrir menu) */}
      {open && (
        <div
          className="
            fixed inset-0 bg-black/50 backdrop-blur-sm
            z-1100 md:hidden
            transition-opacity duration-300
          "
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Navbar */}
      <nav
        className={`
          fixed md:static top-0
          h-full md:h-auto
          flex flex-col md:flex-row
          justify-center md:justify-end
          bg-blue-950 md:bg-transparent
          w-72 md:w-auto
          transition-all duration-300
          ${open ? "right-0" : "right-[-105%] md:right-0"}
          z-1200
          px-6
        `}
      >
        {/* Botão fechar (mobile) */}
        <div
          id="close-navbar"
          className="
            absolute top-6 right-8 text-4xl cursor-pointer
            text-white md:hidden
          "
          onClick={() => setOpen(false)}
        >
          <i className="fas fa-times"></i>
        </div>

        {/* Links */}
        <Link
          to="/"
          className="
            text-2xl md:text-xl text-white
            mx-0 md:ml-8 my-3 md:my-0
            capitalize text-center
            hover:text-violet-600
            transition-all
          "
        >
          Home
        </Link>
        <a
          href="/#sobre"
          className="
            text-2xl md:text-xl text-white
            mx-0 md:ml-8 my-3 md:my-0
            capitalize text-center
            hover:text-violet-600
             transition-all
          "
        >
          Sobre
        </a>
        <a
          href="/#como-funciona"
          className="
            text-2xl md:text-xl text-white
            mx-0 md:ml-8 my-3 md:my-0
            capitalize text-center
            hover:text-violet-600
             transition-all
          "
        >
          Como funciona
        </a>
        <Link
          to="/auth/login"
          className="
            text-2xl md:text-xl text-white
            mx-0 md:ml-8 my-3 md:my-0
            capitalize text-center
            hover:text-violet-600
             transition-all
          "
        >
          Login
        </Link>
        <a
          href="/#solicitar-demo"
          className="
            text-2xl md:text-xl text-white
            mx-0 md:ml-8 my-3 md:my-0
            capitalize text-center
            hover:text-violet-600
             transition-all
          "
        >
          Solicitar uma demo
        </a>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-btn"
        className="text-3xl cursor-pointer text-white md:hidden"
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}
