'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumsTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(id) {
    fetch(_config.API_URL + '/albums/' + id).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(id) {
    fetch(_config.API_URL + '/albums/?ids=' + id).then(_utils.toJSON);
};
var getAlbumsTracks = exports.getAlbumsTracks = function getAlbumsTracks(id) {
    fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_utils.toJSON);
};