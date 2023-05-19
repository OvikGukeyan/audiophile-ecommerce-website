import React from 'react';
import styles from './Button.module.scss'


type ButtonPropsType = {
  onClick?: () => void;
  text: string
  className: string
  disable?: boolean
}

const Button: React.FC<ButtonPropsType> = ({onClick, text, className, disable}) => {
  return (
    <button disabled={disable} onClick={onClick} className={`${styles.button} ${styles[className]}`}>{text}</button>
    )
}

export default Button;