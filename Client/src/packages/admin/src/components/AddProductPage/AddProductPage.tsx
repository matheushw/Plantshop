import React, { useEffect} from 'react'
import * as styles from './styles'
import { ApplicationState } from '../../../../../store/types';
import { addProductRequest, addProductReset } from '../../../../../store/actionCreators';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useForm } from '../../../../useForm';
import {useHistory} from 'react-router';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export interface AddProductPageProps {
  addProductLoading: boolean,
  addProductError: boolean,
  addProductSuccess: boolean,
  addProduct: (
    img: string,
    name: string,
    price: string,
    quantity: number,
    category: string,
    description: string) => void,
  addProductReset: () => void,
}

const AddProductPage: React.FC<AddProductPageProps> = (props) => {
    const history = useHistory();
    
    const initialState = {
        img: '',
        name: '',
        price: '',
        quantity: 1,
        category: 'Planta',
        description: '',
    };

    useEffect(() => {
      if ( props.addProductError && !props.addProductLoading) { // Error: user not registered	
  
        store.addNotification({
          title: "Já existe um produto com este nome!",
          message: " ",
          type: "danger",
          insert: "top",
          container: "top-left",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: false
          }
        });
  
      } else if ( props.addProductSuccess ) { // Success: user registered
        
        store.addNotification({
          title: "Produto adicionado com sucesso!",
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
        })
        setTimeout(function (){
          history.push('admin-page')
        }, 2000);
  
        props.addProductReset();
  
      }
    }, [props.addProductError, props.addProductLoading, props.addProductSuccess]);

    async function addProductCallback(){
      const input = JSON.parse(JSON.stringify(values));
		  props.addProduct(input.image, input.name, input.price, input.quantity, input.category, input.description);
    }
    
    const { onChange, onChangeSelect, onSubmit, values} = useForm(addProductCallback, initialState); 

    return (
        <div className={styles.registerForm}>
          <ReactNotification/>
          <h1> Adicionar novo produto </h1>
          <br/>
          <form onSubmit={onSubmit}>
              <div>
                  <label>
                      Nome: <br/> <input 
                      type="text"
                      name="name"
                      id="name" 
                      placeholder="Planta X"
                      onChange={onChange} 
                      required/> 
                      <br/><br/>
                  </label>
                  <label>
                      Imagem: <br/> <input 
                      type="text" 
                      name="image" 
                      id="image"
                      placeholder="URL" 
                      onChange={onChange}
                      required/><br/>
                      <br/>
                  </label>
                  <label>
                      Preço: <br/> <input 
                      type="text" 
                      name="price" 
                      id="price"
                      placeholder="19.99" 
                      onChange={onChange}
                      required/><br/>
                      <br/>
                  </label>
                  <label>
                      Quantidade: <br/> <input 
                      type="number" 
                      name="quantity" 
                      id="quantity"
                      defaultValue={1}
                      min={1}
                      onChange={onChange}
                      required/><br/>
                      <br/>
                  </label>
                  <label>
                      Tipo: <br/> <select 
                      id="category"
                      name="category"
                      onChange={onChangeSelect}
                      required>
                        <option selected value="Planta"> Planta </option>
                        <option value="Flor"> Flor</option>
                        <option value="Buque">Buquê</option>
                        <option value="Vaso">Vaso</option>        
                      </select>
                      <br/><br/>
                  </label>
                  <label>
                      Descrição: <br/> 
                      <input 
                        type="text"
                        id="description"
                        name="description" 
                        placeholder="A Planta X é ótima para..."
                        onChange={onChange} 
                      required/>
                      <br/><br/>
                  </label>
                  <label>
                      <button type="submit">Adicionar Produto</button>
                  </label>
              </div>
          </form>
      </div>
    );
}

interface DispatchProps{
  addProduct: (
    img: string,
    name: string,
    price: string,
    quantity: number,
    category: string,
    description: string) => void;
  addProductReset: () => void;
}

interface StateProps{
  addProductLoading: boolean;
  addProductError: boolean;
  addProductSuccess: boolean;
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  addProductLoading: state.loading.addProduct,
  addProductError: state.error.addProduct,
  addProductSuccess: state.success.addProduct
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addProduct: (img, name, price, quantity, category, description) => 
    {dispatch(addProductRequest(img, name, price, quantity, category, description))},
  addProductReset: () => {dispatch(addProductReset())}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);
