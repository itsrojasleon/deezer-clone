"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _passport = _interopRequireDefault(require("passport"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './models/User';
var app = (0, _express["default"])();

_mongoose["default"].connect('mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('connected', function () {
  console.log('Connected to mongo instance');
});

_mongoose["default"].connection.on('error', function (error) {
  console.log('Error connecting to Mongo', error);
});

app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use(_authRoutes["default"]);
app.use((0, _cookieSession["default"])({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [config.cookieKey]
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.get('/', function (req, res) {
  res.send('yooo');
});
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log('Listening...');
});