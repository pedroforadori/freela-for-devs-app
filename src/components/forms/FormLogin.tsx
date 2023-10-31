import { FormEvent, useContext, useEffect, useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/user";
import Error from "../error/error";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonError, setButtonError] = useState(false);
  const { login, error } = useContext(AuthContext);
  
  useEffect(() => {
    const enableButton = () => {
      if(email.length > 3 && password.length > 3){
        setButtonError(true)
      }
    }

    enableButton()
  }, [email, password])

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    login(email, password);
  };

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
        <input type="submit" value="Entrar" disabled={buttonError ? false : true} />
        <p>
          Se você não tem conta, <Link to="register">clique aqui</Link>!
        </p>
      </form>
      {error && <Error text={error} />}
    </section>
  );
};

export default FormLogin;
