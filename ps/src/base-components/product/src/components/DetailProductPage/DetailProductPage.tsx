import React from 'react';
import * as styles from './styles';
import { useParams } from "react-router-dom";
import { ProductProps } from '../Product/Product';

export interface DetailProductPageProps {}

const DetailProductPage: React.FC<DetailProductPageProps> = () => {
  const productProps  = useParams<ProductProps>();

  console.log("Params = " + productProps.name + " " + productProps.price + " " + productProps.img);
  return (
    <div className={styles.product}>
      <h1>{productProps.name}</h1>
      <img className={styles.productImage} src={productProps.img.split("*").join("/")} alt=""/>
      <h3 className={styles.title}>{productProps.name}</h3>
      <h2 className={styles.price}>R${productProps.price}</h2>
      <span className={"material-icons-outlined " + styles.cartIcon}> add_shopping_cart </span>
    </div>
  );
};

export default DetailProductPage;
