"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
require("./controllers/SearchController");
require("./models/User");
mongoose_1.default.connect('mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone', { useNewUrlParser: true, useUnifiedTopology: true });
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(4000, function () {
    console.log('Listening on Port 4000...');
});
