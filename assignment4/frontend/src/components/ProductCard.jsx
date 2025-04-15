const ProductCard = ({ product, onClick }) => (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => onClick(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
    </div>
  );
  export default ProductCard;
  