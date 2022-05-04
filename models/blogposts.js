module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // published: { type: DataTypes.DATE },
    // updated: { type: DataTypes.DATE },
  }, {
    timestamps: false,
  }); 
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
  };
  return BlogPosts;
};