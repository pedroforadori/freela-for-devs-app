import { FormEvent, useContext, useEffect, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user";
import Error from "../error/error";
import ShowPassword from "../showPassword/showPassword";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonError, setButtonError] = useState(false);
  const { login, error } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)
  
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
          type={showPassword ? "text" : "password"}
          name=""
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ShowPassword showPassword={showPassword} handleShowPassword={handleShowPassword} />
        
        
        <input type="submit" value="Entrar" disabled={buttonError ? false : true} />
        <p className="forgetPassword">
          <Link to="register">
            Esqueceu sua senha?
          </Link>
        </p>
        <p>
          Se você não tem conta, <Link to="register">clique aqui</Link>!
        </p>
      </form>
      {error && <Error text={error} />}
    </section>
  );
};

export default FormLogin;
