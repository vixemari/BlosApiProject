module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, {
    timestamps: false,
  }); 
  return blogPosts;
};