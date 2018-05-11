import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VesselFindInput from './VesselFindInput';

class VesselFindInputContainer extends Component {
  constructor(props) {
    super(props);
    this.handleVesselSearchUpdate = this.handleVesselSearchUpdate.bind(this);
  }

  state = {
    vesselSearch: '',
  };

  handleVesselSearchUpdate = (vesselSearch) => {
    this.setState({
      vesselSearch,
    });
  };

  render() {
    return (
      <VesselFindInput
        vesselSearch={this.state.vesselSearch}
        onSearchUpdate={this.handleVesselSearchUpdate}
        onSelected={value => this.props.onSelected(value)}
      />
    );
  }
}

VesselFindInputContainer.propTypes = {
  onSelected: PropTypes.func.isRequired,
};

export default VesselFindInputContainer;
