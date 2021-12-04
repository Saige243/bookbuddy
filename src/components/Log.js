import React from 'react'
import { Button, InputGroup, FormControl, Alert, Card, Container, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import produce from 'immer';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default function Log() {
  const initialData = [{ text: 'Loading Notes ... ' }];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    if (text) {
      const nextState = produce(data, draftState => {
        draftState.push({ text });
      });
      document.querySelector('#noteinput').value = '';

      if (typeof window !== 'undefined') {
        localStorage.setItem('data', JSON.stringify(nextState));
      }

      setData(nextState);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = localStorage.getItem('data');

      if (getData !== '' && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);
  return (
    <div>
      <>
        <InputGroup className="mt-1">
          <InputGroup.Text>Note</InputGroup.Text>
          <FormControl id="noteinput" as="textarea" aria-label="With textarea"
          placeholder="Include chapters, page numbers, etc." />
        </InputGroup>
          <Button className="mt-2 mb-2" onClick={() => handleClick()}>Add note</Button>
          <Notes data={data} />
      </>
    </div>
  )
}
