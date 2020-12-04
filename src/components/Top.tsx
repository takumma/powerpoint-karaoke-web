import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Top extends React.Component {
  render() {
    const slideNum = 3;

    return (
      <div className="App">
        <div className="App-header">
          <FormControl>
            <InputLabel id="slideNum-select-label">slideNum</InputLabel>
            <Select
              labelId="slideNum-select-label"
              value={slideNum}
            >
              {SlideNumSelectList()}
            </Select>
          </FormControl>
          <Link to='/slide' >Start</Link>
          {/*<Button onClick={() => this.props.history.push('/slide')}>Start</Button>*/}
        </div>
      </div>
    );
  }
}

function SlideNumSelectList(): any[] {
  const numList: any[] = [];
  for(let i = 3; i < 21; i++) {
    numList.push(<MenuItem value={i}>{i}</MenuItem>)
  }
  return numList;
}

export default Top;
