import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const SearchBar = () => (
    <Fragment>
      <Link to="/" style={{ textDecoration: 'none' }}>
           <Typography variant="h4" color="primary" align="center" style={{ margin: 20 }}>
             Movies & Series App
           </Typography>
      </Link>
    </Fragment>
);

export default (SearchBar);
