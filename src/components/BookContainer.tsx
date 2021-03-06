import React, { useState, useEffect } from 'react';
import { Container, OverlayTrigger, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faBook, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';


export default function BookContainer(props: any) {
  const [currentBooke, setCurrentBooke] = useState<any>({
    title: props.title,
    author: props.authors,
    thumbnail: props.src
  })

  const handleClick = (e: any) => {
    setCurrentBooke(e.target.value)
    props.onchange(currentBooke)
  }

  useEffect(() => {

  }, [currentBooke])

  // function updateCurrentBook(e: any) {
  //   setCurrentBook('')
  //   const bk = e.target.value
  //   // setCurrentBook({ title: bk })
  //   setCurrentBook(bk)
  //   console.log(currentBook)
  // }



  props.func('hello there! Everything worked!')

  const popoverTop = (
    <Popover id="popover-positioned-top" title="Popover top">
      <Button
        onClick={handleClick}
        // onClick={updateCurrentBook}
        style={{
          backgroundColor: "#97D9E1",
          border: "none",
        }}
        size="sm">
        <FontAwesomeIcon size="sm" icon={faPlus} />
        <FontAwesomeIcon size="sm" icon={faBook} />
      </Button>
    </Popover>
  );

  return (
    <Container className="bkcontainer" fluid
      style={{
        width: "6rem",
        textAlign: "center",
        justifyContent: "center",
        display: "inline-grid",
        margin: "5px",
        paddingTop: "25px",
        alignItems: "center",
        marginBottom: "5px"
      }}>

      <OverlayTrigger rootClose trigger="click" placement="top" overlay={popoverTop}>
        <img style={{
          width: "6rem",
          height: "fill",
          marginBottom: "8px"
        }}
          src={props.src}
          alt={props.alt} />
      </OverlayTrigger>

      <Button
        style={{
          backgroundColor: "#97D9E1",
          border: "none",
          boxShadow: "none"
        }}
        size="sm" target="_blank" href={props.href}>
        <FontAwesomeIcon size="lg" icon={faInfoCircle} />
      </Button>

      <div
        style={{
          fontSize: "11px"
        }}>
        <p>
          <strong>{props.title}</strong>
          <br />
          {props.authors}
        </p>
      </div>

    </Container>
  )
}
