import React, { ReactElement } from 'react';

import * as styles from './styles';

export interface ProductListProps {
  title: string;
  products : ReactElement[];
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div className={styles.productList}>
      <h1>{title}</h1>
      <div className={styles.productDisplay}>{products}</div>
    </div>
  );
};

export default ProductList;
