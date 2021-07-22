import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import * as styles from './styles'
import { ApplicationState, User } from '../../../../../store/types';
import { signUpUserRequest, signUpUserReset } from '../../../../../store/actionCreators';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../../../../useForm';
import {useHistory} from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export interface RegisterPageProps {
  user: User | null,
	allUsers: User[],
	userError: boolean,
	userLoading: boolean,
	userSuccess: boolean,
	registerUser: (name: string, address: string, phoneNumber: string, email: string, password: string) => void,
  registerUserReset: () => void
}

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
	const history = useHistory();
  
	const initialState = {
		name: '',
		address: '',
		phoneNumber: '',
		email: '',
		password: '',
	};

	useEffect(() => {
		if ( props.userError ) { // Error: user not registered	

      store.addNotification({
        title: "Email já cadastrado, por favor utilize outro!",
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

		} else if ( props.userSuccess ) { // Success: user registered
			
      store.addNotification({
				title: "Registrado com sucesso! Por favor, faça login.",
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
				history.push('/login-page');
			}, 2000);

      // Reseting loading, error adn success for signUp
      props.registerUserReset();

		}
	});

	async function registerUserCallback(){
		const input = JSON.parse(JSON.stringify(values));
		props.registerUser(input.name, input.address, input.phoneNumber, input.email, input.password);
  };

	const { onChange, onSubmit, values} = useForm(registerUserCallback, initialState); 

  	return (
      <div className={styles.registerForm}>
        <ReactNotification/>
		<h1> Cadastro </h1>
        <br/>
        <h2> Já tem conta? <Link to='/login-page'>Faça login</Link></h2>
        <form onSubmit={onSubmit}>
			<div>
				<label>
					Nome: <br/> <input 
					type="text"
					name="name"
					id="name" 
					placeholder="Jose da Silva Souza"
					onChange={onChange} 
					required/> 
					<br/><br/>
				</label>
				<label>
					Endereço: <br/> <input 
					type="text" 
					name="address" 
					id="address"
					placeholder="Rua 1, 123, São Paulo, SP" 
					onChange={onChange}
					required/><br/>
            		<br/>
				</label>
				<label>
					Telefone: <br/> <input 
					type="text" 
					name="phoneNumber" 
					id="phoneNumber"
					placeholder="(11)987456932" 
					onChange={onChange}
					required/><br/>
            		<br/>
				</label>
				<label>
					Email: <br/> <input 
					type="email" 
					name="email" 
					id="email"
					placeholder="seuemail@email.com" 
					onChange={onChange}
					required/><br/>
            		<br/>
				</label>
				<label>
					Senha: <br/> <input 
					type="password" 
					name="password"
					id="password"
					minLength={6}
					onChange={onChange}
					required/><br/><br/>
				</label>
				<label>
					<button type="submit">Cadastrar</button>
				</label>
			</div>
        </form>
    </div>
  );
}

interface DispatchProps {
	registerUser: (
		name: string, address: string, phoneNumber: string, email: string, password: string
		) 
		=> void;
  registerUserReset: () => void;
}

interface StateProps {
	user: User | null;
	userError: boolean;
	userLoading: boolean;
	userSuccess: boolean;
	allUsers: User[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user,
  userError: state.error.signUp,
	userLoading: state.loading.signUp,
	userSuccess: state.success.signUp,
  allUsers: state.usersList
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	registerUser:(name, address, phoneNumber, email, password) => {dispatch(signUpUserRequest(name, address, phoneNumber, email, password))},
  registerUserReset: () => { dispatch(signUpUserReset()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
