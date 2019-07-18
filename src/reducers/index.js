import { combineReducers } from 'redux';

const ValueReducer = value => value;

const searchedMovieReduccer = (typedMovie = null, action) => {
  if (action.type === 'MOVIE_TYPED') { return action.payload; }
  return typedMovie;
};

export default combineReducers({
  ValueReducer, searchedMovieReduccer,
});
