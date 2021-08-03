const express = require('express')
const router = express.Router()

// load model
const Post = require('../models/Posts')
//hien thi all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().lean().sort({ date: -1 })
    res.render('posts/index', { posts })
})
//form tao bai viet
router.get('/add', (req, res) => {
    res.render('posts/add')
})
//tao post moi
router.post('/', async (req, res) => {
    const { title, text } = req.body
    let error = []
    if (!title) errors.push({ msg: 'title required!' })
    if (!text) errors.push({ msg: 'text required!' })
    if (error.length > 0) res.render('posst/add', { title, text })
    else {
        const newPostData = { title, text }
        const newPost = new Post(newPostData)
        await newPost.save()
        res.redirect('/posts')
    }
})

//hien thi form de thay doi bai viet
router.get('/edit/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }).lean()
    res.render('posts/edit', { post })
})
//cap nhat thay doi vao csdl
router.put('/:id', async (req, res) => {
    const { title, text } = req.body
    await Post.findOneAndUpdate({ _id: req.params.id }, { title, text })
    res.redirect('/posts')
})
// xoa bai viet
router.delete('/:id', async (req, res) => {
    await Post.findOneAndRemove({ _id: req.params.id })
    res.redirect('/posts')
})
module.exports = router