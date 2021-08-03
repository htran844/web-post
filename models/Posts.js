const mongooes = require('mongoose')
const Schema = mongooes.Schema

//create model
const postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongooes.model('post', postSchema)