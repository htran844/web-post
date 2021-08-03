const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const connectDB = require('./config/db')
//import router
const posts = require('./routes/posts')
//khoi dong app
const app = express()
// khoi dong handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
//ket noi bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//khoi dong method override
app.use(methodOverride('_method'))
//khoi dong express midler-ware
app.use(express.json())
//ket noi db
connectDB()
//router co ban
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
// bring post
app.use('/posts', posts)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`sever runing on port ${PORT}`))