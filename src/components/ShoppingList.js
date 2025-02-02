import React, { useState } from 'react'; // Import React and useState hook
import Item from './Item'; // Import Item component

function ShoppingList({ items = [] }) { // Ensure items has a default value
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = (items || []).filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div>
      <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
