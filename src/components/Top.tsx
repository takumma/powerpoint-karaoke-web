import React from 'react';
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
          <InputLabel id="slideNum-select-label">slidenum</InputLabel>
          <Select
            labelId="slideNum-select-label"
            value={slideNum}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <Link to='/slide'>Start</Link>
      </div>
    </div>
  );
}

export default Top;
