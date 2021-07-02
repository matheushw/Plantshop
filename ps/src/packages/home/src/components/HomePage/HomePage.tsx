import React, { ReactNode } from 'react';
import Product from '../../../../../base-components/product/src/components/Product/Product';
import ProductList from '../../../../../base-components/product-list/src/components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, ProductModel } from '../../../../../store/types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as styles from './styles';
import ManageArrow from '../../../../../base-components/ManageArrow';

export interface HomePageProps {
  	products: ProductModel[],
}

const HomePage: React.FC<HomePageProps> = (props) => {

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

	const titleType = (type:string) => {
		switch(type){
			case 'Planta':
				return 'Plantas';
			case 'Flor':
				return 'Flores';
			case 'Buque':
				return 'Buquês';
			case 'Vaso':
				return 'Vasos';
			default:
				return '';
		};
	};

	const renderProductTypeList = (products:Map<string, ProductModel[]>) => {
		const lists: ReactNode[] = [];

		products.forEach((productsType, title) => {
			lists.push(<ProductList title={titleType(title)} products={productsType} />);
		});

		return (
			<>{lists}</>
		)
	}

	const renderProduts = (product: ProductModel) =>{
		return(
			<Product product={product}/>
		);
	}

	return (
		<div className={styles.homePage}>
			<h1> Promoções </h1>
				<ScrollMenu
				data={props.products.map(renderProduts)}
				arrowLeft={<ManageArrow direction="left" />}
				arrowRight={<ManageArrow direction="right" />}
				alignCenter={false}
				/>
			{renderProductTypeList(splitProducts(props.products))}
		</div>
	);
};

interface DispatchProps {}

const mapStateToProps = (state: ApplicationState): HomePageProps => ({
  	products: state.products
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
