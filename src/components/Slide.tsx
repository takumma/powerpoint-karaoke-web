import React, {Component} from 'react';
import axios, {AxiosResponse} from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface State {
  slideNum: number;
  images: string[];
}

class Slide extends Component<RouteComponentProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: this.props.location.state.slideNum,
      images: [],
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
      console.log('Next');
    }

    if (event.keyCode === 37) {
      console.log('Back');
    }
  }

  render() {
    return (
      <div
        className="App"
        onKeyDown={(e) => this.keyDown(e)}
        tabIndex={0}
        ref="key"
      >
        <div className="App-header">
          {this.state.images.map((img) => (
            <img src={img} alt="slide"/>
          ))}
        </div>
      </div>
    );
  }

}

export default Slide;
