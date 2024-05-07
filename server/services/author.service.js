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

const createAuthor = async (args,info) => {
    try {
        let input = args.input
        console.log('input',input);
        let author = await Author.create(input);
        return author
    } catch (error) {
        console.log(error);
        throw Error(error)
    }
}

module.exports = { getAuthors , createAuthor}