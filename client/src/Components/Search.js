import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Recipes:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a recipe to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search