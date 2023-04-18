import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Items from './pages/Items';
import {Footer, Header, NavBar} from './components';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>

        <Route path='items' element={<Items/>}/>

        {/* <Route path='checkout' element={<Checkout/>}/> */}

      </Routes>
      <NavBar />
      <Footer/>
    </div>
  );
}

export default App;
