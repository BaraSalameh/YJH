const UserController = require('../controllers/user.controller');
module.exports = app => {
    app.get('/api/user/:username', UserController.getUser);
    app.post("/api/user/new", UserController.createUser);
    app.put("/api/user/update/:username/:hourMoney", UserController.updateUser);
    // app.delete("/api/jokes/delete/:id", SomethingController.methodName);
}