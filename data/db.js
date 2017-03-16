// merage all json file to single one
module.exports = () => {
  return {
    users: require('./users.json'),
    posts: require('./posts.json')
  }
}