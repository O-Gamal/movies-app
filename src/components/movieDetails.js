import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

const MovieDetails = (props) => {
  const [movie, setMovie] = useState([]);
  const classes = useStyles();
  const { id } = props.match.params;
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=6ba8781b&i=${id}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <Fragment>
      <AppBar position="static" color="inherit">
        <Toolbar style={{ justifyContent: 'space-around' }}>
          <Link to="/">
              <Button variant="outlined" color="secondary" className={classes.button}>
                Back
              </Button>
          </Link>
          <Typography variant="h5" color="secondary">
            {movie.Title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{
        marginTop: 20, padding: 20, display: 'Flex',
      }}
      >
          <img src={movie.Poster} alt={movie.Title} style={{ marginRight: 20 }} />
          <Table className={classes.table} size="small">
          <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Type:
                </TableCell>
                <TableCell>{movie.Type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Released:
                </TableCell>
                <TableCell>{movie.Released}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Plot:
                </TableCell>
                <TableCell align="center">{movie.Plot}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Genres:
                </TableCell>
                <TableCell>{movie.Genre}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Director :
                </TableCell>
                <TableCell>{movie.Director}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Actors :
                </TableCell>
                <TableCell>{movie.Actors}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Writers:
                </TableCell>
                <TableCell>{movie.Writer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Production:
                </TableCell>
                <TableCell>{movie.Production}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Language:
                </TableCell>
                <TableCell>{movie.Language}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Country:
                </TableCell>
                <TableCell>{movie.Country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Awards:
                </TableCell>
                <TableCell>{movie.Awards}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  BoxOffice:
                </TableCell>
                <TableCell>{movie.BoxOffice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ratings:
                </TableCell>
                <TableCell>{movie.imdbRating}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  IMDB Website:
                </TableCell>
                <TableCell><a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blanck">{`https://www.imdb.com/title/${movie.imdbID}`}</a></TableCell>
              </TableRow>
          </TableBody>
          </Table>
      </Paper>
    </Fragment>
  );
};

export default MovieDetails;
