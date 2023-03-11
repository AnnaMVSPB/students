const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Student }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Student, { foreignKey: 'studentId' });
    }
  }
  Like.init({
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Students',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
