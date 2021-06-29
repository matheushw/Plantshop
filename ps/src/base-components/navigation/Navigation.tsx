import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState, User } from '../../store/types';
import * as styles from './styles';
import ManageButton from '../ManageButton';

export interface NavigationProps{
  user: User | null,
}

const Navigation: React.FC<NavigationProps> = (props) => {
  return(

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
            {props.user?.role === "admin" && <Link className={styles.iconButton} to="/admin-page"><span className="material-icons-outlined"> account_circle </span> </Link>}
            {props.user?.role === "user" && <Link className={styles.iconButton} to="/profile"><span className="material-icons-outlined"> account_circle </span> </Link>}
            {props.user === null && <Link to="/login-page"><ManageButton text={"Login/Cadastro"} /> </Link>}
          </div>

        </div>
      </nav>
    </div>  
  );
}

interface DispatchProps {}

const mapStateToProps = (state: ApplicationState): NavigationProps => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
