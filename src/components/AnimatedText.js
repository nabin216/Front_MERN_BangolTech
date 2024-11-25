// AnimatedText.js

import React, { useEffect, useState } from 'react';
import './css/AnimatedText.css'; // Make sure to include your styles

const AnimatedText = () => {
  return (
    <div>
        <main class="container">
  <p color='black'>We are Providing</p>
  <section class="animation">
    <div class="first"><div>SEO</div></div>
    <div class="second"><div>Web Development</div></div>
    <div class="third"><div>Digital Marketing</div></div>
  </section>
</main>
    </div>
  );
};

export default AnimatedText;
