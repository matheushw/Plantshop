import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, Order , RentOrder, User} from '../../../../../store/types';
import PurchaseInfo from '../PurchaseInfo';
import * as styles from './styles'
import { editUserRequest, loadAllOrdersRequest } from '../../../../../store/actionCreators';
import { useForm } from '../../../../useForm';
import {useHistory} from 'react-router';
import RentInfo from '../RentInfo';
import { useEffect } from 'react';
//import userEvent from '@testing-library/user-event';

export interface ProfilePageProps{
  orders: Order[],
  user: User | null,
  allUsers: User[],
	rentedProducts: RentOrder[],
  editUserInfo: (name: string, address: string, phoneNumber: string, email: string, id: string
    ) => void,
	loadAllOrders: (user: User) => void,
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  //Purchase
  const renderOrders = (order: Order, idx: number) =>{
    return(
      <PurchaseInfo number = {(idx+1)} date = {order.date} price = {order.total} productsOrders={order.productsOrders} status={order.status} />
    );
  }

	const renderRentedproduct = (rentedProduct: RentOrder, idx: number) => {
		return (
			<RentInfo rentOrder={rentedProduct} />
		);
	}

  //Edit Profile
  const history = useHistory();

	useEffect(() => {
		if(props.user){
			props.loadAllOrders(props.user);
		}
	}, [props.user]);
	
	const initialState = {
		user: props.user,
	}

	async function editProfileCallback(){
		const input = JSON.parse(JSON.stringify(values))
		let fs = document.getElementsByTagName("fieldset")[0];
		let eb = document.getElementById("editButton");
		if(eb !== null && fs !== null){
			if(eb.innerHTML === "Editar"){
				eb.innerHTML = "Salvar mudanças"
				fs.disabled = false	
			}else{
				eb.innerHTML = "Editar"
				if(props.user){
					props.editUserInfo(input.name ? input.name : props.user.name , input.address ? input.address:props.user.address, input.phoneNumber ? input.phoneNumber:props.user.phoneNumber, input.email ? input.email:props.user.email, props.user.id)
				}
				fs.disabled = true
			}
			history.push('./profile')
		}
	}

	const { onChange, onSubmit, values} = useForm(editProfileCallback, initialState); 

	return ( props.user &&
		<div className={styles.profilePageWrapper}>
			<div className={styles.infoDisplay}>
				<h1>Perfil</h1>

				<div className={styles.infos}>
					<h2> Dados da conta de {props.user.name}</h2>
						<form onSubmit={onSubmit}>
							<fieldset disabled={true}>
								<div>
									<label>
										<br/>
										Nome: <br/> <input 
										type="text"
										name="name"
										id="name" 
										onChange={onChange} 
										defaultValue={props.user.name}
										required/> 
										<br/><br/>
									</label>

									<label>
										Endereço: <br/> <input 
										type="text" 
										name="address" 
										id="address"
										defaultValue={props.user.address}
										onChange={onChange}
										required/><br/>
										<br/>
									</label>

									<label>
										Telefone: <br/> <input 
										type="text" 
										name="phoneNumber" 
										id="phoneNumber"
										defaultValue={props.user.phoneNumber}
										onChange={onChange}
										required/><br/>
										<br/>
									</label>
									
									<label>
										Email: <br/> <input 
										type="email" 
										name="email" 
										id="email"
										defaultValue={props.user.email}
										onChange={onChange}
										required/><br/>
										<br/>
									</label>
								</div>
							</fieldset>

							<label>
								<button id="editButton" type="submit">Editar</button>
							</label>
						</form>
				</div>
			</div>

			<div className={styles.purchaseList}>
				<h1> Meus pedidos</h1>
				<div>
					{props.orders.map(renderOrders)}
					{props.rentedProducts.map(renderRentedproduct)}
				</div>
			</div>
		</div>
  );
}

interface DispatchProps {
  editUserInfo: (name: string, address: string, phoneNumber: string, email: string, id: string
    ) => void,
	loadAllOrders: (user: User) => void,
}

interface StateProps{
  orders: Order[];
  user: User;
  allUsers: User[];
	rentedProducts: RentOrder[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  orders: state.orders,
  user: state.user!,
  allUsers: state.usersList,
  rentedProducts: state.rentedProducts
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  editUserInfo:(name, address, phoneNumber, email, id) => {dispatch(editUserRequest(name, address, phoneNumber, email, id))},
	loadAllOrders: (user) => {dispatch(loadAllOrdersRequest(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);