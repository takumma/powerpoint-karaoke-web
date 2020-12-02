import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Top() {
  const slideNum = 3;
  return (
    <div className="App">
      <div className="App-header">
        <FormControl>
          <InputLabel id="slideNum-select-label">slideNum</InputLabel>
          <Select
            labelId="slideNum-select-label"
            value={slideNum}
            options={SlideNumSelectList}
          >
          </Select>
        </FormControl>
        <Link to='/slide'>Start</Link>
      </div>
    </div>
  );
}

function SlideNumSelectList(): FC {
  const numList: FC = [];
  for(let i = 3; i < 21; i++) {
    numList.push(i)
  }
  return numList;
}

export default Top;
