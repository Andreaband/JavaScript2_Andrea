import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductCard from "./pages/ProductCard";
import About from "./pages/About";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<><Shop /><Footer /></>} />
          <Route path="/product/:id" element={<><ProductCard /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />

          {/*Admin */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
