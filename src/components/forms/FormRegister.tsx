import { Link, useNavigate } from "react-router-dom";
import "./Styles.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/user";
import Error from "../error/error";
import { UserType } from "../../types/LoginType";
import ShowPassword from "../showPassword/showPassword";

const FormRegister = () => {
  const navigate = useNavigate()
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState(0);
  const { error, create } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleShowPasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm)


  const handleRegister = (event: FormEvent) => {
    event.preventDefault()
    
    if(fullname && email && whatsapp && password && confirmPassword && type === 0 || type === 1){

      if(password === confirmPassword){
        const userObject: UserType = {
          fullname: fullname,
          password: password,
          email: email,
          whatsapp: whatsapp,
          type: type,
          theme: "light"
        }
        create(userObject)
        navigate("/")
      }
    }
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
          // onBlur={}
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
          type={showPassword ? "text" : "password"}
          name=""
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ShowPassword showPassword={showPassword} handleShowPassword={handleShowPassword} />
        <input
          type={showPasswordConfirm ? "text" : "password"}
          name=""
          id="confirmPassword"
          placeholder="Confirmar a senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <ShowPassword showPassword={showPasswordConfirm} handleShowPassword={handleShowPasswordConfirm} />
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
      {error && <Error text={error} />}
    </section>
  );
};

export default FormRegister;
