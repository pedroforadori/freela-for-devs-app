import { Link } from "react-router-dom";
import "./Styles.scss";
import { FormEvent, useState } from "react";

const FormRegister = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState(0);

  const handleRegister = (event: FormEvent) => {
    event.preventDefault()
    console.log(type)
  }

  return (
    <section className="container-form">
      <span className="logo">FREELA FOR DEVS</span>
      <form className="inputs" onSubmit={handleRegister}>
        <input
          type="text"
          name=""
          id="fullname"
          placeholder="Nome Completo"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="number"
          name=""
          id="whatsapp"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          name=""
          id="confirmPassword"
          placeholder="Confirmar a senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <fieldset className="group-radio">
          <div className="radio">
            <label>Trabalhar</label>
            <input 
                type="radio" 
                name="type" 
                id="freela"
                value={0}
                onChange={(event) => setType(+event.target.value)}
            />
          </div>
          <div className="radio">
            <label>Contratar</label>
            <input 
                type="radio" 
                name="type" 
                id="client"
                value={1}
                onChange={(event) => setType(+event.target.value)}
            />
          </div>
        </fieldset>

        <input type="submit" value="Cadastrar" />

        <p>
          Já tem uma conta? <Link to="/">Faça o login aqui</Link>!
        </p>
      </form>
    </section>
  );
};

export default FormRegister;
