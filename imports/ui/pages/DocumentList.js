import React, { Component } from 'react';
import Highcharts from 'highcharts';
import { Heading, Container } from 'rebass';
import { Flex } from 'reflexbox';
import DocumentYearList from '../containers/DocumentYearList.js';

export class DocumentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.params.year
    };

    console.log(props.params.year);

  }

  componentWillReceiveProps(props) {
    this.setState({
      year: props.params.year
    });
  }

  render() {
    return (
      <div className="index-wrapper">
        <Container>
          <Flex
            justify="center"
            align="center"
            p={2}
            column>
            <Heading
              level={1}
              mb={2}
              children={this.state.year + ' Documents'}
              />
            <div className="inner-content">
              <DocumentYearList
                year={this.state.year}/>
            </div>
          </Flex>
        </Container>
      </div>
    );
  }
}
