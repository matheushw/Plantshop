import React  from 'react';
import { Link } from "react-router-dom";
import * as styles from './styles';
import { ProductModel } from '../../../../../store/types';

export interface ProductProps {
    product: ProductModel;
}

const Product: React.FC<ProductProps> = (props) => {
	return (
		<div className={styles.product}> 
		<Link to={"/detail-product-page/" + props.product.id  } >
			<img className={styles.productImage} src={props.product.img} alt=""/>
			<h3 className={styles.title}>{props.product.name}</h3>
			<h2 className={styles.price}>R${props.product.price}</h2>
		</Link>
		</div>
	);
};

export default Product;