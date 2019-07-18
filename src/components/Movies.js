import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  fade, withStyles, makeStyles, createMuiTheme,
} from '@material-ui/core/styles';
import Movie from './movie.js';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'Blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 500,
      '&:focus': {
        width: 600,
      },
    },
  },
}));

const MoviesApp = () => {
  const classes = useStyles();

  const [value, setValue] = useState('Avatar');

  const updateSearch = (e) => {
    if (e.key === 'Enter') {
      setValue(e.target.value);
    }
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=6ba8781b&s=${value}`)
      .then((res) => {
        setMovies(res.data.Search ? res.data.Search : []);
        console.log(res.data.Search);
      });
  }, [value]);

  return (
    <Fragment>
          <div className={classes.search}>
          <CssTextField
            onKeyDown={updateSearch}
            style={{ width: '100%', marginBottom: 50 }}
            className={classes.margin}
            label="Search"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          </div>
      <Grid container justify="center">
        {movies.map(movie => (
            <Link to={`/movie/${movie.imdbID}`

              }
            >
              <Movie
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            </Link>
        ))}
      </Grid>
    </Fragment>
  );
};

export default MoviesApp;
