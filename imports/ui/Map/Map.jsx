import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

import SHIP_MARKER from "./ShipMarker";

const DEFAULT_COORDS = {lat: -34.397, lng: 150.644};

const Map = ({lat, lng, shipName}) => {
  const hasCoords = lat && lng;
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={DEFAULT_COORDS}
      center={hasCoords ? {lat, lng} : DEFAULT_COORDS}
      defaultOptions={{
        streetViewControl: false,
        scaleControl: true,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        rotateControl: true,
        fullscreenControl: false
      }}
      disableDefaultUI
    >
      {
        hasCoords && (
          <MarkerWithLabel
            options={{
              icon: SHIP_MARKER,
            }}
            position={{lat, lng}}
            labelAnchor={new google.maps.Point(86, -28)}
            labelStyle={{fontSize: "14px", width: "200px", textAlign: "center"}}
          >
            <div>{shipName}</div>
          </MarkerWithLabel>
        )
      }
    </GoogleMap>
  )
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  shipName: PropTypes.string,
};

export default withScriptjs(withGoogleMap((props) => <Map {...props}/>));
