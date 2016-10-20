import React, {
  Component
}
from 'react';
import Highcharts from 'highcharts';
import {
  Heading,
  Container,
  Base
}
from 'rebass';
import {
  Flex
}
from 'reflexbox';

const colors = ['#E91E63', '#2196F3'];

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        style: {
          "fontSize": "32px",
          "fontWeight": "bold"
        }
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          slicedOffset: 0,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}<br/>{point.y}, {point.percentage:.1f} %</b>',
            style: {
              fontWeight: 'bold'
            }
          }
        }
      },

      series: [
        {
          data: [
            {
              name: 'Female',
              y: 126,
              color: colors[0]
        },
            {
              name: 'Male',
              y: 323,
              color: colors[1]
        }],
          innerSize: '50%',
          events: {
            click: function (e) {
              // remove any existing custom halo
              $('.custom-halo-selected').remove();

              // clone the halo path
              const halo = $(e.target).closest('.highcharts-series-group').find('.highcharts-halo').clone();

              // add custom class for us to use
              halo.attr('class', 'custom-halo-selected');

              // lets try replace the one in the DOM with the one we clone
              $(e.target).closest('.highcharts-series-group').prepend(halo);
            }
          }
      }]
    });
  }

  render() {
    return ( <div className="index-wrapper">
      <Container>
        <Flex
          justify="center"
          align="center"
          p={2}
          column>
          <Heading
            level={1}
            children="Test 1" />
            <div
              className="chucky"
              style={{
                'height': '400px',
                'width': '500px'
              }}
              ref="chucky">
            </div>
          </Flex>
        </Container>
      </div>
    );
  }
}
