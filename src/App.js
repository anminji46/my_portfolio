import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.js';
import Home from './pages/Home.js';
import Menu from './components/Menu.js';

import './App.scss';



const App = () => {
  return (
    <div className='App'>
      <Routes>
          <Route index element={<Main />} />
          <Route path='/home' element={<Home />} />
        <Route path='/' element={<Menu />}>
        </Route>
          <Route path='/home/:userpath' element={<Home />} />
          <Route path='/home/:userpath' element={<Home />} />
          <Route path='/home/:userpath' element={<Home />} />
          <Route path='/home/:userpath' element={<Home />} />
          <Route path='/home/:userpath' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
