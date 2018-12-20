'use strict';

module.exports = app => {
    const { router, controller } = app;

    router.get('/', controller.home.index);
    router.get('/login', app.passport.authenticate('hash', { successRedirect: '' }), controller.home.index);
};
