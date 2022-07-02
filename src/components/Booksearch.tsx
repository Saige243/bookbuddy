import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import BookContainer from './BookContainer'

export default function Booksearch(): JSX.Element {
  const [book, setBook] = React.useState<any>('')
  const [result, setResult] = useState<AxiosMap | string[]>([]);
  const [visible, setVisible] = useState(true);
  const [visiblebutton, setVisibleButton] = useState<JSX.Element | boolean>(false);

  // const [libraryArray, setLibraryArray] = useState<any[]>([])

  const apiKey = process.env.REACT_APP_GOOGLEBOOKS_API_KEY

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const booke = e.target.value;
    setBook(booke);
    // console.log(book)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();


    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20").then((data: any) => {
      setResult(data.data.items)
      // console.log(result)
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

  const [currentBook, setCurrentBook] = useState<any>({
    title: book.title,
    author: book.authors,
    thumbnail: book.src
  })

  const onchange = (data: any) => {
    setCurrentBook(data)
    console.log(data)
    // console.log("Book:", currentBook)
  }

  // function updateCurrentBook(e: any) {
  //   const bk = e.target.value
  //   setCurrentBook(e.target.value)
  //   console.log(currentBook)
  //   setCurrentBook(bk)
  //   console.log(e.target.result)
  //   console.log(result)
  // }

  const pull_data = (datar: any) => {
    console.log(datar)
  }

  useEffect(() => {
    setCurrentBook(currentBook)
    // setLibraryArray([...libraryArray, { currentBook }])
    console.log("Book:", currentBook)
    console.log('useEffect rendered!')
    // console.log('LibraryArr:', libraryArray)
    // add libraryArrary to v
  }, [currentBook])


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
            // value={updateCurrentBook}
            func={pull_data}
            data={currentBook}
            onchange={(e: any) => { onchange(e) }}
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