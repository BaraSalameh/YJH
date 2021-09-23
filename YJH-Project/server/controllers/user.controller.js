const { User } = require('../models/user.model');

module.exports.createUser = (request, response) => {
    User.create(request.body)
    .then(res => response.json(res))
    .catch(err => response.json(err))
}