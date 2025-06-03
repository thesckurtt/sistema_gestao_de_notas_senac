import React, { use, useEffect, useState } from "react";
import InptAuthForm from "../components/InptAuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [remember, setRemember] = useState(() => {
    return localStorage.getItem("remember") === "true" ? true : false;
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("remember") === "true") {
      setEmail(localStorage.getItem("email") || "");
      setPassword(localStorage.getItem("password") || "");
      setRemember(true);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      if (remember) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("remember", remember);
      } else {
        setRemember(false);
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("remember");
      }
      
      if (response.error) {
        setError(response.message);
      } else {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      setError("Erro inesperado, tente novamente.");
    }
  }

  useEffect(() => {
    setError(null);
  }, [password, email]);

  return (
    <div className="login-card ">
      <h3 className="text-center mb-4">Login</h3>
      {error && (
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <InptAuthForm
          type={"email"}
          value={email}
          setValue={setEmail}
          text={"E-mail"}
          placeholder={"email@example.com"}
        />
        <InptAuthForm
          type={"password"}
          value={password}
          setValue={setPassword}
          text={"Senha"}
          placeholder={"********"}
        />
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            onChange={() => setRemember((old) => !old)}
            className="form-check-input"
            id="remember"
            checked={remember}
          />
          <label className="form-check-label" for="remember">
            Lembrar-me
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
        <div className="text-center mt-3">
          <span>
            Não possuí conta? <Link to={"/register"}>Registre-se aqui</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
