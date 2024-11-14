import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { username: 'fanatic365',  password: 'password' },
      {
        username: 'carl',
        password: 'password',
      },
      {
        username: 'MrsPedroPascal',
        password: 'password',
      },
    ],
    { individualHooks: true }
  );
};
