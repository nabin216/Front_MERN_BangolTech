// ParentComponent.js
import React from 'react';
import ProductUp from './ProductUp';

const ParentComponent = () => {
  const handleUpload = (responseData) => {
    console.log('Handling uploaded product:', responseData);
    // Add logic to handle the uploaded product as needed
  };

  return (
    <div>
      {/* Other content */}
      <ProductUp onUpload={handleUpload} />
    </div>
  );
};

export default ParentComponent;
