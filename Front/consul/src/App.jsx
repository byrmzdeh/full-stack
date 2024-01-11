
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './layouts/Header';
import AddPage from './pages/AddPage';
import Detail from './pages/Detail';
import MainLayout from './MainLayout';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';


const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>



        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App