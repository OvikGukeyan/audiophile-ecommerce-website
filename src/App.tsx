import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Footer, Header, NavBar } from './components';
import { setCategory, setCurrentItemId } from './redux/slices/filter/filterSlice';
import Items from './pages/Items';
import Home from './pages/Home';
import FullItem from './pages/FullItem';
import './App.css';
import Checkout from './pages/Checkout';
import { CategoryType } from './redux/slices/filter/types';



const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [navBarOpen, setNavBarOpen] = useState(false);
  const categoryes = [
    { name: 'headphones', image: "./assets/shared/desktop/image-headphones.png" },
    { name: 'speakers', image: "./assets/shared/desktop/image-speakers.png" },
    { name: 'earphones', image: "./assets/shared/desktop/image-earphones.png" }];

  const handleChooseCategory = (category: CategoryType | null) => {
    dispatch(setCategory(category));
    setNavBarOpen(false);
    document.body.style.overflow = "";

  };

  const handleChoseItem = (id: number) => {
    dispatch(setCurrentItemId(id))
    navigate('/full-item')
    window.scroll(0, 0)
  }

  return (
    <div className="App">
      <Header
        handleChooseCategory={handleChooseCategory}
        categoryes={categoryes}
        navBarOpen={navBarOpen}
        setNavBarOpen={setNavBarOpen}
      />
      <Routes>
        <Route path='/' element={<Home
          handleChoseItem={handleChoseItem}
        />} />

        <Route path='items' element={<Items
          handleChoseItem={handleChoseItem}
          categoryes={categoryes} />} />

        <Route path='full-item' element={<FullItem
          handleChoseItem={handleChoseItem}
        />} />


        <Route path='checkout' element={<Checkout />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
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
