import React from 'react'
import { Link } from "react-router-dom";
import * as styles from './styles'

export interface NavigationProps{}

const Navigation: React.FC<NavigationProps> = () => {
  return(

    <div>
      <nav>
        <div className={styles.navHeader}>
          <Link to="/"><h1 className={styles.logo}>Plant Shop</h1></Link>

          <div>
            <ul className={styles.navbar}>
              <li><Link to="/about">Plantas</Link></li>
              <li><Link to="/">Flores</Link></li>
              <li><Link to="/">Buquês</Link></li>
              <li><Link to="/">Vasos</Link></li>
              <li><Link to="/rent-page">Aluguel de Planta</Link></li>
            </ul>
          </div>

          <div>
            <Link to="/chart-page"><span className="material-icons-outlined"> shopping_cart </span></Link>
            <Link to="/profile"><span className="material-icons-outlined"> account_circle </span> </Link>
            <Link to="/login-page"><button>Login/Cadastro</button></Link>
          </div>

        </div>
      </nav>
    </div>  
  );
}

export default Navigation;