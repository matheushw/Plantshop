import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import { clearCart, placeOrder, removeProductToChart } from '../../../../../store/actions'
import { ApplicationState, ProductModel, User} from '../../../../../store/types'
import ChartProduct  from '../ChartProduct/ChartProduct'
import * as styles from './styles'
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { ReactNode } from 'react'

export interface ChartPageProps{
  user: User | null;
  cartProducts: Map<string, ProductModel>;
  removeProduct: (id: string) => void;
  placeOrder: () => void;
  clearCart: () => void;
}

const ChartPage: React.FC<ChartPageProps> = (props) => {

  const getFinalPrice = () => {
    let finalPrice: number = 0.0;

    props.cartProducts.forEach((product) => {
      finalPrice += parseFloat(product.price) * product.quantity;
    });

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

  const renderProduts = (cartProducts: Map<string, ProductModel>) =>{

    const cartProductElements: ReactNode[] = [];

    cartProducts.forEach((cartProduct) => {
      cartProductElements.push(
        <ChartProduct 
          img={cartProduct.img} 
          name={cartProduct.name} 
          price={cartProduct.price} 
          quantity={cartProduct.quantity}
          id={cartProduct.id} 
          removeProduct={props.removeProduct} 
        />);
    });

    return(cartProductElements);
  }

  return(
    <div className={styles.productDisplay}>
      <ReactNotification/>
      <h1>Seus Produtos</h1>

      <div className={styles.productList}>
        {props.cartProducts.size !== 0 && renderProduts(props.cartProducts)}
        {props.cartProducts.size === 0 && <h2>Você não tem nenhum produto no carrinho :(</h2>}
      </div>
      
      {props.cartProducts.size !== 0 && <h1>Total: {"R$ " + getFinalPrice().toFixed(2)}</h1>}
      {props.cartProducts.size !== 0 && 
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
  placeOrder: () => void;
  clearCart: () => void;
}

interface StateProps{
  cartProducts: Map<string, ProductModel>;
  user: User | null;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  cartProducts: state.cartProducts,
  user: state.user
  
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeProduct:(id) => {dispatch(removeProductToChart(id))},
  placeOrder:() => {dispatch(placeOrder())},
  clearCart: () => (dispatch(clearCart())),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);