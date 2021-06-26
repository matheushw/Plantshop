import React from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'

export interface LoginPageProps{}

const LoginPage: React.FC<LoginPageProps> = () => {
  return(
    <div className={styles.loginForm}>
        <h1> Login </h1>
        <br/>
        <h2> Não tem conta? <Link to="">Cadastre-se</Link></h2>
        <form>
            <br/>
            Email: <br/> 
            <input type="email" name="email" autoComplete="off" placeholder="seuemail@email.com" required/>
            <br/>
            <br/>

            Senha: <br/>
            <input type="password" name="senha"/>
            <br/> 
            <br/>
        </form>  

        <Link to="/"><button>Entrar como usuário</button></Link>
        <Link to="/"><button>Entrar como adm</button></Link>
    </div>
  );
}

export default LoginPage;