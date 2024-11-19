import sequelize from '../config/connection.js';
import { UserFactory } from './User.js';
import { ActorFactory } from './Actors.js';


const User = UserFactory(sequelize);
const Actor = ActorFactory(sequelize);

User.hasMany(Actor,{
    onDelete: 'CASCADE',
    as: 'actor',
});

Actor.belongsTo(User);


export { User };
