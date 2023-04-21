import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Footer, Header, NavBar } from './components';
import { CategoryType, setCategory, setCurrentItem } from './redux/slices/filterSlice';
import Items from './pages/Items';
import Home from './pages/Home';
import FullItem from './pages/FullItem';
import './App.css';
import { ItemType } from './redux/slices/itemsSlice';



const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryes = [
    { name: 'headphones', image: "./assets/shared/desktop/image-headphones.png" },
    { name: 'speakers', image: "./assets/shared/desktop/image-speakers.png" },
    { name: 'earphones', image: "./assets/shared/desktop/image-earphones.png" }];

  const handleChooseCategory = (category: CategoryType | null) => {
    dispatch(setCategory(category))
  };

  const handleChoseItem = (obj: ItemType) => {
    dispatch(setCurrentItem(obj))
    navigate('/full-item')
  }

  return (
    <div className="App">
      <Header
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes} />
      <Routes>
        <Route path='' element={<Home />} />

        <Route path='items' element={<Items
          handleButtonClick={handleChoseItem} />} />

        <Route path='full-item' element={<FullItem 
          handleChoseItem={handleChoseItem}
        />} />


        {/* <Route path='checkout' element={<Checkout/>}/> */}

      </Routes>
      <NavBar
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes}
      />
      <Footer
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes} />
    </div>
  );
}

export default App;
