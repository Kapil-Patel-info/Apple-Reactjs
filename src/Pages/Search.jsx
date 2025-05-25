import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Search.css"; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, allProducts]);

  return (
    <div className="search-container">
      <h2 className="text-center mt-4 fw-semibold">Search Apple Products</h2>
      <div className="search-box mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for iPhone, MacBook, iPad, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length > 0 && (
        <div className="results-box mt-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="result-item"
              onClick={() => navigate(`/ProductDetail/${item.id}`)}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <h6>{item.title}</h6>
                <p>₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
