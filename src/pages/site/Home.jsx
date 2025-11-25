import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FimbaVideo from "../../assets/video/fimbavideo.mp4";
import SolicitarDemoImg from "../../assets/img/solicitar-demo.jpg";

// Variants para animação
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center z-0 overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 -z-10">
          <video
            src={FimbaVideo}
            id="video"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>

        <div className="absolute inset-0 bg-blue-900/80 -z-5"></div>

        {/* Conteúdo animado */}
        <motion.div
          className="text-center px-4 max-w-3xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white uppercase font-bold text-4xl md:text-5xl drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]"
          >
            A forma mais completa de gerir o seu condomínio
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white mt-4 text-lg sm:text-xl md:text-2xl"
          >
            Recursos completos para automatizar tarefas, reduzir erros e
            melhorar a comunicação. Ideal para moradores, administradoras e
            condomínios de todos os tamanhos.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            href="/#solicitar-demo"
            className="inline-block mt-6 px-10 py-3 text-white font-semibold bg-violet-600 hover:bg-violet-700 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            Solicitar uma demo
          </motion.a>
        </motion.div>
      </section>

      {/* SEÇÃO Sobre */}
      <section
        id="sobre"
        className="py-24 px-6 md:px-16 bg-blue-950 text-white"
      >
        {/* TÍTULO PRINCIPAL */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
            A Solução Completa Para Gestão de Condomínios
          </h2>
          <p className="text-lg md:text-xl mt-6 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Tudo o que precisa para administrar, comunicar e garantir segurança
            — num único sistema inteligente, rápido e fácil de usar.
          </p>
        </motion.div>

        {/* GRID GERAL */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* BLOCO 1 */}
          <motion.div
            className="bg-indigo-900/40 border border-indigo-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <i className="fa-solid fa-gears text-violet-400 text-4xl"></i>
              <h3 className="text-2xl font-bold">
                Eficiência na Administração
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6 opacity-90">
              Simplifique a gestão do condomínio com automações que poupam tempo
              e evitam erros.
            </p>
            <ul className="space-y-3 text-lg opacity-90">
              <li>
                <i className="fa-solid fa-file-invoice-dollar text-violet-400 mr-2"></i>
                Cobranças e notas automáticas
              </li>
              <li>
                <i className="fa-solid fa-chart-pie text-violet-400 mr-2"></i>
                Controle financeiro completo
              </li>
              <li>
                <i className="fa-solid fa-screwdriver-wrench text-violet-400 mr-2"></i>
                Gestão de manutenção e ocorrências
              </li>
              <li>
                <i className="fa-solid fa-chart-line text-violet-400 mr-2"></i>
                Relatórios e dashboards inteligentes
              </li>
              <li>
                <i className="fa-solid fa-building-columns text-violet-400 mr-2"></i>
                Multicondomínio centralizado
              </li>
            </ul>
          </motion.div>

          {/* BLOCO 2 */}
          <motion.div
            className="bg-blue-900/40 border border-blue-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <i className="fa-solid fa-comments text-violet-400 text-4xl"></i>
              <h3 className="text-2xl font-bold">
                Transparência & Comunicação
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6 opacity-90">
              Comunicação moderna e instantânea que melhora a experiência dos
              moradores.
            </p>
            <ul className="space-y-3 text-lg opacity-90">
              <li>
                <i className="fa-solid fa-bell text-violet-400 mr-2"></i>
                Notificações imediatas
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen-button text-violet-400 mr-2"></i>
                App e portal do morador
              </li>
              <li>
                <i className="fa-solid fa-message text-violet-400 mr-2"></i>
                Mural & chat interno
              </li>
              <li>
                <i className="fa-solid fa-clock-rotate-left text-violet-400 mr-2"></i>
                Histórico completo do condomínio
              </li>
            </ul>
          </motion.div>

          {/* BLOCO 3 */}
          <motion.div
            className="bg-indigo-900/40 border border-indigo-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <i className="fa-solid fa-shield-halved text-violet-400 text-4xl"></i>
              <h3 className="text-2xl font-bold">Segurança Avançada</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6 opacity-90">
              Tecnologia inteligente para manter seu condomínio seguro e sempre
              monitorado.
            </p>
            <ul className="space-y-3 text-lg opacity-90">
              <li>
                <i className="fa-solid fa-id-card text-violet-400 mr-2"></i>
                Registo de visitantes e entregas
              </li>
              <li>
                <i className="fa-solid fa-network-wired text-violet-400 mr-2"></i>
                Sensores IoT e integrações ETA
              </li>
              <li>
                <i className="fa-solid fa-droplet text-violet-400 mr-2"></i>
                Monitoramento de consumos e reservatórios
              </li>
              <li>
                <i className="fa-solid fa-robot text-violet-400 mr-2"></i>
                Assistente virtual inteligente 24/7
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="w-full bg-[#0C1744] text-white py-24"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Como Funciona
          </motion.h2>
          <motion.p
            className="text-lg opacity-80 mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Um processo simples, inteligente e totalmente automatizado.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/*  1. Configuração do Condomínio */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i className="fas fa-cogs text-purple-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">
                Configuração do Condomínio
              </h3>
              <p className="text-sm opacity-80">
                A administradora cadastra condomínios, blocos, moradores e
                regras internas. Tudo pronto para começar em poucos minutos.
              </p>
            </motion.div>

            {/*  2. Gestão Automática */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i className="fas fa-robot text-purple-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">
                A Gestão Acontece Automáticamente
              </h3>
              <p className="text-sm opacity-80 mb-2">
                O FimbaGest cuida de tudo automaticamente:
              </p>
              <ul className="text-sm opacity-80 space-y-1 text-left mx-auto w-fit">
                <li>• Geração de notas e cobranças</li>
                <li>• Atualização de consumos</li>
                <li>• Registo de ocorrências e manutenção</li>
                <li>• Comunicados e notificações</li>
              </ul>
            </motion.div>

            {/*  3. App para Moradores */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i className="fas fa-mobile-alt text-purple-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Moradores Acessam Tudo</h3>
              <p className="text-sm opacity-80">
                Notas, reservas, consumos e avisos diretamente no app ou portal.
                Mais transparência e menos chamadas para a administradora.
              </p>
            </motion.div>

            {/*  4. Tecnologia Inteligente */}
            <motion.div
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i className="fas fa-microchip text-purple-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">
                A Tecnologia Faz o Resto
              </h3>
              <p className="text-sm opacity-80 mb-2">
                Sensores IoT monitoram o prédio, alertam problemas e a IA
                responde dúvidas automaticamente.
              </p>
            </motion.div>
          </div>

          {/* Administradora */}
          <motion.div
            className="mt-16 bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-xl max-w-4xl mx-auto text-center hover:-translate-y-2 transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <i className="fas fa-chart-line text-purple-400 text-5xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-3">
              A Administradora Acompanha Tudo em Tempo Real
            </h3>
            <p className="text-lg opacity-80">
              Dashboards mostram finanças, consumos, ocorrências e desempenho de
              cada condomínio. Decisões melhores e clientes mais satisfeitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLICITAR DEMO */}
      <section
        id="solicitar-demo"
        className="relative min-h-[90vh] py-16 px-6 md:px-16 text-white bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${SolicitarDemoImg})` }}
      >
        <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-sm z-0"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">
            <i className="fas fa-calendar-check text-violet-400 mr-2"></i>
            Solicite uma Demo
          </h2>
          <p className="text-base md:text-xl opacity-90 px-2">
            Para solicitar uma demo do produto, por favor preencha o formulário
            de contato abaixo.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto bg-blue-950/40 border border-blue-900 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form method="POST" className="grid gap-6">
            <div>
              <label className="block mb-2 font-semibold text-violet-300">
                Nome
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-blue-950/60 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-violet-300">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-blue-950/60 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-violet-300">
                Digite sua mensagem aqui...
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg bg-blue-950/60 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                required
              ></textarea>
            </div>
            <button className="mt-2 w-full py-3 rounded-xl font-bold bg-violet-600 hover:bg-violet-700 transition-all cursor-pointer">
              Enviar
            </button>
          </form>

          <div className="mt-6 text-center space-y-2 opacity-90 text-sm md:text-base">
            <p>
              <i className="fas fa-envelope mr-2 text-violet-400"></i>
              info@fimbagest.com
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-violet-400"></i>Tel: +244
              999999999
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-violet-400"></i>Av.
              Deolinda Rodrigues, 98 - Luanda
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
