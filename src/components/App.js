import React, { useState } from 'react'; // Import React and useState hook
import ShoppingList from './ShoppingList'; // Import ShoppingList component
import Item from './Item'; // Import ItemForm component

function App() {
  // State to manage dark mode (false = light mode, true = dark mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the state
  };

  return (
    // Dynamically set the className based on isDarkMode
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Button to toggle dark mode */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {/* Render ShoppingList and ItemForm components */}
      <ShoppingList />
      <Item />
    </div>
  );
}

export default App; // Export App component