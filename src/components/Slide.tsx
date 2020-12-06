import React, {Component} from 'react';
import axios, {AxiosResponse} from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface State {
  slideNum: number;
  images: string[];
  page: number;
}

class Slide extends Component<RouteComponentProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: this.props.location.state.slideNum,
      images: [],
      page: 0,
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
        const imgs: string[] = [];
        const windowWidth: string = window.innerWidth.toString();
        const windowHeight: string = window.innerHeight.toString();

        res.data.forEach((d) => {
          imgs.push(d.urls.raw + '&fit=max&w=' + windowWidth + '&h=' + windowHeight);
        })
        this.setState({
          images: imgs,
        })
      });
  }

  keyDown(event: any) {
    if ([32, 39].includes(event.keyCode)) {
      this.setState({
        page: this.state.page + 1,
      })
    }

    if (event.keyCode === 37) {
      this.setState({
        page: this.state.page - 1,
      })
    }
  }

  nowSlide(): string {
    return this.state.images[this.state.page];
  }

  render() {
    return (
      <div
        className="App-container"
        onKeyDown={(e) => this.keyDown(e)}
        tabIndex={0}
        ref="key"
      >
        <img src={this.nowSlide()} alt="slide"/>
      </div>
    );
  }

}

export default Slide;
