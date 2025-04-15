const ProductDetails = ({ product }) => (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <p className="text-lg">${product.price}</p>
    </div>
  );
  export default ProductDetails;
  