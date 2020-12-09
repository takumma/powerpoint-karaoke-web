import React, {Component} from 'react';
import axios, {AxiosResponse} from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface State {
  slideNum: number;
  images: string[];
  page: number;
  show: boolean;
}

class Slide extends Component<RouteComponentProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: this.props.location.state.slideNum,
      images: [],
      page: 0,
      show: false,
    }
    console.log(process.env.PUBLIC_URL)
    console.log(process.env.REACT_APP_BASEURL)
    this.getSlidePictures().then();
  }

  async getSlidePictures() {
    const UNSPLASH_BASE_URL: string = process.env.REACT_APP_UNSPLASH_BASE_URL!;
    const ACCESS_KEY: string = process.env.REACT_APP_UNSPLASH_ACCESS_KEY!;
    const url = UNSPLASH_BASE_URL + '/photos/random?count=' + this.state.slideNum;

    const imageUrls: string[] = [];

    await axios
      .get(url, {
        headers: {
          Authorization: "Client-ID " + ACCESS_KEY,
        }
      })
      .then(
        (res: AxiosResponse) => {
          const windowWidth: string = window.innerWidth.toString();
          const windowHeight: string = window.innerHeight.toString();

          res.data.forEach((d) => {
            imageUrls.push(d.urls.raw + '&fit=max&w=' + windowWidth + '&h=' + windowHeight);
          });
        },
        () => {
          this.props.history.push('/', {isError: true});
        });

    let done = 0;

    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        done++;
        if (done === imageUrls.length) {
          this.setState({
            show: true,
            images: imageUrls
          })
        }
      }
    });
  }

  keyDown(event: any) {
    if ([32, 39].includes(event.keyCode) && this.state.page < this.state.images.length - 1) {
      this.setState({
        page: this.state.page + 1,
      })
    }

    if (event.keyCode === 37 && this.state.page !== 0) {
      this.setState({
        page: this.state.page - 1,
      })
    }
  }

  nowSlide(): string {
    return this.state.images[this.state.page];
  }

  render() {
    if (!this.state.show) {
      return (
        <div className="App-container">waiting...</div>
      )
    }

    return (
      <div
        className="App-container"
        onKeyDown={(e) => this.keyDown(e)}
        tabIndex={0}
      >
        <img src={this.nowSlide()} alt="slide"/>
      </div>
    );
  }

}

export default withRouter(Slide);
