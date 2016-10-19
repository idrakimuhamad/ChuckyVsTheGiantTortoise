import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { MainLayout } from '../../ui/layouts/MainLayout';
import { AppLayout } from '../../ui/layouts/AppLayout';
import { Index } from '../../ui/pages/Index';

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <Route component={ AppLayout }>
          <IndexRoute name="index" component={ Index } />
        </Route>
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
