const posts = require('../data/posts')


const getPosts = (req, res) => {
  const {id, title, content, author} = req.query
  let results = posts
  if(id){results = results.filter(post => post.id === +id)} 
  if(title){results = results.filter(post => post.title === title)} 
  if(content){results = results.filter(post => post.content === content)} 
  if(author){results = results.filter(post => post.author === author)}
  return res.status(200).send(results)
}

module.exports = getPosts