(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpotifyWrapper"] = factory();
	else
		root["SpotifyWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _search = __webpack_require__(/*! ./search */ 4);\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _album = __webpack_require__(/*! ./album */ 2);\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _config = __webpack_require__(/*! ./config */ 3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*search,\n    searchArtists,\n    searchAlbums,\n    searchPlaylists,\n    getAlbum,\n    getAlbums,\n    getAlbumsTracks*/\nvar SpotifyWrapper = function () {\n  function SpotifyWrapper(options) {\n    _classCallCheck(this, SpotifyWrapper);\n\n    this.apiURL = options.apiURL || _config.API_URL;\n    this.token = options.token;\n    this.search = _search2.default.bind(this)();\n    this.album = _album2.default.bind(this)();\n    this.headers = {\n      headers: {\n        Authorization: 'Bearer ' + this.token\n      }\n    };\n  }\n\n  _createClass(SpotifyWrapper, [{\n    key: 'request',\n    value: function request(url) {\n      return fetch(url, this.headers);\n    }\n  }]);\n\n  return SpotifyWrapper;\n}();\n\nexports.default = SpotifyWrapper;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcblxuaW1wb3J0IGFsYnVtIGZyb20gJy4vYWxidW0nO1xuXG5pbXBvcnQge1xuICBBUElfVVJMXG59IGZyb20gJy4vY29uZmlnJztcbi8qc2VhcmNoLFxuICAgIHNlYXJjaEFydGlzdHMsXG4gICAgc2VhcmNoQWxidW1zLFxuICAgIHNlYXJjaFBsYXlsaXN0cyxcbiAgICBnZXRBbGJ1bSxcbiAgICBnZXRBbGJ1bXMsXG4gICAgZ2V0QWxidW1zVHJhY2tzKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3RpZnlXcmFwcGVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYXBpVVJMID0gb3B0aW9ucy5hcGlVUkwgfHwgQVBJX1VSTDtcbiAgICB0aGlzLnRva2VuID0gb3B0aW9ucy50b2tlbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaC5iaW5kKHRoaXMpKCk7XG4gICAgdGhpcy5hbGJ1bSA9IGFsYnVtLmJpbmQodGhpcykoKTtcbiAgICB0aGlzLmhlYWRlcnMgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLnRva2VufWBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVxdWVzdCh1cmwpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB0aGlzLmhlYWRlcnMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBZkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */ 0).default;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzI2NDUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9pbmRleCcpLmRlZmF1bHQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = album;\nfunction album() {\n  var _this = this;\n\n  return {\n    getAlbum: function getAlbum(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id);\n    },\n    getAlbums: function getAlbums(ids) {\n      return _this.request(_this.apiURL + \"/albums/?ids=\" + ids);\n    },\n    getTracks: function getTracks(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id + \"/tracks\");\n    }\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWxidW0uanM/ZjIxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGJ1bSgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRBbGJ1bTogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH1gKSxcbiAgICBnZXRBbGJ1bXM6IGlkcyA9PiB0aGlzLnJlcXVlc3QoYCR7dGhpcy5hcGlVUkx9L2FsYnVtcy8/aWRzPSR7aWRzfWApLFxuICAgIGdldFRyYWNrczogaWQgPT4gdGhpcy5yZXF1ZXN0KGAke3RoaXMuYXBpVVJMfS9hbGJ1bXMvJHtpZH0vdHJhY2tzYClcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYWxidW0uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar TOKEN_API = 'BQCyYxtpBydn61_jIdDqepVM68vYF6xEI3aJmoFrAjTzju_EfPAc8tYlBwPmrEuxZmu6YFedrynl-SX1HElJGr0cLFnjuLNmORERSaXBj7WqabELHJiTIuP45xMLxMTkvWMTiN4c2xCQD2-jpZTc2R6OYmpZw1xLBqnLE6jl8ppwsT7kwb4Xw-C0tVvvn8gHxo_dtHfnyIKchdCNZngrAYK8__nVKN9gXrZrF_brr3J_fliil3QeA9MYLl5sF45c8v2ftlMdeU8m2VORu3BOFhA';\n\nvar API_URL = exports.API_URL = 'https://api.spotify.com/v1';\n\nvar HEADERS = exports.HEADERS = {\n  headers: {\n    Authorization: 'Bearer ' + TOKEN_API\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29uZmlnLmpzPzlkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVE9LRU5fQVBJID0gJ0JRQ3lZeHRwQnlkbjYxX2pJZERxZXBWTTY4dllGNnhFSTNhSm1vRnJBalR6anVfRWZQQWM4dFlsQndQbXJFdXhabXU2WUZlZHJ5bmwtU1gxSEVsSkdyMGNMRm5qdUxObU9SRVJTYVhCajdXcWFiRUxISmlUSXVQNDV4TUx4TVRrdldNVGlONGMyeENRRDItanBaVGMyUjZPWW1wWncxeExCcW5MRTZqbDhwcHdzVDdrd2I0WHctQzB0VnZ2bjhnSHhvX2R0SGZueUlLY2hkQ05abmdyQVlLOF9fblZLTjlnWHJackZfYnJyM0pfZmxpaWwzUWVBOU1ZTGw1c0Y0NWM4djJmdGxNZGVVOG0yVk9SdTNCT0ZoQSc7XG5cbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJztcblxuXG5leHBvcnQgY29uc3QgSEVBREVSUyA9IHtcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUT0tFTl9BUEl9YFxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb25maWcuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = search;\nfunction searcher(type, query) {\n  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);\n}\n\nfunction search() {\n  return {\n    artists: searcher.bind(this, 'artist'),\n    albums: searcher.bind(this, 'album'),\n    tracks: searcher.bind(this, 'track'),\n    playlists: searcher.bind(this, 'playlist')\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VhcmNoLmpzP2Y5ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VhcmNoZXIodHlwZSwgcXVlcnkpIHtcbiAgcmV0dXJuIHRoaXMucmVxdWVzdChgJHt0aGlzLmFwaVVSTH0vc2VhcmNoP3E9JHtxdWVyeX0mdHlwZT0ke3R5cGV9YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgcmV0dXJuIHtcbiAgICBhcnRpc3RzOiBzZWFyY2hlci5iaW5kKHRoaXMsICdhcnRpc3QnKSxcbiAgICBhbGJ1bXM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ2FsYnVtJyksXG4gICAgdHJhY2tzOiBzZWFyY2hlci5iaW5kKHRoaXMsICd0cmFjaycpLFxuICAgIHBsYXlsaXN0czogc2VhcmNoZXIuYmluZCh0aGlzLCAncGxheWxpc3QnKSxcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VhcmNoLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
});