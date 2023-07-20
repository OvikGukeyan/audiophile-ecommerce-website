import React from 'react';
import { Link, useLocation } from "react-router-dom";

import styles from './Footer.module.scss';
import { CategoryType } from '../../redux/slices/filter/types';

type FooterPropsType = {
  handleChooseCategory: (category: CategoryType) => void;
  categoryes: CategoryType[];
}

const Footer: React.FC<FooterPropsType> = ({ handleChooseCategory, categoryes }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/checkout' && <div className={styles.about_wrapper}>
        <div className={styles.about}>
          <div className={styles.about_text}>
            <h2>Bringing you the <span>best</span> audio gear</h2>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <div className={styles.about_img}></div>
        </div>
      </div>}


      <div className={styles.footer_wrapper}>
        <div className={styles.footer}>
          <div className={styles.footer_head}>
            <Link to='/'>
              <img src="./assets/audiophile.png" alt="" />
            </Link>

            <nav>
              <ul>
                <Link to='/'>
                  <li>HOME</li>
                </Link>
                {categoryes.map((category) => (
                  <Link key={category.name} to='/items'>
                    <li onClick={() => handleChooseCategory(category)}>{category.name.toUpperCase()}</li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.footer_main}>
            <div className={styles.footer_text}>
              <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>

              <span>Copyright 2021. All Rights Reserved</span>
            </div>


            <div className={styles.social_media}>
              <a target='_blank' href="https://www.facebook.com"><img src="./assets/shared/desktop/icon-facebook.svg" alt="" /></a>
              <a target='_blank' href="https://www.twitter.com"><img src="./assets/shared/desktop/icon-twitter.svg" alt="" /></a>
              <a target='_blank' href="https://www.instagram.com"><img src="./assets/shared/desktop/icon-instagram.svg" alt="" /></a>

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Footer