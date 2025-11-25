import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Variants para animação
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-blue-950 text-white px-6">
        <motion.h1
          className="text-8xl md:text-[10rem] font-extrabold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Ops! A página que você está procurando não foi encontrada.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-semibold shadow-lg transition-all"
          >
            Voltar para a Página Inicial
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
