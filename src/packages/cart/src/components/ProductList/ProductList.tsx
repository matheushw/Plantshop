import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as styles from './styles'
import ManageArrow from '../../../../../base-components/ManageArrow';
import { ReactElement } from 'react';

export interface RentProductListProps{
  title: string;
  products: ReactElement[];
}

const RentProductList: React.FC <RentProductListProps> = (props) => {

  return(
    <div>
      <h2>{props.title}</h2>
      <ul className={styles.productList}>
        <ScrollMenu
          data={props.products}
          arrowLeft={<ManageArrow direction="left" />}
          arrowRight={<ManageArrow direction="right" />}
          alignCenter={false}
        />
      </ul>
    </div>
  );
}

export default RentProductList;