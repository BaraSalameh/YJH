const UserController = require('../controllers/user.controller');
module.exports = app => {
    // app.get('/api', SomethingController.methodName);
    app.post("/api/user/new", UserController.createUser);
    // app.put("/api/Soemthing/update/:id", SomethingController.methodName);
    // app.delete("/api/jokes/delete/:id", SomethingController.methodName);
}