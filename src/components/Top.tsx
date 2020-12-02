import React from 'react';
import { Link } from 'react-router-dom';

function Top() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/slide'>Start</Link>
      </header>
    </div>
  );
}

export default Top;
