import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import "./css/ProductUp.css";

const ProductUp = ({ onUpload }) => {
  // State variables to store form data
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append form data
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    try {
      // Send a POST request to the server
      const response = await fetch("http://localhost:3000/uploadProduct", {
        method: "POST",
        body: formData,
      });

      // Check if the response is successful
      if (response.ok) {
        // Parse the JSON response
        const responseData = await response.json();
        console.log("Product uploaded successfully", responseData);
        // Call the onUpload function with the response data
        onUpload(responseData);
      } else {
        console.error("Product upload failed");
      }
    } catch (error) {
      console.error("Error during product upload:", error);
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <h1 className="upload-title">Upload Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        {/* Price */}
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Description */}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Image */}
        <label htmlFor="image">Product Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Submit button */}
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

// Prop type checking
ProductUp.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default ProductUp;
