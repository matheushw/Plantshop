import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, Order } from '../../../../../store/types';
import ProfileInfo from '../ProfileInfo';
import PurchaseInfo from '../PurchaseInfo';
import * as styles from './styles'


export interface ProfilePageProps{
  orders: Order[]
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {

  const renderOrders = (order: Order, idx: number) =>{
    return(
      <PurchaseInfo number = {(idx+1)} date = {order.date} price = {order.total} productsOrders={order.productsOrders} status={order.status} />
    );
  }

  return (
    <div>
      <ProfileInfo
      customerName={"Madu"}
      email={"seuemail"}
      cellphone={"12345678"}
      street={"Rua 1"}
      number={"1940"}
      cep={"12345678"}
      city={"São Paulo"}
      state={"SP"}
      country={"Brasil"}/>
      <div className={styles.purchaseList}>
        <h1> Meus pedidos</h1>
        {props.orders.map(renderOrders)}
      </div>
    </div>
    
  );
}

interface DispatchProps {}
interface StateProps{
  orders: Order[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  orders: state.orders
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);