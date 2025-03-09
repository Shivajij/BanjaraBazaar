import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaUser, FaHeart } from 'react-icons/fa';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Order from './components/Order';
import './css/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <Link to="/">Fashion Store</Link>
          </div>
          <nav className="nav-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </nav>
          <div className="nav-right">
            <Link to="/cart"><FaHeart /></Link>
            <Link to="/login"><FaUser /></Link>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Order/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
