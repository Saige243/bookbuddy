import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Alert, Card, Container, Popover, OverlayTrigger, Col, Row } from 'react-bootstrap'


export default function Booksearch() {

  const [book, setBook] = useState("")
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button size="sm" style={{ marginRight: "2px" }}>+ Library</Button>
        <Button size="sm">+ Now Reading</Button>
      </Popover.Body>
    </Popover>

);

  function handleChange(e){
    const book = e.target.value;
    setBook(book);

  }
  function handleSubmit(e){
    e.preventDefault();
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book + "&key=" + apiKey + "&maxResults=30").then(data => {
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
            <input type="text" onChange={handleChange} className="inputcontrol" placeholder="What are you looking for?" autoComplete="on"></input>
          </div>
          <Button style={{ marginTop: "7px" }}type="submit" className="btn">Search</Button>
        </form>
      </div>
        {result.map(book => (
          <>
            <Container fluid style={{ width: "15rem", textAlign: "center", display: "inline-grid" }} className="">
              <a target=" blank" a href={book.volumeInfo.previewLink}>
              <img style={{ width: "9rem" }} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></a>
              <h5>{book.volumeInfo.title}</h5>
              <h6>{book.volumeInfo.authors}</h6>
          
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Button variant="success" style={{ marginTop: "5px", marginBottom: "10px" }}>+</Button>
              </OverlayTrigger>
              {/* <Button size="sm">+ Now Reading</Button>
              <Button size="sm">+ My Library</Button> */}
            </Container>
          </>
        ))}
      </div>
  )
}
