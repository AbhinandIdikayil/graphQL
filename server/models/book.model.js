module.exports = (sequelize, DataTypes, db) => {
    const Book = sequelize.define("Book", {
      book_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      book_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isbn_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number_of_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },{
      tableName: 'books'
    });
  
    Book.associate = (models) => {
      Book.belongsTo(models.Author, { as: "author", foreignKey: "author_id" });
    };
   
    return Book;
  };