import React from 'react';
import { Link } from 'react-router';
import { Fixed, Container, Toolbar, NavItem, Space } from 'rebass';

export const Footer = (props) => (
  <Fixed
    bottom
    left
    right>
    <Toolbar>
      <NavItem
        is={Link}
        to="/">
        Index
      </NavItem>
      <NavItem
        is={Link}
        to="/dashboard">
        Dashboard
      </NavItem>
      <NavItem
        is={Link}
        to="/y/2015">
        2015 Documents
      </NavItem>
      <NavItem
        is={Link}
        to="/y/2016">
        2016 Documents
      </NavItem>
      <Space
        auto
        x={1}/>
      <NavItem
        is={Link}
        to="/new">
        Add New Doc
      </NavItem>
    </Toolbar>
  </Fixed>
)
