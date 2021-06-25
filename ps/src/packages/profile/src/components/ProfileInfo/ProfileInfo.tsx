import React from 'react'
import * as styles from './styles'


export interface ProfileInfoProps{
  customerName: string;
  email: string;
  cellphone: string;
  street: string;
  number: string;
  cep: string;
  city: string;
  state: string;
  country: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ( {customerName, email, cellphone, street, number, cep, city, state, country} ) => {
  return(
    <div>
      <div className={styles.infoDisplay}>
        <h1>Perfil</h1>
        <h2> Dados da conta de {customerName}</h2>
        <ul>
          <h3>Nome</h3>
          <li>{customerName}</li>
          <h3>Endereço</h3>
          <li> {street} , {number} </li>
          <li> {cep} </li>
          <li> {city}, {state}, {country} </li>
          <h3>Email</h3>
          <li> {email} </li>
          <h3>Telefone</h3>
          <li> {cellphone} </li>
        </ul>
        <button className={styles.editButton}>Editar</button>
      </div>
    </div>
  );
}

export default ProfileInfo;