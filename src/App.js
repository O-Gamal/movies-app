import React, {Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Loading.js'
// import SearchBar from './components/SearchBar.js';
// import MoviesApp from './components/Movies.js';
// import MovieDetails from './components/movieDetails.js';
// import Notfound from './components/NotFound.js';

const SearchBar = React.lazy(() => import('./components/SearchBar.js'));
const MoviesApp = React.lazy(() => import('./components/Movies.js'));
const MovieDetails = React.lazy(() => import('./components/movieDetails.js'));
const Notfound = React.lazy(() => import('./components/NotFound.js'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Fragment>
          <SearchBar />
          <Switch>
            <Route path="/" exact component={MoviesApp} />
            <Route path="/movie/:id" exact component={MovieDetails} />
            <Route path="*" component={Notfound} />
          </Switch>
        </Fragment>
      </Router>
    </Suspense>
  );
}

export default App;
