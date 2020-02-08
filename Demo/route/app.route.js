module.exports = (app) => {
    const controller = require('../controller/controller');

    app.post('/user/create', controller.userCreate);
    app.get('/user/:objectId', controller.userGet);
    app.delete('/user/:objectId', controller.userDelete);
};