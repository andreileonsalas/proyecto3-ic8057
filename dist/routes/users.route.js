"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const users_controller_1 = tslib_1.__importDefault(require("../controllers/users.controller"));
class UsersRoute {
    constructor() {
        this.path = '/users';
        this.router = express_1.Router();
        this.usersController = new users_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        router.post('/api/addUser', users_controllers.addUser);
        router.post('/api/validateUser', users_controllers.validateUser);
        router.post('/api/addFunction', functions_controllers.addFunction);
        router.post('/api/getUserFunctions', functions_controllers.getUserFunctions);
        // this.router.get(`${this.path}`, this.usersController.getUsers);
        // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
        // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
        // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
        // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
    }
}
exports.default = UsersRoute;
//# sourceMappingURL=users.route.js.map