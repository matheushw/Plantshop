import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'
import { ApplicationState, User } from '../../../../../store/types';
import { loadUsersRequest } from '../../../../../store/actionCreators';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../../../../useForm';
import { useHistory } from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export interface LoginPageProps{
	user: User | null,
	userError: boolean,
	userLoading: boolean,
	allUsers: User[],
	addUser: (email: string, password:string) => void,
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const history = useHistory();
	const initialState = {
		email: '',
		password: '',
	};

	useEffect(() => {
		if(props.userError){
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
			setTimeout(() => {}, 2000);
		} else if(!props.userError && !props.userLoading && props.user){ // success
			store.addNotification({
				title: "Você fez login",
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
			setTimeout(function (){
				history.push('/')
			}, 2000);
		}
	}, [props.userError, props.userLoading]);

	async function loginUserCallback(){
		const input = JSON.parse(JSON.stringify(values))
		props.addUser(input.email, input.password);
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
	addUser: (email: string, password:string) => void;
}

interface StateProps {
	user: User | null;
	userError: boolean;
	userLoading: boolean;
	allUsers: User[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user,
	userError: state.error.user,
	userLoading: state.loading.user,
	allUsers: state.usersList
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addUser:(email, password) => {dispatch(loadUsersRequest(email, password))}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
