import { useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return selectedProduct ? (
    <ProductDetails product={selectedProduct} />
  ) : (
    <Home onProductClick={setSelectedProduct} />
  );
}

export default App;
