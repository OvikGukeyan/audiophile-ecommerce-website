import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Footer, Header, NavBar } from './components';
import { CategoryType, setCategory, setCurrentItemId } from './redux/slices/filterSlice';
import Items from './pages/Items';
import Home from './pages/Home';
import FullItem from './pages/FullItem';
import './App.css';
import { ItemType } from './redux/slices/itemsSlice';
import Checkout from './pages/Checkout';



const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const categoryes = [
    { name: 'headphones', image: "./assets/shared/desktop/image-headphones.png" },
    { name: 'speakers', image: "./assets/shared/desktop/image-speakers.png" },
    { name: 'earphones', image: "./assets/shared/desktop/image-earphones.png" }];

  const handleChooseCategory = (category: CategoryType | null) => {
    dispatch(setCategory(category))
  };

  const handleChoseItem = (obj: ItemType) => {
    dispatch(setCurrentItemId(obj.id))
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
          handleChoseItem={handleChoseItem}
          categoryes={categoryes} />} />

        <Route path='full-item' element={<FullItem />} />


        <Route path='checkout' element={<Checkout/>}/>

      </Routes>
      {location.pathname !== '/checkout' && <NavBar
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes}
      />}
      <Footer
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes} />
    </div>
  );
}

export default App;
