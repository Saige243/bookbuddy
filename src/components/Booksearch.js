import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Library from '../pages/library'

export default function Booksearch() {
  const [book, setBook] = useState("")
  const [word, setWord] = useState("")
  const [butt, setButt] = useState("")
  const [description, setDescription] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState
    ("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")
  const [rslt, setRslt] = useState("");
  const [readingStatus, setReadingStatus] = useState("Click a book below to add to Now Reading")
  const [modalIsOpen, setIsOpen] = useState(false);


  function libraryPhrase() {
    setWord("Added to Library!")
  }

  function readingPhrase() {
    setWord("Added to Now Reading!")
  }

  function clearState() {
    setWord("")
  }

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
    console.log(book)
  }

  function clearReading(e) {
    const clear = ""
    setRslt(clear)
    setButt(clear)
    setReadingStatus("Click a book below to add to Now Reading")
  }

  function imageSet(e) {
    const i = e.target.src
    setRslt(i)
    setButt(
      <Button size="sm" style={{ boxShadow: "none", fontWeight: "bold", marginTop: "10px", backgroundColor: "#97D9E1", marginBottom: "30px", border: "none" }} onClick={clearReading}>Clear Now Reading</Button>)
    setReadingStatus("")
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20").then(data => {
      setResult(data.data.items)
      console.log(result)
    })
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div className="bookcontainer">
        <Card id="card">
          <Card.Body id="card" className="shadow sm">
            <h1 id="heading">Now Reading</h1>
            <h7>{readingStatus}</h7>
            <div>{butt}</div>
            <div><img className="readingimg" alt="" src={rslt}></img></div>
          </Card.Body>
        </Card>


        <Card id="card" className="mt-2 shadow sm h-100" style={{ width: '100%' }}>
          <h1 id="heading" style={{ paddingTop: "20px" }}>Book Search</h1>
          <div style={{ marginBottom: "20px" }}>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formgroup">
              <input type="text" onChange={handleChange} className="inputcontrol" placeholder="title/author" autoComplete="on"></input>
            </div>
            <Button style={{ boxShadow: "none", backgroundColor: "#97D9E1", marginTop: "7px", border: "none" }} type="submit" className="btn"><strong>Search</strong></Button>
          </form>


          <Card.Body className="shadow-sm">
            {result.map(book => (
              <>
                <Container fluid style={{ width: "6rem", textAlign: "center", justifyContent: "center", display: "inline-grid", margin: "5px", alignItems: "center", marginBottom: "30px" }} className="">
                  <img style={{ width: "6rem", height: "fill", marginBottom: "10px" }} src={book.volumeInfo.imageLinks.thumbnail} onClick={imageSet} alt={book.title} />
                  <Button style={{ backgroundColor: "#97D9E1", border: "none", boxShadow: "none" }} size="sm" target="_blank" href={book.volumeInfo.infoLink}> <FontAwesomeIcon size="lg" icon={faInfoCircle} />
                  </Button>
                  <div style={{ fontSize: "11px" }}>
                    <p><strong>{book.volumeInfo.title}</strong><br />{book.volumeInfo.authors}</p>
                  </div>
                </Container>
              </>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div >
  )
}