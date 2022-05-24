import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Library(props: any): JSX.Element {

  return (
    <div>
      <Navbar />
      <h1>My Library</h1>
      <h1>
        {/* {props.currentBook.title} */}
      </h1>
    </div>
  )
}
