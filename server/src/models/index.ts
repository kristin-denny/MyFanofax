import sequelize from '../config/connection.js';
import { UserFactory } from './User.js';
import { ActorFactory } from './Actors.js';


const User = UserFactory(sequelize);
const Actor = ActorFactory(sequelize);


export { User, Actor };
