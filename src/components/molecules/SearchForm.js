import React from "react";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";
import CategorySelect from "../atoms/CategorySelect";

const SearchForm = ({
  search,
  setSearch,
  handleClick,
  category,
  setCategory,
}) => {
  return (
    <form>
      <SearchInput search={search} setSearch={setSearch} />
      <SearchButton handleClick={handleClick} />
      <CategorySelect category={category} setCategory={setCategory} />
    </form>
  );
};

export default SearchForm;
