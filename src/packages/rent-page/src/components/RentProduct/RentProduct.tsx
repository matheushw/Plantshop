import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dateDiffInDays } from '../../../../../base-components/utils';
import { rentProduct } from '../../../../../store/actions';
import { ApplicationState, ProductModel, RentOrder } from '../../../../../store/types';
import { NotificationType } from '../utils';
import * as styles from './styles'

export interface RentProductProps{
  product: ProductModel;
  rentProduct: (rentOrder: RentOrder) => void;
  setShowNotification: (notificationType: NotificationType) => void;
}

const RentProduct: React.FC<RentProductProps> = ( props ) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());


  var day = new Date();
  var dd = (day.getDate()).toString();
  var mm = (day.getMonth()+1).toString();
  var yyyy = (day.getFullYear()).toString();
  if(parseInt(dd) < 10){
    dd = '0' + dd;
  } 
  if(parseInt(mm)<10){
    mm = '0' + mm;
  } 
  const today = yyyy+'-'+mm+'-'+dd;

  return(
    <div className={styles.productDisplay}>
      <h1>{props.product.name}</h1>
      <img src={props.product.img} alt={props.product.name} className={styles.productImage}></img>
      <h3>{props.product.name}</h3>
      <p className={styles.description}>{props.product.description}</p>
      <h2 className={styles.price}>R${props.product.price}/Dia</h2>
      
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          Data de aluguel: 
          <input 
            type="date" 
            name="startDate" 
            min={today} 
            max="2022-01-01" 
            onChange={(event) => setStartDate(event.target.valueAsDate)} 
            required
          />
        </div>

        <div>
          Data de devolução: 
          <input 
            type="date" 
            name="endDate" 
            min={today} 
            max="2022-01-01" 
            onChange={(event) => setEndDate(event.target.valueAsDate)}
            required/>
        </div>

        <button 
          className={styles.rentButton} 
          onClick={() => {
              if(endDate && startDate && startDate > endDate){
                props.setShowNotification(NotificationType.FAILED);
              } else {
                props.setShowNotification(NotificationType.SUCCESSFUL);
                const daysDif = dateDiffInDays(startDate!, endDate!);
                const priceByDay = parseFloat(props.product.price)/10.0;
                console.log((priceByDay * 3.0).toFixed(2))
                const totalPrice = daysDif===0? priceByDay:(priceByDay * daysDif);
                const rentOrder: RentOrder = {
                  orderId: Math.floor(Math.random() * 100000),
                  img: props.product.img,
                  id: props.product.id,
                  name: props.product.name,
                  date: today,
                  startDate: startDate,
                  endDate: endDate,
                  pricePerDay: priceByDay.toFixed(2),
                  total: totalPrice.toFixed(2),
                };
    
                props.rentProduct(rentOrder);
              }
            }
          }
          >Alugar</button>
      </form>

    </div>
  );
}

interface DispatchProps {
  rentProduct: (rentOrder: RentOrder) => void;
}

interface StateProps{}

const mapStateToProps = (state: ApplicationState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  rentProduct: (rentOrder: RentOrder) => dispatch(rentProduct(rentOrder))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentProduct);