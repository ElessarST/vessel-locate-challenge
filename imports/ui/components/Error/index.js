import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Typography } from 'material-ui';

const Error = ({ error = null, onClose }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={error !== null && error.length > 0}
    onClose={onClose}
  >
    <div>
      <Typography variant="title">
          Error
      </Typography>
      <Typography variant="subheading">
        { error }
      </Typography>
    </div>
  </Modal>
);

Error.propTypes = {
  error: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Error;

