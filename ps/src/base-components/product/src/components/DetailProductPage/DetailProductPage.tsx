import React from 'react';
import * as styles from './styles';
import { useParams } from "react-router-dom";
import { ApplicationState, ProductModel } from '../../../../../store/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addProductToChart } from '../../../../../store/actions';
import ReactNotification, { store } from 'react-notifications-component'
export interface DetailProductPageProps {
  products: ProductModel[];
  addProduct: (product: ProductModel) => void;
}

interface ReceivedProps{
  id: string;
}

const DetailProductPage: React.FC<DetailProductPageProps> = (props) => {
  const productProps  = useParams<ReceivedProps>();
  const selectedProduct = props.products.find((product) => product.id === productProps.id);

  const addProduct = () => {
    props.addProduct(selectedProduct!);
    store.addNotification({
      title: "Produto adicionado no carrinho!",
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

  return (
    <div className={styles.product}>
      <ReactNotification/>
      <h1>{selectedProduct?.name}</h1>
      <img className={styles.productImage} src={selectedProduct?.img} alt=""/>
      <h3 className={styles.title}>{selectedProduct?.name}</h3>
      {selectedProduct?.description}
      <h2 className={styles.price}>R${selectedProduct?.price}</h2>
      <button className={"material-icons-outlined " + styles.cartIcon} onClick={addProduct}> add_shopping_cart </button>
    </div>
  );
};

interface DispatchProps {
  addProduct: (product: ProductModel) => void;
}
interface StateProps{
  products: ProductModel[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addProduct:(product) => {dispatch(addProductToChart(product))},
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductPage);