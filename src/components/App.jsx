import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

// From index.js
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';

const App = () => {
  // calling from styles (hook) and gives access to our classes
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* No matter what route we are on we will show the navbar within the corresponding route */}
      <NavBar />
      {/* main part of our content will be within the main tag */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
