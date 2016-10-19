import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Base } from 'rebass';

export class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="container">
        <div className="app-wrapper">
          <div className="inner-app">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
