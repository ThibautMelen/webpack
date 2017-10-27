/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _compress = __webpack_require__(1);

	var _compress2 = _interopRequireDefault(_compress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	      var url = "target.html";

	      $.get(url, function (page) {
	            var initial_length = page.length;
	            console.log(initial_length / 1024 + " ko");

	            //opti
	            var newPage = (0, _compress2.default)(page);
	            console.log(newPage);

	            var optimized_length = newPage.length;
	            console.log(optimized_length / 1024 + " ko");

	            var reduction = 1 - optimized_length / initial_length;
	            console.log("R\xE9duction : " + reduction * 100 + " %");

	            $("body").html(newPage);
	      });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (str) {
		console.log('logger.js is RUNNING!!');

		var page = str.replace(/^[ \n\r\t\f]+/, '').replace(/[ \n\r\t\f]+$/, '');

		var a = page.replace(/type="text\/javascript"/g, '');

		// let b = a.replace(/\s\B/g, "");
		// let b = replace(/>\s+|\s+</g, "");

		// var result = a.replace(/>\s+|\s+</g, function(m) {
		//     return m.trim();
		// });


		return a.replace(/\s+/g, ' ');;
	};

/***/ })
/******/ ]);