import React, { useState } from 'react'; // Import React and useState hook

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to toggle the cart status
  const toggleCartStatus = () => {
    setInCart((prevStatus) => !prevStatus); // Toggle the state
  };

  return (
    // Dynamically set the className based on inCart
    <li className={inCart ? 'in-cart' : ''}>
      {/* Display the item name */}
      <span>{name}</span>
      {/* Display the item category */}
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart */}
      <button onClick={toggleCartStatus}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item; // Export Item component