import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Autocomplete, CardPanel } from 'react-materialize';

import Vessels from '../../api/vessels';

function transformToData(vessels) {
  const data = {};
  vessels.forEach((v) => {
    data[v.name] = null;
  });
  return data;
}

const VesselFindInput = ({ vessels, onSearchUpdate, onSelected }) => (
  <CardPanel className="vessel__find-input">
    <Autocomplete
      placeholder="Enter a vessel name"
      data={transformToData(vessels)}
      onChange={(event, value) => onSearchUpdate(value)}
      onAutocomplete={value => onSelected(value)}
    />
  </CardPanel>
);

VesselFindInput.propTypes = {
  vessels: PropTypes.array,
  onSearchUpdate: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default withTracker((props) => {
  const { vesselSearch } = props;
  if (!vesselSearch || vesselSearch.length === 0) {
    return {
      vessels: [],
    };
  }
  return {
    vessels: Vessels.find({ name: { $regex: new RegExp(vesselSearch, 'i') } }).fetch(),
  };
})(VesselFindInput);
