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
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState
  ("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")
  const [rslt, setRslt] = useState("");


  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button onClick={libraryPhrase} size="sm" style={{ marginRight: "2px" }}> + to Library</Button>
        <Button onClick={readingPhrase} size="sm">+ to Now Reading</Button>
        <p style={{ marginTop: "5px", textAlign: "center"}}>{word}</p>
        <Button size="sm" style={{ width:"100%",textAlign: "center" }}>Book Description</Button>
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

  function imageSet(e){
    const i = e.target.src
    setRslt(i)
  }



  // function resultSet(){
  //   setRslt(<div>{result.map(book =>(
  //     <a target="blank" a href={book.volumeInfo.previewLink}>
  //     <img style={{ width: "8rem" }} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></a>
  //   ))}</div>
  // )}


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
        <div>Now Reading</div>
          <div><img alt="" src={rslt}></img></div>
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
              {/* <a target="blank" a href={book.volumeInfo.previewLink} onClick={imageSet}> */}
              {/* <a target="blank" a href={book.volumeInfo.previewLink} onClick={(e) => console.log(e.target.src)}> */}
              <img style={{ width: "8rem" }} src={book.volumeInfo.imageLinks.thumbnail} onClick={imageSet} alt={book.title} />
              <h5>{book.volumeInfo.title}</h5>
              <h6>{book.volumeInfo.authors}</h6>
              <Button onClick={imageSet}>Set Result</Button>

          
              <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover}>
                <Button onClick={clearState} variant="success" style={{ marginTop: "5px", marginBottom: "10px" }} icon={faPlus}><FontAwesomeIcon icon={faPlus} /></Button>
              </OverlayTrigger>
            </Container>
          </>
        ))}
      </div>
  )
}



