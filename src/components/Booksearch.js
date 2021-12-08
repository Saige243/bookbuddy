import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Alert, Card, Container, Col, Row } from 'react-bootstrap'



export default function Booksearch() {

  const [book, setBook] = useState("")
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")

  function handleChange(e){
    const book = e.target.value;
    setBook(book);

  }
  function handleSubmit(e){
    e.preventDefault();
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book + "&key=" + apiKey + "&maxResults=20").then(data => {
      setResult(data.data.items)
      console.log(data.data.items)
    })
  }

  return (
    <div>
      <div className="bookcontainer">
        <h1>Search For Books</h1>
        <form onSubmit={handleSubmit}>
          <div className="formgroup">
            <input type="text" onChange={handleChange} className="inputcontrol" placeholder="Search For Books" autoComplete="on"></input>
          </div>
          <Button style={{ marginTop: "7px" }}type="submit" className="btn">Search</Button>
        </form>
      </div>
        {result.map(book => (
          <>
            <Container fluid style={{ width: "15rem", textAlign: "center", display: "inline-grid" }} className="">
              <a target=" blank" a href={book.volumeInfo.previewLink}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></a>
              <h4>{book.volumeInfo.title}</h4>
              <h6>{book.volumeInfo.authors}</h6>
            </Container>
          </>
        ))}
      </div>
  )
}
