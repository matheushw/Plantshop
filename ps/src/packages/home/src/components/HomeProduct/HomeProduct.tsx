import React from 'react';

import * as styles from './styles';

export interface HomeProductProps {
  img: string;
  name: string;
  price: string;
}

const HomeProduct: React.FC<HomeProductProps> = ({ img, name, price }) => {
  return (
    <div>
      <img className={styles.homeProductImage} src={img}/>
      <h3>{name}</h3>
      <h2>R${price}</h2>
    </div>
  );
};

export default HomeProduct;
