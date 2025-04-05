import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productsSlice";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newProduct = {
        id: Date.now(),
        name,
        description,
        price: parseFloat(price),
        available,
      };
      dispatch(addProduct(newProduct));
      setName("");
      setDescription("");
      setPrice("");
    }
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <label>
          Available:
          <input
            type="checkbox"
            checked={available}
            onChange={() => setAvailable(!available)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
