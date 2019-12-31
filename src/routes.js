import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Playlist from './Playlist';

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Playlist} />
    </Switch>
  </BrowserRouter>
);
