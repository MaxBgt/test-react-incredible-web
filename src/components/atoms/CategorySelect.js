import React from "react";

const CategorySelect = ({ category, setCategory }) => {
  return (
    <select
      name="catégorie"
      id="selectByCategory"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select category</option>
      <option value="Drama">Drame</option>
      <option value="Action">Action</option>
      <option value="Animation">Animation</option>
      <option value="Comedy">Comedy</option>
      <option value="Crime">Crime</option>
      <option value="Documentary">Documentary</option>
      <option value="Mystery">Mystery</option>
      <option value="Thriller">Thriller</option>
      <option value="Romance">Romance</option>
      <option value="Science fiction">Science fiction</option>
      <option value="War">War</option>
    </select>
  );
};

export default CategorySelect;
