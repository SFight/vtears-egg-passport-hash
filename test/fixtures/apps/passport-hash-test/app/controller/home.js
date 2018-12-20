'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, ' + this.app.plugins.passportHash.name;
    }
}

module.exports = HomeController;
