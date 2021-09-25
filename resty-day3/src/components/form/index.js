import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [body, setBody] = useState('')
  const [showTextarea, setShowTextarea] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { method: method, url: url, body: body };
    props.handleApiCall(formData);
  }

  const handleGetMethod = (e) => {
    setMethod(e.target.id);
    setShowTextarea(false);
  }

  const handelPostMethod = (e) => {
    setShowTextarea(true);
    setMethod(e.target.id);
  };

  const handelPutMethod = (e) => {
    setShowTextarea(true);
    setMethod(e.target.id);
  };

  const handelDeleteMethod = (e) => {
    setShowTextarea(false);
    setMethod(e.target.id);
  };
  const handleUrl = e => {
    setUrl(e.target.value);
  }

  const handelTextArea = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleUrl} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleGetMethod} id="get">GET</span>
          <span onClick={handelPostMethod} id="post">POST</span>
          <span onClick={handelPutMethod} id="put">PUT</span>
          <span onClick={handelDeleteMethod} id="delete">DELETE</span>
        </label>
        {showTextarea && <textarea rows='7' cols='30' onChange={handelTextArea}></textarea>}
      </form>
    </>
  );

}

export default Form;
