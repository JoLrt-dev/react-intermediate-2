import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className="DisplaySimpson">
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>{simpson.character}</li>
          <li>{simpson.quote}</li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;
