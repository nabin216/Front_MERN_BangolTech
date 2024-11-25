import React, { useState } from "react";
import "./css/Product.css";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1 className="range">Price Range</h1> 
      <div class="product-container">
      <div class="arrow-button left-arrow">...</div>
        {/* Repeat the product div four times */}
        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>
        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>
        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>
        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>

        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>
        <div class="product">
        ​<h2>Product Card</h2>
       <div class="card">
       {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> */}
       <h1>Tailored Jeans</h1>
       <p class="price">$19.99</p>
       <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
       <p><button>Add to Cart</button></p>
       </div>
        </div>
       <div class="arrow-button right-arrow">...</div> 
      </div>
      
    </div>
  );
};

export default Product;
