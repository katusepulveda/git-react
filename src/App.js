import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/button';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo='Este es el saludo de ItemListContainer :)' />
      <Button/>

    </div>
  );
}
export default App;
