import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { DashboardChart } from '../components/DashboardChart.js';
import { Loader } from '../components/Loader.js';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import moment from 'moment';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents');
  if (subscription.ready()) {
    const activeDoc = Documents.find({ "active": "y"}).count();
    const InactiveDoc = Documents.find({ "active": "n"}).count();
    const allDocs = Documents.find({}).fetch();

    const groupByYear = _.groupBy(allDocs, (doc) => {
      return moment(doc.active_date).format('YYYY');
    });

    const documents = {
      activeDoc,
      InactiveDoc,
      groupByYear
    };

    // const doc2015
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loader)(DashboardChart);
