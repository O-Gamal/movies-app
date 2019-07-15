import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const Movies = () => {
  useEffect(() => {
    axios.get('https://staging-api.moviexchange.com/mxs/reference-data/v1/')
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (

        <Typography>Movies</Typography>
  );
};


export default Movies;
