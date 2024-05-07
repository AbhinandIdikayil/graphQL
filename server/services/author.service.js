const { Author,Book } = require("../models/sequelizeModel")

const getAuthors = async () => {
    try { 
        let data = await Author.findAll({
            include: [
                {
                    model: Book,
                    as: "books"
                }
            ]
        });
        return data
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
}

const createAuthor = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        throw Error(error)
    }
}

module.exports = { getAuthors , createAuthor}