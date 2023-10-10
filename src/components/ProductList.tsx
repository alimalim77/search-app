import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "../styles/bar.scss";

// Function to generate mock product data
const generateMockProducts = (count: number) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      id: i + 1,
      name: faker.commerce.productName(),
    };
    products.push(product);
  }
  return products;
};

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const mockProducts = generateMockProducts(10); // Generate 10 mock products

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter suggestions based on the search term
    const filteredSuggestions = mockProducts
      .map((product) => product.name)
      .filter((name) =>
        name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );

    setSuggestions(filteredSuggestions);
  };

  // Handle suggestion item click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <div className="product-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => alert("Search clicked")}>Search</button>
      </div>
    </div>
  );
};

export default ProductList;
