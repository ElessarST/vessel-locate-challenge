import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography, withStyles } from 'material-ui';

const Error = ({ error = null, onClose, classes }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={error !== null && error.length > 0}
    onClose={onClose}
  >
    <div className={classes.paper}>
      <Typography variant="title">
          Error
      </Typography>
      <Typography variant="subheading">
        { error }
      </Typography>
    </div>
  </Modal>
);


const styles = theme => ({
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

Error.propTypes = {
  error: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Error);

