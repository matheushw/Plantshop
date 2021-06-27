import React from 'react'
import * as styles from './styles'
import { useForm } from '../../../../useForm';
import { ApplicationState, User } from '../../../../../store/types';

export interface ProfileInfoProps {
  user: User | null,
  allUsers: User[],
  isEditing: boolean,
  editUser: (name: string, address: string, phoneNumber: string, email: string) => void,
}

/*export interface ProfileInfoProps{
  customerName: string;
  email: string;
  cellphone: string;
  street: string;
  number: string;
  cep: string;
  city: string;
  state: string;
  country: string;
  isEditing: bool;
}*/






const ProfileInfo: React.FC<ProfileInfoProps> = ( props ) => {
  const initialState = {
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  };
  
  async function editProfileCallback(){
    const input = JSON.parse(JSON.stringify(values))
    //props.registerUser(input.name, input.address, input.phoneNumber, input.email, input.password)
    //console.log(input.email + input.password)
    // go to home
  }

  const { onChange, onSubmit, values} = useForm(editProfileCallback, initialState); 

  return(
    <div className={styles.infoDisplay}>
      <h1>Perfil</h1>
      <h2> Dados da conta de {props.user?.name}</h2>
      <form onSubmit={onSubmit}>
			<div>
				<label>
					Nome: <br/> <input 
					type="text"
					name="name"
					id="name" 
					placeholder="Jose da Silva Souza"
					onChange={onChange} 
          disabled
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

export default ProfileInfo;