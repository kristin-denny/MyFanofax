import sequelize from '../config/connection.js';
import { UserFactory } from './User.js';
import { ActorFactory } from './Actors.js';


const User = UserFactory(sequelize);
const Actor = ActorFactory(sequelize);

User.hasMany(Actor, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    as: 'actors', // Use plural for clarity
  });
  
  Actor.belongsTo(User, {
    foreignKey: 'userId',
  });


export { User, Actor };
