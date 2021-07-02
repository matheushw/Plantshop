import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, User } from '../../../../../store/types';
import Card from '../Card';
import * as styles from './styles';

export interface AdminPageProps{
  	user: User;
}

const AdminPage: React.FC<AdminPageProps> = (props) => {
	return(
		<div className={styles.adminInfos}>
		<h1>Bem-vindx, {props.user.name}!</h1>
		<h4>Phone: {props.user.phoneNumber}</h4>
		<h4>Email: {props.user.email}</h4>
		<h2>O que você quer fazer agora?</h2>

		<div className={styles.center}>
			<ul>
			<Card img={"https://www.exansoftware.com/wp-content/uploads/2019/03/inventory-icon4.png"} title={"Gerenciar inventário"} link={"/inventory"}/>
			<Card img={"https://image.flaticon.com/icons/png/512/1721/1721923.png"} title={"Cadastrar novo administrador"} link={"/add-admin-page"}/>
			</ul>
		</div>
		</div>
	);
}

interface DispatchProps {}

interface StateProps{
  user: User;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: state.user!
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);