import Realm from 'realm';

import ClientSchema from '../schemas/ClientSchema';
import ServiceSchema from '../schemas/ServiceSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [ClientSchema, ServiceSchema],
    schemaVersion: 1,
  });

  return realm;
};
