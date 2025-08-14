"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = require("./app/module/Auth/auth.route");
const user_route_1 = require("./app/module/User/user.route");
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const service_route_1 = require("./app/module/Service/service.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const parent_category_route_1 = require("./app/module/parent_category/parent_category.route");
const serviceCategory_route_1 = require("./app/module/service_category/serviceCategory.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/auth', auth_route_1.AuthRoute);
app.use('/api/user', user_route_1.UserRoute);
app.use('/api/service', service_route_1.ServiceRoute);
app.use('/api/pcategory', parent_category_route_1.PCategoryRoute);
app.use('/api/scategory', serviceCategory_route_1.ServiceCategoryRoute);
app.get('/', (req, res) => {
    res.send('Hello from Service360');
});
app.use(notFound_1.default);
app.use(globalErrorHandler_1.default);
exports.default = app;
