import React from 'react'
import * as styles from './styles'

export interface ChartProductProps{
  name: string;
  price: string;
  img: string;
}

const ChartProduct: React.FC<ChartProductProps> = ({ name, price, img }) => {
  return(
   <div>
     <img src={img} alt="" className={styles.productImage}/>
     <h3 className={styles.productName}>{name}</h3>
     <h2 className={styles.price}>R${price}</h2>
     <span className="material-icons-outlined">delete</span>
   </div> 
  );
}

export default ChartProduct;