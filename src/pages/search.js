import React from 'react'
import Booksearch from '../components/Booksearch'

export default function search() {
  return (
    <div className="searchcontainer">
      <div className="booksearch">
        <Booksearch />
      </div>
      <div>
        <h1>Results</h1>
      </div>
    </div>
  )
}
