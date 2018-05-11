import { Meteor } from 'meteor/meteor';

import Vessels, { vesselsSchema } from '../../api/vessels';
import seedVessels from './seedVessels.json';

function toVesselModel(vessel) {
  return {
    name: vessel.Name,
    IMO: vessel.IMO,
    CS: vessel.CS,
    MMSI: vessel.MMSI,
    length: vessel.Length,
  };
}

Meteor.startup(() => {
  if (Vessels.find().count() === 0) {
    seedVessels.forEach((v) => {
      const model = toVesselModel(v);
      const validationContext = vesselsSchema.newContext();
      validationContext.validate(model);
      if (validationContext.isValid()) {
        Vessels.insert(model);
      } else {
        console.log('Error while processing seed');
        console.log(v);
        console.log(validationContext.validationErrors());
      }
    });
  }
});
