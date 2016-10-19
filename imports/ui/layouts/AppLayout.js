import React, { Component } from 'react';
import { Base } from 'rebass';

export class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="index-layout">
        { this.props.children }
      </div>
    );
  }
}
