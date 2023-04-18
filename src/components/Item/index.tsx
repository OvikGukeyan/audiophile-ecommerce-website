import React from 'react';
import styles from './Item.module.scss'
import Button from '../Button';
import { ItemType } from '../../redux/slices/itemsSlice';



const Item: React.FC<ItemType> = (obj) => {
  return (
    <div className={`${styles.item_wrapper} ${obj.id % 2 === 0 && styles.even }`}>
        <img src={obj.image.desktop} alt="" />
        <div className={styles.item_info}>
            {obj.new && <span>NEW PRODUCT</span>}
            <h1>{obj.name}</h1>
            <p>{obj.description}</p>
            <Button/>
        </div>
    </div>
  )
}

export default Item;