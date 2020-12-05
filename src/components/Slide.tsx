import React from 'react';
import axios, {AxiosResponse} from 'axios';

interface Prop {
  slideNum: number;
}

interface State {
  slideNum: number;
  img: string;
}

class Slide extends React.Component<Prop, State> {

  constructor(props) {
    super(props);
    this.state = {
      slideNum: props.slideNum,
      img: '',
    }
    this.getSlidePictures().then();
  }

  async getSlidePictures() {
    const BASE_URL: string = process.env.REACT_APP_BASEURL!;
    const ACCESS_KEY: string = process.env.REACT_APP_UNSPLASH_ACCESS_KEY!;

    await axios
      .get(BASE_URL + '/photos/random', {
        headers: {
          Authorization: "Client-ID " + ACCESS_KEY,
        }
      })
      .then((res: AxiosResponse) => {
        this.setState({
          img: res.data.urls.regular,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.img} alt="slide"/>
        </div>
      </div>
    );
  }

}

export default Slide;