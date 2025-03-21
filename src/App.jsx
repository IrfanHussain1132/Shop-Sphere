import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Component/navbar.jsx';
import Footer from './Component/footer.jsx';
import Homescr from './Component/Homescr.jsx';
import Products from './Component/product.jsx';
import Cart from './Component/cart.jsx'; 
import Login from './Component/login.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <>
      {isLoggedIn && <Navbar />}
      <div className="content">
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          ) : (
            <>
              <Route path="/" element={<Homescr />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </>
          )}
        </Routes>
        {isLoggedIn && <Footer />}
      </div>
    </>
  );
}

export default App;
