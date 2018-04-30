import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

function findLocationForVessel(vessel, callback) {
  HTTP.call('GET', 'https://api.aprs.fi/api/get', {
    params: {
      name: vessel.MMSI,
      what: 'loc',
      apikey: Meteor.settings.aprsfi_key,
      format: 'json',
    },
  }, callback);
}

export default {
  findLocationForVessel,
};
