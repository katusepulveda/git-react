import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import {Route, Routes} from 'react-router-dom';
import Contacto from './pages/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart';
import Checkout from './components/checkout/Checkout';
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
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />

        <Route path='/*' element={<h1>ERROR 404 . PAGE NOT FOUND</h1>} />

      </Routes>

      </CartContextProvider>
    </div>
  );
}
export default App;