import React from 'react';
import { ProductModel } from '../../../../../store/types';
import Product from '../../../../product/src/components/Product/Product';
import * as styles from './styles';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ManageArrow from '../../../../ManageArrow';

export interface ProductListProps {
  title: string;
  products: ProductModel[];
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const renderProduct = (product: ProductModel, idx:number) => {
    return (<Product product={product} key={idx}/>);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <ul className={styles.productList}>
        <ScrollMenu
          data={props.products.map(renderProduct)}
          arrowLeft={<ManageArrow direction="left" />}
          arrowRight={<ManageArrow direction="right" />}
          alignCenter={false}
        />
      </ul>
    </div>
  );
};

export default ProductList;
