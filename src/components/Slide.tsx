import React from 'react';
import { Button } from '@material-ui/core';
import axios, {AxiosResponse} from 'axios';

interface State {
  img: string;
}

class Slide extends React.Component<{}, State> {

  constructor(props) {
    super(props);
    this.state = {
      img: '',
    }
    this.getSlidePictures();
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
      .then((res:AxiosResponse<any>) => {
        console.log(res.data.urls.regular);
        this.setState({
          img: res.data.urls.regular,
        })
      });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <img src={this.state.img}/>
        </div>
      </div>
    );
  }

}

export default Slide;
