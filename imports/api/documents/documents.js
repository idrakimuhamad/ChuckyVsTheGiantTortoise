import { Mongo } from 'meteor/mongo';

export const Documents = new Mongo.Collection('Documents');

// Documents.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// Documents.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });
