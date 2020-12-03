import React from 'react';
import { Button } from '@material-ui/core';
import axios, {AxiosResponse} from 'axios';

function Slide() {

  const getSlidePictures = async function () {
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
        return res.data.urls.regular;
      })
      .catch((err) => {
        console.log('error!');
      });
  }

  return (
    <div className="App">
      <div className="App-header">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <img src={getSlidePictures()}/>
      </div>
    </div>
  );
}

export default Slide;
