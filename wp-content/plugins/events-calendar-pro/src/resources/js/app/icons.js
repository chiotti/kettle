var tribe = typeof tribe === "object" ? tribe : {}; tribe["events-pro"] = tribe["events-pro"] || {}; tribe["events-pro"]["icons"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(8);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./src/modules/icons/arrow.svg
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}


/* harmony default export */ var arrow = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return external_React_default.a.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "13", height: "7" }, props), external_React_default.a.createElement("defs", null, external_React_default.a.createElement("path", { id: "a", d: "M838 653.05l6.5 5.95 6.5-5.95-1.15-1.05-5.35 4.9-5.35-4.9" })), external_React_default.a.createElement("use", { fill: "#12181e", xlinkHref: "#a", transform: "translate(-838 -652)" }));
});
// CONCATENATED MODULE: ./src/modules/icons/trash.svg
var trash_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function trash_objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}


/* harmony default export */ var trash = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = trash_objectWithoutProperties(_ref, ["styles"]);

  return external_React_default.a.createElement("svg", trash_extends({ width: "11", height: "15", xmlns: "http://www.w3.org/2000/svg" }, props), external_React_default.a.createElement("path", { d: "M3.93 1.58h3.14v.79H3.93v-.79zm4.71.79v-.8C8.64.71 7.94 0 7.07 0H3.93c-.87 0-1.57.7-1.57 1.58v.79H0v1.58h11V2.37H8.64zM1.48 13.52c.05.83.74 1.48 1.57 1.48h4.9c.84 0 1.53-.65 1.58-1.48l.55-8.78H.93l.55 8.78z", fill: "#8D949B" }));
});
// CONCATENATED MODULE: ./src/modules/icons/recurrence.svg
var recurrence_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function recurrence_objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}


/* harmony default export */ var recurrence = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = recurrence_objectWithoutProperties(_ref, ["styles"]);

  return external_React_default.a.createElement("svg", recurrence_extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12.66 16.52" }, props), external_React_default.a.createElement("path", { d: "M1.69 4.12h6.45L6.76 5.45 8 6.61l3.43-3.3L8 0 6.76 1.16l1.38 1.32H1.57A1.55 1.55 0 0 0 0 4v7.7a.44.44 0 0 0 .76.3l.94-.88zm10.77.34a.51.51 0 0 0-.67.15l-.79.82v7H4.46l1.38-1.33-1.2-1.19-3.43 3.3 3.43 3.3 1.2-1.16L4.46 14h6.62a1.55 1.55 0 0 0 1.57-1.52V4.89a.42.42 0 0 0-.19-.43z" }));
});
// CONCATENATED MODULE: ./src/modules/icons/related-events-placeholder.svg
var related_events_placeholder_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function related_events_placeholder_objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}


/* harmony default export */ var related_events_placeholder = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = related_events_placeholder_objectWithoutProperties(_ref, ["styles"]);

  return external_React_default.a.createElement("svg", related_events_placeholder_extends({ id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 600 600" }, props), external_React_default.a.createElement("image", { width: "600", height: "600", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAIAAAAxBA+LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0 NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjU2NzVBQzEyMjA2ODExODIyQUQ2NkY1MzVE MzY2RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0E2MjNGQThBODkxMUUyQTM1OUU3MkM1 RjIxOUQyNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0E2MjNGOThBODkxMUUyQTM1OUU3 MkM1RjIxOUQyNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRv c2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY1Njc1 QUMxMjIwNjgxMTgyMkFENjZGNTM1RDM2NkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY1 Njc1QUMxMjIwNjgxMTgyMkFENjZGNTM1RDM2NkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm OlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4JkuExAAALZUlEQVR42uzdUW8S 2xqA4T1DB4gFNaVGJW2MiTHp//8xJMak9sK2Y6GRtjTQAWaveHVOthvYnnGfNcPzXDS9mJDVj1m8 A61jkuf5HwCwrxIhBEAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAI AUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAI AUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIARBCIQRA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAEQQgAQQgAQQgAQQgAQQgAQQgAQ QgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQ QgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQpqjLMvxeFzVo7169cpIq3Vz c1PVQx0fHydJYqTEIDUCAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQ AIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQ AIQQAIQQACqV5HluCvujLMunp6eiKNbrdfg+utMxSRaLRVWP1m63PePVCidPVQ/V6XTiPAPTNM2y LJw84XvPuBDSKA8PD9+/f5/NZiGB0S4yvAC9ePGiquRPJhPPe7UGg0FVeZhOp+GCLNqfNOTw8PDw 5cuXvV7P8954B0bQePP5/OrqKnw1CthRuF68/6Hb7b59+zZ8NZMG8zvChru9vf3y5YsKwi9fR4Yd FPaRUXhHSC2Nx+ObmxtzgP9FWZZ5nof3iMfHx6bhHSF1Mp1OVRCqEnZT2FPmIITURlEU19fX5gAV Cnsq5j/wQQj5L9++fYv5r0OhjsKeCjvLHISQerwdvLu7MweoXNhZ3hQKIfXYq4YA9hdCuL9ms5kh gP2FEO6vCu9SBthfQkj9LJdLQwD7CyEEACEEACEEACEEACEEACEEACEEACEEQAiNAAAhBAAhBAAh BAAhhP+PsiwNwXMN/7IDIyAey+VyPB6bQ7Qmk4kh4B0hAAghAAghAAghAAghAAghAAghAAghAAgh AAghAAghAETMvUYbaDgcGgLAjpI8z00BACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEk VkVRGAL8PlmWGUKTuOl2A33+/NkQ4Pc5OzszhCbx3zABIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQA IIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAEI8DI2CDd+/edTqd 2FZ1fX19d3e39bCPHz9GONKLi4vFYrH5mDDzMPkIF//p06etxzx//vzNmzexrTzMPEzejkYI+eef GKRpq9WKbVVJkuxyWIQr33Hx4Zg4F7/jDxjh4sOZbDvzt6eHEQAghAAghAAghAAghAAghAAghAAg hAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAg hAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAg hAAghAAghADwFwdGwAZXV1dpGt3V0tPT0y6HXVxcRDjSXRYfjolz8buYzWYRLn69XtvOCCG/Yj6f 13fxj4+PNV15eNWu7+KXP9g71IiPRgEQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgBoGrdYY+P5 cXCQJElsq1qtVrvcOjLLsghHulwuy7LcfEyYeZh8hIsvimL7xXWatlqt2FYeZu7Gbwghv+L09LTb 7ca2qsvLy+l0uvWwDx8+RDjS8/PzrXdw7XQ679+/j3Dxo9Fo6zH9fn84HMa28jDzMHk7mp9fvRkB AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEII AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEII AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAP8pyfPcFBpmNBpVdqGUxnipVP5Q08Wv1+v6 Tn6XxSc/1Hfyuzg7O/M60yQHRsC/89ph8Xuy+B0vUyAePhoFQAgBQAgBQAgBQAgBQAgBQAgBQAgB QAgBQAgBoGncYo1Nnj171mq1YlvVfD4vimLrYf1+P8KRzmazrbdPS9P08PAwwsXf399vPSbLsm63 G9vKV6vV4+OjHY0Q8o+9fv06whe1y8vL6XS69bCTk5MIR3p+fh5CvvmYdrsd5+J3uZ97uHgaDocR XjyFydvR/PzS0wgAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA EEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA EEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA+IsDI2CD5XJZFEVsq1qv17sc FuHKg7IsdzkmzsXv+OxEuPhwJtvO/J0kz3NTaJjRaGQI8PucnZ0ZQpP4aBQAIQQAIQQAIQQAIQQA IQQAIQQAIQQAIQQAIQQAIQQAIQQAISRSSZIYAthfCOH+yrLMEMD+Qgj3V7fbNQSwvxDC/dXr9QwB 7C+EcH/1+/1Wq2UOULmws8L+MgchJPonNU2Pjo7MASoXdlbYX+YghNTAYDBot9vmABUKeyrsLHMQ QuohSZKTkxOXrlDZa2Wahj3l304IIXXS6XROT0+1ECqpYNhNYU8ZRTPfOeR5bgoNtlgsvn79Gr4a Bfyadrsd3guqoBBSY2VZTiaT29vb1WplGrC7Vqt1dHQ0GAx8IiqENMF6vb6/v394eJjP50VRhDqa CfzkNTFJsizrdru9Xq/f7/vlghACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBAC gBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBAC gBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACIIRCCIAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAiCEpgCAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKA EAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKA EAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEALARn8KMAB8 qgpVr8O+4QAAAABJRU5ErkJggg==", overflow: "visible" }), external_React_default.a.createElement("path", { className: styles["st0"] || "st0", d: "M445 218H157v-22c0-8.28 6.72-15 15-15h258c8.28 0 15 6.72 15 15v22z" }), external_React_default.a.createElement("path", { className: styles["st1"] || "st1", d: "M356 142h26v65h-26zM219 142h26v65h-26z" }), external_React_default.a.createElement("path", { className: styles["st0"] || "st0", d: "M157 231v210c0 8.28 6.72 15 15 15h258c8.28 0 15-6.72 15-15V231H157zm75 201.66h-51.21v-51.21H232v51.21zm0-63.56h-51.21v-51.2H232v51.2zm0-62.08h-51.21v-51.21H232v51.21zm62.21 125.64H243v-51.21h51.21v51.21zm0-62.56H243v-51.2h51.21v51.2zm0-63.12H243v-51.21h51.21v51.21zm63.23 125.68h-51.21v-51.21h51.21v51.21zm0-62.56h-51.21v-51.2h51.21v51.2zm0-63.12h-51.21v-51.21h51.21v51.21zm63.22 124.93h-51.21V380.7h51.21v51.21zm0-61.81h-51.21v-51.2h51.21v51.2zm0-63.12h-51.21v-51.21h51.21v51.21z" }));
});
// CONCATENATED MODULE: ./src/modules/icons/index.js
/* concated harmony reexport Arrow */__webpack_require__.d(__webpack_exports__, "Arrow", function() { return arrow; });
/* concated harmony reexport Trash */__webpack_require__.d(__webpack_exports__, "Trash", function() { return trash; });
/* concated harmony reexport Recurrence */__webpack_require__.d(__webpack_exports__, "Recurrence", function() { return recurrence; });
/* concated harmony reexport RelatedEvents */__webpack_require__.d(__webpack_exports__, "RelatedEvents", function() { return related_events_placeholder; });





/***/ })

/******/ });