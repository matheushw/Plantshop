import React from 'react';
import { ApplicationState, ProductModel} from '../../../../../store/types';
import  ManageButton  from '../../../../../base-components/ManageButton';
import * as styles from './styles'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addInventoryRequest, removeInventoryRequest, removeProductRequest } from '../../../../../store/actionCreators';


export interface InventoryItemProps{
	product: ProductModel;
	addInventory: (productId: string) => void;
	removeInventory: (productId: string) => void;
	removeProduct: (productId: string) => void;
}

const InventoryItem: React.FC <InventoryItemProps> = (props) => {

	return(
		<div>
		<li className={styles.content}>
			<img src={props.product.img} alt="" className={styles.productImage}/> 
			<h3>{props.product.name}</h3>
			<h2>{props.product.quantity} unidades em estoque</h2>
			<h2>R${props.product.price}</h2>
			<div className={styles.buttons}>
			<ManageButton onClick={() => props.addInventory(props.product.id)} text={"Adicionar estoque"} />
			<ManageButton onClick={() => props.removeInventory(props.product.id)} text={"Remover estoque"} />
			<ManageButton onClick={() => props.removeProduct(props.product.id)} text={"Remover produto"} />
			</div>
		</li>
		</div>
	);
}

interface DispatchProps {
	addInventory: (productId: string) => void;
	removeInventory: (productId: string) => void;
	removeProduct: (productId: string) => void;
}

interface StateProps{}

const mapStateToProps = (state: ApplicationState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addInventory: (productId: string) => {dispatch(addInventoryRequest(productId))},
  removeInventory: (productId: string) => {dispatch(removeInventoryRequest(productId))},
  removeProduct: (productId: string) => {dispatch(removeProductRequest(productId))},
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);