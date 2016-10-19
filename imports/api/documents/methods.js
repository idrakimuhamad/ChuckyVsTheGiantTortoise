import { Documents } from './documents';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertDocument = new ValidatedMethod({
  name: 'documents.insert',
  validate() {},
  run(document) {
    Documents.insert(document);
  }
});
