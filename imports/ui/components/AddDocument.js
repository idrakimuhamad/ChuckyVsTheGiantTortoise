import React from 'react';
import { Link } from 'react-router';
import { Button, Base, Input, Checkbox } from 'rebass';
import { Flex, Box } from 'reflexbox';

export const AddDocument = (props) => {
  return (
    <Flex
      column>
      <Box
        col={12}>
        <Input
          label="Active Date"
          name="Active_Date"
          placeholder="Active Date"
          type="datetime-local"
          defaultValue={props.active}
          onBlur={props.handleInput}
        />
        <Input
          label="Expiry Date"
          name="Expiry_Date"
          placeholder="Expiry Date"
          type="datetime-local"
          defaultValue={props.expired}
          onBlur={props.handleInput}
        />
        <div>
          <Checkbox
            checked={props.isActive}
            onChange={props.handleCheck}
            label="Active"
            name="active"
            theme="success"
          />
        </div>
        <div>
          <Button
          backgroundColor="primary"
          color="white"
          onClick={props.handleSubmit}
          inverted
          rounded
          children="Save"
          />
        </div>
      </Box>
    </Flex>
  );
}
