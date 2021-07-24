import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import { clearProductInCartRequest, minusProductInCartRequest, placePurchaseOrderNotAsked, placePurchaseOrderRequest, placeRentOrdersNotAsked, placeRentOrdersRequest, plusProductInCartRequest, removeProductFromCartRequest, removeRentOrderRequest } from '../../../../../store/actionCreators'
import { ApplicationState, Order, PossibleStates, ProductModel, ProductOrder, RentOrder, User} from '../../../../../store/types'
import ChartProduct  from '../ChartProduct/ChartProduct'
import * as styles from './styles'
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ChartRent from '../ChartRent/ChartRent'
import ProductList from '../ProductList'
import { ReactElement } from 'react'
import { useEffect } from 'react'

export interface ChartPageProps{
  user: User | null;
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  loadings: PossibleStates;
  errors: PossibleStates;
  success: PossibleStates;
  removeProduct: (id: string) => void;
  removeRentOrder: (rentOrderId: number) => void;
  minusProduct: (id: string) => void;
	plusProduct: (id: string) => void;
  placePurchaseOrder:(user: User, order: Order) => void;
  placePurchaseNotAsked:() => void;
  placeRentOrders:(rentOrders: RentOrder[], user: User) => void;
  placeRentNotAsked:() => void;
  clearCart: () => void;
}

const ChartPage: React.FC<ChartPageProps> = (props) => {

  useEffect(() => {
    if(props.success.placePurchaseOrder){
      props.placePurchaseNotAsked();
    } else if (props.success.placeRentOrders){
      props.placeRentNotAsked();
    }
  });

  const getFinalPrice = () => {
    let finalPrice: number = 0.0;

    props.cartProducts.forEach((product) => {
      finalPrice += parseFloat(product.price) * product.quantity;
    });

    props.rentOrders.forEach((rentOrder) => finalPrice += parseFloat(rentOrder.total));

    return finalPrice;
  }

  const placePurchaseOrder = () => {

    if(props.cartProducts.size !== 0){
      let totalPrice: number = 0;
      let productsOrders: ProductOrder[] = [];
      
      props.cartProducts.forEach((product) => {
        totalPrice += parseFloat(product.price) * product.quantity;

        const newProductOrder: ProductOrder = {
          id: product.id, 
          name: product.name, 
          price: product.price, 
          quantity: product.quantity
        }

        // draft.products.forEach((value, idx) => {
        //   if(value.id === product.id){
        //     draft.products[idx].quantity -= product.quantity;
        //   }
        // })

        productsOrders.push(newProductOrder);
      });
      
      var day = new Date();
      var dd = day.getDate().toString();
      var mm = (day.getMonth()+1).toString();
      var yyyy = (day.getFullYear()).toString();
      if(parseInt(dd) < 10){
        dd = '0' + dd;
      } 
      if(parseInt(mm)<10){
        mm = '0' + mm;
      } 

      const newOrder: Order = {
        productsOrders: productsOrders,
        date: dd + "/" + mm + "/" + yyyy,
        total: totalPrice.toFixed(2),
        status: "Preparando para envio!",
      }

      props.placePurchaseOrder(props.user!, newOrder);
    }

    if(props.rentOrders.length !== 0) {
      props.placeRentOrders(props.rentOrders, props.user!);
    }

    // props.clearCart();

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
          {props.user !== null && <button onClick={placePurchaseOrder}>Finalizar compra</button>}
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
  placePurchaseOrder:(user: User, order: Order) => void;
  placeRentOrders:(rentOrders: RentOrder[], user: User) => void;
  placePurchaseNotAsked:() => void;
  placeRentNotAsked:() => void;
  clearCart: () => void;
}

interface StateProps{
  loadings: PossibleStates;
  errors: PossibleStates;
  success: PossibleStates;
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  user: User | null;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  cartProducts: state.cartProducts,
  rentOrders: state.rentOrders,
  user: state.user,
  loadings: state.loading,
  errors: state.error,
  success: state.success
  
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeProduct:(id) => {dispatch(removeProductFromCartRequest(id))},
  placePurchaseOrder:(user: User, order: Order)  => {dispatch(placePurchaseOrderRequest(user, order))},
  clearCart: () => {dispatch(clearProductInCartRequest())},
  placeRentOrders:(rentOrders: RentOrder[], user: User) => {dispatch(placeRentOrdersRequest(rentOrders, user))},
  minusProduct: (id) => {dispatch(minusProductInCartRequest(id))},
  plusProduct: (id) => {dispatch(plusProductInCartRequest(id))},
  removeRentOrder:(rentOrderId) => {dispatch(removeRentOrderRequest(rentOrderId))},
  placePurchaseNotAsked:() => {dispatch(placePurchaseOrderNotAsked())},
  placeRentNotAsked:() => {dispatch(placeRentOrdersNotAsked())}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);