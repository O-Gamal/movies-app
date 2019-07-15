import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const Movies = () => {
  useEffect(() => {
    axios.get('./../../db.json')
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (

        <Typography>Movies</Typography>
  );
};


export default Movies;
