import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Playlist from './Playlist';

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/playlist" component={Playlist} />
    </Switch>
  </HashRouter>
);
