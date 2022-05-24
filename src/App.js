import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categorias from './pages/categorias';
import Cart from './pages/Cart';
import CartContextProvider from './context/CartContextProvider'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/home' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/categorias' element={<Categorias/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<h1>ERROR 404 . PAGE NOT FOUND</h1>} />

      </Routes>

      </CartContextProvider>
    </div>
  );
}
export default App;