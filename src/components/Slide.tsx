import React, {Component} from 'react';
import axios, {AxiosResponse} from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import MenuItem from "@material-ui/core/MenuItem";
import {ListItemText} from "@material-ui/core";

interface State {
  slideNum: number;
  imgs: string[];
}

class Slide extends Component<RouteComponentProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: this.props.location.state.slideNum,
      imgs: [],
    }
    this.getSlidePictures().then();
  }

  async getSlidePictures() {
    const BASE_URL: string = process.env.REACT_APP_BASEURL!;
    const ACCESS_KEY: string = process.env.REACT_APP_UNSPLASH_ACCESS_KEY!;

    const url = BASE_URL + '/photos/random?count=' + this.state.slideNum;

    await axios
      .get(url, {
        headers: {
          Authorization: "Client-ID " + ACCESS_KEY,
        }
      })
      .then((res: AxiosResponse) => {
        const datas: Array<any> = res.data;
        const imgs: string[] = [];
        const windowWidth: string = window.innerWidth.toString();

        res.data.forEach((d) => {
          imgs.push(d.urls.raw + '&w=' + windowWidth);
        })
        this.setState({
          imgs: imgs,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.imgs.map((img) => (
            <img src={img} alt="slide"/>
          ))}
        </div>
      </div>
    );
  }

}

export default Slide;
