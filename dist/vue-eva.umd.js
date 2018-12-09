(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-eva"] = factory();
	else
		root["vue-eva"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "66d7":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== "undefined" ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./package/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * @license\r\n * Copyright Akveo. All Rights Reserved.\r\n * Licensed under the MIT License. See License.txt in the project root for license information.\r\n */\n.eva-animation {\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n.eva-infinite {\n  animation-iteration-count: infinite; }\n\n.eva-icon-shake {\n  animation-name: eva-shake; }\n\n.eva-icon-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-icon-pulse {\n  animation-name: eva-pulse; }\n\n.eva-icon-flip {\n  animation-name: eva-flipInY; }\n\n.eva-hover {\n  display: inline-block; }\n\n.eva-hover:hover .eva-icon-hover-shake, .eva-parent-hover:hover .eva-icon-hover-shake {\n  animation-name: eva-shake; }\n\n.eva-hover:hover .eva-icon-hover-zoom, .eva-parent-hover:hover .eva-icon-hover-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-hover:hover .eva-icon-hover-pulse, .eva-parent-hover:hover .eva-icon-hover-pulse {\n  animation-name: eva-pulse; }\n\n.eva-hover:hover .eva-icon-hover-flip, .eva-parent-hover:hover .eva-icon-hover-flip {\n  animation-name: eva-flipInY; }\n\n@keyframes eva-flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes eva-shake {\n  from,\n  to {\n    transform: translate3d(0, 0, 0); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-3px, 0, 0); }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(3px, 0, 0); } }\n\n@keyframes eva-pulse {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(1.2, 1.2, 1.2); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes eva-zoomIn {\n  from {\n    opacity: 1;\n    transform: scale3d(0.5, 0.5, 0.5); }\n  50% {\n    opacity: 1; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./package-build/eva-icons.json":
/*!**************************************!*\
  !*** ./package-build/eva-icons.json ***!
  \**************************************/
/*! exports provided: activity, alert-circle, alert-triangle, archive, arrow-back, arrow-circle-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-down, arrow-downward, arrow-forward, arrow-ios-back, arrow-ios-downward, arrow-ios-forward, arrow-ios-upward, arrow-left, arrow-right, arrow-up, arrow-upward, arrowhead-down, arrowhead-left, arrowhead-right, arrowhead-up, at, attach-2, attach, award, backspace, bar-chart-2, bar-chart, battery, behance, bell-off, bell, bluetooth, book-open, book, bookmark, briefcase, browser, brush, bulb, calendar, camera, car, cast, charging, checkmark-circle-2, checkmark-circle, checkmark-square-2, checkmark-square, checkmark, chevron-down, chevron-left, chevron-right, chevron-up, clipboard, clock, close-circle, close-square, close, cloud-download, cloud-upload, code-download, code, collapse, color-palette, color-picker, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, credit-card, crop, cube, diagonal-arrow-left-down, diagonal-arrow-left-up, diagonal-arrow-right-down, diagonal-arrow-right-up, done-all, download, droplet-off, droplet, edit-2, edit, email, expand, external-link, eye-off-2, eye-off, eye, facebook, file-add, file-remove, file-text, file, film, flag, flash-off, flash, flip-2, flip, folder-add, folder-remove, folder, funnel, gift, github, globe-2, globe-3, globe, google, grid, hard-drive, hash, headphones, heart, home, image-2, image, inbox, info, keypad, layers, layout, link-2, link, linkedin, list, lock, log-in, log-out, map, maximize, menu-2, menu-arrow, menu, message-circle, message-square, mic-off, mic, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, npm, options-2, options, pantone, paper-plane, pause-circle, people, percent, person-add, person-delete, person-done, person-remove, person, phone-call, phone-missed, phone-off, phone, pie-chart-2, pie-chart, pin, play-circle, plus-circle, plus-square, plus, power, pricetags, printer, question-mark-circle, question-mark, radio-button-off, radio-button-on, radio, recording, refresh, repeat, rewind-left, rewind-right, save, scissors, search, settings-2, settings, shake, share, shield-off, shield, shopping-bag, shopping-cart, shuffle-2, shuffle, skip-back, skip-forward, slash, smartphone, speaker, square, star, stop-circle, sun, swap, sync, text, thermometer-minus, thermometer-plus, thermometer, toggle-left, toggle-right, trash-2, trash, trending-down, trending-up, tv, twitter, umbrella, undo, unlock, upload, video-off, video, volume-down, volume-mute, volume-off, volume-up, wifi-off, wifi, activity-outline, alert-circle-outline, alert-triangle-outline, archive-outline, arrow-back-outline, arrow-circle-down-outline, arrow-circle-left-outline, arrow-circle-right-outline, arrow-circle-up-outline, arrow-down-outline, arrow-downward-outline, arrow-forward-outline, arrow-ios-back-outline, arrow-ios-downward-outline, arrow-ios-forward-outline, arrow-ios-upward-outline, arrow-left-outline, arrow-right-outline, arrow-up-outline, arrow-upward-outline, arrowhead-down-outline, arrowhead-left-outline, arrowhead-right-outline, arrowhead-up-outline, at-outline, attach-2-outline, attach-outline, award-outline, backspace-outline, bar-chart-2-outline, bar-chart-outline, battery-outline, behance-outline, bell-off-outline, bell-outline, bluetooth-outline, book-open-outline, book-outline, bookmark-outline, briefcase-outline, browser-outline, brush-outline, bulb-outline, calendar-outline, camera-outline, car-outline, cast-outline, charging-outline, checkmark-circle-2-outline, checkmark-circle-outline, checkmark-outline, checkmark-square-2-outline, checkmark-square-outline, chevron-down-outline, chevron-left-outline, chevron-right-outline, chevron-up-outline, clipboard-outline, clock-outline, close-circle-outline, close-outline, close-square-outline, cloud-download-outline, cloud-upload-outline, code-download-outline, code-outline, collapse-outline, color-palette-outline, color-picker-outline, compass-outline, copy-outline, corner-down-left-outline, corner-down-right-outline, corner-left-down-outline, corner-left-up-outline, corner-right-down-outline, corner-right-up-outline, corner-up-left-outline, corner-up-right-outline, credit-card-outline, crop-outline, cube-outline, diagonal-arrow-left-down-outline, diagonal-arrow-left-up-outline, diagonal-arrow-right-down-outline, diagonal-arrow-right-up-outline, done-all-outline, download-outline, droplet-off-outline, droplet-outline, edit-2-outline, edit-outline, email-outline, expand-outline, external-link-outline, eye-off-2-outline, eye-off-outline, eye-outline, facebook-outline, file-add-outline, file-outline, file-remove-outline, file-text-outline, film-outline, flag-outline, flash-off-outline, flash-outline, flip-2-outline, flip-outline, folder-add-outline, folder-outline, folder-remove-outline, funnel-outline, gift-outline, github-outline, globe-2-outline, globe-outline, google-outline, grid-outline, hard-drive-outline, hash-outline, headphones-outline, heart-outline, home-outline, image-outline, inbox-outline, info-outline, keypad-outline, layers-outline, layout-outline, link-2-outline, link-outline, linkedin-outline, list-outline, loader-outline, lock-outline, log-in-outline, log-out-outline, map-outline, maximize-outline, menu-2-outline, menu-arrow-outline, menu-outline, message-circle-outline, message-square-outline, mic-off-outline, mic-outline, minimize-outline, minus-circle-outline, minus-outline, minus-square-outline, monitor-outline, moon-outline, more-horizontal-outline, more-vertical-outline, move-outline, music-outline, navigation-2-outline, navigation-outline, npm-outline, options-2-outline, options-outline, pantone-outline, paper-plane-outline, pause-circle-outline, people-outline, percent-outline, person-add-outline, person-delete-outline, person-done-outline, person-outline, person-remove-outline, phone-call-outline, phone-missed-outline, phone-off-outline, phone-outline, pie-chart-outline, pin-outline, play-circle-outline, plus-circle-outline, plus-outline, plus-square-outline, power-outline, pricetags-outline, printer-outline, question-mark-circle-outline, question-mark-outline, radio-button-off-outline, radio-button-on-outline, radio-outline, recording-outline, refresh-outline, repeat-outline, rewind-left-outline, rewind-right-outline, save-outline, scissors-outline, search-outline, settings-2-outline, settings-outline, shake-outline, share-outline, shield-off-outline, shield-outline, shopping-bag-outline, shopping-cart-outline, shuffle-2-outline, shuffle-outline, skip-back-outline, skip-forward-outline, slash-outline, smartphone-outline, speaker-outline, square-outline, star-outline, stop-circle-outline, sun-outline, swap-outline, sync-outline, text-outline, thermometer-minus-outline, thermometer-outline, thermometer-plus-outline, toggle-left-outline, toggle-right-outline, trash-2-outline, trash-outline, trending-down-outline, trending-up-outline, tv-outline, twitter-outline, umbrella-outline, undo-outline, unlock-outline, upload-outline, video-off-outline, video-outline, volume-down-outline, volume-mute-outline, volume-off-outline, volume-up-outline, wifi-off-outline, wifi-outline, default */
/***/ (function(module) {

module.exports = {"activity":"<g data-name=\"Layer 2\"><g data-name=\"activity\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z\"/></g></g>","alert-circle":"<g data-name=\"Layer 2\"><g data-name=\"alert-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z\"/></g></g>","alert-triangle":"<g data-name=\"Layer 2\"><g data-name=\"alert-triangle\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z\"/></g></g>","archive":"<g data-name=\"Layer 2\"><g data-name=\"archive\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 18 3zm-3 10.13a.87.87 0 0 1-.87.87H9.87a.87.87 0 0 1-.87-.87v-.26a.87.87 0 0 1 .87-.87h4.26a.87.87 0 0 1 .87.87zM18 7H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z\"/></g></g>","arrow-back":"<g data-name=\"Layer 2\"><g data-name=\"arrow-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z\"/></g></g>","arrow-circle-down":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1.54.54 0 0 1-.16.1.94.94 0 0 1-.76 0 1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z\"/></g></g>","arrow-circle-left":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69l-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z\"/></g></g>","arrow-circle-right":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69l2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z\"/></g></g>","arrow-circle-up":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10zM8.31 10.14l3-2.86a.49.49 0 0 1 .15-.1.54.54 0 0 1 .16-.1.94.94 0 0 1 .76 0 1 1 0 0 1 .33.21l3 3a1 1 0 0 1-1.42 1.42L13 10.41V16a1 1 0 0 1-2 0v-5.66l-1.31 1.25a1 1 0 0 1-1.38-1.45z\"/></g></g>","arrow-down":"<g data-name=\"Layer 2\"><g data-name=\"arrow-downward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z\"/></g></g>","arrow-downward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z\"/></g></g>","arrow-forward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z\"/></g></g>","arrow-ios-back":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z\"/></g></g>","arrow-ios-downward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-downward\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z\"/></g></g>","arrow-ios-forward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z\"/></g></g>","arrow-ios-upward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-upward\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z\"/></g></g>","arrow-left":"<g data-name=\"Layer 2\"><g data-name=\"arrow-left\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2z\"/></g></g>","arrow-right":"<g data-name=\"Layer 2\"><g data-name=\"arrow-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z\"/></g></g>","arrow-up":"<g data-name=\"Layer 2\"><g data-name=\"arrow-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z\"/></g></g>","arrow-upward":"<g data-name=\"Layer 2\"><g data-name=\"arrow-upward\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z\"/></g></g>","arrowhead-down":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z\"/><path d=\"M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z\"/></g></g>","arrowhead-left":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z\"/><path d=\"M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z\"/></g></g>","arrowhead-right":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/><path d=\"M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z\"/></g></g>","arrowhead-up":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z\"/><path d=\"M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z\"/></g></g>","at":"<g data-name=\"Layer 2\"><g data-name=\"at\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z\"/></g></g>","attach-2":"<g data-name=\"Layer 2\"><g data-name=\"attach-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z\"/></g></g>","attach":"<g data-name=\"Layer 2\"><g data-name=\"attach\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z\"/></g></g>","award":"<g data-name=\"Layer 2\"><g data-name=\"award\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4z\"/></g></g>","backspace":"<g data-name=\"Layer 2\"><g data-name=\"backspace\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zm-3.43 9.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L14 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L15.41 12z\"/></g></g>","bar-chart-2":"<g data-name=\"Layer 2\"><g data-name=\"bar-chart-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/><path d=\"M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/><path d=\"M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z\"/></g></g>","bar-chart":"<g data-name=\"Layer 2\"><g data-name=\"bar-chart\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/><path d=\"M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z\"/><path d=\"M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/></g></g>","battery":"<g data-name=\"Layer 2\"><g data-name=\"battery\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z\"/><path d=\"M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z\"/></g></g>","behance":"<g data-name=\"Layer 2\"><g data-name=\"behance\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.76 11.19a1 1 0 0 0-1 1.09h2.06a1 1 0 0 0-1.06-1.09z\"/><path d=\"M9.49 12.3H8.26v1.94h1c1 0 1.44-.33 1.44-1s-.46-.94-1.21-.94z\"/><path d=\"M10.36 10.52c0-.53-.35-.85-.95-.85H8.26v1.74h.85c.89 0 1.25-.32 1.25-.89z\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM9.7 15.2H7V8.7h2.7c1.17 0 1.94.61 1.94 1.6a1.4 1.4 0 0 1-1.12 1.43A1.52 1.52 0 0 1 12 13.37c0 1.16-1 1.83-2.3 1.83zm3.55-6h3v.5h-3zM17 13.05h-3.3v.14a1.07 1.07 0 0 0 1.09 1.19.9.9 0 0 0 1-.63H17a2 2 0 0 1-2.17 1.55 2.15 2.15 0 0 1-2.36-2.3v-.44a2.11 2.11 0 0 1 2.28-2.25A2.12 2.12 0 0 1 17 12.58z\"/></g></g>","bell-off":"<g data-name=\"Layer 2\"><g data-name=\"bell-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15.88 18.71l-.59-.59L14 16.78l-.07-.07L6.58 9.4 5.31 8.14a5.68 5.68 0 0 0 0 .59v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z\"/><path d=\"M7.13 4.3l1.46 1.46 9.53 9.53 2 2 .31.3a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.83-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54z\"/><path d=\"M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","bell":"<g data-name=\"Layer 2\"><g data-name=\"bell\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z\"/></g></g>","bluetooth":"<g data-name=\"Layer 2\"><g data-name=\"bluetooth\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z\"/></g></g>","book-open":"<g data-name=\"Layer 2\"><g data-name=\"book-open\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M21 4.34a1.24 1.24 0 0 0-1.08-.23L13 5.89v14.27l7.56-1.94A1.25 1.25 0 0 0 21.5 17V5.32a1.25 1.25 0 0 0-.5-.98z\"/><path d=\"M11 5.89L4.06 4.11A1.27 1.27 0 0 0 3 4.34a1.25 1.25 0 0 0-.48 1V17a1.25 1.25 0 0 0 .94 1.21L11 20.16z\"/></g></g>","book":"<g data-name=\"Layer 2\"><g data-name=\"book\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 19a1 1 0 0 1 0-2h11v2z\"/></g></g>","bookmark":"<g data-name=\"Layer 2\"><g data-name=\"bookmark\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z\"/></g></g>","briefcase":"<g data-name=\"Layer 2\"><g data-name=\"briefcase\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z\"/><path d=\"M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z\"/><path d=\"M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z\"/></g></g>","browser":"<g data-name=\"Layer 2\"><g data-name=\"browser\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-6 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14z\"/></g></g>","brush":"<g data-name=\"Layer 2\"><g data-name=\"brush\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M7.12 12.55a4 4 0 0 0-3.07 3.86v3.11a.47.47 0 0 0 .48.48l3.24-.06a3.78 3.78 0 0 0 3.44-2.2 3.65 3.65 0 0 0-4.09-5.19z\"/><path d=\"M19.26 4.46a2.14 2.14 0 0 0-2.88.21L10 11.08a.47.47 0 0 0 0 .66L12.25 14a.47.47 0 0 0 .66 0l6.49-6.47a2.06 2.06 0 0 0 .6-1.47 2 2 0 0 0-.74-1.6z\"/></g></g>","bulb":"<g data-name=\"Layer 2\"><g data-name=\"bulb\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9z\"/><path d=\"M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z\"/><path d=\"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z\"/><path d=\"M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z\"/></g></g>","calendar":"<g data-name=\"Layer 2\"><g data-name=\"calendar\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1z\"/></g></g>","camera":"<g data-name=\"Layer 2\"><g data-name=\"camera\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"14\" r=\"1.5\"/><path d=\"M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zm2 12a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z\"/></g></g>","car":"<g data-name=\"Layer 2\"><g data-name=\"car\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm12 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z\"/></g></g>","cast":"<g data-name=\"Layer 2\"><g data-name=\"cast\"><polyline points=\"24 24 0 24 0 0\" opacity=\"0\"/><path d=\"M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z\"/><path d=\"M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z\"/><path d=\"M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z\"/><circle cx=\"4\" cy=\"19\" r=\"1\"/></g></g>","charging":"<g data-name=\"Layer 2\"><g data-name=\"charging\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M11.28 13H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z\"/><path d=\"M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z\"/><path d=\"M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z\"/></g></g>","checkmark-circle-2":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-circle-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z\"/></g></g>","checkmark-circle":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z\"/><path d=\"M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z\"/></g></g>","checkmark-square-2":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-square-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-1.7 6.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z\"/></g></g>","checkmark-square":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z\"/><path d=\"M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z\"/></g></g>","checkmark":"<g data-name=\"Layer 2\"><g data-name=\"checkmark\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z\"/></g></g>","chevron-down":"<g data-name=\"Layer 2\"><g data-name=\"chevron-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z\"/></g></g>","chevron-left":"<g data-name=\"Layer 2\"><g data-name=\"chevron-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z\"/></g></g>","chevron-right":"<g data-name=\"Layer 2\"><g data-name=\"chevron-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z\"/></g></g>","chevron-up":"<g data-name=\"Layer 2\"><g data-name=\"chevron-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z\"/></g></g>","clipboard":"<g data-name=\"Layer 2\"><g data-name=\"clipboard\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z\"/><rect x=\"7\" y=\"2\" width=\"10\" height=\"6\" rx=\"1\" ry=\"1\"/></g></g>","clock":"<g data-name=\"Layer 2\"><g data-name=\"clock\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z\"/></g></g>","close-circle":"<g data-name=\"Layer 2\"><g data-name=\"close-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.71 11.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z\"/></g></g>","close-square":"<g data-name=\"Layer 2\"><g data-name=\"close-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3.29 10.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z\"/></g></g>","close":"<g data-name=\"Layer 2\"><g data-name=\"close\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","cloud-download":"<g data-name=\"Layer 2\"><g data-name=\"cloud-download\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z\"/><path d=\"M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z\"/><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z\"/><path d=\"M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z\"/></g></g>","cloud-upload":"<g data-name=\"Layer 2\"><g data-name=\"cloud-upload\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.9 12c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 10.08 21 10s-.2-.25-.31-.37-.21-.2-.32-.3L20 9l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09L17.67 8A6 6 0 0 0 6.33 8l-.18.05a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23l-.36.3-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 13a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 16a5 5 0 0 0 4 2h3v-1.37a2 2 0 0 1-1 .27 2.05 2.05 0 0 1-1.44-.61 2 2 0 0 1 .05-2.83l3-2.9A2 2 0 0 1 12 10a2 2 0 0 1 1.41.59l3 3a2 2 0 0 1 0 2.82A2 2 0 0 1 15 17a1.92 1.92 0 0 1-1-.27V18h3a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 13a5.23 5.23 0 0 0-.1-1z\"/><path d=\"M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","code-download":"<g data-name=\"Layer 2\"><g data-name=\"code-download\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z\"/><path d=\"M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/><path d=\"M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z\"/></g></g>","code":"<g data-name=\"Layer 2\"><g data-name=\"code\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z\"/><path d=\"M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/></g></g>","collapse":"<g data-name=\"Layer 2\"><g data-name=\"collapse\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z\"/><path d=\"M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z\"/></g></g>","color-palette":"<g data-name=\"Layer 2\"><g data-name=\"color-palette\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08 1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2 1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2 1.5 1.5 0 0 1-.55 2z\"/></g></g>","color-picker":"<g data-name=\"Layer 2\"><g data-name=\"color-picker\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zm-13 7.6L12 9.36l2.69 2.7-2.79 2.79\"/></g></g>","compass":"<g data-name=\"Layer 2\"><g data-name=\"compass\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><polygon points=\"10.8 13.21 12.49 12.53 13.2 10.79 11.51 11.47 10.8 13.21\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.93 7.42l-1.75 4.26a1 1 0 0 1-.55.55l-4.21 1.7A1 1 0 0 1 9 16a1 1 0 0 1-.71-.31h-.05a1 1 0 0 1-.18-1l1.75-4.26a1 1 0 0 1 .55-.55l4.21-1.7a1 1 0 0 1 1.1.25 1 1 0 0 1 .26.99z\"/></g></g>","copy":"<g data-name=\"Layer 2\"><g data-name=\"copy\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z\"/></g></g>","corner-down-left":"<g data-name=\"Layer 2\"><g data-name=\"corner-down-left\"><rect x=\".05\" y=\".05\" width=\"24\" height=\"24\" transform=\"rotate(-89.76 12.05 12.05)\" opacity=\"0\"/><path d=\"M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z\"/></g></g>","corner-down-right":"<g data-name=\"Layer 2\"><g data-name=\"corner-down-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z\"/></g></g>","corner-left-down":"<g data-name=\"Layer 2\"><g data-name=\"corner-left-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z\"/></g></g>","corner-left-up":"<g data-name=\"Layer 2\"><g data-name=\"corner-left-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z\"/></g></g>","corner-right-down":"<g data-name=\"Layer 2\"><g data-name=\"corner-right-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z\"/></g></g>","corner-right-up":"<g data-name=\"Layer 2\"><g data-name=\"corner-right-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z\"/></g></g>","corner-up-left":"<g data-name=\"Layer 2\"><g data-name=\"corner-up-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z\"/></g></g>","corner-up-right":"<g data-name=\"Layer 2\"><g data-name=\"corner-up-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z\"/></g></g>","credit-card":"<g data-name=\"Layer 2\"><g data-name=\"credit-card\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-8 10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm3-6H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z\"/></g></g>","crop":"<g data-name=\"Layer 2\"><g data-name=\"crop\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z\"/></g></g>","cube":"<g data-name=\"Layer 2\"><g data-name=\"cube\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06z\"/><path d=\"M12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38z\"/><path d=\"M12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z\"/></g></g>","diagonal-arrow-left-down":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-left-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z\"/></g></g>","diagonal-arrow-left-up":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-left-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z\"/></g></g>","diagonal-arrow-right-down":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-right-down\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z\"/></g></g>","diagonal-arrow-right-up":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-right-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z\"/></g></g>","done-all":"<g data-name=\"Layer 2\"><g data-name=\"done-all\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z\"/><path d=\"M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z\"/><path d=\"M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z\"/></g></g>","download":"<g data-name=\"Layer 2\"><g data-name=\"download\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"4\" y=\"18\" width=\"16\" height=\"2\" rx=\"1\" ry=\"1\"/><rect x=\"3\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 18)\"/><rect x=\"17\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 19 18)\"/><path d=\"M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z\"/><path d=\"M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z\"/></g></g>","droplet-off":"<g data-name=\"Layer 2\"><g data-name=\"droplet-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 16.14A7.73 7.73 0 0 0 17.34 8l-4.56-4.69a1 1 0 0 0-.71-.31 1 1 0 0 0-.72.3L8.74 5.92z\"/><path d=\"M6 8.82a7.73 7.73 0 0 0 .64 9.9A7.44 7.44 0 0 0 11.92 21a7.34 7.34 0 0 0 4.64-1.6z\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","droplet":"<g data-name=\"Layer 2\"><g data-name=\"droplet\"><rect x=\".1\" y=\".1\" width=\"24\" height=\"24\" transform=\"rotate(.48 11.987 11.887)\" opacity=\"0\"/><path d=\"M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1z\"/></g></g>","edit-2":"<g data-name=\"Layer 2\"><g data-name=\"edit-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z\"/><path d=\"M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6z\"/></g></g>","edit":"<g data-name=\"Layer 2\"><g data-name=\"edit\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM16 10.68L13.32 8l1.95-2L18 8.73z\"/></g></g>","email":"<g data-name=\"Layer 2\"><g data-name=\"email\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z\"/></g></g>","expand":"<g data-name=\"Layer 2\"><g data-name=\"expand\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z\"/><path d=\"M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z\"/></g></g>","external-link":"<g data-name=\"Layer 2\"><g data-name=\"external-link\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z\"/><path d=\"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z\"/></g></g>","eye-off-2":"<g data-name=\"Layer 2\"><g data-name=\"eye-off-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z\"/></g></g>","eye-off":"<g data-name=\"Layer 2\"><g data-name=\"eye-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"M15.29 18.12L14 16.78l-.07-.07-1.27-1.27a4.07 4.07 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4.07 4.07 0 0 1 .06-.61l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67z\"/><path d=\"M8.59 5.76l2.8 2.8A4.07 4.07 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 4.07 4.07 0 0 1-.06.61l2.68 2.68.84.84a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67z\"/><path d=\"M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","eye":"<g data-name=\"Layer 2\"><g data-name=\"eye\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.87 4a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z\"/></g></g>","facebook":"<g data-name=\"Layer 2\"><g data-name=\"facebook\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z\"/></g></g>","file-add":"<g data-name=\"Layer 2\"><g data-name=\"file-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z\"/></g></g>","file-remove":"<g data-name=\"Layer 2\"><g data-name=\"file-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z\"/></g></g>","file-text":"<g data-name=\"Layer 2\"><g data-name=\"file-text\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z\"/></g></g>","file":"<g data-name=\"Layer 2\"><g data-name=\"file\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 4l3.74 4h-3a.79.79 0 0 1-.74-.85z\"/></g></g>","film":"<g data-name=\"Layer 2\"><g data-name=\"film\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z\"/></g></g>","flag":"<g data-name=\"Layer 2\"><g data-name=\"flag\"><polyline points=\"24 24 0 24 0 0\" opacity=\"0\"/><path d=\"M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43z\"/></g></g>","flash-off":"<g data-name=\"Layer 2\"><g data-name=\"flash-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11z\"/><path d=\"M6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67z\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","flash":"<g data-name=\"Layer 2\"><g data-name=\"flash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z\"/></g></g>","flip-2":"<g data-name=\"Layer 2\"><g data-name=\"flip-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z\"/><path d=\"M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z\"/></g></g>","flip":"<g data-name=\"Layer 2\"><g data-name=\"flip-in\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z\"/><path d=\"M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z\"/></g></g>","folder-add":"<g data-name=\"Layer 2\"><g data-name=\"folder-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z\"/></g></g>","folder-remove":"<g data-name=\"Layer 2\"><g data-name=\"folder-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z\"/></g></g>","folder":"<g data-name=\"Layer 2\"><g data-name=\"folder\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z\"/></g></g>","funnel":"<g data-name=\"Layer 2\"><g data-name=\"funnel\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1z\"/></g></g>","gift":"<g data-name=\"Layer 2\"><g data-name=\"gift\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73z\"/><path d=\"M12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54z\"/><path d=\"M20.1 7.09h-1.84a2.82 2.82 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3 4.21 4.21 0 0 0 12 5.57 4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86 2.82 2.82 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45z\"/></g></g>","github":"<g data-name=\"Layer 2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1\" data-name=\"github\"/></g>","globe-2":"<g data-name=\"Layer 2\"><g data-name=\"globe-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zm4.89 14.32a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .58-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z\"/></g></g>","globe-3":"<g data-name=\"Layer 2\"><g data-name=\"globe-3\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2z\"/></g></g>","globe":"<g data-name=\"Layer 2\"><g data-name=\"globe\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z\"/></g></g>","google":"<g data-name=\"Layer 2\"><g data-name=\"google\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5\"/></g></g>","grid":"<g data-name=\"Layer 2\"><g data-name=\"grid\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z\"/><path d=\"M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z\"/><path d=\"M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z\"/><path d=\"M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z\"/></g></g>","hard-drive":"<g data-name=\"Layer 2\"><g data-name=\"hard-drive\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM5.62 11l2.72-5.45a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11z\"/></g></g>","hash":"<g data-name=\"Layer 2\"><g data-name=\"hash\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z\"/></g></g>","headphones":"<g data-name=\"Layer 2\"><g data-name=\"headphones\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2z\"/></g></g>","heart":"<g data-name=\"Layer 2\"><g data-name=\"heart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z\"/></g></g>","home":"<g data-name=\"Layer 2\"><g data-name=\"home\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"10\" y=\"14\" width=\"4\" height=\"7\"/><path d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z\"/></g></g>","image-2":"<g data-name=\"Layer 2\"><g data-name=\"image-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z\"/></g></g>","image":"<g data-name=\"Layer 2\"><g data-name=\"image\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1z\"/><circle cx=\"8\" cy=\"8.5\" r=\"1.5\"/></g></g>","inbox":"<g data-name=\"Layer 2\"><g data-name=\"inbox\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z\"/></g></g>","info":"<g data-name=\"Layer 2\"><g data-name=\"info\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","keypad":"<g data-name=\"Layer 2\"><g data-name=\"keypad\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z\"/><path d=\"M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/><path d=\"M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z\"/></g></g>","layers":"<g data-name=\"Layer 2\"><g data-name=\"layers\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81z\"/><path d=\"M20.71 10.66l-1.83-.78-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85z\"/><path d=\"M20.71 15.1l-1.56-.68-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87z\"/></g></g>","layout":"<g data-name=\"Layer 2\"><g data-name=\"layout\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z\"/><path d=\"M3 10v8a3 3 0 0 0 3 3h5V10z\"/><path d=\"M13 10v11h5a3 3 0 0 0 3-3v-8z\"/></g></g>","link-2":"<g data-name=\"Layer 2\"><g data-name=\"link-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z\"/><path d=\"M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z\"/><path d=\"M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z\"/></g></g>","link":"<g data-name=\"Layer 2\"><g data-name=\"link\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z\"/><path d=\"M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z\"/><path d=\"M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z\"/></g></g>","linkedin":"<g data-name=\"Layer 2\"><g data-name=\"linkedin\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z\"/><rect x=\"3\" y=\"9.3\" width=\"4.5\" height=\"11.7\" rx=\".9\" ry=\".9\"/><circle cx=\"5.25\" cy=\"5.25\" r=\"2.25\"/></g></g>","list":"<g data-name=\"Layer 2\"><g data-name=\"list\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><circle cx=\"4\" cy=\"7\" r=\"1\"/><circle cx=\"4\" cy=\"12\" r=\"1\"/><circle cx=\"4\" cy=\"17\" r=\"1\"/><rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"7\" y=\"16\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"7\" y=\"6\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/></g></g>","lock":"<g data-name=\"Layer 2\"><g data-name=\"lock\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"15\" r=\"1\"/><path d=\"M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/></g></g>","log-in":"<g data-name=\"Layer 2\"><g data-name=\"log-in\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"/><path d=\"M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z\"/></g></g>","log-out":"<g data-name=\"Layer 2\"><g data-name=\"log-out\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z\"/><path d=\"M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z\"/></g></g>","map":"<g data-name=\"Layer 2\"><g data-name=\"map\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM9 6.55l2 .89v10l-2-.89zm10 10.9l-2-.89v-10l2 .89z\"/></g></g>","maximize":"<g data-name=\"Layer 2\"><g data-name=\"maximize\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12h-1v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h1V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z\"/></g></g>","menu-2":"<g data-name=\"Layer 2\"><g data-name=\"menu-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><circle cx=\"4\" cy=\"12\" r=\"1\"/><rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"/></g></g>","menu-arrow":"<g data-name=\"Layer 2\"><g data-name=\"menu-arrow\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z\"/><rect x=\"3\" y=\"17\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"5\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/></g></g>","menu":"<g data-name=\"Layer 2\"><g data-name=\"menu\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/></g></g>","message-circle":"<g data-name=\"Layer 2\"><g data-name=\"message-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","message-square":"<g data-name=\"Layer 2\"><g data-name=\"message-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","mic-off":"<g data-name=\"Layer 2\"><g data-name=\"mic-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75\"/><path d=\"M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z\"/><path d=\"M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\"/></g></g>","mic":"<g data-name=\"Layer 2\"><g data-name=\"mic\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4z\"/><path d=\"M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z\"/></g></g>","minimize":"<g data-name=\"Layer 2\"><g data-name=\"minimize\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z\"/></g></g>","minus-circle":"<g data-name=\"Layer 2\"><g data-name=\"minus-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z\"/></g></g>","minus-square":"<g data-name=\"Layer 2\"><g data-name=\"minus-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z\"/></g></g>","minus":"<g data-name=\"Layer 2\"><g data-name=\"minus\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z\"/></g></g>","monitor":"<g data-name=\"Layer 2\"><g data-name=\"monitor\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3z\"/><path d=\"M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z\"/></g></g>","moon":"<g data-name=\"Layer 2\"><g data-name=\"moon\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z\"/></g></g>","more-horizontal":"<g data-name=\"Layer 2\"><g data-name=\"more-horizotnal\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/><circle cx=\"5\" cy=\"12\" r=\"2\"/></g></g>","more-vertical":"<g data-name=\"Layer 2\"><g data-name=\"more-vertical\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/></g></g>","move":"<g data-name=\"Layer 2\"><g data-name=\"move\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z\"/></g></g>","music":"<g data-name=\"Layer 2\"><g data-name=\"music\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51z\"/></g></g>","navigation-2":"<g data-name=\"Layer 2\"><g data-name=\"navigation-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z\"/></g></g>","navigation":"<g data-name=\"Layer 2\"><g data-name=\"navigation\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 20a.94.94 0 0 1-.55-.17l-6.9-4.56a1 1 0 0 0-1.1 0l-6.9 4.56a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20z\"/></g></g>","npm":"<g data-name=\"Layer 2\"><g data-name=\"npm\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z\"/></g></g>","options-2":"<g data-name=\"Layer 2\"><g data-name=\"options-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9z\"/><path d=\"M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2z\"/><path d=\"M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2z\"/></g></g>","options":"<g data-name=\"Layer 2\"><g data-name=\"options\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64z\"/><path d=\"M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13z\"/><path d=\"M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5z\"/></g></g>","pantone":"<g data-name=\"Layer 2\"><g data-name=\"pantone\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 13.18h-2.7l-1.86 2L11.88 19l-1.41 1.52L10 21h10a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1z\"/><path d=\"M18.19 9.3l-4.14-3.86a.89.89 0 0 0-.71-.26 1 1 0 0 0-.7.31l-.82.89v10.71a5.23 5.23 0 0 1-.06.57l6.48-6.95a1 1 0 0 0-.05-1.41z\"/><path d=\"M10.82 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09a3.91 3.91 0 0 0 7.82 0zm-2 13.09a1.91 1.91 0 0 1-3.82 0V15h3.82zm0-4.09H5v-3h3.82zm0-5H5V5h3.82z\"/></g></g>","paper-plane":"<g data-name=\"Layer 2\"><g data-name=\"paper-plane\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z\"/></g></g>","pause-circle":"<g data-name=\"Layer 2\"><g data-name=\"pause-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z\"/></g></g>","people":"<g data-name=\"Layer 2\"><g data-name=\"people\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z\"/><path d=\"M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1\"/></g></g>","percent":"<g data-name=\"Layer 2\"><g data-name=\"percent\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z\"/><path d=\"M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z\"/><path d=\"M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z\"/></g></g>","person-add":"<g data-name=\"Layer 2\"><g data-name=\"person-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1\"/></g></g>","person-delete":"<g data-name=\"Layer 2\"><g data-name=\"person-delete\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z\"/></g></g>","person-done":"<g data-name=\"Layer 2\"><g data-name=\"person-done\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1\"/></g></g>","person-remove":"<g data-name=\"Layer 2\"><g data-name=\"person-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1\"/></g></g>","person":"<g data-name=\"Layer 2\"><g data-name=\"person\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z\"/></g></g>","phone-call":"<g data-name=\"Layer 2\"><g data-name=\"phone-call\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z\"/><path d=\"M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z\"/><path d=\"M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z\"/></g></g>","phone-missed":"<g data-name=\"Layer 2\"><g data-name=\"phone-missed\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z\"/><path d=\"M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z\"/></g></g>","phone-off":"<g data-name=\"Layer 2\"><g data-name=\"phone-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.27 12.06a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z\"/><path d=\"M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-4 4A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z\"/><path d=\"M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z\"/></g></g>","phone":"<g data-name=\"Layer 2\"><g data-name=\"phone\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z\"/></g></g>","pie-chart-2":"<g data-name=\"Layer 2\"><g data-name=\"pie-chart-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z\"/><path d=\"M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z\"/></g></g>","pie-chart":"<g data-name=\"Layer 2\"><g data-name=\"pie-chart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83z\"/><path d=\"M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z\"/></g></g>","pin":"<g data-name=\"Layer 2\"><g data-name=\"pin\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"9.5\" r=\"1.5\"/><path d=\"M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z\"/></g></g>","play-circle":"<g data-name=\"Layer 2\"><g data-name=\"play-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><polygon points=\"11.5 14.6 14.31 12 11.5 9.4 11.5 14.6\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45 1.68 1.68 0 0 1-.69-.15 1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36z\"/></g></g>","plus-circle":"<g data-name=\"Layer 2\"><g data-name=\"plus-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z\"/></g></g>","plus-square":"<g data-name=\"Layer 2\"><g data-name=\"plus-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z\"/></g></g>","plus":"<g data-name=\"Layer 2\"><g data-name=\"plus\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z\"/></g></g>","power":"<g data-name=\"Layer 2\"><g data-name=\"power\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z\"/><path d=\"M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z\"/></g></g>","pricetags":"<g data-name=\"Layer 2\"><g data-name=\"pricetags\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.47 11.58l-6.42-6.41a1 1 0 0 0-.61-.29L5.09 4a1 1 0 0 0-.8.29 1 1 0 0 0-.29.8l.88 9.35a1 1 0 0 0 .29.61l6.41 6.42a1.84 1.84 0 0 0 1.29.53 1.82 1.82 0 0 0 1.28-.53l7.32-7.32a1.82 1.82 0 0 0 0-2.57zm-9.91 0a1.5 1.5 0 1 1 0-2.12 1.49 1.49 0 0 1 0 2.1z\"/></g></g>","printer":"<g data-name=\"Layer 2\"><g data-name=\"printer\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4z\"/></g></g>","question-mark-circle":"<g data-name=\"Layer 2\"><g data-name=\"menu-arrow-circle\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z\"/></g></g>","question-mark":"<g data-name=\"Layer 2\"><g data-name=\"menu-arrow\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/></g></g>","radio-button-off":"<g data-name=\"Layer 2\"><g data-name=\"radio-button-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z\"/></g></g>","radio-button-on":"<g data-name=\"Layer 2\"><g data-name=\"radio-button-on\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z\"/></g></g>","radio":"<g data-name=\"Layer 2\"><g data-name=\"radio\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8z\"/><path d=\"M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z\"/><path d=\"M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z\"/><path d=\"M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z\"/><path d=\"M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z\"/></g></g>","recording":"<g data-name=\"Layer 2\"><g data-name=\"recording\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8z\"/></g></g>","refresh":"<g data-name=\"Layer 2\"><g data-name=\"refresh\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z\"/></g></g>","repeat":"<g data-name=\"Layer 2\"><g data-name=\"repeat\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z\"/><path d=\"M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z\"/></g></g>","rewind-left":"<g data-name=\"Layer 2\"><g data-name=\"rewind-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z\"/></g></g>","rewind-right":"<g data-name=\"Layer 2\"><g data-name=\"rewind-right\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66z\"/></g></g>","save":"<g data-name=\"Layer 2\"><g data-name=\"save\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"10\" y=\"17\" width=\"4\" height=\"4\"/><path d=\"M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12z\"/></g></g>","scissors":"<g data-name=\"Layer 2\"><g data-name=\"scissors\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","search":"<g data-name=\"Layer 2\"><g data-name=\"search\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z\"/></g></g>","settings-2":"<g data-name=\"Layer 2\"><g data-name=\"settings-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18 1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0 .34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5 1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19 1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0 .34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5 1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z\"/></g></g>","settings":"<g data-name=\"Layer 2\"><g data-name=\"settings\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z\"/></g></g>","shake":"<g data-name=\"Layer 2\"><g data-name=\"shake\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z\"/><path d=\"M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z\"/><path d=\"M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z\"/><path d=\"M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z\"/><path d=\"M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z\"/><path d=\"M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z\"/><path d=\"M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z\"/></g></g>","share":"<g data-name=\"Layer 2\"><g data-name=\"share\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z\"/></g></g>","shield-off":"<g data-name=\"Layer 2\"><g data-name=\"shield-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27z\"/><path d=\"M18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75L13 2.4a2 2 0 0 0-2 0L7.32 4.49z\"/><path d=\"M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","shield":"<g data-name=\"Layer 2\"><g data-name=\"shield\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25z\"/></g></g>","shopping-bag":"<g data-name=\"Layer 2\"><g data-name=\"shopping-bag\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zM12 16a4 4 0 0 1-4-4 1 1 0 0 1 2 0 2 2 0 0 0 4 0 1 1 0 0 1 2 0 4 4 0 0 1-4 4zM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7z\"/></g></g>","shopping-cart":"<g data-name=\"Layer 2\"><g data-name=\"shopping-cart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z\"/><circle cx=\"7.5\" cy=\"19.5\" r=\"1.5\"/><circle cx=\"17.5\" cy=\"19.5\" r=\"1.5\"/></g></g>","shuffle-2":"<g data-name=\"Layer 2\"><g data-name=\"shuffle-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z\"/></g></g>","shuffle":"<g data-name=\"Layer 2\"><g data-name=\"shuffle\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z\"/><path d=\"M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z\"/></g></g>","skip-back":"<g data-name=\"Layer 2\"><g data-name=\"skip-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z\"/></g></g>","skip-forward":"<g data-name=\"Layer 2\"><g data-name=\"skip-forward\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z\"/></g></g>","slash":"<g data-name=\"Layer 2\"><g data-name=\"slash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z\"/></g></g>","smartphone":"<g data-name=\"Layer 2\"><g data-name=\"smartphone\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 16a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18zm2.5-10h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z\"/></g></g>","speaker":"<g data-name=\"Layer 2\"><g data-name=\"speaker\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><circle cx=\"12\" cy=\"15.5\" r=\"1.5\"/><circle cx=\"12\" cy=\"8\" r=\"1\"/><path d=\"M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19z\"/></g></g>","square":"<g data-name=\"Layer 2\"><g data-name=\"square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z\"/></g></g>","star":"<g data-name=\"Layer 2\"><g data-name=\"star\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z\"/></g></g>","stop-circle":"<g data-name=\"Layer 2\"><g data-name=\"stop-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 12.75A1.25 1.25 0 0 1 14.75 16h-5.5A1.25 1.25 0 0 1 8 14.75v-5.5A1.25 1.25 0 0 1 9.25 8h5.5A1.25 1.25 0 0 1 16 9.25z\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"4\"/></g></g>","sun":"<g data-name=\"Layer 2\"><g data-name=\"sun\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z\"/><path d=\"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z\"/><path d=\"M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z\"/><path d=\"M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z\"/><path d=\"M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z\"/><path d=\"M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z\"/><path d=\"M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z\"/><path d=\"M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z\"/></g></g>","swap":"<g data-name=\"Layer 2\"><g data-name=\"swap\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z\"/><path d=\"M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z\"/></g></g>","sync":"<g data-name=\"Layer 2\"><g data-name=\"sync\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z\"/><path d=\"M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z\"/></g></g>","text":"<g data-name=\"Layer 2\"><g data-name=\"text\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/></g></g>","thermometer-minus":"<g data-name=\"Layer 2\"><g data-name=\"thermometer-minus\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z\"/></g></g>","thermometer-plus":"<g data-name=\"Layer 2\"><g data-name=\"thermometer-plus\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 6)\"/><path d=\"M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z\"/></g></g>","thermometer":"<g data-name=\"Layer 2\"><g data-name=\"thermometer\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4a1 1 0 0 0-1 1v4.54z\"/></g></g>","toggle-left":"<g data-name=\"Layer 2\"><g data-name=\"toggle-left\"><rect x=\".02\" y=\".02\" width=\"23.97\" height=\"23.97\" transform=\"rotate(179.92 12.002 11.998)\" opacity=\"0\"/><path d=\"M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/><path d=\"M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/></g></g>","toggle-right":"<g data-name=\"Layer 2\"><g data-name=\"toggle-right\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><path d=\"M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/></g></g>","trash-2":"<g data-name=\"Layer 2\"><g data-name=\"trash-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z\"/></g></g>","trash":"<g data-name=\"Layer 2\"><g data-name=\"trash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z\"/></g></g>","trending-down":"<g data-name=\"Layer 2\"><g data-name=\"trending-down\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z\"/></g></g>","trending-up":"<g data-name=\"Layer 2\"><g data-name=\"trending-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z\"/></g></g>","tv":"<g data-name=\"Layer 2\"><g data-name=\"tv\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/></g></g>","twitter":"<g data-name=\"Layer 2\"><g data-name=\"twitter\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20\"/></g></g>","umbrella":"<g data-name=\"Layer 2\"><g data-name=\"umbrella\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2z\"/></g></g>","undo":"<g data-name=\"Layer 2\"><g data-name=\"undo\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76z\"/></g></g>","unlock":"<g data-name=\"Layer 2\"><g data-name=\"unlock\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"15\" r=\"1\"/><path d=\"M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-5 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/></g></g>","upload":"<g data-name=\"Layer 2\"><g data-name=\"upload\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(180 12 5)\"/><rect x=\"17\" y=\"5\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(90 19 6)\"/><rect x=\"3\" y=\"5\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(90 5 6)\"/><path d=\"M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z\"/><path d=\"M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z\"/></g></g>","video-off":"<g data-name=\"Layer 2\"><g data-name=\"video-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.22 17.05L4.88 7.71 3.12 6 3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51z\"/><path d=\"M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l1.29 1.29 6.59 6.59 2 2 2 2a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63a1.6 1.6 0 0 0-1-1.48z\"/><path d=\"M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","video":"<g data-name=\"Layer 2\"><g data-name=\"video\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15z\"/></g></g>","volume-down":"<g data-name=\"Layer 2\"><g data-name=\"volume-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z\"/><path d=\"M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z\"/></g></g>","volume-mute":"<g data-name=\"Layer 2\"><g data-name=\"volume-mute\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1z\"/></g></g>","volume-off":"<g data-name=\"Layer 2\"><g data-name=\"volume-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z\"/><path d=\"M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z\"/><path d=\"M15 12.17V4a1 1 0 0 0-1.57-.83L9 6.2z\"/><path d=\"M4.74 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1v-2.17z\"/><path d=\"M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","volume-up":"<g data-name=\"Layer 2\"><g data-name=\"volume-up\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z\"/><path d=\"M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z\"/><path d=\"M14.47 3.12a1 1 0 0 0-1 0L7 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z\"/></g></g>","wifi-off":"<g data-name=\"Layer 2\"><g data-name=\"wifi-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><path d=\"M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z\"/><path d=\"M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z\"/><path d=\"M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z\"/><path d=\"M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z\"/><path d=\"M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z\"/></g></g>","wifi":"<g data-name=\"Layer 2\"><g data-name=\"wifi\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><path d=\"M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z\"/><path d=\"M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z\"/><path d=\"M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z\"/></g></g>","activity-outline":"<g data-name=\"Layer 2\"><g data-name=\"activity\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z\"/></g></g>","alert-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"alert-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><circle cx=\"12\" cy=\"16\" r=\"1\"/><path d=\"M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z\"/></g></g>","alert-triangle-outline":"<g data-name=\"Layer 2\"><g data-name=\"alert-triangle\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z\"/><circle cx=\"12\" cy=\"16\" r=\"1\"/><path d=\"M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/></g></g>","archive-outline":"<g data-name=\"Layer 2\"><g data-name=\"archive\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z\"/><rect x=\"9\" y=\"12\" width=\"6\" height=\"2\" rx=\".87\" ry=\".87\"/></g></g>","arrow-back-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z\"/></g></g>","arrow-circle-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/></g></g>","arrow-circle-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-left\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13.72.72 0 0 0-.11.19.88.88 0 0 0-.06.28L7 12a1 1 0 0 0 .08.38 1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2z\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/></g></g>","arrow-circle-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/></g></g>","arrow-circle-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-circle-up\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12.71 7.29a1 1 0 0 0-.32-.21A1 1 0 0 0 12 7h-.1a.82.82 0 0 0-.27.06.72.72 0 0 0-.19.11 1 1 0 0 0-.13.09l-3 2.86a1 1 0 0 0 1.38 1.45L11 10.34V16a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/></g></g>","arrow-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-down\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17zm-3.91-7L12 14.82 16 10z\"/></g></g>","arrow-downward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-downward\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z\"/></g></g>","arrow-forward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z\"/></g></g>","arrow-ios-back-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z\"/></g></g>","arrow-ios-downward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-downward\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z\"/></g></g>","arrow-ios-forward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z\"/></g></g>","arrow-ios-upward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-ios-upward\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z\"/></g></g>","arrow-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-left\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2zm-4.86-6l4.82 4V8.09z\"/></g></g>","arrow-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z\"/></g></g>","arrow-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1zM8 14h7.9L12 9.18z\"/></g></g>","arrow-upward-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrow-upward\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z\"/></g></g>","arrowhead-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z\"/><path d=\"M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z\"/></g></g>","arrowhead-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z\"/><path d=\"M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z\"/></g></g>","arrowhead-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/><path d=\"M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z\"/></g></g>","arrowhead-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"arrowhead-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z\"/><path d=\"M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z\"/></g></g>","at-outline":"<g data-name=\"Layer 2\"><g data-name=\"at\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z\"/></g></g>","attach-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"attach-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z\"/></g></g>","attach-outline":"<g data-name=\"Layer 2\"><g data-name=\"attach\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z\"/></g></g>","award-outline":"<g data-name=\"Layer 2\"><g data-name=\"award\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19z\"/></g></g>","backspace-outline":"<g data-name=\"Layer 2\"><g data-name=\"backspace\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zM20 18h-9.63a1 1 0 0 1-.67-.26l-5.33-4.85 5.38-6.67a1 1 0 0 1 .62-.22H20z\"/><path d=\"M11.29 14.71a1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L15.41 12l1.3-1.29a1 1 0 0 0-1.42-1.42L14 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42z\"/></g></g>","bar-chart-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"bar-chart-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/><path d=\"M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/><path d=\"M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z\"/></g></g>","bar-chart-outline":"<g data-name=\"Layer 2\"><g data-name=\"bar-chart\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/><path d=\"M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z\"/><path d=\"M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/></g></g>","battery-outline":"<g data-name=\"Layer 2\"><g data-name=\"battery\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zm.17 9.57a.52.52 0 0 1-.17.43H4.18a.5.5 0 0 1-.18-.43V8.43A.53.53 0 0 1 4.17 8h11.65a.5.5 0 0 1 .18.43z\"/><path d=\"M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z\"/></g></g>","behance-outline":"<g data-name=\"Layer 2\"><g data-name=\"behance\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M10.52 11.78a1.4 1.4 0 0 0 1.12-1.43c0-1-.77-1.6-1.94-1.6H7v6.5h2.7c1.3-.05 2.3-.72 2.3-1.88a1.52 1.52 0 0 0-1.48-1.59zM8.26 9.67h1.15c.6 0 .95.32.95.85s-.38.89-1.25.89h-.85zm1 4.57h-1V12.3h1.23c.75 0 1.17.38 1.17 1s-.42.94-1.44.94z\"/><path d=\"M14.75 10.3a2.11 2.11 0 0 0-2.28 2.25V13a2.15 2.15 0 0 0 2.34 2.31A2 2 0 0 0 17 13.75h-1.21a.9.9 0 0 1-1 .63 1.07 1.07 0 0 1-1.09-1.19v-.14H17v-.47a2.12 2.12 0 0 0-2.25-2.28zm1 2h-2.02a1 1 0 0 1 1-1.09 1 1 0 0 1 1 1.09z\"/><rect x=\"13.25\" y=\"9.2\" width=\"3\" height=\".5\"/></g></g>","bell-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"bell-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8.9 5.17A4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a1.92 1.92 0 0 0 .1.59l3.6 3.6a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54l1.47 1.43a4.79 4.79 0 0 1 .43-.47z\"/><path d=\"M14 16.86l-.83-.86H5.51l1.18-1.18a2 2 0 0 0 .59-1.42v-3.29l-2-2a5.68 5.68 0 0 0 0 .59v4.7l-1.8 1.81A1.63 1.63 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22l-.83-.78zM12 20a1.88 1.88 0 0 1-2-1.66V18h4v.34A1.88 1.88 0 0 1 12 20z\"/><path d=\"M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","bell-outline":"<g data-name=\"Layer 2\"><g data-name=\"bell\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z\"/></g></g>","bluetooth-outline":"<g data-name=\"Layer 2\"><g data-name=\"bluetooth\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z\"/></g></g>","book-open-outline":"<g data-name=\"Layer 2\"><g data-name=\"book-open\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z\"/></g></g>","book-outline":"<g data-name=\"Layer 2\"><g data-name=\"book\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z\"/></g></g>","bookmark-outline":"<g data-name=\"Layer 2\"><g data-name=\"bookmark\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z\"/></g></g>","briefcase-outline":"<g data-name=\"Layer 2\"><g data-name=\"briefcase\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z\"/></g></g>","browser-outline":"<g data-name=\"Layer 2\"><g data-name=\"browser\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z\"/><circle cx=\"8\" cy=\"7.03\" r=\"1\"/><circle cx=\"12\" cy=\"7.03\" r=\"1\"/></g></g>","brush-outline":"<g data-name=\"Layer 2\"><g data-name=\"brush\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 6.83a2.76 2.76 0 0 0-.82-2 2.89 2.89 0 0 0-4 0l-6.6 6.6h-.22a4.42 4.42 0 0 0-4.3 4.31L4 19a1 1 0 0 0 .29.73A1.05 1.05 0 0 0 5 20l3.26-.06a4.42 4.42 0 0 0 4.31-4.3v-.23l6.61-6.6A2.74 2.74 0 0 0 20 6.83zM8.25 17.94L6 18v-2.23a2.4 2.4 0 0 1 2.4-2.36 2.15 2.15 0 0 1 2.15 2.19 2.4 2.4 0 0 1-2.3 2.34zm9.52-10.55l-5.87 5.87a4.55 4.55 0 0 0-.52-.64 3.94 3.94 0 0 0-.64-.52l5.87-5.86a.84.84 0 0 1 1.16 0 .81.81 0 0 1 .23.59.79.79 0 0 1-.23.56z\"/></g></g>","bulb-outline":"<g data-name=\"Layer 2\"><g data-name=\"bulb\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9zm1.5 7.59a1 1 0 0 0-.5.87V20h-2v-4.54a1 1 0 0 0-.5-.87A3 3 0 0 1 9 12a3 3 0 0 1 6 0 3 3 0 0 1-1.5 2.59z\"/><path d=\"M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z\"/><path d=\"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z\"/><path d=\"M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z\"/></g></g>","calendar-outline":"<g data-name=\"Layer 2\"><g data-name=\"calendar\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z\"/><circle cx=\"8\" cy=\"16\" r=\"1\"/><path d=\"M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/></g></g>","camera-outline":"<g data-name=\"Layer 2\"><g data-name=\"camera\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z\"/><path d=\"M12 10.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z\"/></g></g>","car-outline":"<g data-name=\"Layer 2\"><g data-name=\"car\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm5-3H4V5h11v10zm7 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1z\"/></g></g>","cast-outline":"<g data-name=\"Layer 2\"><g data-name=\"cast\"><polyline points=\"24 24 0 24 0 0\" opacity=\"0\"/><path d=\"M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z\"/><path d=\"M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z\"/><path d=\"M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z\"/><circle cx=\"4\" cy=\"19\" r=\"1\"/></g></g>","charging-outline":"<g data-name=\"Layer 2\"><g data-name=\"charging\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z\"/><path d=\"M15.83 6h-3.1l-1.14 2h4.23a.5.5 0 0 1 .18.43v7.14a.52.52 0 0 1-.17.43H13l-1.15 2h4A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z\"/><path d=\"M4 15.57V8.43A.53.53 0 0 1 4.17 8H7l1.13-2h-4A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h3.1l1.14-2H4.18a.5.5 0 0 1-.18-.43z\"/><path d=\"M9 20a1 1 0 0 1-.87-1.5l3.15-5.5H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1l4-7a1 1 0 0 1 1.74 1L8.72 11H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1l-4 7A1 1 0 0 1 9 20z\"/></g></g>","checkmark-circle-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-circle-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z\"/></g></g>","checkmark-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z\"/><path d=\"M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z\"/></g></g>","checkmark-outline":"<g data-name=\"Layer 2\"><g data-name=\"checkmark\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z\"/></g></g>","checkmark-square-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-square-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/><path d=\"M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z\"/></g></g>","checkmark-square-outline":"<g data-name=\"Layer 2\"><g data-name=\"checkmark-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z\"/><path d=\"M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z\"/></g></g>","chevron-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"chevron-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z\"/></g></g>","chevron-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"chevron-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z\"/></g></g>","chevron-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"chevron-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z\"/></g></g>","chevron-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"chevron-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z\"/></g></g>","clipboard-outline":"<g data-name=\"Layer 2\"><g data-name=\"clipboard\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM8 4h8v4H8V4zm11 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a1 1 0 0 1 1 1z\"/></g></g>","clock-outline":"<g data-name=\"Layer 2\"><g data-name=\"clock\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z\"/></g></g>","close-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"close-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z\"/></g></g>","close-outline":"<g data-name=\"Layer 2\"><g data-name=\"close\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","close-square-outline":"<g data-name=\"Layer 2\"><g data-name=\"close-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/><path d=\"M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z\"/></g></g>","cloud-download-outline":"<g data-name=\"Layer 2\"><g data-name=\"cloud-download\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z\"/><path d=\"M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z\"/></g></g>","cloud-upload-outline":"<g data-name=\"Layer 2\"><g data-name=\"cloud-upload\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z\"/></g></g>","code-download-outline":"<g data-name=\"Layer 2\"><g data-name=\"code-download\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z\"/><path d=\"M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/><path d=\"M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z\"/></g></g>","code-outline":"<g data-name=\"Layer 2\"><g data-name=\"code\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z\"/><path d=\"M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z\"/></g></g>","collapse-outline":"<g data-name=\"Layer 2\"><g data-name=\"collapse\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z\"/><path d=\"M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z\"/></g></g>","color-palette-outline":"<g data-name=\"Layer 2\"><g data-name=\"color-palette\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.49.49 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.47 8.47 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15z\"/><circle cx=\"12\" cy=\"6.5\" r=\"1.5\"/><path d=\"M15.25 7.2a1.5 1.5 0 1 0 2.05.55 1.5 1.5 0 0 0-2.05-.55z\"/><path d=\"M8.75 7.2a1.5 1.5 0 1 0 .55 2.05 1.5 1.5 0 0 0-.55-2.05z\"/><path d=\"M6.16 11.26a1.5 1.5 0 1 0 2.08.4 1.49 1.49 0 0 0-2.08-.4z\"/></g></g>","color-picker-outline":"<g data-name=\"Layer 2\"><g data-name=\"color-picker\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.36l2.69 2.7zm7-7L13.36 8l1.91-2L18 8.73z\"/></g></g>","compass-outline":"<g data-name=\"Layer 2\"><g data-name=\"compass\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M15.68 8.32a1 1 0 0 0-1.1-.25l-4.21 1.7a1 1 0 0 0-.55.55l-1.75 4.26a1 1 0 0 0 .18 1h.05A1 1 0 0 0 9 16a1 1 0 0 0 .38-.07l4.21-1.7a1 1 0 0 0 .55-.55l1.75-4.26a1 1 0 0 0-.21-1.1zm-4.88 4.89l.71-1.74 1.69-.68-.71 1.74z\"/></g></g>","copy-outline":"<g data-name=\"Layer 2\"><g data-name=\"copy\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z\"/><path d=\"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z\"/></g></g>","corner-down-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-down-left\"><rect x=\".05\" y=\".05\" width=\"24\" height=\"24\" transform=\"rotate(-89.76 12.05 12.05)\" opacity=\"0\"/><path d=\"M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z\"/></g></g>","corner-down-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-down-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z\"/></g></g>","corner-left-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-left-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z\"/></g></g>","corner-left-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-left-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z\"/></g></g>","corner-right-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-right-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z\"/></g></g>","corner-right-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-right-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z\"/></g></g>","corner-up-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-up-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z\"/></g></g>","corner-up-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"corner-up-right\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z\"/></g></g>","credit-card-outline":"<g data-name=\"Layer 2\"><g data-name=\"credit-card\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z\"/><path d=\"M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z\"/><path d=\"M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z\"/></g></g>","crop-outline":"<g data-name=\"Layer 2\"><g data-name=\"crop\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z\"/></g></g>","cube-outline":"<g data-name=\"Layer 2\"><g data-name=\"cube\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.66 7.26c0-.07-.1-.14-.15-.21l-.09-.1a2.5 2.5 0 0 0-.86-.68l-6.4-3a2.7 2.7 0 0 0-2.26 0l-6.4 3a2.6 2.6 0 0 0-.86.68L3.52 7a1 1 0 0 0-.15.2A2.39 2.39 0 0 0 3 8.46v7.06a2.49 2.49 0 0 0 1.46 2.26l6.4 3a2.7 2.7 0 0 0 2.27 0l6.4-3A2.49 2.49 0 0 0 21 15.54V8.46a2.39 2.39 0 0 0-.34-1.2zm-8.95-2.2a.73.73 0 0 1 .58 0l5.33 2.48L12 10.15 6.38 7.54zM5.3 16a.47.47 0 0 1-.3-.43V9.1l6 2.79v6.72zm13.39 0L13 18.61v-6.72l6-2.79v6.44a.48.48 0 0 1-.31.46z\"/></g></g>","diagonal-arrow-left-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-left-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z\"/></g></g>","diagonal-arrow-left-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-left-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z\"/></g></g>","diagonal-arrow-right-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-right-down\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z\"/></g></g>","diagonal-arrow-right-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"diagonal-arrow-right-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z\"/></g></g>","done-all-outline":"<g data-name=\"Layer 2\"><g data-name=\"done-all\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z\"/><path d=\"M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z\"/><path d=\"M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z\"/></g></g>","download-outline":"<g data-name=\"Layer 2\"><g data-name=\"download\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"4\" y=\"18\" width=\"16\" height=\"2\" rx=\"1\" ry=\"1\"/><rect x=\"3\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 18)\"/><rect x=\"17\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 19 18)\"/><path d=\"M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z\"/><path d=\"M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z\"/></g></g>","droplet-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"droplet-off-outline\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 19a5.4 5.4 0 0 1-3.88-1.64 5.73 5.73 0 0 1-.69-7.11L6 8.82a7.74 7.74 0 0 0 .7 9.94A7.37 7.37 0 0 0 12 21a7.36 7.36 0 0 0 4.58-1.59L15.15 18A5.43 5.43 0 0 1 12 19z\"/><path d=\"M12 5.43l3.88 4a5.71 5.71 0 0 1 1.49 5.15L19 16.15A7.72 7.72 0 0 0 17.31 8l-4.6-4.7A1 1 0 0 0 12 3a1 1 0 0 0-.72.3L8.73 5.9l1.42 1.42z\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","droplet-outline":"<g data-name=\"Layer 2\"><g data-name=\"droplet-outline\"><rect x=\".1\" y=\".1\" width=\"24\" height=\"24\" transform=\"rotate(.48 11.987 11.887)\" opacity=\"0\"/><path d=\"M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1zm.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61 5.72 5.72 0 0 0 .06-8z\"/></g></g>","edit-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"edit-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z\"/><path d=\"M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z\"/></g></g>","edit-outline":"<g data-name=\"Layer 2\"><g data-name=\"edit\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"/></g></g>","email-outline":"<g data-name=\"Layer 2\"><g data-name=\"email\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z\"/></g></g>","expand-outline":"<g data-name=\"Layer 2\"><g data-name=\"expand\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z\"/><path d=\"M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z\"/></g></g>","external-link-outline":"<g data-name=\"Layer 2\"><g data-name=\"external-link\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z\"/><path d=\"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z\"/></g></g>","eye-off-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"eye-off-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z\"/></g></g>","eye-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"eye-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z\"/><path d=\"M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25z\"/><path d=\"M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z\"/></g></g>","eye-outline":"<g data-name=\"Layer 2\"><g data-name=\"eye\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z\"/><path d=\"M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z\"/></g></g>","facebook-outline":"<g data-name=\"Layer 2\"><g data-name=\"facebook\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M13 22H9a1 1 0 0 1-1-1v-6.2H6a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1h2V7.5A5.77 5.77 0 0 1 14 2h3a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-3v1.6h3a1 1 0 0 1 .8.39 1 1 0 0 1 .16.88l-1 3.6a1 1 0 0 1-1 .73H14V21a1 1 0 0 1-1 1zm-3-2h2v-6.2a1 1 0 0 1 1-1h2.24l.44-1.6H13a1 1 0 0 1-1-1V7.5a2 2 0 0 1 2-1.9h2V4h-2a3.78 3.78 0 0 0-4 3.5v2.7a1 1 0 0 1-1 1H7v1.6h2a1 1 0 0 1 1 1z\"/></g></g>","file-add-outline":"<g data-name=\"Layer 2\"><g data-name=\"file-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z\"/><path d=\"M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z\"/></g></g>","file-outline":"<g data-name=\"Layer 2\"><g data-name=\"file\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM17.65 9h-3.94a.79.79 0 0 1-.71-.85V4h.11zm-.21 11H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H11v4.15A2.79 2.79 0 0 0 13.71 11H18v8.5a.53.53 0 0 1-.56.5z\"/></g></g>","file-remove-outline":"<g data-name=\"Layer 2\"><g data-name=\"file-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z\"/><path d=\"M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/></g></g>","file-text-outline":"<g data-name=\"Layer 2\"><g data-name=\"file-text\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\"/><path d=\"M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z\"/><path d=\"M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z\"/></g></g>","film-outline":"<g data-name=\"Layer 2\"><g data-name=\"film\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm4-8h6v14H9zm10 6h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z\"/></g></g>","flag-outline":"<g data-name=\"Layer 2\"><g data-name=\"flag\"><polyline points=\"24 24 0 24 0 0\" opacity=\"0\"/><path d=\"M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z\"/></g></g>","flash-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"flash-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M12.54 18.06l.27-2.42L10 12.8H6.87l1.24-1.86L6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67-1.44-1.44z\"/><path d=\"M11.46 5.94l-.27 2.42L14 11.2h3.1l-1.24 1.86 1.44 1.44 2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11l1.44 1.44z\"/></g></g>","flash-outline":"<g data-name=\"Layer 2\"><g data-name=\"flash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z\"/></g></g>","flip-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"flip-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z\"/><path d=\"M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z\"/></g></g>","flip-outline":"<g data-name=\"Layer 2\"><g data-name=\"flip-in\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z\"/><path d=\"M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z\"/></g></g>","folder-add-outline":"<g data-name=\"Layer 2\"><g data-name=\"folder-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z\"/><path d=\"M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z\"/></g></g>","folder-outline":"<g data-name=\"Layer 2\"><g data-name=\"folder\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z\"/></g></g>","folder-remove-outline":"<g data-name=\"Layer 2\"><g data-name=\"folder-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/><path d=\"M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z\"/></g></g>","funnel-outline":"<g data-name=\"Layer 2\"><g data-name=\"funnel\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z\"/></g></g>","gift-outline":"<g data-name=\"Layer 2\"><g data-name=\"gift\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19.2 7h-.39A3 3 0 0 0 19 6a3.08 3.08 0 0 0-3.14-3A4.46 4.46 0 0 0 12 5.4 4.46 4.46 0 0 0 8.14 3 3.08 3.08 0 0 0 5 6a3 3 0 0 0 .19 1H4.8A2 2 0 0 0 3 9.2v3.6A2.08 2.08 0 0 0 4.5 15v4.37A1.75 1.75 0 0 0 6.31 21h11.38a1.75 1.75 0 0 0 1.81-1.67V15a2.08 2.08 0 0 0 1.5-2.2V9.2A2 2 0 0 0 19.2 7zM19 9.2v3.6a.56.56 0 0 1 0 .2h-6V9h6a.56.56 0 0 1 0 .2zM15.86 5A1.08 1.08 0 0 1 17 6a1.08 1.08 0 0 1-1.14 1H13.4a2.93 2.93 0 0 1 2.46-2zM7 6a1.08 1.08 0 0 1 1.14-1 2.93 2.93 0 0 1 2.45 2H8.14A1.08 1.08 0 0 1 7 6zM5 9.2A.56.56 0 0 1 5 9h6v4H5a.56.56 0 0 1 0-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z\"/></g></g>","github-outline":"<g data-name=\"Layer 2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z\"/></g>","globe-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"globe-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2zm11.93 2.52a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .54-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z\"/></g></g>","globe-outline":"<g data-name=\"Layer 2\"><g data-name=\"globe\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z\"/></g></g>","google-outline":"<g data-name=\"Layer 2\"><g data-name=\"google\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M12 22h-.43A10.16 10.16 0 0 1 2 12.29a10 10 0 0 1 14.12-9.41 1.48 1.48 0 0 1 .77.86 1.47 1.47 0 0 1-.1 1.16L15.5 7.28a1.44 1.44 0 0 1-1.83.64A4.5 4.5 0 0 0 8.77 9a4.41 4.41 0 0 0-1.16 3.34 4.36 4.36 0 0 0 1.66 3 4.52 4.52 0 0 0 3.45 1 3.89 3.89 0 0 0 2.63-1.57h-2.9A1.45 1.45 0 0 1 11 13.33v-2.68a1.45 1.45 0 0 1 1.45-1.45h8.1A1.46 1.46 0 0 1 22 10.64v1.88A10 10 0 0 1 12 22zm0-18a8 8 0 0 0-8 8.24A8.12 8.12 0 0 0 11.65 20 8 8 0 0 0 20 12.42V11.2h-7v1.58h5.31l-.41 1.3a6 6 0 0 1-4.9 4.25A6.58 6.58 0 0 1 8 17a6.33 6.33 0 0 1-.72-9.3A6.52 6.52 0 0 1 14 5.91l.77-1.43A7.9 7.9 0 0 0 12 4z\"/></g></g>","grid-outline":"<g data-name=\"Layer 2\"><g data-name=\"grid\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z\"/><path d=\"M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z\"/><path d=\"M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z\"/><path d=\"M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z\"/></g></g>","hard-drive-outline":"<g data-name=\"Layer 2\"><g data-name=\"hard-drive\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H5.62zM18 19H6a1 1 0 0 1-1-1v-5h14v5a1 1 0 0 1-1 1z\"/><path d=\"M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/><circle cx=\"8\" cy=\"16\" r=\"1\"/></g></g>","hash-outline":"<g data-name=\"Layer 2\"><g data-name=\"hash\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z\"/></g></g>","headphones-outline":"<g data-name=\"Layer 2\"><g data-name=\"headphones\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2zM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z\"/></g></g>","heart-outline":"<g data-name=\"Layer 2\"><g data-name=\"heart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z\"/></g></g>","home-outline":"<g data-name=\"Layer 2\"><g data-name=\"home\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z\"/></g></g>","image-outline":"<g data-name=\"Layer 2\"><g data-name=\"image\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1zm12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1z\"/><circle cx=\"8\" cy=\"8.5\" r=\"1.5\"/></g></g>","inbox-outline":"<g data-name=\"Layer 2\"><g data-name=\"inbox\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v3H9v-3a1 1 0 0 0-1-1H5.62zM18 19H6a1 1 0 0 1-1-1v-5h2v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h2v5a1 1 0 0 1-1 1z\"/></g></g>","info-outline":"<g data-name=\"Layer 2\"><g data-name=\"info\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><circle cx=\"12\" cy=\"8\" r=\"1\"/><path d=\"M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z\"/></g></g>","keypad-outline":"<g data-name=\"Layer 2\"><g data-name=\"keypad\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z\"/><path d=\"M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","layers-outline":"<g data-name=\"Layer 2\"><g data-name=\"layers\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z\"/></g></g>","layout-outline":"<g data-name=\"Layer 2\"><g data-name=\"layout\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z\"/></g></g>","link-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"link-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z\"/><path d=\"M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z\"/><path d=\"M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z\"/></g></g>","link-outline":"<g data-name=\"Layer 2\"><g data-name=\"link\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z\"/><path d=\"M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z\"/><path d=\"M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z\"/></g></g>","linkedin-outline":"<g data-name=\"Layer 2\"><g data-name=\"linkedin\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z\"/><path d=\"M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z\"/><path d=\"M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z\"/></g></g>","list-outline":"<g data-name=\"Layer 2\"><g data-name=\"list\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><circle cx=\"4\" cy=\"7\" r=\"1\"/><circle cx=\"4\" cy=\"12\" r=\"1\"/><circle cx=\"4\" cy=\"17\" r=\"1\"/><rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"7\" y=\"16\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"7\" y=\"6\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/></g></g>","loader-outline":"<g data-name=\"Layer 2\"><g data-name=\"loader\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z\"/><path d=\"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z\"/><path d=\"M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z\"/><path d=\"M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z\"/><path d=\"M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z\"/><path d=\"M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z\"/><path d=\"M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z\"/></g></g>","lock-outline":"<g data-name=\"Layer 2\"><g data-name=\"lock\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z\"/><path d=\"M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","log-in-outline":"<g data-name=\"Layer 2\"><g data-name=\"log-in\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"/><path d=\"M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z\"/></g></g>","log-out-outline":"<g data-name=\"Layer 2\"><g data-name=\"log-out\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z\"/><path d=\"M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z\"/></g></g>","map-outline":"<g data-name=\"Layer 2\"><g data-name=\"map\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM5 7.44l2-.89v10l-2 .89zm4-.89l2 .89v10l-2-.89zm4 .89l2-.89v10l-2 .89zm6 10l-2-.89v-10l2 .89z\"/></g></g>","maximize-outline":"<g data-name=\"Layer 2\"><g data-name=\"maximize\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z\"/><path d=\"M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z\"/></g></g>","menu-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"menu-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><circle cx=\"4\" cy=\"12\" r=\"1\"/><rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"/><rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"/></g></g>","menu-arrow-outline":"<g data-name=\"Layer 2\"><g data-name=\"menu-arrow\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z\"/><rect x=\"3\" y=\"17\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"5\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/></g></g>","menu-outline":"<g data-name=\"Layer 2\"><g data-name=\"menu\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/><rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".95\" ry=\".95\"/></g></g>","message-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"message-circle\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"16\" cy=\"12\" r=\"1\"/><circle cx=\"8\" cy=\"12\" r=\"1\"/><path d=\"M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z\"/><rect width=\"24\" height=\"24\" opacity=\"0\"/></g></g>","message-square-outline":"<g data-name=\"Layer 2\"><g data-name=\"message-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"11\" r=\"1\"/><circle cx=\"16\" cy=\"11\" r=\"1\"/><circle cx=\"8\" cy=\"11\" r=\"1\"/><path d=\"M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z\"/></g></g>","mic-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"mic-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M10 6a2 2 0 0 1 4 0v5a1 1 0 0 1 0 .16l1.6 1.59A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75L10 7.17z\"/><path d=\"M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z\"/><path d=\"M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z\"/><path d=\"M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\"/></g></g>","mic-outline":"<g data-name=\"Layer 2\"><g data-name=\"mic\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm-2-9a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0z\"/><path d=\"M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z\"/></g></g>","minimize-outline":"<g data-name=\"Layer 2\"><g data-name=\"minimize\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z\"/><path d=\"M13 10H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/></g></g>","minus-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"minus-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\"/></g></g>","minus-outline":"<g data-name=\"Layer 2\"><g data-name=\"minus\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z\"/></g></g>","minus-square-outline":"<g data-name=\"Layer 2\"><g data-name=\"minus-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/><path d=\"M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z\"/></g></g>","monitor-outline":"<g data-name=\"Layer 2\"><g data-name=\"monitor\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z\"/></g></g>","moon-outline":"<g data-name=\"Layer 2\"><g data-name=\"moon\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z\"/></g></g>","more-horizontal-outline":"<g data-name=\"Layer 2\"><g data-name=\"more-horizotnal\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/><circle cx=\"5\" cy=\"12\" r=\"2\"/></g></g>","more-vertical-outline":"<g data-name=\"Layer 2\"><g data-name=\"more-vertical\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/></g></g>","move-outline":"<g data-name=\"Layer 2\"><g data-name=\"move\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z\"/></g></g>","music-outline":"<g data-name=\"Layer 2\"><g data-name=\"music\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51zM6.54 19A1.49 1.49 0 1 1 8 17.21a1.53 1.53 0 0 1 0 .3A1.49 1.49 0 0 1 6.54 19zm9-2A1.5 1.5 0 1 1 17 15.21a1.53 1.53 0 0 1 0 .3A1.5 1.5 0 0 1 15.51 17z\"/></g></g>","navigation-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"navigation-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68zm-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19 3.52-10.55z\"/></g></g>","navigation-outline":"<g data-name=\"Layer 2\"><g data-name=\"navigation\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 20a.94.94 0 0 1-.55-.17L12 14.9l-7.45 4.93a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20zm-8-7.3a1 1 0 0 1 .55.17l4.88 3.23L12 5.24 6.57 16.1l4.88-3.23a1 1 0 0 1 .55-.17z\"/></g></g>","npm-outline":"<g data-name=\"Layer 2\"><g data-name=\"npm\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z\"/><rect x=\"12\" y=\"9\" width=\"4\" height=\"10\"/></g></g>","options-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"options-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2zm4-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z\"/><path d=\"M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","options-outline":"<g data-name=\"Layer 2\"><g data-name=\"options\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","pantone-outline":"<g data-name=\"Layer 2\"><g data-name=\"pantone\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 13.18h-4.06l2.3-2.47a1 1 0 0 0 0-1.41l-4.19-3.86a.93.93 0 0 0-.71-.26 1 1 0 0 0-.7.31l-1.82 2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09A3.91 3.91 0 0 0 6.91 21H20a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1zm-6.58-5.59l2.67 2.49-5.27 5.66v-5.36zM8.82 10v3H5v-3zm0-5v3H5V5zM5 17.09V15h3.82v2.09a1.91 1.91 0 0 1-3.82 0zM19 19h-8.49l3.56-3.82H19z\"/></g></g>","paper-plane-outline":"<g data-name=\"Layer 2\"><g data-name=\"paper-plane\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z\"/></g></g>","pause-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"pause-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/><path d=\"M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z\"/></g></g>","people-outline":"<g data-name=\"Layer 2\"><g data-name=\"people\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z\"/><path d=\"M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z\"/></g></g>","percent-outline":"<g data-name=\"Layer 2\"><g data-name=\"percent\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z\"/><path d=\"M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z\"/><path d=\"M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z\"/></g></g>","person-add-outline":"<g data-name=\"Layer 2\"><g data-name=\"person-add\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z\"/></g></g>","person-delete-outline":"<g data-name=\"Layer 2\"><g data-name=\"person-delete\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z\"/></g></g>","person-done-outline":"<g data-name=\"Layer 2\"><g data-name=\"person-done\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z\"/></g></g>","person-outline":"<g data-name=\"Layer 2\"><g data-name=\"person\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z\"/></g></g>","person-remove-outline":"<g data-name=\"Layer 2\"><g data-name=\"person-remove\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z\"/><path d=\"M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z\"/><path d=\"M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z\"/></g></g>","phone-call-outline":"<g data-name=\"Layer 2\"><g data-name=\"phone-call\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z\"/><path d=\"M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z\"/><path d=\"M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z\"/></g></g>","phone-missed-outline":"<g data-name=\"Layer 2\"><g data-name=\"phone-missed\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z\"/><path d=\"M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z\"/></g></g>","phone-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"phone-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z\"/><path d=\"M6.7 14.63A13.29 13.29 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.57 11.57 0 0 0 1.57 3l1.43-1.42a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z\"/><path d=\"M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-1.43 1.43a11.52 11.52 0 0 0 2.94 1.56c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6 13.29 13.29 0 0 1-8-2.7l-1.46 1.43A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z\"/></g></g>","phone-outline":"<g data-name=\"Layer 2\"><g data-name=\"phone\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z\"/></g></g>","pie-chart-outline":"<g data-name=\"Layer 2\"><g data-name=\"pie-chart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z\"/><path d=\"M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z\"/></g></g>","pin-outline":"<g data-name=\"Layer 2\"><g data-name=\"pin\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0 1 12 0c0 3.7-4.33 8.14-6 9.73z\"/><path d=\"M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z\"/></g></g>","play-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"play-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z\"/></g></g>","plus-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"plus-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z\"/></g></g>","plus-outline":"<g data-name=\"Layer 2\"><g data-name=\"plus\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z\"/></g></g>","plus-square-outline":"<g data-name=\"Layer 2\"><g data-name=\"plus-square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/><path d=\"M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z\"/></g></g>","power-outline":"<g data-name=\"Layer 2\"><g data-name=\"power\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z\"/><path d=\"M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z\"/></g></g>","pricetags-outline":"<g data-name=\"Layer 2\"><g data-name=\"pricetags\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12.87 22a1.84 1.84 0 0 1-1.29-.53l-6.41-6.42a1 1 0 0 1-.29-.61L4 5.09a1 1 0 0 1 .29-.8 1 1 0 0 1 .8-.29l9.35.88a1 1 0 0 1 .61.29l6.42 6.41a1.82 1.82 0 0 1 0 2.57l-7.32 7.32a1.82 1.82 0 0 1-1.28.53zm-6-8.11l6 6 7.05-7.05-6-6-7.81-.73z\"/><circle cx=\"10.5\" cy=\"10.5\" r=\"1.5\"/></g></g>","printer-outline":"<g data-name=\"Layer 2\"><g data-name=\"printer\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4zM20 16.33a.66.66 0 0 1-.64.67h-.86v-2a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v2h-.86a.66.66 0 0 1-.64-.67V9.67A.66.66 0 0 1 4.64 9h14.72a.66.66 0 0 1 .64.67z\"/></g></g>","question-mark-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"menu-arrow-circle\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z\"/><circle cx=\"12\" cy=\"17\" r=\"1\"/></g></g>","question-mark-outline":"<g data-name=\"Layer 2\"><g data-name=\"question-mark\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/></g></g>","radio-button-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"radio-button-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z\"/></g></g>","radio-button-on-outline":"<g data-name=\"Layer 2\"><g data-name=\"radio-button-on\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z\"/></g></g>","radio-outline":"<g data-name=\"Layer 2\"><g data-name=\"radio\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z\"/><path d=\"M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z\"/><path d=\"M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z\"/><path d=\"M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z\"/></g></g>","recording-outline":"<g data-name=\"Layer 2\"><g data-name=\"recording\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8zM4 12a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm14 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z\"/></g></g>","refresh-outline":"<g data-name=\"Layer 2\"><g data-name=\"refresh\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z\"/></g></g>","repeat-outline":"<g data-name=\"Layer 2\"><g data-name=\"repeat\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z\"/><path d=\"M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z\"/></g></g>","rewind-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"rewind-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM9.5 16l-4.82-4L9.5 8.09zm8 0l-4.82-4 4.82-3.91z\"/></g></g>","rewind-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"rewind-right\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66zM6.5 15.91V8l4.82 4zm8 0V8l4.82 4z\"/></g></g>","save-outline":"<g data-name=\"Layer 2\"><g data-name=\"save\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z\"/></g></g>","scissors-outline":"<g data-name=\"Layer 2\"><g data-name=\"scissors\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/><path d=\"M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/></g></g>","search-outline":"<g data-name=\"Layer 2\"><g data-name=\"search\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z\"/></g></g>","settings-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"settings-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12.94 22h-1.89a1.68 1.68 0 0 1-1.68-1.68v-1.09a.34.34 0 0 0-.22-.29.38.38 0 0 0-.41 0l-.74.8a1.67 1.67 0 0 1-2.37 0L4.26 18.4a1.66 1.66 0 0 1-.5-1.19 1.72 1.72 0 0 1 .5-1.21l.74-.74a.34.34 0 0 0 0-.37c-.06-.15-.16-.26-.3-.26H3.68A1.69 1.69 0 0 1 2 12.94v-1.89a1.68 1.68 0 0 1 1.68-1.68h1.09a.34.34 0 0 0 .29-.22.38.38 0 0 0 0-.41L4.26 8a1.67 1.67 0 0 1 0-2.37L5.6 4.26a1.65 1.65 0 0 1 1.18-.5 1.72 1.72 0 0 1 1.22.5l.74.74a.34.34 0 0 0 .37 0c.15-.06.26-.16.26-.3V3.68A1.69 1.69 0 0 1 11.06 2H13a1.68 1.68 0 0 1 1.68 1.68v1.09a.34.34 0 0 0 .22.29.38.38 0 0 0 .41 0l.69-.8a1.67 1.67 0 0 1 2.37 0l1.37 1.34a1.67 1.67 0 0 1 .5 1.19 1.63 1.63 0 0 1-.5 1.21l-.74.74a.34.34 0 0 0 0 .37c.06.15.16.26.3.26h1.09A1.69 1.69 0 0 1 22 11.06V13a1.68 1.68 0 0 1-1.68 1.68h-1.09a.34.34 0 0 0-.29.22.34.34 0 0 0 0 .37l.77.77a1.67 1.67 0 0 1 0 2.37l-1.31 1.33a1.65 1.65 0 0 1-1.18.5 1.72 1.72 0 0 1-1.19-.5l-.77-.74a.34.34 0 0 0-.37 0c-.15.06-.26.16-.26.3v1.09A1.69 1.69 0 0 1 12.94 22zm-1.57-2h1.26v-.77a2.33 2.33 0 0 1 1.46-2.14 2.36 2.36 0 0 1 2.59.47l.54.54.88-.88-.54-.55a2.34 2.34 0 0 1-.48-2.56 2.33 2.33 0 0 1 2.14-1.45H20v-1.29h-.77a2.33 2.33 0 0 1-2.14-1.46 2.36 2.36 0 0 1 .47-2.59l.54-.54-.88-.88-.55.54a2.39 2.39 0 0 1-4-1.67V4h-1.3v.77a2.33 2.33 0 0 1-1.46 2.14 2.36 2.36 0 0 1-2.59-.47l-.54-.54-.88.88.54.55a2.39 2.39 0 0 1-1.67 4H4v1.26h.77a2.33 2.33 0 0 1 2.14 1.46 2.36 2.36 0 0 1-.47 2.59l-.54.54.88.88.55-.54a2.39 2.39 0 0 1 4 1.67z\" data-name=\"&lt;Group&gt;\"/><path d=\"M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z\"/></g></g>","settings-outline":"<g data-name=\"Layer 2\"><g data-name=\"settings\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z\" data-name=\"&lt;Group&gt;\"/><path d=\"M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z\"/></g></g>","shake-outline":"<g data-name=\"Layer 2\"><g data-name=\"shake\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z\"/><path d=\"M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z\"/><path d=\"M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z\"/><path d=\"M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z\"/><path d=\"M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z\"/><path d=\"M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z\"/><path d=\"M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z\"/></g></g>","share-outline":"<g data-name=\"Layer 2\"><g data-name=\"share\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","shield-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"shield-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M12.3 19.68l-.3.17-.3-.17A13.15 13.15 0 0 1 5 8.23v-.14L5.16 8 3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27l-1.42-1.42a12.56 12.56 0 0 1-2.6 1.94z\"/><path d=\"M20 6.34L13 2.4a2 2 0 0 0-2 0L7.32 4.49 8.78 6 12 4.15l7 3.94v.14a13 13 0 0 1-1.63 6.31L18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75z\"/></g></g>","shield-outline":"<g data-name=\"Layer 2\"><g data-name=\"shield\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25zm0-17.7L5 8.09v.14a13.15 13.15 0 0 0 6.7 11.45l.3.17.3-.17A13.15 13.15 0 0 0 19 8.23v-.14z\"/></g></g>","shopping-bag-outline":"<g data-name=\"Layer 2\"><g data-name=\"shopping-bag\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zm-12-1.42A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7H6.41zM18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1z\"/><path d=\"M15 11a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-2 0 4 4 0 0 0 8 0 1 1 0 0 0-1-1z\"/></g></g>","shopping-cart-outline":"<g data-name=\"Layer 2\"><g data-name=\"shopping-cart\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z\"/><circle cx=\"7.5\" cy=\"19.5\" r=\"1.5\"/><circle cx=\"17.5\" cy=\"19.5\" r=\"1.5\"/></g></g>","shuffle-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"shuffle-2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z\"/></g></g>","shuffle-outline":"<g data-name=\"Layer 2\"><g data-name=\"shuffle\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z\"/><path d=\"M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z\"/></g></g>","skip-back-outline":"<g data-name=\"Layer 2\"><g data-name=\"skip-back\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM15.5 16l-4.82-4 4.82-3.91z\"/></g></g>","skip-forward-outline":"<g data-name=\"Layer 2\"><g data-name=\"skip-forward\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm-7.5 9.91V8l4.82 4z\"/></g></g>","slash-outline":"<g data-name=\"Layer 2\"><g data-name=\"slash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z\"/></g></g>","smartphone-outline":"<g data-name=\"Layer 2\"><g data-name=\"smartphone\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z\"/><circle cx=\"12\" cy=\"16.5\" r=\"1.5\"/><path d=\"M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z\"/></g></g>","speaker-outline":"<g data-name=\"Layer 2\"><g data-name=\"speaker\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z\"/><path d=\"M12 12a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 12zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17z\"/><path d=\"M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z\"/></g></g>","square-outline":"<g data-name=\"Layer 2\"><g data-name=\"square\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z\"/></g></g>","star-outline":"<g data-name=\"Layer 2\"><g data-name=\"star\"><rect width=\"24\" height=\"24\" transform=\"rotate(90 12 12)\" opacity=\"0\"/><path d=\"M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18zM12 16.1a.92.92 0 0 1 .46.11l3.77 2-.72-4.21a1 1 0 0 1 .29-.89l3-2.93-4.2-.62a1 1 0 0 1-.71-.56L12 5.25 10.11 9a1 1 0 0 1-.75.54l-4.2.62 3 2.93a1 1 0 0 1 .29.89l-.72 4.16 3.77-2a.92.92 0 0 1 .5-.04z\"/></g></g>","stop-circle-outline":"<g data-name=\"Layer 2\"><g data-name=\"stop-circle\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z\"/><path d=\"M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z\"/></g></g>","sun-outline":"<g data-name=\"Layer 2\"><g data-name=\"sun\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z\"/><path d=\"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z\"/><path d=\"M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z\"/><path d=\"M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z\"/><path d=\"M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z\"/><path d=\"M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z\"/><path d=\"M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z\"/><path d=\"M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z\"/><path d=\"M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z\"/></g></g>","swap-outline":"<g data-name=\"Layer 2\"><g data-name=\"swap\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z\"/><path d=\"M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z\"/></g></g>","sync-outline":"<g data-name=\"Layer 2\"><g data-name=\"sync\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z\"/><path d=\"M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z\"/></g></g>","text-outline":"<g data-name=\"Layer 2\"><g data-name=\"text\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z\"/></g></g>","thermometer-minus-outline":"<g data-name=\"Layer 2\"><g data-name=\"thermometer-minus\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z\"/></g></g>","thermometer-outline":"<g data-name=\"Layer 2\"><g data-name=\"thermometer\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 9 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4z\"/></g></g>","thermometer-plus-outline":"<g data-name=\"Layer 2\"><g data-name=\"thermometer-plus\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\"/><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 6)\"/><path d=\"M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z\"/></g></g>","toggle-left-outline":"<g data-name=\"Layer 2\"><g data-name=\"toggle-left\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z\"/><path d=\"M9 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","toggle-right-outline":"<g data-name=\"Layer 2\"><g data-name=\"toggle-right\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z\"/><path d=\"M15 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","trash-2-outline":"<g data-name=\"Layer 2\"><g data-name=\"trash-2\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"/><path d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"/><path d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"/></g></g>","trash-outline":"<g data-name=\"Layer 2\"><g data-name=\"trash\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"/></g></g>","trending-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"trending-down\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z\"/></g></g>","trending-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"trending-up\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z\"/></g></g>","tv-outline":"<g data-name=\"Layer 2\"><g data-name=\"tv\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z\"/></g></g>","twitter-outline":"<g data-name=\"Layer 2\"><g data-name=\"twitter\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M8.51 20h-.08a10.87 10.87 0 0 1-4.65-1.09A1.38 1.38 0 0 1 3 17.47a1.41 1.41 0 0 1 1.16-1.18 6.63 6.63 0 0 0 2.54-.89 9.49 9.49 0 0 1-3.51-9.07 1.41 1.41 0 0 1 1-1.15 1.35 1.35 0 0 1 1.43.41 7.09 7.09 0 0 0 4.88 2.75 4.5 4.5 0 0 1 1.41-3.1 4.47 4.47 0 0 1 6.37.19.7.7 0 0 0 .78.1A1.39 1.39 0 0 1 21 7.13a6.66 6.66 0 0 1-1.28 2.6A10.79 10.79 0 0 1 8.51 20zm0-2h.08a8.79 8.79 0 0 0 9.09-8.59 1.32 1.32 0 0 1 .37-.85 5.19 5.19 0 0 0 .62-1 2.56 2.56 0 0 1-1.91-.85A2.45 2.45 0 0 0 15 6a2.5 2.5 0 0 0-1.79.69 2.53 2.53 0 0 0-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 0 1-6.54-2.4 7.12 7.12 0 0 0 3.73 6.46l.95.54-.63.9a5.62 5.62 0 0 1-2.68 1.92A8.34 8.34 0 0 0 8.5 18zM19 6.65z\"/></g></g>","umbrella-outline":"<g data-name=\"Layer 2\"><g data-name=\"umbrella\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2zm-7.94 9a8 8 0 0 1 15.88 0z\"/></g></g>","undo-outline":"<g data-name=\"Layer 2\"><g data-name=\"undo\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76zm-9.77-9.5a11.07 11.07 0 0 1 8.81 4.26A9 9 0 0 0 10.45 9a1 1 0 0 1-1-1V6.08l-4.82 4.17 4.82 4.21v-2a1 1 0 0 1 1-.96z\"/></g></g>","unlock-outline":"<g data-name=\"Layer 2\"><g data-name=\"unlock\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z\"/><path d=\"M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"/></g></g>","upload-outline":"<g data-name=\"Layer 2\"><g data-name=\"upload\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><rect x=\"4\" y=\"4\" width=\"16\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(180 12 5)\"/><rect x=\"17\" y=\"5\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(90 19 6)\"/><rect x=\"3\" y=\"5\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"rotate(90 5 6)\"/><path d=\"M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z\"/><path d=\"M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z\"/></g></g>","video-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"video-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M14 17H5a1 1 0 0 1-1-1V8a1 1 0 0 1 .4-.78L3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51L14.14 17a.7.7 0 0 1-.14 0z\"/><path d=\"M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l2 2H14a1 1 0 0 1 1 1v4.17l4.72 4.72a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zm-1 7.45L17.19 12 20 9.4z\"/></g></g>","video-outline":"<g data-name=\"Layer 2\"><g data-name=\"video\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zM15 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4L17.19 12 20 9.4z\"/></g></g>","volume-down-outline":"<g data-name=\"Layer 2\"><g data-name=\"volume-down\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z\"/><path d=\"M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88zM15 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H5V9.57h4.33a1 1 0 0 0 .57-.17L15 5.9z\"/></g></g>","volume-mute-outline":"<g data-name=\"Layer 2\"><g data-name=\"volume-mute\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1zM6 14.43h4.33a1 1 0 0 1 .57.17l5.1 3.5V5.9l-5.1 3.5a1 1 0 0 1-.57.17H6z\"/></g></g>","volume-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"volume-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z\"/><path d=\"M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z\"/><path d=\"M13.5 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H3.5V9.57h3.24l-2-2H2.5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1v-1.67l-2-2z\"/><path d=\"M13.5 5.9v4.77l2 2V4a1 1 0 0 0-1.57-.83L9.23 6.4l1.44 1.44z\"/></g></g>","volume-up-outline":"<g data-name=\"Layer 2\"><g data-name=\"volume-up\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z\"/><path d=\"M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z\"/><path d=\"M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z\"/></g></g>","wifi-off-outline":"<g data-name=\"Layer 2\"><g data-name=\"wifi-off\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><path d=\"M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z\"/><path d=\"M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z\"/><path d=\"M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z\"/><path d=\"M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z\"/><path d=\"M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z\"/><path d=\"M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z\"/></g></g>","wifi-outline":"<g data-name=\"Layer 2\"><g data-name=\"wifi\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><path d=\"M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z\"/><path d=\"M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z\"/><path d=\"M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z\"/></g></g>"};

/***/ }),

/***/ "./package/src/animation.scss":
/*!************************************!*\
  !*** ./package/src/animation.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./animation.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./package/src/default-attrs.json":
/*!****************************************!*\
  !*** ./package/src/default-attrs.json ***!
  \****************************************/
/*! exports provided: xmlns, width, height, viewBox, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24"};

/***/ }),

/***/ "./package/src/icon.js":
/*!*****************************!*\
  !*** ./package/src/icon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_attrs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-attrs.json */ "./package/src/default-attrs.json");
var _default_attrs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./default-attrs.json */ "./package/src/default-attrs.json", 1);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var defaultAnimationOptions = {
  hover: true
};

var isString = function isString(value) {
  return typeof value === 'string' || value instanceof String;
};

var Icon =
/*#__PURE__*/
function () {
  function Icon(name, contents) {
    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.attrs = _objectSpread({}, _default_attrs_json__WEBPACK_IMPORTED_MODULE_1__, {
      class: "eva eva-".concat(name)
    });
  }

  _createClass(Icon, [{
    key: "toSvg",
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var animation = attrs.animation,
          remAttrs = _objectWithoutProperties(attrs, ["animation"]);

      var animationOptions = getAnimationOptions(animation);
      var animationClasses = animationOptions ? animationOptions.class : '';

      var combinedAttrs = _objectSpread({}, this.attrs, remAttrs, {
        class: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(this.attrs.class, attrs.class, animationClasses)
      });

      var svg = "<svg ".concat(attrsToString(combinedAttrs), ">").concat(this.contents, "</svg>");
      return !!animationOptions ? animationOptions.hover ? "<i class=\"eva-hover\">".concat(svg, "</i>") : svg : svg;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

function getAnimationOptions(animation) {
  if (!animation) {
    return null;
  }

  if (animation.hover) {
    animation.hover = isString(animation.hover) ? JSON.parse(animation.hover) : animation.hover;
  }

  var mergedAnimationOptions = _objectSpread({}, defaultAnimationOptions, animation);

  var animationType = mergedAnimationOptions.hover ? "eva-icon-hover-".concat(mergedAnimationOptions.type) : "eva-icon-".concat(mergedAnimationOptions.type);
  mergedAnimationOptions.class = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()({
    'eva-animation': true,
    'eva-infinite': isString(animation.infinite) ? JSON.parse(animation.infinite) : animation.infinite
  }, animationType);
  return mergedAnimationOptions;
}

function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return "".concat(key, "=\"").concat(attrs[key], "\"");
  }).join(' ');
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./package/src/icons.js":
/*!******************************!*\
  !*** ./package/src/icons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./package/src/icon.js");
/* harmony import */ var _package_build_eva_icons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package-build/eva-icons.json */ "./package-build/eva-icons.json");
var _package_build_eva_icons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package-build/eva-icons.json */ "./package-build/eva-icons.json", 1);
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object.keys(_package_build_eva_icons_json__WEBPACK_IMPORTED_MODULE_1__).map(function (key) {
  return new _icon__WEBPACK_IMPORTED_MODULE_0__["default"](key, _package_build_eva_icons_json__WEBPACK_IMPORTED_MODULE_1__[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {}));

/***/ }),

/***/ "./package/src/index.js":
/*!******************************!*\
  !*** ./package/src/index.js ***!
  \******************************/
/*! exports provided: icons, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./package/src/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace */ "./package/src/replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _animation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.scss */ "./package/src/animation.scss");
/* harmony import */ var _animation_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





/***/ }),

/***/ "./package/src/replace.js":
/*!********************************!*\
  !*** ./package/src/replace.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./package/src/icons.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var animationKeys = {
  'data-eva-animation': 'type',
  'data-eva-hover': 'hover',
  'data-eva-infinite': 'infinite'
};
var dataAttributesKeys = {
  'data-eva': 'name',
  'data-eva-width': 'width',
  'data-eva-height': 'height',
  'data-eva-fill': 'fill'
};

function replace() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`eva.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-eva]');
  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, options);
  });
}

function replaceElement(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _getAttrs = getAttrs(element),
      name = _getAttrs.name,
      elementAttrs = _objectWithoutProperties(_getAttrs, ["name"]);

  var svgString = _icons__WEBPACK_IMPORTED_MODULE_1__["default"][name].toSvg(_objectSpread({}, options, elementAttrs, {
    animation: getAnimationObject(options.animation, elementAttrs.animation)
  }, {
    class: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(options.class, elementAttrs.class)
  }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'text/html');
  var svgElement = svgDocument.querySelector('.eva-hover') || svgDocument.querySelector('svg');
  element.parentNode.replaceChild(svgElement, element);
}

function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    if (!!animationKeys[attr.name]) {
      attrs['animation'] = _objectSpread({}, attrs['animation'], _defineProperty({}, animationKeys[attr.name], attr.value));
    } else {
      attrs = _objectSpread({}, attrs, getAttr(attr));
    }

    return attrs;
  }, {});
}

function getAttr(attr) {
  if (!!dataAttributesKeys[attr.name]) {
    return _defineProperty({}, dataAttributesKeys[attr.name], attr.value);
  }

  return _defineProperty({}, attr.name, attr.value);
}

function getAnimationObject(optionsAnimation, elementAttrsAnimation) {
  if (optionsAnimation || elementAttrsAnimation) {
    return _objectSpread({}, optionsAnimation, elementAttrsAnimation);
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (replace);

/***/ })

/******/ });
});
//# sourceMappingURL=eva.js.map

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43364990-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EvaIcon.vue?vue&type=template&id=b8f45ea8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"eva-hover"},[_c('svg',{staticClass:"eva eva-animation",class:("eva-icon-hover-" + _vm.animation),attrs:{"xmlns":"http://www.w3.org/2000/svg","width":_vm.width,"height":_vm.height,"viewBox":"0 0 24 24","fill":_vm.fill},domProps:{"innerHTML":_vm._s(_vm.icon)}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EvaIcon.vue?vue&type=template&id=b8f45ea8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/eva-icons/eva.js
var eva = __webpack_require__("66d7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EvaIcon.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EvaIconvue_type_script_lang_js_ = ({
  name: 'EvaIcon',
  props: {
    name: String,
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    animation: String,
    fill: {
      type: String,
      default: 'inherit'
    }
  },
  computed: {
    icon: function icon() {
      if (eva["icons"][this.name]) {
        return eva["icons"][this.name].contents;
      } else {
        console.error('Name of icon is not correct');
        return undefined;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/EvaIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EvaIconvue_type_script_lang_js_ = (EvaIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/EvaIcon.vue





/* normalize component */

var component = normalizeComponent(
  components_EvaIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "EvaIcon.vue"
/* harmony default export */ var EvaIcon = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js


/* harmony default export */ var components = ({
  install: function install(Vue, options) {
    Vue.component(EvaIcon.name, EvaIcon);
  }
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport EvaIcon */__webpack_require__.d(__webpack_exports__, "EvaIcon", function() { return EvaIcon; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=vue-eva.umd.js.map