import React from 'react';
import { Button } from '@material-ui/core';
import axios, {AxiosResponse} from 'axios';

function Slide() {

  const getSlidePictures = async (num: number) => {
    await axios
      .get('https://source.unsplash.com/category/nature/1024x768')
      .then((res:AxiosResponse<any>) => {
        console.log(res.data);
        return res.data;
      });
  }

  const baseurl = process.env.REACT_APP_BASEURL;
  console.log(process.env.REACT_APP_BASEURL);

  return (
    <div className="App">
      <div className="App-header">
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
      {baseurl}
      <img src='https://source.unsplash.com/category/nature/1024x768'/>
    </div>
  );
}

export default Slide;
