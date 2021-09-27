const { User } = require('../models/user.model');

module.exports.createUser = (request, response) => {
    User.create(request.body)
    .then(res => response.json(res))
    .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({username : request.params.username})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({username : request.params.username}, {$push :{perHour : request.body}})
    .then(res =>  response.json(res))
    .catch(err => response.json(err))
}