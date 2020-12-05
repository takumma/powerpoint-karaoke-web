import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button, ListItemText} from '@material-ui/core';

interface State {
  slideNum: number,
}

class Top extends React.Component<{}, State> {
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
    const numList: Array<number> = Array(18).fill(0).map((v,i) => i + 3);

    return (
      <div className="App">
        <div className="App-header">
          <FormControl>
            <InputLabel id="slideNum-select-label">slideNum</InputLabel>
            <Select
              labelId="slideNum-select-label"
              value={this.state.slideNum}
              onChange={event => this.handleChange(event)}
            >
              {numList.map((num) => (
                <MenuItem key={num} value={num}>
                  <ListItemText primary={num} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Link to={{
            pathname: '/slide',
            state: {
              slideNum: this.state.slideNum,
            }
          }}>
            <Button>Start</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Top;
