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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/map-objects-data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/map-objects-data.js":
/*!*****************************************!*\
  !*** ./src/scripts/map-objects-data.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mapObjectsData = [{
  lat: 55.755826,
  lng: 37.617300,
  title: 'Moscow office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 40.16666667,
  lng: 44.5,
  title: 'Yerevan office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 40.712784,
  lng: -74.005941,
  title: 'New-York office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 52.520007,
  lng: 13.404954,
  title: 'Berlin office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 48.856614,
  lng: 2.352222,
  title: 'Paris office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 40.416775,
  lng: -3.703790,
  title: 'Madrid office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 53.9,
  lng: 27.566667,
  title: 'Minsk office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 50.83333333,
  lng: 4.333333,
  title: 'Brussels office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 43.86666667,
  lng: 18.416667,
  title: 'Sarajevo office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 42.68333333,
  lng: 23.316667,
  title: 'Sofia office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 45.41666667,
  lng: -75.7,
  title: 'Ottawa office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 51.16666667,
  lng: 71.416667,
  title: 'Astana office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 39.91666667,
  lng: 116.383333,
  title: 'Beijing office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 36.75,
  lng: 3.05,
  title: 'Algiers office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 30.05,
  lng: 31.25,
  title: 'Cairo office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}, {
  lat: 9.083333333,
  lng: 7.533333,
  title: 'Abuja office',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque animi sint similique expedita minus quisquam.',
  address: 'Country, City, Street, Zip Code, +01 2 3456 789'
}];

/***/ })

/******/ });
//# sourceMappingURL=map.js.map