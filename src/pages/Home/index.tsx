import React from 'react';
import styles from './Home.module.scss'
import { Button } from '../../components';

type HomeProps = {
  handleChoseItem: (id: number) => void
}

const Home: React.FC<HomeProps> = ({handleChoseItem}) => {
  

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_head_wrapper}>
        <div className={styles.home_head}>
          <div className={styles.text_block}>
            <h3>NEW PRODUCT</h3>
            <h1>XX99 MARK II <br /> HEADPHONES</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button onClick={() => handleChoseItem(4)} className={'orange'} text={'SEE PRODUCT'}/>
          </div>
        </div>
      </div>
      <div className={styles.grid_wrapper}>
        <div className={styles.grid}>
          <div className={styles.first}>
            <img src="./assets/home/desktop/image-speaker-zx9.png" alt="" />
            <div className={styles.text_block}>
              <h1>ZX9 <br/> SPEAKER</h1>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button onClick={() => handleChoseItem(6)} className='black' text={'SEE PRODUCT'}/>
            </div>
          </div>
          <div className={styles.second}>
            <h2>ZX7 SPEAKER</h2>
            <Button onClick={() => handleChoseItem(5)} className='transparent' text={'SEE PRODUCT'}/>
          </div>
          <div className={styles.third}></div>
          <div className={styles.fourth}>
            <h2>YX1 EARPHONES</h2>
            <Button onClick={() => handleChoseItem(1)} className='transparent' text={'SEE PRODUCT'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home