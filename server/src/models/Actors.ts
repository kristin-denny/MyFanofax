import { DataTypes,  type ForeignKey, type Sequelize, Model, type Optional } from 'sequelize';
import type { User } from './User.js';

//actor interface
interface actorAttributes {
  actorId: number; 
  userID: ForeignKey<User['userId']>;
  actorName: string;
  movies: string;
  comments: string;
  headshotURL: string;
}

interface actorCreationAttributes extends Optional<actorAttributes, 'actorId'> {}

export class Actor
  extends Model<actorAttributes, actorCreationAttributes>
  implements actorAttributes
{
  public actorId!: number;
  public userID!: ForeignKey<User['userId']>;
  public actorName!: string;
  public movies!: string;
  public comments!: string;
  public headshotURL!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  
}

export function ActorFactory(sequelize: Sequelize): typeof Actor {
  Actor.init(
    {
      actorId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      actorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movies: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      headshotURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'actors',
      sequelize,
      hooks: {
       
      },
    }
  );

  return Actor;
}