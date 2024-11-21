import { DataTypes, Sequelize, Model, type Optional } from 'sequelize';


//actor interface
interface actorAttributes {
  actorId: number; 
  actorName: string;
  movies: JSON[];
  comments: string;
  headshotURL: string;
  userId?: number;
}

interface actorCreationAttributes extends Optional<actorAttributes, 'actorId'> {}

export class Actor
  extends Model<actorAttributes, actorCreationAttributes>
  implements actorAttributes
{
  public actorId!: number;
  public actorName!: string;
  public movies!: JSON[];
  public comments!: string;
  public headshotURL!: string;
  public userId?: number;
 
 

  
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

        type: DataTypes.ARRAY(DataTypes.JSON),

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
      userId: {
       
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
          model: 'users', 
          key: 'userId', 
        },
        onDelete: 'CASCADE', 
      },
    },
    {
      tableName: 'actors',
      sequelize,
      timestamps: false,
      modelName: 'actors',
    }
  );

  return Actor;
}
