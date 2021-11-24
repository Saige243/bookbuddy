import React from 'react'
import Booksearch from '../components/Booksearch'
import Navbar from '../components/Navbar'

export default function search() {
  return (
    <div className="searchcontainer">
      <div className="booksearch">
        <Navbar />
        <Booksearch />
      </div>
    </div>
  )
}
