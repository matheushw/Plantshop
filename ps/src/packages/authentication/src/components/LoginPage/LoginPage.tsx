import React, {useState} from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'
import { ApplicationState, LogInUser, User } from '../../../../../store/types';
import { logInUser } from '../../../../../store/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../useForm';

export interface LoginPageProps{
	user: User | null,
	allUsers: User[],
	addUser: (email: string, password: string) => void,
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	
	const initialState = {
		email: '',
		password: '',
	};
	/*
	props.allUsers.forEach(u => {
		if (u.email === props.user?.email && u.password === props.user?.password) {
			
		} else 
	});
	*/
	async function loginUserCallback(){
		const input = JSON.parse(JSON.stringify(values))
		props.addUser(input.email, input.password)
		console.log(input.email + input.password)
		// go to home
	}

	const { onChange, onSubmit, values} = useForm(loginUserCallback, initialState); 

	return(
    <div className={styles.loginForm}>
        <h1> Login </h1>
        <br/>
        <h2> Não tem conta? <Link to='/register-page'>Cadastre-se</Link></h2>
		<form onSubmit={onSubmit}>
			<div>
				<label>
					Email: <br/>
							<input 
							type="email" 
							name="email" 
							id="email" 
							placeholder="seuemail@email.com"
							onChange={onChange}
							required
							/>
				</label>
				<br/><br/>
				<label>
					Senha: <br/>
							<input 
							type="password" 
							name="password" 
							id="password" 
							onChange={onChange}
							required
							/>
				</label> 
				<br/><br/>
				<label>
					<button type="submit">Entrar como usuário</button>
					<button type="submit">Entrar como adm</button>
				</label>
			</div>
        </form>
    </div>
  );
}

interface DispatchProps {
	addUser: (email: string, password: string) => void;
}

interface StateProps {
	user: User | null;
	allUsers: User[],
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user,
  allUsers: state.usersList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addUser:(email, password) => {dispatch(logInUser(email, password))}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
