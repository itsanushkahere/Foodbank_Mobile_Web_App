import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import ItemDetailsPage from "./ItemDetailsPage";
import "./App.css";
import Cart from "./Cart";
import UserOrder from "./UserOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:foodtype" element={<ItemDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<UserOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
