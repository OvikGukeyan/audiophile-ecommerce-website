import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss';


const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <div className="logo">
            <img src="./assets/audiophile.png" alt="" />
          </div>
        </Link>

        <nav>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </nav>
        <div className="cart_logo">
          <img src="./assets/cart-logo.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header