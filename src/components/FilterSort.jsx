import React from "react";
function FilterSort({ category, setCategory, sort, setSort }) {
  return (
    <div className="filter-sort">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All"> All Brand</option>
        <option value="Apple iPhone">Apple iPhone</option>
        <option value="Oppo">Oppo</option>
        <option value="Vivo">Vivo</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort Products</option>
        <option value="low">Price:Low to High</option>
        <option value="high">Price:High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
export default FilterSort;
