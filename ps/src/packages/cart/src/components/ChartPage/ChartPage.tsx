import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { removeProductToChart } from '../../../../../store/actions'
import { ApplicationState, ProductModel } from '../../../../../store/types'
import ChartProduct  from '../ChartProduct/ChartProduct'
import * as styles from './styles'

export interface ChartPageProps{
  cartProducts: ProductModel[];
  removeProduct: (id: string) => void;
}

const ChartPage: React.FC<ChartPageProps> = (props) => {

  const getFinalPrice = () => {
    let finalPrice: number = 0.0;

    props.cartProducts.forEach((product) => {
      finalPrice += parseFloat(product.price);
    });

    return finalPrice;
  }
  

  const renderProduts = (cartProduct: ProductModel) =>{
    return(
      <ChartProduct img={cartProduct.img} name={cartProduct.name} price={cartProduct.price} id={cartProduct.id} removeProduct={props.removeProduct} />
    );
  }

  return(
    <div className={styles.productDisplay}>
      <h1>Seus Produtos</h1>

      <div className={styles.productList}>
        {props.cartProducts.length !== 0 && props.cartProducts.map(renderProduts)}
        {props.cartProducts.length === 0 && <h2>Você não tem nenhum produto no carrinho :(</h2>}
      </div>

      {props.cartProducts.length !== 0 && <h1>Total: {"R$ " + getFinalPrice().toFixed(2)}</h1>}
    
      {props.cartProducts.length !== 0 && 
        <div>
          <button>Continuar comprando</button>
          <button>Finalizar compra</button>
        </div>
      }
    </div>
  );
}

interface DispatchProps {
  removeProduct: (id: string) => void;
}
interface StateProps{
  cartProducts: ProductModel[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  cartProducts: state.cartProducts
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeProduct:(id) => {dispatch(removeProductToChart(id))},
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);