import React from 'react';

import VesselFindInputContainer from "./VesselFindInput/VesselFindInputContainer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeSelectedShip = this.handleChangeSelectedShip.bind(this);
  }

  handleChangeSelectedShip(ship) {
    console.log(ship);
  }

  render() {
    return (
      <VesselFindInputContainer onSelected={this.handleChangeSelectedShip}/>
    )
  }
}

export default App;
