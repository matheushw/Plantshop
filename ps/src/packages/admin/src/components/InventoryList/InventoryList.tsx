import React from 'react';
import { ProductModel } from '../../../../../store/types';
import InventoryItem from '../InventoryItem';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as styles from './styles'
import ManageArrow from '../../../../../base-components/ManageArrow';

export interface InventoryListProps{
  title: string;
  products: ProductModel[];
}

const InventoryList: React.FC <InventoryListProps> = (props) => {

  const renderProduct = (product: ProductModel, idx:number) => {
      return (<InventoryItem product={product} key={idx}/>);
  }

  return(
    <div>
      <h2>{props.title}</h2>
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
}

export default InventoryList;