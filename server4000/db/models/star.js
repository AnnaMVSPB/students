const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    static associate({ User, Student }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Student, { foreignKey: 'studentId' });
    }
  }
  Star.init({
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
    modelName: 'Star',
  });
  return Star;
};
