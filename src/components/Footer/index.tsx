import React from 'react';
import { Link } from "react-router-dom";
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.about_wrapper}>
        <div className={styles.about}>
          <div className={styles.about_text}>
            <h2>Bringing you the <span>best</span> audio gear</h2>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <img src="./assets/shared/desktop/image-best-gear.jpg" alt="" />
        </div>
      </div>


      <div className={styles.footer_wrapper}>
        <div className={styles.footer}>
          <div className={styles.footer_text}>
            <Link to='/'>
              <img src="./assets/audiophile.png" alt="" />
            </Link>

            <p>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <span>Copyright 2021. All Rights Reserved</span>
          </div>
          <div className={styles.footer_links}>
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
            <div className={styles.social_media}>
              <img src="./assets/shared/desktop/icon-facebook.svg" alt="" />
              <img src="./assets/shared/desktop/icon-twitter.svg" alt="" />
              <img src="./assets/shared/desktop/icon-instagram.svg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Footer