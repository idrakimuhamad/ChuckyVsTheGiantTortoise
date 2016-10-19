import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { MainLayout } from '../../ui/layouts/MainLayout';
import { AppLayout } from '../../ui/layouts/AppLayout';
import { Index } from '../../ui/pages/Index';
import { Dashboard } from '../../ui/pages/Dashboard';
import { DocumentList } from '../../ui/pages/DocumentList';
import { AddDoc } from '../../ui/pages/AddDoc';

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <Route component={ AppLayout }>
          <IndexRoute name="index" component={ Index } />
          <Route name="dashboard" path="/dashboard" component={ Dashboard } />
          <Route name="year" path="/y/:year" component={ DocumentList } />
          <Route name="addDoc" path="/new" component={ AddDoc } />
        </Route>
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
