import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Cria o contexto global de autenticação
export const AuthContext = createContext(null);

// Hook personalizado
export function useAuth() {
  return useContext(AuthContext);
}

// Provider
export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // ===============================
  // Recupera dados ao recarregar app
  // ===============================
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    const id = localStorage.getItem("userId");

    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const telefone = localStorage.getItem("telefone");
    const nif = localStorage.getItem("nif");

    if (storedToken && id && tipoUsuario) {
      setToken(storedToken);
      setUser({
        id: Number(id),
        tipo: tipoUsuario,
        username,
        email,
        telefone,
        nif,
      });
    }
  }, []);

  // ===============================
  // LOGIN (sem jwt-decode)
  // ===============================
  function login(data) {
    const {
      access,
      refresh,
      id,
      tipo,
      username,
      email,
      telefone,
      nif,
    } = data;

    // Salva no localStorage
    localStorage.setItem("token", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("tipoUsuario", tipo);
    localStorage.setItem("userId", id);

    if (username) localStorage.setItem("username", username);
    if (email) localStorage.setItem("email", email);
    if (telefone) localStorage.setItem("telefone", telefone);
    if (nif) localStorage.setItem("nif", nif);

    setToken(access);
    setUser({
      id: Number(id),
      tipo,
      username,
      email,
      telefone,
      nif,
    });

    // ===============================
    // Redirecionamento por perfil
    // ===============================
    if (tipo === "administrador") {
      navigate("/dashboard/condoadmin", { replace: true });
    } else if (tipo === "morador") {
      navigate("/dashboard/morador", { replace: true });
    } else if (tipo === "porteiro") {
      navigate("/dashboard/porteiro", { replace: true });
    } else if (tipo === "funcionario") {
      navigate("/dashboard/funcionario", { replace: true });
    }
  }

  // ===============================
  // LOGOUT
  // ===============================
  function logout() {
    localStorage.clear();
    setToken(null);
    setUser(null);
    navigate("/auth/login", { replace: true });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
