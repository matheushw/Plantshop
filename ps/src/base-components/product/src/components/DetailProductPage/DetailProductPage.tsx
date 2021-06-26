import React from 'react';
import * as styles from './styles';
import { useParams } from "react-router-dom";
import { ApplicationState, ProductModel } from '../../../../../store/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

export interface DetailProductPageProps {
  products: ProductModel[];
}

interface ReceivedProps{
  id: string;
}

const DetailProductPage: React.FC<DetailProductPageProps> = (props) => {
  const productProps  = useParams<ReceivedProps>();
  const selectedProduct = props.products.find((product) => product.id === productProps.id);

  return (
    <div className={styles.product}>
      <h1>{selectedProduct?.name}</h1>
      <img className={styles.productImage} src={selectedProduct?.img} alt=""/>
      <h3 className={styles.title}>{selectedProduct?.name}</h3>
      {selectedProduct?.description}
      <h2 className={styles.price}>R${selectedProduct?.price}</h2>
      <span className={"material-icons-outlined " + styles.cartIcon}> add_shopping_cart </span>
    </div>
  );
};

interface DispatchProps {}

const mapStateToProps = (state: ApplicationState): DetailProductPageProps => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductPage);