import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Vessels from "../api/vessels";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.vessels.map(v => <div key={v._id}>{v.name}</div>)}
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    vessels: Vessels.find({}).fetch(),
  };
})(App);
