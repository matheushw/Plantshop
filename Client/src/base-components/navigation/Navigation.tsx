import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ApplicationState, User } from '../../store/types'
import * as styles from './styles'
import ManageButton from '../ManageButton'
import { clearProductInCartRequest, logOutRequest} from '../../store/actionCreators'

export interface NavigationProps{
	user: User | null;
	logOut: () => void;
	clearCart: () => void;
}

const Navigation: React.FC<NavigationProps> = (props) => {
	const logOut = () => {
		props.clearCart();
		props.logOut();
	};

  	return (
    	<div>
		  <nav>
			<div className={styles.navHeader}>
			  <Link to="/"><h1 className={styles.logo}>Plant Shop</h1></Link>
			  <div>
			  	<ul className={styles.navbar}>
			  		<li><Link to="/plant-page">Plantas</Link></li>
			  		<li><Link to="/flower-page">Flores</Link></li>
			  		<li><Link to="/bouquet-page">Buquês</Link></li>
			  		<li><Link to="/vase-page">Vasos</Link></li>
			  		<li><Link to="/rent-page">Aluguel de Planta</Link></li>
			  	</ul>
			  </div>
			  <div>
			  	<Link className={styles.iconButton} to="/chart-page"><span className="material-icons-outlined" > shopping_cart </span></Link>
			  	{props.user?.admin === true && <Link className={styles.iconButton} to="/admin-page"><span className="material-icons-outlined"> account_circle </span> </Link>}
			  	{props.user?.admin === false && <Link className={styles.iconButton} to="/profile"><span className="material-icons-outlined"> account_circle </span> </Link>}
			  	{props.user === null && <Link to="/login-page"><ManageButton text={"Login/Cadastro"} /> </Link>}
			  	{props.user !== null && <Link to="/login-page"><span onClick={logOut} className="material-icons-outlined"> logout </span></Link>}
			  </div>
			</div>
		  </nav>
		</div>  
  	);
}

interface DispatchProps {
  	logOut: () => void;
	clearCart: () => void;
}

interface StateProps{
	user: User | null;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
	user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	logOut: () => {dispatch(logOutRequest())},
	clearCart: () => {dispatch(clearProductInCartRequest())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
