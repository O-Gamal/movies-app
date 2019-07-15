import React from 'react';
import {
  AppBar, Toolbar, Typography, InputBase, Paper,
} from '@material-ui/core';

const styles = {
  Toolbar: {
    justifyContent: 'space-Around',
  },
  Paper: {
    width: 300,
  },
  InputBase: {
    paddingLeft: 10,
  },
};

const SearchBar = () => (
      <AppBar position="static">
        <Toolbar style={styles.Toolbar}>
          <Typography variant="h4">Search For Movies</Typography>
          <Paper style={styles.Paper}>
                <InputBase
                  style={styles.InputBase}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'Search' }}
                />
          </Paper>
        </Toolbar>
      </AppBar>
);

export default SearchBar;
