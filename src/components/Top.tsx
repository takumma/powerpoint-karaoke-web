import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button, Divider, Grid, ListItemText, Typography} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import {Slideshow} from "@material-ui/icons";

interface State {
  slideNum: number,
  isError: boolean
}

interface Props extends WithStyles<typeof styles> {}

const styles = theme => createStyles({
  subtitle: {
    marginBottom: theme.spacing(4),
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    textTransform: "uppercase",
    letterSpacing: theme.spacing(2)
  },
  mb: {
    marginBottom: theme.spacing(6),
  },
  btnIcon: {
    marginRight: theme.spacing(1),
  },
  gridItem: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  grid: {
    margin: theme.spacing(4),
  }
});

class Top extends React.Component<RouteComponentProps<Props>, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: 3,
      isError: this.props.location.state !== undefined,
    }
    console.log(this.props)
  }

  handleChange (event: any) {
    this.setState({
      slideNum: event.target.value as number,
    })
  }

  itemText(num: number): string {
    return num.toString().replace( /[0-9]/g, (s) =>  {
      return String.fromCharCode(s.charCodeAt(0) + 65248);
    });
  }

  render() {
    const numList: Array<number> = Array(18).fill(0).map((v,i) => i + 3);
    const { classes } = this.props;

    return (
      <div className="App-container">
        <Typography variant="h2">
          パワポカラオケ
          <Divider />
        </Typography>
        <Typography className={classes.subtitle}>
          power point karaoke
        </Typography>
        <Typography variant="subtitle1" className={classes.mb}>
          ランダムに出てくる画像を使って即興でプレゼンをするパワポカラオケができるサイトです！
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid>
            <Typography variant="h6">
              スライドの枚数
            </Typography>
          </Grid>
          <Grid className={classes.gridItem}>
            <FormControl>
              <Select
                labelId="slideNum-select-label"
                value={this.state.slideNum}
                onChange={event => this.handleChange(event)}
              >
                {numList.map((num) => (
                  <MenuItem key={num} value={num}>
                    <ListItemText primary={this.itemText(num)}/>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid>
            <Typography variant="h6">
              枚
            </Typography>
          </Grid>
        </Grid>
        {this.state.isError ? <div>エラーが発生しました。</div> : ''}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          className={classes.mb}
          to={{
            pathname: '/slide',
            state: {
              slideNum: this.state.slideNum,
            }
          }}
        >
          <Slideshow className={classes.btnIcon}/>
          スタート！
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Top);
