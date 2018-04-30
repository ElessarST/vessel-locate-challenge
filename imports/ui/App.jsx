import React from 'react';

import VesselFindInputContainer from "./VesselFindInput/VesselFindInputContainer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeSelectedShip = this.handleChangeSelectedShip.bind(this);
  }

  state = {
    lat: null,
    lng: null,
  };

  handleChangeSelectedShip(ship) {
    Meteor.call('vessels.getLocation', {name: ship}, (err, result) => {
      if (err) {
        window.Materialize.toast(err.reason, 4000)
      } else {
        this.setState({
          lat: +result.lat,
          lng: +result.lng,
        });
        console.log(result);
      }
    });
  }

  render() {
    return (
      <VesselFindInputContainer onSelected={this.handleChangeSelectedShip}/>
    )
  }
}

export default App;
