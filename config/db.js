const mongooes = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongooes.connect(db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('connected database')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
module.exports = connectDB