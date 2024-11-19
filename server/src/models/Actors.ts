import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';


//actor interface
interface actorAttributes {
  actorId: number; 
  actorName: string;
  movies: string;
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
  public movies!: string;
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
      userId: {
        // Define the foreign key column
        type: DataTypes.INTEGER,
        allowNull: true, // Optional field in this case
        references: {
          model: 'users', // Name of the related table
          key: 'userId',  // Key in the related table
        },
        onDelete: 'CASCADE', // Match the association behavior
      },
    },
    {
      tableName: 'actors',
      sequelize,
      timestamps: false,
      modelName: 'actors',
      hooks: {
       
      },
    }
  );

  return Actor;
}