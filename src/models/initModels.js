const Users = require('./users.models')
const Posts = require('./post.models')
const Categories = require('./categories.models')

const initModels = () => {

    Posts.belongsTo(Users)
    Users.hasMany(Posts)

    Posts.belongsTo(Categories)
    Users.hasMany(Posts)
}


module.exports = initModels