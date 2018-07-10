/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbums, getAlbumsTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbum\", function() { return getAlbum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbums\", function() { return getAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbumsTracks\", function() { return getAlbumsTracks; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* global fetch */\n\n\n\n\nconst getAlbum = (id) => {\n    fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums/${id}`).then(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n}\n\nconst getAlbums = (id) => {\n    fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums/?ids=${id}`).then(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n}\nconst getAlbumsTracks = (id) => {\n    fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums/${id}/tracks`).then(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWxidW0uanM/ZmRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZmV0Y2ggKi9cblxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHRvSlNPTiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxidW0gPSAoaWQpID0+IHtcbiAgICBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvJHtpZH1gKS50aGVuKHRvSlNPTik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bXMgPSAoaWQpID0+IHtcbiAgICBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvP2lkcz0ke2lkfWApLnRoZW4odG9KU09OKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bXNUcmFja3MgPSAoaWQpID0+IHtcbiAgICBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvJHtpZH0vdHJhY2tzYCkudGhlbih0b0pTT04pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\nconst API_URL = 'https://api.spotify.com/v1';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: search, searchArtists, searchAlbums, searchPlaylists, getAlbum, getAlbums, getAlbumsTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return _search__WEBPACK_IMPORTED_MODULE_0__[\"search\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"searchArtists\", function() { return _search__WEBPACK_IMPORTED_MODULE_0__[\"searchArtists\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"searchAlbums\", function() { return _search__WEBPACK_IMPORTED_MODULE_0__[\"searchAlbums\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"searchPlaylists\", function() { return _search__WEBPACK_IMPORTED_MODULE_0__[\"searchPlaylists\"]; });\n\n/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ \"./src/album.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAlbum\", function() { return _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbum\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAlbums\", function() { return _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbums\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAlbumsTracks\", function() { return _album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbumsTracks\"]; });\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHNlYXJjaCwgXG4gICAgc2VhcmNoQXJ0aXN0cyxcbiAgICBzZWFyY2hBbGJ1bXMsXG4gICAgc2VhcmNoUGxheWxpc3RzXG59IGZyb20gJy4vc2VhcmNoJztcblxuaW1wb3J0IHtcbiAgICBnZXRBbGJ1bSwgXG4gICAgZ2V0QWxidW1zLCBcbiAgICBnZXRBbGJ1bXNUcmFja3Ncbn0gZnJvbSAnLi9hbGJ1bSc7XG5cbmV4cG9ydCB7XG4gICAgc2VhcmNoLCBcbiAgICBzZWFyY2hBcnRpc3RzLFxuICAgIHNlYXJjaEFsYnVtcyxcbiAgICBzZWFyY2hQbGF5bGlzdHMsIFxuICAgIGdldEFsYnVtLCBcbiAgICBnZXRBbGJ1bXMsIFxuICAgIGdldEFsYnVtc1RyYWNrc1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFLQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: search, searchArtists, searchAlbums, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchArtists\", function() { return searchArtists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchAlbums\", function() { return searchAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchTracks\", function() { return searchTracks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPlaylists\", function() { return searchPlaylists; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* global fetch */\n\n\n\n\nconst search = (query, type) => {\n    fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/search?q=${query}&type=${type}`)\n        .then(_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n}\nconst searchArtists = (query) => {\n    search(query, 'artist');\n}\nconst searchAlbums = (query) => {\n    search(query, 'album');\n}\nconst searchTracks = (query) => {\n    search(query, 'track');\n}\nconst searchPlaylists = (query) => {\n    search(query, 'playlist');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC5qcz8zMjU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBmZXRjaCAqL1xuXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdG9KU09OIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2ggPSAocXVlcnksIHR5cGUpID0+IHtcbiAgICBmZXRjaChgJHtBUElfVVJMfS9zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPSR7dHlwZX1gKVxuICAgICAgICAudGhlbih0b0pTT04pO1xufVxuZXhwb3J0IGNvbnN0IHNlYXJjaEFydGlzdHMgPSAocXVlcnkpID0+IHtcbiAgICBzZWFyY2gocXVlcnksICdhcnRpc3QnKTtcbn1cbmV4cG9ydCBjb25zdCBzZWFyY2hBbGJ1bXMgPSAocXVlcnkpID0+IHtcbiAgICBzZWFyY2gocXVlcnksICdhbGJ1bScpO1xufVxuZXhwb3J0IGNvbnN0IHNlYXJjaFRyYWNrcyA9IChxdWVyeSkgPT4ge1xuICAgIHNlYXJjaChxdWVyeSwgJ3RyYWNrJyk7XG59XG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheWxpc3RzID0gKHF1ZXJ5KSA9PiB7XG4gICAgc2VhcmNoKHF1ZXJ5LCAncGxheWxpc3QnKTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/search.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toJSON\", function() { return toJSON; });\nconst toJSON = data => data.json();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MDI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9KU09OID0gZGF0YSA9PiBkYXRhLmpzb24oKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });