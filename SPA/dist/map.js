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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLW9iamVjdHMtZGF0YS5qcyJdLCJuYW1lcyI6WyJtYXBPYmplY3RzRGF0YSIsImxhdCIsImxuZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsY0FBYyxHQUFHLENBQ3BCO0FBQ0NDLEtBQUcsRUFBRSxTQUROO0FBRUNDLEtBQUcsRUFBRSxTQUZOO0FBR0NDLE9BQUssRUFBRSxlQUhSO0FBSUNDLGFBQVcsRUFBRSxnSEFKZDtBQUtDQyxTQUFPLEVBQUU7QUFMVixDQURvQixFQVFwQjtBQUNDSixLQUFHLEVBQUUsV0FETjtBQUVDQyxLQUFHLEVBQUUsSUFGTjtBQUdDQyxPQUFLLEVBQUUsZ0JBSFI7QUFJQ0MsYUFBVyxFQUFF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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMvbWFwLW9iamVjdHMtZGF0YS5qc1wiKTtcbiIsInZhciBtYXBPYmplY3RzRGF0YSA9IFtcclxuXHR7XHJcblx0XHRsYXQ6IDU1Ljc1NTgyNixcclxuXHRcdGxuZzogMzcuNjE3MzAwLFxyXG5cdFx0dGl0bGU6ICdNb3Njb3cgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiA0MC4xNjY2NjY2NyxcclxuXHRcdGxuZzogNDQuNSxcclxuXHRcdHRpdGxlOiAnWWVyZXZhbiBvZmZpY2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGFuaW1pIHNpbnQgc2ltaWxpcXVlIGV4cGVkaXRhIG1pbnVzIHF1aXNxdWFtLicsXHJcblx0XHRhZGRyZXNzOiAnQ291bnRyeSwgQ2l0eSwgU3RyZWV0LCBaaXAgQ29kZSwgKzAxIDIgMzQ1NiA3ODknXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYXQ6IDQwLjcxMjc4NCxcclxuXHRcdGxuZzogLTc0LjAwNTk0MSxcclxuXHRcdHRpdGxlOiAnTmV3LVlvcmsgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiA1Mi41MjAwMDcsXHJcblx0XHRsbmc6IDEzLjQwNDk1NCxcclxuXHRcdHRpdGxlOiAnQmVybGluIG9mZmljZScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgYW5pbWkgc2ludCBzaW1pbGlxdWUgZXhwZWRpdGEgbWludXMgcXVpc3F1YW0uJyxcclxuXHRcdGFkZHJlc3M6ICdDb3VudHJ5LCBDaXR5LCBTdHJlZXQsIFppcCBDb2RlLCArMDEgMiAzNDU2IDc4OSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGxhdDogNDguODU2NjE0LFxyXG5cdFx0bG5nOiAyLjM1MjIyMixcclxuXHRcdHRpdGxlOiAnUGFyaXMgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiA0MC40MTY3NzUsXHJcblx0XHRsbmc6IC0zLjcwMzc5MCxcclxuXHRcdHRpdGxlOiAnTWFkcmlkIG9mZmljZScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgYW5pbWkgc2ludCBzaW1pbGlxdWUgZXhwZWRpdGEgbWludXMgcXVpc3F1YW0uJyxcclxuXHRcdGFkZHJlc3M6ICdDb3VudHJ5LCBDaXR5LCBTdHJlZXQsIFppcCBDb2RlLCArMDEgMiAzNDU2IDc4OSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGxhdDogNTMuOSxcclxuXHRcdGxuZzogMjcuNTY2NjY3LFxyXG5cdFx0dGl0bGU6ICdNaW5zayBvZmZpY2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGFuaW1pIHNpbnQgc2ltaWxpcXVlIGV4cGVkaXRhIG1pbnVzIHF1aXNxdWFtLicsXHJcblx0XHRhZGRyZXNzOiAnQ291bnRyeSwgQ2l0eSwgU3RyZWV0LCBaaXAgQ29kZSwgKzAxIDIgMzQ1NiA3ODknXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYXQ6IDUwLjgzMzMzMzMzLFxyXG5cdFx0bG5nOiA0LjMzMzMzMyxcclxuXHRcdHRpdGxlOiAnQnJ1c3NlbHMgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiA0My44NjY2NjY2NyxcclxuXHRcdGxuZzogMTguNDE2NjY3LFxyXG5cdFx0dGl0bGU6ICdTYXJhamV2byBvZmZpY2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGFuaW1pIHNpbnQgc2ltaWxpcXVlIGV4cGVkaXRhIG1pbnVzIHF1aXNxdWFtLicsXHJcblx0XHRhZGRyZXNzOiAnQ291bnRyeSwgQ2l0eSwgU3RyZWV0LCBaaXAgQ29kZSwgKzAxIDIgMzQ1NiA3ODknXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYXQ6IDQyLjY4MzMzMzMzLFxyXG5cdFx0bG5nOiAyMy4zMTY2NjcsXHJcblx0XHR0aXRsZTogJ1NvZmlhIG9mZmljZScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgYW5pbWkgc2ludCBzaW1pbGlxdWUgZXhwZWRpdGEgbWludXMgcXVpc3F1YW0uJyxcclxuXHRcdGFkZHJlc3M6ICdDb3VudHJ5LCBDaXR5LCBTdHJlZXQsIFppcCBDb2RlLCArMDEgMiAzNDU2IDc4OSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGxhdDogNDUuNDE2NjY2NjcsXHJcblx0XHRsbmc6IC03NS43LFxyXG5cdFx0dGl0bGU6ICdPdHRhd2Egb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiA1MS4xNjY2NjY2NyxcclxuXHRcdGxuZzogNzEuNDE2NjY3LFxyXG5cdFx0dGl0bGU6ICdBc3RhbmEgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGF0OiAzOS45MTY2NjY2NyxcclxuXHRcdGxuZzogMTE2LjM4MzMzMyxcclxuXHRcdHRpdGxlOiAnQmVpamluZyBvZmZpY2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGFuaW1pIHNpbnQgc2ltaWxpcXVlIGV4cGVkaXRhIG1pbnVzIHF1aXNxdWFtLicsXHJcblx0XHRhZGRyZXNzOiAnQ291bnRyeSwgQ2l0eSwgU3RyZWV0LCBaaXAgQ29kZSwgKzAxIDIgMzQ1NiA3ODknXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYXQ6IDM2Ljc1LFxyXG5cdFx0bG5nOiAzLjA1LFxyXG5cdFx0dGl0bGU6ICdBbGdpZXJzIG9mZmljZScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdW1xdWUgYW5pbWkgc2ludCBzaW1pbGlxdWUgZXhwZWRpdGEgbWludXMgcXVpc3F1YW0uJyxcclxuXHRcdGFkZHJlc3M6ICdDb3VudHJ5LCBDaXR5LCBTdHJlZXQsIFppcCBDb2RlLCArMDEgMiAzNDU2IDc4OSdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGxhdDogMzAuMDUsXHJcblx0XHRsbmc6IDMxLjI1LFxyXG5cdFx0dGl0bGU6ICdDYWlybyBvZmZpY2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIGFuaW1pIHNpbnQgc2ltaWxpcXVlIGV4cGVkaXRhIG1pbnVzIHF1aXNxdWFtLicsXHJcblx0XHRhZGRyZXNzOiAnQ291bnRyeSwgQ2l0eSwgU3RyZWV0LCBaaXAgQ29kZSwgKzAxIDIgMzQ1NiA3ODknXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYXQ6IDkuMDgzMzMzMzMzLFxyXG5cdFx0bG5nOiA3LjUzMzMzMyxcclxuXHRcdHRpdGxlOiAnQWJ1amEgb2ZmaWNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bXF1ZSBhbmltaSBzaW50IHNpbWlsaXF1ZSBleHBlZGl0YSBtaW51cyBxdWlzcXVhbS4nLFxyXG5cdFx0YWRkcmVzczogJ0NvdW50cnksIENpdHksIFN0cmVldCwgWmlwIENvZGUsICswMSAyIDM0NTYgNzg5J1xyXG5cdH1cclxuXTsiXSwic291cmNlUm9vdCI6IiJ9