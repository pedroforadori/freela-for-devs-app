import './Styles.scss';

const FormularioLogin = () => {
  return (
    <section className='container-form'>
        <form className='inputs'>
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
            <input type="submit" value="Entrar" />
        </form>
    </section>
    
    )
}

export default FormularioLogin;