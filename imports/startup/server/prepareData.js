import faker from 'faker';
import { Documents } from '../../api/documents/documents';


// clear the collection
Documents.remove({});

if (!Documents.findOne()) {
  // add 2015 documents
  for (let doc = 1; doc <= 40; doc++) {
    const fromActive = new Date(2015, 0, 1),
          toActive = new Date(2015, 5, 30),
          fromExpired = new Date(2015, 6, 31),
          toExpired = new Date(2015, 11, 31);

    const body = {
      active: doc % 2 == 0 && doc < 30 ? 'y' : 'n',
      active_date: new Date(faker.Date.between(fromActive, toActive)),
      expiry_date: new Date(faker.Date.between(fromExpired, toExpired))
    };

    Documents.insert(body);
  }

  // add 2016 docs
  for (let doc = 1; doc <= 10; doc++) {
    const fromActive = new Date(2016, 0, 1),
          toActive = new Date(2016, 3, 30),
          fromExpired = new Date(2016, 4, 31),
          toExpired = new Date(2016, 9, 31);

    const body = {
      active: doc % 2 == 0 && doc < 7 ? 'y' : 'n',
      active_date: new Date(faker.Date.between(fromActive, toActive)),
      expiry_date: new Date(faker.Date.between(fromExpired, toExpired))
    };

    Documents.insert(body);
  }
}
