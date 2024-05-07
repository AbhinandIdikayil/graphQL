const {Book} = require('../models/sequelizeModel')
const createBook = async (args,info) => {
    try {
        let input = args.input
        console.log('input',input);
        let book = await Book.create(input)
        return book;
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
}

module.exports = { createBook }