const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ User, Star, Like }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Star, { foreignKey: 'studentId' });
      this.hasMany(Like, { foreignKey: 'studentId' });
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
