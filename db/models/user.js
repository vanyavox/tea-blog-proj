const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Post, Order }) {
      this.hasMany(Comment, { foreignKey: 'id' });
      this.hasMany(Post, { foreignKey: 'id' });
      this.hasMany(Order, { foreignKey: 'id' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    addres: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
