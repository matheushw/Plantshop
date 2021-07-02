import React from 'react';
import * as styles from './styles'

interface ManageButtonProps{
	text: string;
	onClick?: () => void;
}

const ManageButton: React.FC<ManageButtonProps> = ({ text, onClick }) => {
	return(
		<button onClick={() => onClick!==undefined? onClick() : null} className={styles.manageButton}>{text}</button>
	)
}

export default ManageButton;