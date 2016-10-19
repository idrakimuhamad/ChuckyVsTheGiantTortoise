import React, { Component } from 'react';
import Highcharts from 'highcharts';
import { Heading, Container } from 'rebass';
import { Flex } from 'reflexbox';

const colors = [ '#E91E63', '#2196F3' ];

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    Highcharts.chart({
      chart: {
            type: 'pie',
            renderTo: this.refs.chucky
        },

        tooltip: {
          enabled: false
        },

        title: {
          text: 449,
          align: 'center',
          verticalAlign: 'middle',
          y: 10,
          style: { "fontSize": "32px", "fontWeight": "bold" }
        },

        plotOptions: {
            pie: {
              allowPointSelect: true,
              slicedOffset: 10,
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}<br/>{point.y}, {point.percentage:.1f} %</b>',
                  style: {
                      fontWeight: 'bold'
                  }
              },
              states: {
                hover: {
                  halo: {
                      // size: 0
                  }
                },
                select: {
                  lineColor: 'rgba(100,100,200, 0.25)',
                  fillColor: null,
                  lineWidth: 10,
                  radius: 6,
                  borderColor: 'rgba(0,0,0, .55)',
                  borderWidth: 10,
                  borderOpacity: .25
                }
              }
            }
        },

        series: [{
          data: [{
            name: 'Female',
            y: 126,
            color: colors[0]
          }, {
            name: 'Male',
            y: 323,
            color: colors[1]
          }],
          innerSize: '50%',
          events: {
            click: function(e) {
              if (!$(e.target).is('.selected')) {
                $(e.target).addClass('selected');
              } else {
                $(e.target).remove('selected');
              }              
            }
          }
        }]
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
              children="Test 1"
              />
            <div
              className="chucky"
              style={{ 'height': '400px', 'width': '500px' }}
              ref="chucky"></div>
          </Flex>
        </Container>
      </div>
    );
  }
}
