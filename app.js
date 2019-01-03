/**
 * 插件启动入口
 */

'use strict';

const HashStrategy = require('passport-hash').Strategy;

module.exports = app => {
    const config = app.config.passportHash;
    config.passReqToCallback = true;
    config.hashParam = 'accesstoken';
    config.headerField = 'x-auth-token';

    app.passport.use(new HashStrategy(config, (req, hash, done) => {
        // 这里不处理应用层逻辑，传给app.passport.verify统一处理
        app.passport.doVerify(req, hash, done);
    }));
};
