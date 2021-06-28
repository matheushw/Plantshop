import React from 'react';
import * as styles from './styles'
import { Link } from "react-router-dom";

export interface CardProps {
  img: string;
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link to={props.link} className={styles.link}>
      <ul className={styles.adminSelectable}>
        <li>
          <img src={props.img} className={styles.adminOptionImage} alt=""/> 
        </li>
        <li>
          <h1>{props.title}</h1>
        </li>
      </ul>
    </Link>
  );
}

export default Card;