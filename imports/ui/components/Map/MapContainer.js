import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import Map from './Map';

const GM_KEY = Meteor.settings.public.google_map_key;
const GM_URI = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GM_KEY}`;

const MapContainer = props => (
  <Map
    googleMapURL={GM_URI}
    loadingElement={<div style={{ height: '100%', width: '100%' }} />}
    containerElement={<div style={{ height: '100%', width: '100%' }} />}
    mapElement={<div style={{ height: '100%', width: '100%' }} />}
    {...props}
  />
);

MapContainer.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  shipName: PropTypes.string,
};

export default MapContainer;
