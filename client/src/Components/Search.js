import React from 'react'
import {Container} from 'react-bootstrap'

function Search({search, setSearch}) {
  
  return (
    <Container >
      <form className="homepage-search">
          <label htmlFor="search"></label>
          <input className='search-input'
            type="text"
            id="search"
            placeholder="Type a recipe to search..."
            autofocus
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      
      </form>
    </Container>
  );
}

export default Search