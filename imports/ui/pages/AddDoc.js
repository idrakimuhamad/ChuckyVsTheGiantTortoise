import React, { Component } from 'react';
import Highcharts from 'highcharts';
import { Heading, Container } from 'rebass';
import { Flex } from 'reflexbox';
import moment from 'moment';
import { AddDocument } from '../components/AddDocument';
import { insertDocument } from '../../api/documents/methods.js';

export class AddDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '',
      expired: '',
      isActive: true
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheck() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  handleInput(e) {
    e = e || e.persist();

    if (e.target.name === 'Active_Date') {
      this.setState({
        active: e.target.value
      });
    } else {
      this.setState({
        expired: e.target.value
      });
    }
  }

  handleSubmit() {
    const { active, expired, isActive } = this.state;

    if (active && expired) {
      // make sure active and expiry date is in Date object
      const body = {
        active_date: moment(active).toDate(),
        expiry_date: moment(expired).toDate(),
        active: isActive ? 'y' : 'n'
      };

      insertDocument.call(body, (err, res) => {
        if (err) {
          alert('ERROR. ' + err.reason);
        } else {
          alert('Document Added');
          this.setState({
            active: '',
            expired: '',
            isActive: true
          });
        }
      });
    } else {
      alert('Missing fields');
    }
  }

  render() {
    const  { active, expired, isActive } = this.state;
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
              children="Add New Document"
              />
            <div className="inner-content">
              <AddDocument
                active={active}
                expired={expired}
                isActive={isActive}
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit} />
            </div>
          </Flex>
        </Container>
      </div>
    );
  }
}
