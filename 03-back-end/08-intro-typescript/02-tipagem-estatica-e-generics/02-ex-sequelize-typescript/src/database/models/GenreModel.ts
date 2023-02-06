import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Genre extends Model {
  declare id: number;
  declare name: string;
}

Genre.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  genre: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'genres',
  timestamps: false,
});

export default Genre;