import React from 'react'
import * as styles from './styles'

export interface ChartProductProps{
    name: string;
    price: string;
    img: string;
    id: string;
    quantity: number;
    removeProduct: (id: string) => void;
    minusProduct: (id: string) => void;
    plusProduct: (id: string) => void;
}

const ChartProduct: React.FC<ChartProductProps> = ({ name, price, img, id, quantity, removeProduct, minusProduct, plusProduct }) => {
	return(
		<div>
			<img src={img} alt="" className={styles.productImage}/>
			<h3 className={styles.productName}>{name}</h3>
			<h3 className={styles.productQuantity}>{"Quantidade: " + quantity}</h3>
			<h2 className={styles.price}>R${price}</h2>
			<button className="material-icons-outlined" onClick={() => removeProduct(id)}>delete</button>
			<button className="material-icons-outlined" onClick={() => minusProduct(id)}>remove</button>
			<button className="material-icons-outlined" onClick={() => plusProduct(id)}>add</button>
			
		</div> 
	);
}

export default ChartProduct;