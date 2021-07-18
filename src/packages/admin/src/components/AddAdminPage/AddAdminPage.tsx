import React from 'react'
import * as styles from './styles'
import { ApplicationState, User } from '../../../../../store/types';
import { addAdminRequest } from '../../../../../store/actionCreators';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../../../../useForm';
import {useHistory} from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


export interface AddAdminPageProps {
  	user: User | null,
	allUsers: User[],
	registerAdmin: (name: string, address: string, phoneNumber: string, email: string, password: string) => void,
}

const AddAdminPage: React.FC<AddAdminPageProps> = (props) => {
	const history = useHistory();
	  
	const initialState = {
		name: '',
		address: '',
		phoneNumber: '',
		email: '',
		password: '',
	};

	async function addAdminCallback(){
		const input = JSON.parse(JSON.stringify(values))
		props.registerAdmin(input.name, input.address, input.phoneNumber, input.email, input.password)
		store.addNotification({
			title: "Administrador adicionado com sucesso!",
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
			history.push('admin-page')
		}, 2000);
	}

	const { onChange, onSubmit, values} = useForm(addAdminCallback, initialState); 

  	return (
      <div className={styles.registerForm}>
        <ReactNotification/>
		<h1> Adicionar novo administrador </h1>
        <br/>
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
	registerAdmin: (
		name: string, address: string, phoneNumber: string, email: string, password: string
		) 
		=> void;
}

interface StateProps {
	user: User | null
	allUsers: User[]
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  	user: state.user,
  	allUsers: state.usersList,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	registerAdmin:(name, address, phoneNumber, email, password) => {dispatch(addAdminRequest(name, address, phoneNumber, email, password))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAdminPage);
