import React from 'react';
import { ProductModel } from '../../../../../store/types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as styles from './styles'
import ManageArrow from '../../../../../base-components/ManageArrow';
import RentProduct from '../RentProduct';
import { NotificationType } from '../utils';

export interface RentProductListProps{
  title: string;
  products: ProductModel[];
  setShowNotification: (notificationType: NotificationType) => void;
}

const RentProductList: React.FC <RentProductListProps> = (props) => {

  const renderProduct = (product: ProductModel, idx:number) => {
    return (<RentProduct setShowNotification={props.setShowNotification} product={product} key={idx}/>);
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

export default RentProductList;