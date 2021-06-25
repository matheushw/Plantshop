import React from 'react';
//import Product from '../Product/Product'
import * as styles from '../Product/styles';
import { useParams } from "react-router-dom";

export interface DetailProductPageProps {
  name: string;
  img: string;
  price: string;
}

const DetailProductPage: React.FC<DetailProductPageProps> = props => {
  const params = useParams<DetailProductPageProps>();
  console.log("Params= " + params.name + params.img + params.price);
  return (
    <div>
      <h1>{params.name}</h1>
      <img className={styles.productImage} src={params.img} alt=""/>
      <h3 className={styles.title}>{params.name}</h3>
      <h2 className={styles.price}>R${params.price}</h2>
    </div>
  );
};

export default DetailProductPage;
