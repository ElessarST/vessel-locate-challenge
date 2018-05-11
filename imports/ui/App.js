import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';

import VesselFindInputContainer from './VesselFindInput/VesselFindInputContainer';
import MapContainer from './Map/MapContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeSelectedShip = this.handleChangeSelectedShip.bind(this);
  }

  state = {
    lat: null,
    lng: null,
    shipName: null,
  };

  handleChangeSelectedShip(ship) {
    Meteor.call('vessels.getLocation', { name: ship }, (err, result) => {
      if (err) {
        window.Materialize.toast(err.reason, 4000);
      } else {
        this.setState({
          lat: +result.lat,
          lng: +result.lng,
          shipName: ship,
        });
      }
    });
  }

  render() {
    const { lat, lng, shipName } = this.state;
    return (
      <Fragment>
        <VesselFindInputContainer onSelected={this.handleChangeSelectedShip} />
        <MapContainer lat={lat} lng={lng} shipName={shipName} />
      </Fragment>
    );
  }
}

export default App;
