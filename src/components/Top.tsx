import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideNum: 3,
    }
  }

  handleChange (event: any) {
    this.setState({
      slideNum: event.target.value as number,
    })
  }

  render() {
    const slideNum = 3;

    return (
      <div className="App">
        <div className="App-header">
          <FormControl>
            <InputLabel id="slideNum-select-label">slideNum</InputLabel>
            <Select
              labelId="slideNum-select-label"
              onChange={event => this.handleChange(event)}
            >
              {SlideNumSelectList()}
            </Select>
          </FormControl>
          <Link to={{
            pathname: '/slide',
            state: {
              slideNum: slideNum,
            }
          }}>
            <Button>Start</Button>
          </Link>
        </div>
      </div>
    );
  }
}

function SlideNumSelectList(): any[] {
  const numList: any[] = [];
  for(let i = 3; i < 21; i++) {
    numList.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
  }
  return numList;
}

export default Top;
