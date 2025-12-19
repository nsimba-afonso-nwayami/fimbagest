import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { registerSchema } from "../../validations/registerSchema";
import { cadastrarService } from "../../services/CadastrarService";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const inputBase =
    "w-full p-3 rounded-lg bg-blue-950/60 text-white focus:outline-none border";

  async function onSubmit(data) {
    try {
      const payload = {
        username: data.username,
        email: data.email,
        password: data.password,
        perfil: data.perfil,
        telefone: data.telefone,
        nif: data.nif,
      };

      await cadastrarService(payload);
      toast.success("Cadastro realizado com sucesso!");
      reset(); // limpa o formulário
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(
        error.response?.data?.detail ||
          "Erro ao cadastrar. Verifique os campos."
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
          Cadastrar
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          {/* USERNAME */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Digite um username válido"
              {...register("username")}
              className={`${inputBase} ${
                isSubmitted && errors.username
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.username && (
              <p className="text-red-400 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
              className={`${inputBase} ${
                isSubmitted && errors.email
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* SENHA */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Senha
            </label>
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
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRMAR SENHA */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Confirmar Senha
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
              className={`${inputBase} ${
                isSubmitted && errors.confirmPassword
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* PERFIL */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Perfil
            </label>
            <select
              {...register("perfil")}
              className={`${inputBase} ${
                isSubmitted && errors.perfil
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            >
              <option value="">Selecione um perfil</option>
              <option value="administrador">Administrador</option>
              <option value="morador">Morador</option>
              <option value="porteiro">Porteiro</option>
              <option value="funcionario">Funcionário</option>
            </select>
            {isSubmitted && errors.perfil && (
              <p className="text-red-400 text-sm mt-1">
                {errors.perfil.message}
              </p>
            )}
          </div>

          {/* TELEFONE */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              Telefone
            </label>
            <input
              type="text"
              placeholder="Digite seu telefone"
              {...register("telefone")}
              className={`${inputBase} ${
                isSubmitted && errors.telefone
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.telefone && (
              <p className="text-red-400 text-sm mt-1">
                {errors.telefone.message}
              </p>
            )}
          </div>

          {/* NIF */}
          <div>
            <label className="block mb-2 text-violet-300 font-semibold">
              NIF
            </label>
            <input
              type="text"
              placeholder="Digite seu NIF"
              {...register("nif")}
              className={`${inputBase} ${
                isSubmitted && errors.nif
                  ? "border-red-500"
                  : "border-blue-900 focus:border-violet-500"
              }`}
            />
            {isSubmitted && errors.nif && (
              <p className="text-red-400 text-sm mt-1">{errors.nif.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-2 rounded-xl font-bold bg-violet-600 hover:bg-violet-700 transition-all cursor-pointer text-white disabled:opacity-50"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/80">
          Já tem conta?{" "}
          <Link to="/auth/login" className="text-violet-400 hover:underline">
            Entrar
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
