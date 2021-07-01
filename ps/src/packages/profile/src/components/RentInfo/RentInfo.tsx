import React from 'react'
import { RentOrder } from '../../../../../store/types';
import { dateAsString } from '../../../../cart/src/components/ChartRent/utils';
import * as styles from './styles'

export interface RentInfoProps{
  rentOrder: RentOrder;
}

const RentInfo: React.FC<RentInfoProps> = ( props ) => {
  return(
    <div>
      <div className={styles.purchaseDisplay}>
        <h2>Aluguel #{props.rentOrder.orderId}</h2>
          <ul>
            <h3>Data de inicio do aluguel: {dateAsString(props.rentOrder.startDate!)} </h3>
            <h3>Data de fim do aluguel: {dateAsString(props.rentOrder.endDate!)} </h3>
            <h3>Produto: {props.rentOrder.name}</h3>
            <h3>Preço total: {props.rentOrder.total}</h3>                
          </ul>
      </div>
    </div>
  );
}

export default RentInfo;