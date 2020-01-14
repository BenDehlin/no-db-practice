const posts = require('../data/posts')


const getPost = (req, res) => {
  const{id} = req.params
  if(id){const selectedPost = posts.find(el => el.id === +id)
    return res.status(200).send(selectedPost)
  }
  res.status(200).send(posts)
}

module.exports = getPost