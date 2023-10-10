import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
  const [wishlist, setWishlist] = useState<string[]>([]);

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

  // Handle adding to wishlist
  const handleAddToWishlist = (suggestion: string) => {
    setWishlist([...wishlist, suggestion]);
  };

  // Handle removing from wishlist
  const handleRemoveFromWishlist = (suggestion: string) => {
    const updatedWishlist = wishlist.filter((item) => item !== suggestion);
    setWishlist(updatedWishlist);
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
                className={`suggestion ${
                  wishlist.includes(suggestion) ? "wishlist-item" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
                <button
                  className="wishlist-button"
                  onClick={() => handleAddToWishlist(suggestion)}
                >
                  Add to Wishlist
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => alert("Search clicked")}>Search</button>
      </div>
      <div>
        <h2>Wishlist</h2>
        <ul className="wishlist">
          {wishlist.map((item, index) => (
            <li key={index}>
              <Link to={`/wishlist/${item}`}>{item}</Link> &nbsp;&nbsp;
              <button
                className="remove-button"
                onClick={() => handleRemoveFromWishlist(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
