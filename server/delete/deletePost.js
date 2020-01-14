const posts = require('../data/posts')


//doesn't work yet
const deletePost = (req, res) => {
  const{id} = req.params
  const results = posts.filter(post => post.id !== +id)
  res.status(200).send(results)
}

module.exports = deletePost