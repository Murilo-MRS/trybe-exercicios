import { 
  INTEGER,
  Model,
  STRING
} from 'sequelize';
import db from '.';

class Post extends Model {
  declare readonly id: number;
  declare title: string;
  declare content: string;
}

Post.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING(255),
  },
  content: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'posts',
  timestamps: false
});

export default Post;