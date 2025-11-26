import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants para animação
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ForgotPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-950 px-6 py-12">
      <motion.div
        className="w-full max-w-md bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-800"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Esqueci a Senha
        </h2>

        <p className="text-white/80 text-center mb-6">
          Digite seu email abaixo para receber instruções de redefinição de senha.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full p-3 rounded-lg bg-blue-950/60 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-bold bg-violet-600 hover:bg-violet-700 transition-all cursor-pointer text-white"
          >
            Enviar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/80">
          Lembrou da senha?{" "}
          <Link to="/auth/login" className="text-violet-400 hover:underline">
            Entrar
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
