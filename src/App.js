import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/button';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />


      </Routes>

      <Button />

    </div>
  );
}
export default App;
