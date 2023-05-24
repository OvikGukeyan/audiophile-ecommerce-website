import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.scss';
import { CategoryType } from '../../redux/slices/filterSlice';
import { CartPopup, NavBar } from '../';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

type HeaderPropsType = {
  handleChooseCategory: (category: CategoryType) => void;
  categoryes: CategoryType[];
};



const Header: React.FC<HeaderPropsType> = ({ handleChooseCategory, categoryes }) => {
  const isMounted = useRef(false);
  const { cartItems } = useSelector(selectCart)
  const [navBarOpen, setNavBarOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json)
    }
    isMounted.current = true;
  }, [cartItems]);

  const handleHamburgerClick = () => {
    setNavBarOpen(true);
    document.body.style.overflow = "hidden";

  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (navRef.current) {
      if (!navRef.current.contains(e.target as Node)) {
        setNavBarOpen(false);
        document.body.style.overflow = "";
      }
    }
  };

  return (
    <header className={styles.header}>
      <div  className={styles.wrapper}>
        <img onClick={handleHamburgerClick} className={styles.hamburger} src="./assets/shared/tablet/icon-hamburger.svg" alt="" />
        <Link to='/'>
          <div className={styles.logo}>
            <img src="./assets/audiophile.png" alt="" />
          </div>
        </Link>

        <nav>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            {categoryes.map((category) => (
              <Link to='/items'>
                <li onClick={() => handleChooseCategory(category)}>{category.name.toUpperCase()}</li>
              </Link>
            ))}
          </ul>
        </nav>
        {<CartPopup />}
      </div>
      {navBarOpen && <div onClick={(e) => handleOutsideClick(e)} className={styles.nav_bar_wrapper}>
        <div ref={navRef}>
          <NavBar handleChooseCategory={handleChooseCategory} categoryes={categoryes} />
        </div>
      </div>}
    </header>
  )
}

export default Header