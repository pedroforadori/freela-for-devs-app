import { FormEvent, useContext, useState } from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { auth } from "../../api/Auth";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    
    auth(email, password).then((response) => {
      if (response) {
        login(response);
        navigate("/home");
      }
    });
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
