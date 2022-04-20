import { FC } from 'react';
import '../src/assets/styles/index.css';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Error from './pages/Error';

import {
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/header'


const App: FC = () => {
  return (
    <main className="bg-slate-100 relative overflow-hidden h-screen">
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="new-product" element={<Register/>}/>
        <Route path="product/:id" element={<ProductPage/>}/>
        <Route path="*" element={<Error/>}/>  
      </Routes> 
    </main>
  );
}

export default App;
