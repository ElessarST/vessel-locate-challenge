import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, withStyles, Typography, Toolbar, Drawer, Icon, IconButton } from 'material-ui';

import Menu from './Menu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  state = {
    showDrawer: false,
  };

  toggleDrawer(showDrawer) {
    return () => this.setState({ showDrawer });
  }

  closeDrawer() {
    return this.toggleDrawer(false);
  }

  openDrawer() {
    return this.toggleDrawer(true);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openDrawer()}>
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit">
              Vessel Locate Challenge
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.showDrawer} onClose={this.closeDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer()}
            onKeyDown={this.closeDrawer()}
            className={classes.list}
          >
            <Menu />
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

