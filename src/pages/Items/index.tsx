import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import styles from './Items.module.scss';
import { Item, Skeleton } from '../../components';
import { selectItems } from '../../redux/slices/items/itemsSlice';
import { selectFilters, setCategory } from '../../redux/slices/filter/filterSlice';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../redux/slices/filter/types';
import { fetchItems } from '../../redux/slices/items/utils';

type ItemsPropsType = {
  handleChoseItem: (id: number) => void;
  categoryes: CategoryType[]
}

const Items: React.FC<ItemsPropsType> = ({ handleChoseItem, categoryes }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { itemsArray, isLoaded, loadingRejected } = useSelector(selectItems);
  const { category } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchItems(category?.name!));
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    if (window.location.search) {
      const params = window.location.search.substring(10);
      const curentCategory = categoryes.find(obj => obj.name === params);
      dispatch(setCategory(curentCategory));
    }
  }, []);


  useEffect(() => {
    
    navigate(`/items?category=${category?.name}`);
  }, [category]);

  return (
    <div className={styles.items_wrapper}>
      <div className={styles.title_wrapper}>
        <h2>{category?.name.toUpperCase()}</h2>
      </div>
      <div className={styles.items_box}>
        {isLoaded ? itemsArray.map((obj, ind) => (<Item
          handleChoseItem={handleChoseItem}
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