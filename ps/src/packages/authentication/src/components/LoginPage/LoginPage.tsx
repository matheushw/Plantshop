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
	addUser: (user: User) => void,
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const history = useHistory();
	const initialState = {
		email: '',
		password: '',
	};
	
	const renderMessage = (title: string, type: string) => {
		return (
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
				})
		);
	}

	async function loginUserCallback(){
		const input = JSON.parse(JSON.stringify(values))
		
		let check = false
		props.allUsers.forEach(user => {
			if (user.email === input.email && user.password === input.password) {
				props.addUser(user);
				renderMessage("Você fez login!", "success");
				setTimeout(function (){
					history.push('/')
				}, 2000);
				check = true
			} 
		})
		if (!check){
			renderMessage("Email ou senha errados!", "danger");
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
					<button type="submit">Login</button>
				</label>
			</div>
        </form>
    </div>
  );
}

interface DispatchProps {
	addUser: (user: User) => void;
}

interface StateProps {
	user: User | null;
	allUsers: User[],
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user,
	allUsers: state.usersList
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addUser:(user) => {dispatch(logInUser(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
