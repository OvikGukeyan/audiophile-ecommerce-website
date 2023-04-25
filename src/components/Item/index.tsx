import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Item.module.scss'
import Button from '../Button';
import { ItemType } from '../../redux/slices/itemsSlice';

type ItemPropsType = {
  count?: number;
  handleClickMinus?: () => void;
  handleClickPlus?: () => void;
  handleButtonClick: (obj: number) => void;
  obj: ItemType;
  ind?: number
  buttunText: string
}

const Item: React.FC<ItemPropsType> = ({ obj, ind, handleButtonClick, buttunText, count, handleClickPlus, handleClickMinus }) => {
  const location = useLocation();

  return (
    <div className={`${styles.item_wrapper} ${ind && ind % 2 !== 0 && styles.even}`}>
      <img src={obj.image.desktop} alt="" />
      <div className={styles.item_info}>
        {obj.new && <span>NEW PRODUCT</span>}
        <h1>{obj.name.toUpperCase()}</h1>
        <p>{obj.description}</p>
        {location.pathname === '/full-item' && <h3>$ 2, 999</h3>}
        <div className={styles.button_box}>
          {location.pathname === '/full-item' && <div className={styles.counter}>
            <button onClick={handleClickMinus} className={styles.count_button}>-</button>
            <div className={styles.meaning}>{count}</div>
            <button onClick={handleClickPlus} className={styles.count_button}>+</button>
          </div>}
          <Button
            className={'orange'}
            text={buttunText}
            onClick={() => handleButtonClick(obj.id)} />
        </div>

      </div>
    </div>
  )
}

export default Item;