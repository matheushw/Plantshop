import React from 'react'
import { RentOrder } from '../../../../../store/types';
import * as styles from './styles'
import { dateAsString } from './utils';

export interface ChartRentProps{
  rentOrder: RentOrder;
  removeRentOrder: (orderId: number) => void;
}

const ChartRent: React.FC<ChartRentProps> = ({ rentOrder, removeRentOrder }) => {
  return(
   <div className={styles.productContainer}>
     <img src={rentOrder.img} alt="" className={styles.productImage}/>
     <h3 className={styles.productName}>{rentOrder.name}</h3>
     <h3 className={styles.productQuantity}>{"Começo do aluguel: "}</h3>
     <h3 className={styles.productQuantity}>{dateAsString(rentOrder.startDate!)}</h3>
     <h3 className={styles.productQuantity}>{"Termino do aluguel: "}</h3>
     <h3 className={styles.productQuantity}>{dateAsString(rentOrder.endDate!)}</h3>
     <h2 className={styles.price}>R${rentOrder.pricePerDay}/Dia</h2>
     <h2 className={styles.price}>Total: R${rentOrder.total}</h2>
     <button className="material-icons-outlined" onClick={() => removeRentOrder(rentOrder.orderId)}>delete</button>
   </div> 
  );
}

export default ChartRent;