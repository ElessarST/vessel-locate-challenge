import React from 'react';
import { Meteor } from 'meteor/meteor';
import { MuiThemeProvider } from 'material-ui';

import VesselFindInputContainer from './VesselFindInput/VesselFindInputContainer';
import MapContainer from './Map/MapContainer';
import Error from './Error';
import theme from './theme';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeSelectedShip = this.handleChangeSelectedShip.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  state = {
    lat: null,
    lng: null,
    shipName: null,
    error: '',
  };

  setError(error) {
    this.setState({ error });
  }

  clearError() {
    this.setError();
  }

  handleChangeSelectedShip(ship) {
    Meteor.call('vessels.getLocation', { name: ship }, (err, result) => {
      if (err) {
        this.setState({ error: err.reason });
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
    const {
      lat, lng, shipName, error,
    } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <VesselFindInputContainer onSelected={this.handleChangeSelectedShip} />
        <MapContainer lat={lat} lng={lng} shipName={shipName} />
        <Error error={error} onClose={this.clearError} />
      </MuiThemeProvider>
    );
  }
}

export default App;
