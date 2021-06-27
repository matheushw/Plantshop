import React from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'
import { ApplicationState, User } from '../../../../../store/types';
import { logInUser } from '../../../../../store/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../useForm';
import {useHistory} from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export interface LoginPageProps{
	user: User | null,
	allUsers: User[],
	addUser: (email: string, password: string) => void,
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const history = useHistory();
	const initialState = {
		email: '',
		password: '',
	};
	
	async function loginUserCallback(){
		const input = JSON.parse(JSON.stringify(values))
		props.addUser(input.email, input.password)

		let check = false
		props.allUsers.forEach(u => {
			if (u.email === input.email && u.password === input.password) {
				store.addNotification({
					title: "Você fez login!",
					message: " ",
					type: "success",
					insert: "top",
					container: "top-left",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {
					  duration: 2000,
					  onScreen: false
					}
				  });
				setTimeout(function (){
					history.push('/')
				}, 2000);
				check = true
			} 
		})
		if (!check){
			store.addNotification({
				title: "Email ou senha errados!",
				message: " ",
				type: "danger",
				insert: "top",
				container: "top-left",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
				  duration: 2000,
				  onScreen: false
				}
			  });
			history.push('/login-page')
		}
		console.log(input.email + input.password)
		// go to home
	};

	const { onChange, onSubmit, values} = useForm(loginUserCallback, initialState); 

	return(
    <div className={styles.loginForm}>
        <ReactNotification/>
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
