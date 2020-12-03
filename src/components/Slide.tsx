import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import axios, {AxiosResponse} from 'axios';

function Slide() {

  const [img, setImg] = useState();

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
        setImg(res.data.urls.regular);
      })
      .catch((err) => {
        console.log('error!');
      });
  }

  const getSlide = getSlidePictures();

  return (
    <div className="App">
      <div className="App-header">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <img src={img}/>
      </div>
    </div>
  );
}

export default Slide;
