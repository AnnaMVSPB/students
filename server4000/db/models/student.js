const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ User, Star }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Star, { foreignKey: 'starId' });
    }
  }
  Student.init({
    name: DataTypes.TEXT,
    img: DataTypes.TEXT,
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
    modelName: 'Student',
  });
  return Student;
};
