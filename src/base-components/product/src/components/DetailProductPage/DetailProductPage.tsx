import React from 'react';
import * as styles from './styles';
import { useParams } from "react-router-dom";
import { ApplicationState, ProductModel } from '../../../../../store/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addProductToChartRequest, loadAllProductsRequest } from '../../../../../store/actionCreators';
import ReactNotification, { store } from 'react-notifications-component'
import { useEffect } from 'react';

export interface DetailProductPageProps {
	products: ProductModel[];
	cartProducts: Map<string, ProductModel>;
	addProduct: (product: ProductModel) => void;
	loadAllProducts: () => void;
}

interface ReceivedProps{
  	id: string;
}

const DetailProductPage: React.FC<DetailProductPageProps> = (props) => {
	const productProps  = useParams<ReceivedProps>();
	const selectedCartProduct = props.cartProducts.get(productProps.id);
	let selectedProduct = props.products.find((product) => product.id === productProps.id);

	useEffect(() => {
		props.loadAllProducts();
	});

	useEffect(() => {
		selectedProduct = props.products.find((product) => product.id === productProps.id);
	}, [props.products]);

	const addProduct = () => {
		if((selectedCartProduct === undefined || selectedCartProduct!.quantity < selectedProduct!.quantity) && selectedProduct!.quantity > 0){
			const productToAdd: ProductModel = {...selectedProduct!, quantity: 1};
			props.addProduct(productToAdd);
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
  }

  	return ( selectedProduct?
		<div className={styles.product}>
			<ReactNotification/>
			<h1>{selectedProduct?.name}</h1>
			<img className={styles.productImage} src={selectedProduct?.img} alt=""/>
			<h3 className={styles.title}>{selectedProduct?.name + " - Quantidade disponível: " + selectedProduct?.quantity}</h3>
			{selectedProduct?.description}
			<h2 className={styles.price}>R${selectedProduct?.price}</h2>
			<button className={"material-icons-outlined " + styles.cartIcon} onClick={addProduct}> add_shopping_cart </button>
		</div> :
		<div></div>
  );
};

interface DispatchProps {
  	addProduct: (product: ProductModel) => void;
		loadAllProducts: () => void;
}
interface StateProps{
	products: ProductModel[];
	cartProducts: Map<string, ProductModel>;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    products: state.products,
    cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  	addProduct:(product) => {dispatch(addProductToChartRequest(product))},
  	loadAllProducts:() => {dispatch(loadAllProductsRequest())}
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductPage);