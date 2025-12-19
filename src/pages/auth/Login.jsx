import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { loginSchema } from "../../validations/loginSchema";
import { loginService } from "../../services/LoginService";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const inputBase =
    "w-full p-3 rounded-lg bg-blue-950/60 text-white focus:outline-none border";

  async function onSubmit(data) {
    try {
      await loginService({
        username: data.username,
        password: data.password,
      });

      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/dashboard/condoadmin/");
      }, 1500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(
        error.response?.data?.detail || "Erro ao fazer login. Verifique seus dados."
      );
    }
  }

  function onError() {
    toast.error("Verifique os campos do formulário");
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-950 px-6 py-12">
      <motion.div
        className="w-full max-w-md bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-800"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          {/* USERNAME */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">Username</label>
            <input
              type="text"
              placeholder="Digite seu username"
              {...register("username")}
              className={`${inputBase} ${
                isSubmitted && errors.username
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.username && (
              <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* SENHA */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              className={`${inputBase} ${
                isSubmitted && errors.password
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* BOTÃO COM SPINNER */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-2 rounded-xl font-bold bg-violet-600 hover:bg-violet-700 transition-all cursor-pointer text-white disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting && <i className="fas fa-spinner fa-spin"></i>}
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          {/* Link de Esqueceu a senha */}
          <div className="text-right mt-2">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-violet-400 hover:underline"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-white/80">
          Não tem conta?{" "}
          <Link to="/auth/register" className="text-violet-400 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
