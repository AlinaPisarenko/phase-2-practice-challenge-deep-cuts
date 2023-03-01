import React from 'react'

function Search({ search, setSearch }) {
  return (
    <div className="search">
        <input
          value={search}
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => setSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search