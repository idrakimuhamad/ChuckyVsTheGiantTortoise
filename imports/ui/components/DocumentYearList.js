import React from 'react';
import { Link } from 'react-router';
import { Base, Table } from 'rebass';
import { Flex, Box } from 'reflexbox';
import moment from 'moment';

export const DocumentYearList = (props) => {
  const { yearDocs } = props;
  const data = yearDocs.map((doc) => {
    return [
      moment(doc.active_date).format('DD/MM/YYYY HH:mm'),
      moment(doc.expiry_date).format('DD/MM/YYYY HH:mm'),
      doc.active == 'y' ? 'Yes' : 'No'
    ];
  });

  return (
    <Flex
      column>
      <Box
        col={12}>
        <Table
          data={data}
          headings={['Active Date', 'Expiry Date', 'Active']}
          />
      </Box>
    </Flex>
  );
}
