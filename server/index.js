const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333

const getPosts = require('./get/getPosts')
const getPost = require('./get/getPost')
const getUsers = require('./get/getUsers')

const deletePost = require('./delete/deletePost')

app.use(express.json())
app.use(cors())

//get
app.get('/api/posts', getPosts)
app.get('/api/post/:id', getPost)
app.get('/api/users', getUsers)

// app.delete('/api/post/:id', deletePost)

app.listen(port, () => console.log(`Server listening on port ${port}`))