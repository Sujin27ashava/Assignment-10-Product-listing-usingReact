import React from "react";
import { useState } from "react";
import Navbar from "../../ProductList/src/components/Navbar";
import SearchBar from "../../ProductList/src/components/SearchBar";
import FilterSort from "../../ProductList/src/components/FilterSort";
import ProductList from "../../ProductList/src/components/ProductList";
import products from "./Products";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // Search and Category Filter
  let filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchSearch && matchCategory;
  });

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>Welcome to Online Purchase </h3>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSort
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <p>Total Products:{filteredProducts.length}</p>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <h2>No Product Found</h2>
        )}
      </div>
    </div>
  );
}
export default App;
