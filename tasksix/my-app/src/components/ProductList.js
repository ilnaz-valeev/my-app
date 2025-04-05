import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, toggleAvailability } from "../store/productsSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p className={product.available ? "available" : "unavailable"}>
              {product.available ? "Available" : "Unavailable"}
            </p>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Toggle Availability
            </button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
