import React, { useState, Link, Img, useContext, createContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Alert, Card, Container, Popover, OverlayTrigger, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core';
import Notes from './Notes'


export default function Booksearch() {
  const [book, setBook] = useState("")
  const [word, setWord] = useState("")
  const [butt, setButt] = useState("")
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState
  ("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")
  const [rslt, setRslt] = useState("");
  const [readingStatus, setReadingStatus] = useState("Click a book below to add to Now Reading")

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button onClick={libraryPhrase} size="sm" style={{ border: "none", backgroundColor: "#97D9E1", marginRight: "2px" }}> + to Library</Button>
        <Button style={{ border: "none", backgroundColor: "#97D9E1"}} onClick={readingPhrase} size="sm">+ to Now Reading</Button>
        <p style={{ marginTop: "5px", textAlign: "center"}}>{word}</p>
        <Button size="sm" style={{ border: "none", backgroundColor: "#97D9E1",width:"100%",textAlign: "center" }}>Book Description</Button>
      </Popover.Body>
    </Popover>
);



  function libraryPhrase(){
    setWord("Added to Library!")
    // changeImage()
  }

  function readingPhrase(){
    setWord("Added to Now Reading!")
  }

  function clearState(){
    setWord("")
  }

  function handleChange(e){
    const book = e.target.value;
    setBook(book);
    console.log(book)
  }

  function clearReading(e){
    const clear = ""
    setRslt(clear)
    setButt(clear)
    setReadingStatus("Click a book below to add to Now Reading")
  }

  function imageSet(e){
    const i = e.target.src
    setRslt(i)
    setButt(
    <Button size="sm" style={{ fontWeight: "bold", marginTop: "10px", backgroundColor:"#97D9E1", marginBottom: "30px", border: "none"}} onClick={clearReading}>Clear Now Reading</Button>)
    setReadingStatus("")
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
        <Card id="card">
          <Card.Body id="card" className="shadow sm">
            <h1 id="heading">Now Reading</h1>
            <h7>{readingStatus}</h7>
            <div>{butt}</div>
            <div><img className="readingimg" alt="" src={rslt}></img></div>
          </Card.Body>
        </Card>


        <Card id="card" className="mt-2 shadow sm h-100" style={{ width: '100%'}}>
          <h1 id="heading" style={{ paddingTop: "20px" }}>Book Search</h1>
            <div style={{marginBottom: "20px"}}>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="formgroup">
                <input type="text" onChange={handleChange} className="inputcontrol" placeholder="What are you looking for?" autoComplete="on"></input>
              </div>
              <Button style={{ backgroundColor:"#97D9E1", marginTop: "7px", border: "none" }}type="submit" className="btn"><strong>Search</strong></Button>
            </form>


            <Card.Body className="shadow-sm">
              {result.map(book => (
                <>
                  <Container fluid style={{ width: "6rem", textAlign: "center", justifyContent:"center", display: "inline-grid", margin: "5px", alignItems: "center", marginBottom: "30px" }} className="">

                    <img style={{ width: "6rem", height:"fill", marginBottom:"10px" }} src={book.volumeInfo.imageLinks.thumbnail} onClick={imageSet} alt={book.title} />
                    

                    <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover}>
                      <Button size="sm" className="plusbutton" onClick={clearState} variant="success" style={{ marginBottom: "5px", backgroundColor:"#97D9E1", textDecoration:"none", border: "none", textAlign:"center"}}><FontAwesomeIcon icon={faPlus} size={"sm"} /></Button>
                    </OverlayTrigger>
                    <div style={{ fontSize: "11px" }}>
                      <p><strong>{book.volumeInfo.title}</strong><br />{book.volumeInfo.authors}</p>
                    </div>
                  </Container>
                </>
              ))}
            </Card.Body>
        </Card>
      </div>
    </div>
  )
}





















  // function resultSet(){
  //   setRslt(<div>{result.map(book =>(
  //     <a target="blank" a href={book.volumeInfo.previewLink}>
  //     <img style={{ width: "8rem" }} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></a>
  //   ))}</div>
  // )}