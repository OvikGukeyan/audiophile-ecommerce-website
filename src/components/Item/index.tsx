import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Item.module.scss'
import Button from '../Button';
import { ItemType } from '../../redux/slices/itemsSlice';

type ItemPropsType = {
  handleChoseItem: (obj: ItemType) => void;
  obj: ItemType;
  ind?: number
}

const Item: React.FC<ItemPropsType> = ({obj, ind, handleChoseItem}) => {
  const location = useLocation();
  return (
    <div className={`${styles.item_wrapper} ${ind && ind % 2 !== 0 && styles.even }`}>
        <img src={obj.image.desktop} alt="" />
        <div className={styles.item_info}>
            {obj.new && <span>NEW PRODUCT</span>}
            <h1>{obj.name}</h1>
            <p>{obj.description}</p>
            {location.pathname === '/full-item' && <h3>$ 2, 999</h3>}
            <div className={styles.button_box}>
              {location.pathname === '/full-item' && <div className={styles.counter}>
                <div className={styles.count_button}>-</div>
                <div className={styles.meaning}></div>
                <div className={styles.count_button}>+</div>
              </div>}
            <Button
            onClick={() => handleChoseItem(obj)}/>
            </div>
            
        </div>
    </div>
  )
}

export default Item;