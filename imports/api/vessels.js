import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Vessels = new Mongo.Collection('vessels');

export const vesselsSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name of a vessel',
  },
  IMO: {
    type: Number,
    label: 'International Maritime Organization',
  },
  CS: {
    type: String,
    label: 'Vessels CS',
    optional: true,
  },
  MMSI: {
    type: Number,
    label: 'Maritime Mobile Service Identity',
    optional: true,
  },
  length: {
    type: String,
    label: 'Vessels\' sizes',
    optional: true,
  },
});

Vessels.attachSchema(vesselsSchema);

export default Vessels;
