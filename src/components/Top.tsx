import React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button, ListItemText, Typography} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import {Slideshow} from "@material-ui/icons";

interface State {
  slideNum: number,
}

interface Props extends WithStyles<typeof styles>{}

const styles = theme => createStyles({
  title: {
    marginBottom: theme.spacing(8),
  },
  btn: {
    margin: theme.spacing(8),
  },
  btnIcon: {
    marginRight: theme.spacing(1),
  },
  btnText: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  }
});

class Top extends React.Component<Props, State> {
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
    const { classes } = this.props;

    return (
      <div className="App-container">
        <Typography
          variant="h2"
          component="h2"
          className={classes.title}
        >
          パワポカラオケ
        </Typography>
        <Typography
          variant="h4"
          component="h4"
        >
          スライドの枚数
        </Typography>
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
        <Button
          variant="contained"
          color="primary"
          component={Link}
          className={classes.btn}
          to={{
            pathname: '/slide',
            state: {
              slideNum: this.state.slideNum,
            }
          }}
        >
          <Slideshow className={classes.btnIcon}/>
          <span className={classes.btnText}>Start</span>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Top);
