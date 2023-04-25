import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import styles from './Items.module.scss';
import { Item, Skeleton } from '../../components';
import { ItemType, fetchItems, selectItems } from '../../redux/slices/itemsSlice';
import { CategoryType, selectFilters, setCategory } from '../../redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import qs from "qs";

type ItemsPropsType = {
  handleChoseItem: (id: number) => void;
}

const Items: React.FC<ItemsPropsType> = ({ handleChoseItem }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { itemsArray, isLoaded, loadingRejected } = useSelector(selectItems);
  const { category } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchItems(category?.name));
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as CategoryType;
      dispatch(setCategory(params))
    }
  }, [])


  useEffect(() => {
    const queryString = qs.stringify(
      category
      , { skipNulls: true })
    navigate(`/items?${queryString}`);
  }, [category]);

  return (
    <div className={styles.items_wrapper}>
      <div className={styles.title_wrapper}>
        <h2>{category?.name}</h2>
      </div>
      <div className={styles.items_box}>
        {itemsArray.length ? itemsArray.map((obj, ind) => (<Item
          handleButtonClick={handleChoseItem}
          buttunText={'SEE PRODUCT'}
          key={ind}
          obj={obj}
          ind={ind}
        />)) : <Skeleton />}
      </div>
    </div>
  )
}

export default Items;