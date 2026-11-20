import React from "react";
function ProductCard({ product }) {
  function handleAddToCart() {
    console.log("Added to Cart:", product.name);
  }
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <h3>{product.name}</h3>
      <p>Brand :{product.category}</p>
      <h3>₹ {product.price.toLocaleString("en-IN")}</h3>
      <p>★ {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
