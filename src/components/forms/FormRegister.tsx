import { Link } from 'react-router-dom';
import './Styles.scss';

const FormRegister = () => {

  return (
    <section className='container-form'>
        {/* <h1>Faça parte deste time</h1> */}
        <span className='logo'>FREELA FOR DEVS</span>
        <form className='inputs'>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Nome Completo"
            />
            <input 
                type="email" 
                name="" 
                id="" 
                placeholder="E-mail"
            />
            <input 
                type="password" 
                name="" 
                id="" 
                placeholder="Senha"
            />
            <input 
                type="password" 
                name="" 
                id="" 
                placeholder="Confirmar a senha"
            />
            <input type="submit" value="Cadastrar" />

            <p>Já tem uma conta? <Link to="/">Faça o login aqui</Link>!</p>
        </form>
    </section>
    
    )
}

export default FormRegister;