import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

function findLocationForVessel(vessel, callback) {
  HTTP.call('GET', 'https://api.aprs.fi/api/get', {
    params: {
      name: vessel.MMSI,
      what: 'loc',
      apikey: "109676.BrVSr9i6TpbMbBe",
      format: 'json',
    },
  }, callback);
}

export default {
  findLocationForVessel,
};
