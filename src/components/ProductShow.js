import React, { useEffect, useState } from "react";

const ProductShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/getProducts");
        if (response.ok) {
          const productData = await response.json();
          setProducts(productData.products);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            {product.image && (
              <img
                src={`data:image/jpeg;base64,${product.image.toString("base64")}`}
                alt={product.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductShow;
