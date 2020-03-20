"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var decorators_1 = require("./decorators");
var URL = 'https://api.deezer.com';
// This is a bad explanation
// But I'm learning how to use Typescript with Express, so, don't pay in that sense 😊
var ERROR_MESSAGE = 'Something went wrong';
// HTTP Status Codes
var OK = 200;
var UNPROCESSABLE_ENTITY = 422;
var TracksController = /** @class */ (function () {
    function TracksController() {
    }
    TracksController.prototype.getTracks = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, track, limit, tracks, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, track = _a.track, limit = _a.limit;
                        return [4 /*yield*/, axios_1.default.get(URL + "/search/track?q=" + track + "&limit=" + limit)];
                    case 1:
                        tracks = (_b.sent()).data.data;
                        res.status(OK).json({ tracks: tracks });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TracksController.prototype.getArtists = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, artist, limit, artists, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, artist = _a.artist, limit = _a.limit;
                        return [4 /*yield*/, axios_1.default.get(URL + "/search/artist?q=" + artist + "&limit=" + limit)];
                    case 1:
                        artists = (_b.sent()).data.data;
                        res.status(OK).json({ artists: artists });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TracksController.prototype.getAlbums = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, album, limit, albums, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, album = _a.album, limit = _a.limit;
                        return [4 /*yield*/, axios_1.default.get(URL + "/search/album?q=" + album + "&limit=" + limit)];
                    case 1:
                        albums = (_b.sent()).data.data;
                        res.status(OK).json({ albums: albums });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // All of these petitions are going to asnwer with "ONE" response (Artist and Album)
    TracksController.prototype.getArtist = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var artistId, artist, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        artistId = req.params.artistId;
                        return [4 /*yield*/, axios_1.default.get(URL + "/artist/" + artistId)];
                    case 1:
                        artist = (_a.sent()).data;
                        res.status(OK).json(__assign({}, artist));
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TracksController.prototype.getAlbum = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var albumId, album, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        albumId = req.params.albumId;
                        return [4 /*yield*/, axios_1.default.get(URL + "/album/" + albumId)];
                    case 1:
                        album = (_a.sent()).data;
                        res.status(OK).json(__assign({}, album));
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        decorators_1.get('/tracks/:track/:limit'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TracksController.prototype, "getTracks", null);
    __decorate([
        decorators_1.get('/artists/:artist/:limit'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TracksController.prototype, "getArtists", null);
    __decorate([
        decorators_1.get('/albums/:album/:limit'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TracksController.prototype, "getAlbums", null);
    __decorate([
        decorators_1.get('/artist/:artistId'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TracksController.prototype, "getArtist", null);
    __decorate([
        decorators_1.get('/album/:albumId'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TracksController.prototype, "getAlbum", null);
    TracksController = __decorate([
        decorators_1.controller('/search')
    ], TracksController);
    return TracksController;
}());
exports.TracksController = TracksController;
