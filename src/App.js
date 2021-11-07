import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import DisplaySimpson from './components/DisplaySimpson';

const sampleSimpson = {
  quote: 'Marriage is like a coffin and each kid is another nail.',
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?149756751193',
  characterDirection: 'Right',
};

export default function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div>
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>
        See another Simpson's character
      </button>
    </div>
  );
}
