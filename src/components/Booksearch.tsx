import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import BookContainer from './molecules/BookContainer'

export default function Booksearch(): JSX.Element {
  const [book, setBook] = React.useState<string>('')
  const [result, setResult] = useState<AxiosMap | string[]>([]);
  const [visible, setVisible] = useState(true);
  const [visiblebutton, setVisibleButton] = useState<JSX.Element | boolean>(false);
  // const [apiKey, setApiKey] = useState("AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE")


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const book = e.target.value;
    setBook(book);
    console.log(book)
  }

  const apiKey = "AIzaSyBGyvSVgMsB-siZQOsq_-Nd7kqkvwPehaE"

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();


    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20").then(data => {
      setResult(data.data.items)
      console.log(result)
      setVisible(true)
      setVisibleButton(true)
      setVisibleButton(
        <Button
          style={{
            boxShadow: "none",
            backgroundColor: "red",
            marginTop: "7px",
            border: "none"
          }}
          type="submit"
          onClick={deleteCard}
          className="btn">
          <strong>x</strong>
        </Button>)
    })
  }

  const deleteCard = (e: React.MouseEvent) => (
    setVisible(false),
    setBook(''),
    setVisibleButton(false)
  )

  interface AxiosMap {
    map: any
    book: any
  }

  const booksearch_button = (
    <Button
      style={{
        boxShadow: "none",
        backgroundColor: "#97D9E1",
        marginTop: "7px",
        marginRight: "5px",
        border: "none"
      }}
      type="submit"
      className="btn">
      <strong>Search</strong>
    </Button>
  )

  const booksearch_results = (
    <Card.Body id="card" className="shadow-sm">
      {visible && result.map((book: any) => (
        <>
          <BookContainer
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.title}
            href={book.volumeInfo.infoLink}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
          />
        </>
      ))}
    </Card.Body>
  )

  const layout = (
    <div className="bookcontainer">
      <Card
        id="card"
        style={{
          width: '100%'
        }}>
        <h1 id="heading"
          style={{
            paddingTop: "20px"
          }}>
          Book Search
        </h1>
        <form
          onSubmit={handleSubmit}>
          <div className="formgroup">
            <input
              style={{
                borderColor: "#97D9E1"
              }}
              type="text"
              onChange={handleChange}
              className="inputcontrol"
              placeholder="title/author"
              autoComplete="on">
            </input>
          </div>
          {booksearch_button}
          {visiblebutton}
        </form>
        {booksearch_results}
      </Card>
    </div>
  )
  return layout
}