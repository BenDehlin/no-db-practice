const users = require('../data/users')

const getUsers = (req, res) => {
  const {id, name, age, car} = req.query
  let results = users
  return res.status(200).send(results)
}

module.exports = getUsers