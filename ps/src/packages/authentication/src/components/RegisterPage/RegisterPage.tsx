import React from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <div className={styles.loginForm}>
      <h1> Cadastro </h1>
        <br/>
        <h2> Já tem conta?<Link to='/login-page'>Faça login</Link></h2>
        <form>
            Nome: <br/>
            <input type="text" name="nome" placeholder="Jose da Silva Souza" required/> <br/><br/>
            Email: <br/>
            <input type="email" name="email" placeholder="seuemail@email.com" required/><br/>
            <br/>
            Senha: <br/>
            <input type="password" name="senha"/><br/><br/>
            Repita sua senha: <br/>
            <input type="password" name="senha"/><br/><br/>
        </form>
        <Link to="/"><button>Cadastrar</button></Link>
    </div>    
  );
}

export default RegisterPage;