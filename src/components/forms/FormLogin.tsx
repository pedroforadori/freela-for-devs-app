import { FormEvent } from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    navigate("/home");
  }
  
  return (
    <section className="container-form">
      {/* <h1>Faça parte deste time</h1> */}
      <span className="logo">FREELA FOR DEVS</span>
      <form onSubmit={handleLogin} className="inputs">
        <input type="email" name="" id="" placeholder="E-mail" />
        <input type="password" name="" id="" placeholder="Senha" />
        <input type="submit" value="Entrar" />

        <p>
          Se você não tem conta, <Link to="register">clique aqui</Link>!
        </p>
      </form>
    </section>
  );
};

export default FormLogin;
