import { FormEvent, useContext, useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    login(email, password)
  }

  return (
    <section className="container-form">
      <span className="logo">FREELA FOR DEVS</span>
      <form onSubmit={handleLogin} className="inputs">
        <input
          type="email"
          name=""
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Entrar" />
        <p>
          Se você não tem conta, <Link to="register">clique aqui</Link>!
        </p>
      </form>
    </section>
  );
};

export default FormLogin;
