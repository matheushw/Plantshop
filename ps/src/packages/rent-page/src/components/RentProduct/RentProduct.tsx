import React from 'react'
import ManageButton from '../../../../../base-components/ManageButton';
import * as styles from './styles'

export interface RentProductProps{
	productName: string;
	imgUrl: string;
	description: string;
	price: string;
}

const RentProduct: React.FC<RentProductProps> = ( {imgUrl, productName, description ,price} ) => {
	return(
		<div className={styles.productDisplay}>
		<h1>Aluguel {productName}</h1>
		<img src={imgUrl} alt={productName} className={styles.productImage}></img>
		<h3>{productName}</h3>
		<p>{description}</p>
		<h2 className={styles.price}>R${price}/Dia</h2>
		
		<div>
			Data de aluguel: 
			<input type="date" name="datadenascimento" min="2021-01-01" max="2022-01-01"/>
		</div>

		<div>
			Data de devolução: 
			<input type="date" name="datadenascimento" min="2021-01-01" max="2022-01-01"/>
		</div>

		<ManageButton text="Alugar"/>
		</div>
	);
}

export default RentProduct;