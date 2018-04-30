import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import Map from "./Map";
const GM_KEY = Meteor.settings.public.google_map_key;
const GM_URI = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GM_KEY}`;

class MapContainer extends Component {
  render() {
    return (
      <Map
        googleMapURL={GM_URI}
        loadingElement={<div style={{height: "100%", width: "100%"}}/>}
        containerElement={<div style={{height: "100%", width: "100%"}}/>}
        mapElement={<div style={{height: "100%", width: "100%"}}/>}
        {...this.props}
      />
    );
  }
}

MapContainer.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  shipName: PropTypes.string,
};

export default MapContainer;
