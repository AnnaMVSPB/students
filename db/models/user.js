const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Student, Star, Like }) {
      this.hasMany(Student, { foreignKey: 'userId' });
      this.hasMany(Star, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
