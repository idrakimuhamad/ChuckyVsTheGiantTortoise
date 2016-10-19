import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { Base } from 'rebass';
import { Footer } from '../components/Footer';

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
            <Base
              px={2}
              py={4}>
              {this.props.children}
            </Base>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
