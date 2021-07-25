import React, { useEffect } from 'react'
import * as styles from './styles'
import { ApplicationState, User } from '../../../../../store/types';
import { addAdminRequest, addAdminReset } from '../../../../../store/actionCreators';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../../../../useForm';
import {useHistory} from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


export interface AddAdminPageProps {
  user: User | null,
  allUsers: User[],
  addAdminError: boolean,
	addAdminLoading: boolean,
	addAdminSuccess: boolean,
	addAdmin: (name: string, address: string, phoneNumber: string, email: string, password: string) => void,
	addAdminReset: () => void
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

  useEffect(() => {
		if ( props.addAdminError && !props.addAdminLoading ) { // Error: user not registered	

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

		} else if ( props.addAdminSuccess ) { // Success: user registered
			
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

      // Reseting loading, error adn success for signUp
      props.addAdminReset();

		}
	} ,[props.addAdminError, props.addAdminLoading, props.addAdminSuccess]);

	async function addAdminCallback(){
		const input = JSON.parse(JSON.stringify(values));
		props.addAdmin(input.name, input.address, input.phoneNumber, input.email, input.password);
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
	addAdmin: (
		name: string, address: string, phoneNumber: string, email: string, password: string
		) 
		=> void;
	addAdminReset: () => void;
}

interface StateProps {
	user: User | null;
	allUsers: User[];
  addAdminError: boolean;
	addAdminLoading: boolean;
	addAdminSuccess: boolean;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user,
  allUsers: state.usersList,
  addAdminError: state.error.addAdmin,
	addAdminLoading: state.loading.addAdmin,
	addAdminSuccess: state.success.addAdmin,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addAdmin:(name, address, phoneNumber, email, password) => {dispatch(addAdminRequest(name, address, phoneNumber, email, password))},
  addAdminReset: () => {dispatch(addAdminReset())}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAdminPage);
