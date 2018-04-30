import { Meteor } from 'meteor/meteor';

import Vessels from '../../api/vessels';
import seedVessels from './seedVessels.json';

Meteor.startup(() => {
  if (Vessels.find().count() === 0) {
    seedVessels.forEach((v) => {
      Vessels.insert({
        name: v.Name,
        IMO: v.IMO,
        CS: v.CS,
        MMSI: v.MMSI,
        length: v.Length,
      });
    });
  }
});
