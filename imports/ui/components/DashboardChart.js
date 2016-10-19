import React, {
  Component
} from 'react';
import Highcharts from 'highcharts';
import {
  Base,
  Button,
  PageHeader,
  Heading,
  Text,
  Message,
  Close,
  Space
} from 'rebass';
import {
  Flex,
  Box
} from 'reflexbox';

export class DashboardChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: props.documents
    };
  }

  componentDidMount() {
    const {
      documents
    } = this.state;

    // do the chart
    Highcharts.chart({
      chart: {
        type: 'pie',
        backgroundColor: '#333',
        renderTo: this.refs.chucky
      },

      colors: ['#009688', '#9C27B0'],

      tooltip: {
        enabled: false
      },

      title: {
        text: 'Active vs inactive documents',
        align: 'center',
        style: { "color": "#fefefe" }
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          slicedOffset: 10,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}<br/>{point.y}, {point.percentage:.1f} %</b>',
            style: {
              fontWeight: 'bold',
              color: "#fefefe"
            }
          }
        }
      },

      series: [{
        data: [{
          name: 'Inactive Documents',
          y: documents.InactiveDoc
        }, {
          name: 'Active Documents',
          y: documents.activeDoc
        }]
      }]
    });

    // prep the data for yearly
    const { groupByYear } = documents;
    let categories = [];
    let data = [];

    for (let doc in groupByYear) {
      categories.push(doc);
      data.push({
        name: doc,
        data: [groupByYear[doc].length]
      });
    }

    // create the bar chart
    Highcharts.chart({
      chart: {
        type: 'column',
        backgroundColor: '#333',
        renderTo: this.refs.tortoise
      },
      colors: ['#DB5347', '#3492FF'],
      title: {
        text: 'Documents Number by Year',
        style: { "color": "#fefefe" }
      },
      xAxis: {
        categories: [ 'Year' ],
        labels: {
          style: { "color": "#fefefe" }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Documents',
          style: { "color": "#fefefe" }
        },
        labels: {
          style: { "color": "#fefefe" }
        }
      },
      legend: {
        itemStyle: { "color": "#fefefe" }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: data
    });
  }

  render() {
    return (
      <Base>
        <Base
          py={2}
          >
          <div
            className = "chucky"
            ref = "chucky"></div>
        </Base>
        <Base
          py={2}
          >
          <div
            className = "tortoise"
            ref = "tortoise"></div>
        </Base>
      </Base>
    )
  }
}
