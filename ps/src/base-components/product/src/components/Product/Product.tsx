import React  from 'react';
import { Link } from "react-router-dom";

import * as styles from './styles';

export interface ProductProps {
  id: string;
  img: string;
  name: string;
  price: string;
  description: string;
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <div className={styles.product}> 
      <Link to={"/detail-product-page/" + props.id  } >
        <img className={styles.productImage} src={props.img} alt=""/>
        <h3 className={styles.title}>{props.name}</h3>
        <h2 className={styles.price}>R${props.price}</h2>
      </Link>
    </div>
  );
};

export default Product;
