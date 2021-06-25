import React  from 'react';
import { Link } from "react-router-dom";

import * as styles from './styles';

export interface ProductProps {
  img: string;
  name: string;
  price: string;
}

const Product: React.FC<ProductProps> = (props) => {
       
  return (
    <div className={styles.product}> 
    <Link to={{pathname:"/detail-product-page"}} >
    <img className={styles.productImage} src={props.img} alt=""/>
      <h3 className={styles.title}>{props.name}</h3>
      <h2 className={styles.price}>R${props.price}</h2>
      </Link>
    </div>
  );
};

export default Product;
