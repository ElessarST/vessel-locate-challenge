import { Meteor } from 'meteor/meteor';

import Vessels from './vessels';
import APRSFI from './services/aprsfi';

Meteor.methods({
  'vessels.getLocation'({ name }) {
    const vessel = Vessels.findOne({ name });
    if (!vessel) {
      return Promise.reject(new Meteor.Error('vessel.getLocation.vessel_not_found', 'Vessel is not found'));
    }
    return new Promise((resolve, reject) => {
      APRSFI.findLocationForVessel(vessel, (err, response) => {
        if (err || response.data.result === 'fail') {
          reject(new Meteor.Error('vessel.getLocation.api_call_error', 'Failed to get current location for vessel'));
          return;
        }
        if (response.data.found === 0) {
          reject(new Meteor.Error('vessel.getLocation.location_not_found', 'Location for vessel is not found'));
        } else {
          resolve(response.data.entries[0]);
        }
      });
    });
  },
});
