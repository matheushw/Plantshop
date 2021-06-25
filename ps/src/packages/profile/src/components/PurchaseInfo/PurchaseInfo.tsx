import React from 'react'
import * as styles from './styles'

export interface PurchaseInfoProps{
  number: number;
  date: string;
  price: string;
}

const PurchaseInfo: React.FC<PurchaseInfoProps> = ( {number, date, price} ) => {
  return(
    <div>
      <div className={styles.purchaseDisplay}>
        <h2>Pedido {number}</h2>
          <ul>
            <h3> Data: {date} </h3>
            <h3>Produtos: </h3>
            <li>  </li>
            <li> Planta X</li>   
            <h3> Preço total: {price}</h3>         
          </ul>
      </div>
    </div>
  );
}

export default PurchaseInfo;