import React from 'react';
//import Product from '../Product/Product'
import * as styles from '../Product/styles';
import { useParams } from "react-router-dom";
// import { ProductProps } from '../Product/Product';

export interface DetailProductPageProps {}

interface fodasse {
  name: string;
  price: string;
  img: string;
}

const DetailProductPage: React.FC<DetailProductPageProps> = () => {
  const productProps  = useParams<fodasse>();

  console.log("Params = " + productProps.name + " " + productProps.price + " " + productProps.img);
  return (
    <div>
      <h1>{productProps.name}</h1>
      <img className={styles.productImage} src={productProps.img.split("*").join("/")} alt=""/>
      <h3 className={styles.title}>{productProps.name}</h3>
      <h2 className={styles.price}>R${productProps.price}</h2>
    </div>
  );
};

export default DetailProductPage;
