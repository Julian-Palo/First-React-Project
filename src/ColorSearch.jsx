import React from "react";

const ColorSearch = ({ colorName, setColorName }) => {
  return (
    <form className="searchColor" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Color Search</label>
      <input
        id="search"
        type="text"
        placeholder="Add color name"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default ColorSearch;
