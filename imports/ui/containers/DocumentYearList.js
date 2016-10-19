import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { DocumentYearList } from '../components/DocumentYearList.js';
import { Loader } from '../components/Loader.js';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents');
  const { year } = params;
  const startDate = new Date(parseInt(year), 0, 1);
  const endDate = new Date(parseInt(year) + 1, 0, 1);

  if (subscription.ready()) {
    const yearDocs = Documents.find({
      'active_date': {
        $gte: startDate,
        $lt: endDate
      }
    }).fetch();

    onData(null, { yearDocs });
  }
};

export default composeWithTracker(composer, Loader)(DocumentYearList);
