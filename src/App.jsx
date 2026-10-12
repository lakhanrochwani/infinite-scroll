import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import VirtualizedProductList from "./components/VirtualizedProductList";

function App() {
  return (
    <>
      {/* <ProductList /> */}
      <VirtualizedProductList />
    </>
  );
}

export default App;
