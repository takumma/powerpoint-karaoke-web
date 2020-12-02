import React from 'react';
import { Button } from '@material-ui/core';

function Slide() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </header>
    </div>
  );
}

function getSlidePictures(num: number) {
  console.log(num.toString());
}

export default Slide;
