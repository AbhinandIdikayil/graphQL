module.exports = (sequelize, DataTypes, db) => {
    const authors = sequelize.define("authors", {
        author_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        author_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        author_age: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        author_country: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        total_published_works: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        year_of_birth: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      });
      authors.associate = (models) => {
        authors.hasMany(models.book, {as:"books", foreignKey:"author_id"})
      }
      return authors
}