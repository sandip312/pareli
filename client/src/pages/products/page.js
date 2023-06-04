'use client';
import { useState } from "react";
import '../styles/products.css';

function AddProductForm() {
  const [formData, setFormData] = useState({
    productName: (""),
    price: (""),
    description: (""),
    category: (""),
  });

  const { productName, price, description, category } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.productName]: e.target.productName });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Products Page Form successful');

        setFormData({
          productName: (""),
          price: (""),
          description: (""),
          category: (""),
        });

      } else {

        const errorData = await response.json();
        console.error(errorData);
        alert(errorData.message);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred during ProductsPage');
    }
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br />
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={productName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={category} onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="Cosmetics">Cosmetics</option>
          <option value="Skincare">Skincare</option>
          <option value="Makeup">Makeup</option>
          <option value="Haircare">Haircare</option>
          <option value="Beauty Products">Beauty Products</option>
          </select>
      </div><br/> 
      <button type="submit">Save</button>
    </form>
  );
}
export default AddProductForm;