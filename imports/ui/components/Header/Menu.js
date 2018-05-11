import React from 'react';
import { List, ListItem, ListItemText } from 'material-ui';
import { Link } from 'react-router-dom';

const Menu = () => (
  <List>
    <Link to="/">
      <ListItem button>
        <ListItemText primary="Find Vessels" />
      </ListItem>
    </Link>
    <Link to="/about">
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
  </List>
);

export default Menu;
