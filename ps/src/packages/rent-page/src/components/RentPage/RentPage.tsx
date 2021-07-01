import React from 'react'
import RentProduct from '../RentProduct';

export interface RentPageProps{}

const RentPage: React.FC<RentPageProps> = () => {
	
	return(
		<RentProduct 
		productName={"Planta X"} 
		imgUrl={"https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"} 
		description={"A planta X é ótima para a casa, proporcionando... "} 
		price={"19.99"}
		/>
	);
}

export default RentPage;