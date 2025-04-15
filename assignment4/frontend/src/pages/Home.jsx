import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 800, image: "https://via.placeholder.com/150" }
];

const Home = ({ onProductClick }) => (
  <>
    <Navbar />
    <div className="p-8 grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} />
      ))}
    </div>
    <Footer />
  </>
);

export default Home;
