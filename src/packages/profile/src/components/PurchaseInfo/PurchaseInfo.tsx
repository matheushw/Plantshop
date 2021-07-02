import React from 'react'
import { ProductOrder } from '../../../../../store/types';
import * as styles from './styles'

export interface PurchaseInfoProps{
    number: number;
    date: string;
    price: string;
    status: string;
    productsOrders: ProductOrder[];
}

const PurchaseInfo: React.FC<PurchaseInfoProps> = ( {number, date, price, productsOrders, status} ) => {

    const renderProducts = (productOrder: ProductOrder) => {
		return(
			<li>{productOrder.quantity} x {productOrder.name}</li>
		);
    }

	return(
		<div>
		<div className={styles.purchaseDisplay}>
			<h2>Pedido {number}</h2>
			<ul>
				<h3> Data: {date} </h3>
				<h3>Produtos: </h3>
				
				{productsOrders.map(renderProducts)}   
				
				<h3> Preço total: R${price}</h3>         
				<h3> Status: {status}</h3>         
			</ul>
		</div>
		</div>
	);
}

export default PurchaseInfo;