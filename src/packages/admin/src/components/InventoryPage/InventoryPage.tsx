import React, { ReactNode } from 'react';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import ManageButton from '../../../../../base-components/ManageButton';
import InventoryList from '../InventoryList';
import { ApplicationState, ProductModel, PossibleStates } from '../../../../../store/types';
import { loadAllProductsRequest, inventoryReset} from "../../../../../store/actionCreators";
import * as styles from './styles'

export interface InventoryPageProps{
  products: ProductModel[];
  success: PossibleStates;
  errors: PossibleStates;
  loadings: PossibleStates;
	loadInventory: () => void;
  resetInventory: () => void;
}

const InventoryPage: React.FC <InventoryPageProps> = (props) => {
  useEffect(() => {
		if(
      (props.success.addInventory && !props.loadings.addInventory && !props.errors.addInventory ) 
      || 
      (props.success.removeInventory && !props.loadings.removeInventory && !props.errors.removeInventory ) 
      ||
      (props.success.removeProduct && !props.loadings.removeProduct && !props.errors.removeProduct ) 
    ){
      props.loadInventory();
      props.resetInventory();
    }  
	}, [props.success.addInventory, props.success.removeInventory, props.success.removeProduct]);

	const splitProducts = (products: ProductModel[]) => {
		const productsMap: Map<string, ProductModel[]> = new Map();
		products.forEach((product) => {
			if (productsMap.has(product.type)){
				const typeList: ProductModel[] = productsMap.get(product.type)!;
				typeList.push(product);
				productsMap.set(product.type, typeList);
			} else {
				productsMap.set(product.type, [product]);
			}
		});

		return productsMap;
	}

	const renderProductTypeList = (products:Map<string, ProductModel[]>) => {
		const lists: ReactNode[] = [];

		products.forEach((productsType, title) => {
			lists.push(<InventoryList title={title} products={productsType} />);
		});

		return (
		<>
			{lists}
		</>
		)
	}

	return(
		<div className={styles.mainPage}>
		<h1>Estoque</h1>
		<Link to="/add-product-page"><ManageButton text={"Adicionar novo produto"} /> </Link>
		{renderProductTypeList(splitProducts(props.products))}
		</div>
	);
}

interface DispatchProps {
  loadInventory: () => void;
  resetInventory: () => void;
}

interface StateProps{
  	products: ProductModel[];
    success: PossibleStates;
    errors: PossibleStates;
    loadings: PossibleStates;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  	products: state.products,
    success: state.success,
  errors: state.error,
  loadings: state.error,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadInventory: () => {dispatch(loadAllProductsRequest())},
  resetInventory: () => {dispatch(inventoryReset())}
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPage);