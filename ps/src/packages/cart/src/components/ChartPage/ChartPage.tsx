import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import { clearCart, minusProductInCart, placeOrder, plusProductInCart, removeProductToChart, removeRentOrder } from '../../../../../store/actions'
import { ApplicationState, ProductModel, RentOrder, User} from '../../../../../store/types'
import ChartProduct  from '../ChartProduct/ChartProduct'
import * as styles from './styles'
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ChartRent from '../ChartRent/ChartRent'
import ProductList from '../ProductList'
import { ReactElement } from 'react'

export interface ChartPageProps{
  user: User | null;
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  removeProduct: (id: string) => void;
  removeRentOrder: (rentOrderId: number) => void;
  minusProduct: (id: string) => void;
	plusProduct: (id: string) => void;
  placeOrder: () => void;
  clearCart: () => void;
}

const ChartPage: React.FC<ChartPageProps> = (props) => {

  const getFinalPrice = () => {
    let finalPrice: number = 0.0;

    props.cartProducts.forEach((product) => {
      finalPrice += parseFloat(product.price) * product.quantity;
    });

    props.rentOrders.forEach((rentOrder) => finalPrice += parseFloat(rentOrder.total));

    return finalPrice;
  }

  const placeOrder = () => {

    props.placeOrder();
    props.clearCart();

    store.addNotification({
      title: "Pedido feito com sucesso!",
      message: " ",
      type: "success",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: false
      }
      });
  }
  const notifyLogin = () => {
      store.addNotification({
        title: "Por favor faça login antes de finalizar a compra.",
        message: " ",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      });
  }

  const renderRentOrder = (rentOrder: RentOrder, idx: number) => {
    return (<ChartRent removeRentOrder={props.removeRentOrder} rentOrder={rentOrder}/>);
  }

  const renderProduts = (cartProducts: Map<string, ProductModel>) =>{

    const cartProductElements: ReactElement[] = [];

    cartProducts.forEach((cartProduct) => {
      cartProductElements.push(
        <ChartProduct 
          img={cartProduct.img} 
          name={cartProduct.name} 
          price={cartProduct.price} 
          quantity={cartProduct.quantity}
          id={cartProduct.id} 
          removeProduct={props.removeProduct} 
          minusProduct={props.minusProduct}
          plusProduct={props.plusProduct}
        />);
    });

    return(cartProductElements);
  }

  return(
    <div className={styles.productDisplay}>
      <ReactNotification/>
      <h1>Seus Produtos</h1>

      
      <div className={styles.productList}>
        {/* {props.cartProducts.size !== 0 && renderProduts(props.cartProducts)} */}
        {props.cartProducts.size !== 0 && <ProductList products={renderProduts(props.cartProducts)} title={"Compras"} />}
        {/* {props.rentOrders.length !== 0 && props.rentOrders.map(renderRentOrder)} */}

        {props.rentOrders.length !== 0 && <ProductList products={props.rentOrders.map(renderRentOrder)} title={"Alugueis"}/>}
        {props.cartProducts.size === 0 && props.rentOrders.length === 0 && <h2>Você não tem nenhum produto no carrinho :(</h2>}
      </div>
      
      {(props.cartProducts.size !== 0 || props.rentOrders.length !== 0) && <h1>Total: {"R$ " + getFinalPrice().toFixed(2)}</h1>}
      {(props.cartProducts.size !== 0 || props.rentOrders.length !== 0) &&
        <div>
          <Link to="/"><button>Continuar comprando</button></Link>
          {props.user !== null && <button onClick={placeOrder}>Finalizar compra</button>}
          {props.user === null && <button onClick={notifyLogin}>Finalizar compra</button>}
        </div>
      }
    </div>
  );
}

interface DispatchProps {
  removeProduct: (id: string) => void;
  minusProduct: (id: string) => void;
	plusProduct: (id: string) => void;
  removeRentOrder: (rentOrderId: number) => void;
  placeOrder: () => void;
  clearCart: () => void;
}

interface StateProps{
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  user: User | null;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  cartProducts: state.cartProducts,
  rentOrders: state.rentOrders,
  user: state.user
  
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeProduct:(id) => {dispatch(removeProductToChart(id))},
  placeOrder:() => {dispatch(placeOrder())},
  clearCart: () => {dispatch(clearCart())},
  minusProduct: (id) => {dispatch(minusProductInCart(id))},
  plusProduct: (id) => {dispatch(plusProductInCart(id))},
  removeRentOrder:(rentOrderId) => {dispatch(removeRentOrder(rentOrderId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);