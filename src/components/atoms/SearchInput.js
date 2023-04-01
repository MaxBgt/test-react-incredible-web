import React from "react";

const SearchInput = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search a movie"
    id="search-input"
    autoComplete="off"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);
export default SearchInput;
