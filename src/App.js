import React, { Fragment } from 'react';
import SearchBar from './components/SearchBar.js';
import Movies from './components/Movies.js';

function App() {
  return (
    <Fragment>
      <SearchBar />
      <Movies />
    </Fragment>
  );
}

export default App;
