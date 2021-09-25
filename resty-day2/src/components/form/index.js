import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [showTextarea, setShowTextarea] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { method: method, url: url };
    const apiRequest = await axios({ method: method, url: url })
    props.handleApiCall(formData, apiRequest);
  }

  const Textarea = e => {
    setShowTextarea(true);
    setMethod(e.target.id)
  }

  const handleMethod = e => {
    setMethod(e.target.id);
    setShowTextarea(false);
  }

  const handleUrl = e => {
    setUrl(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleUrl} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleMethod} id="get">GET</span>
          <span onClick={Textarea} id="post">POST</span>
          <span onClick={Textarea} id="put">PUT</span>
          <span onClick={Textarea} id="delete">DELETE</span>
        </label>
        {showTextarea && <textarea rows='7' cols='30'></textarea>}
      </form>
    </>
  );

}

export default Form;
