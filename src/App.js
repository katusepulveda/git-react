import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/button';
import ItemListContainer from './components/ItemListContainer';
import axios from 'axios';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo='Este es el saludo de ItemListContainer :)' />
      <Button/>
      <ItemDetailContainer/>

    </div>
  );
}
export default App;
