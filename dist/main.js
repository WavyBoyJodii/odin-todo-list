/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  background-color: #d3ebe0;\n  padding: 50px;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 400px 1000px 400px;\n  grid-template-rows: 270px 100px 800px 370px;\n  grid-template-areas:\n    'header header header'\n    '. . .'\n    'projects todo .'\n    'footer footer footer';\n  justify-content: center;\n  align-content: center;\n}\n\n#case {\n  grid-area: todo;\n  background-color: #ffffff;\n  max-height: 650px;\n  height: 100%;\n  max-width: 1000px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #42966f;\n  /* border-radius: 40px; */\n  box-shadow: 0px 5px 12px -6px rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n\n#case::before {\n  content: '';\n  position: absolute;\n  bottom: -50px;\n  left: 5%;\n  width: 90%;\n  height: 30px;\n  background: rgba(78, 78, 78, 0.35);\n  border-radius: 50%;\n  filter: blur(10px);\n}\n\n.frameHead {\n  background-color: #4974df;\n  max-height: 100px;\n  font-size: larger;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  /* border-bottom: solid 1px black; */\n  /* border-radius: 40px; */\n  width: 100%;\n  gap: 30px;\n  font-size: 30px;\n  margin: 0;\n}\n\n.frameHeadArt {\n  height: 40px;\n  margin-left: 15px;\n}\n\n.frameBody {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px;\n  grid-auto-rows: 80px;\n  row-gap: 10px;\n  padding: 30px;\n  justify-content: center;\n  align-content: center;\n}\n\n.frameBodyTodo {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n}\n\n.newToDoButton {\n  height: 40px;\n  width: 90px;\n  background-color: #42966f;\n  transition: all 0.2s ease-in-out;\n}\n\n.newToDoButton:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 15px 500px 40px 40px 15px 15px;\n  column-gap: 8px;\n  padding: 5px;\n  border: 1px solid #4974df;\n  background-color: #e0e0e0;\n  transition: all 0.2s ease-in-out;\n}\n\n.todo:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.projectFrame {\n  grid-area: projects;\n  max-height: 650px;\n  height: 100%;\n  max-width: 300px;\n  width: 100%;\n  border: 2px solid #42966f;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n  display: grid;\n  grid-template-columns: 250px;\n  grid-template-rows: 80px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'projectList'\n    'projectButton';\n  justify-content: center;\n  align-content: center;\n  padding: 30px;\n  background-color: #ffffff;\n  color: #4974df;\n}\n\n.projectHeader {\n  font-size: larger;\n  font-weight: bold;\n  margin: auto;\n  grid-area: header;\n}\n\n.projectBody {\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px;\n  grid-auto-rows: 80px;\n  row-gap: 10px;\n  grid-area: projectList;\n}\n\n.projectList {\n  color: black;\n  transition: all 0.2s ease-in-out;\n}\n\n.projectList:hover {\n  transform: scale(1.1);\n}\n\n.projectButton {\n  grid-area: projectButton;\n}\n\n.todoForm {\n  width: 400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.form-title {\n  height: 30px;\n}\n.radios {\n  /* display: none; */\n}\n\n.priority-row {\n  display: flex;\n  gap: 25px;\n}\n.priorities {\n  text-align: center;\n  width: 70px;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.35);\n  padding: 5px;\n  border: 1px solid black;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.priorities:hover {\n  transform: scale(1.1);\n}\n\n.priority-row input[type='radio']:checked + .priorities {\n  border: 2px solid #4974df;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,aAAa;EACb,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,2CAA2C;EAC3C;;;;0BAIwB;EACxB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,yBAAyB;EACzB,gDAAgD;EAChD,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;EACpC,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,wBAAwB;EACxB,oBAAoB;EACpB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,SAAS;EACT,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;EACrB,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,qDAAqD;EACrD,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;EACrB,+CAA+C;AACjD;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,aAAa;EACb,4BAA4B;EAC5B,kCAAkC;EAClC;;;mBAGiB;EACjB,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,oBAAoB;EACpB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,iDAAiD;EACjD,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  background-color: #d3ebe0;\n  padding: 50px;\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 400px 1000px 400px;\n  grid-template-rows: 270px 100px 800px 370px;\n  grid-template-areas:\n    'header header header'\n    '. . .'\n    'projects todo .'\n    'footer footer footer';\n  justify-content: center;\n  align-content: center;\n}\n\n#case {\n  grid-area: todo;\n  background-color: #ffffff;\n  max-height: 650px;\n  height: 100%;\n  max-width: 1000px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #42966f;\n  /* border-radius: 40px; */\n  box-shadow: 0px 5px 12px -6px rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n\n#case::before {\n  content: '';\n  position: absolute;\n  bottom: -50px;\n  left: 5%;\n  width: 90%;\n  height: 30px;\n  background: rgba(78, 78, 78, 0.35);\n  border-radius: 50%;\n  filter: blur(10px);\n}\n\n.frameHead {\n  background-color: #4974df;\n  max-height: 100px;\n  font-size: larger;\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  /* border-bottom: solid 1px black; */\n  /* border-radius: 40px; */\n  width: 100%;\n  gap: 30px;\n  font-size: 30px;\n  margin: 0;\n}\n\n.frameHeadArt {\n  height: 40px;\n  margin-left: 15px;\n}\n\n.frameBody {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px;\n  grid-auto-rows: 80px;\n  row-gap: 10px;\n  padding: 30px;\n  justify-content: center;\n  align-content: center;\n}\n\n.frameBodyTodo {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n}\n\n.newToDoButton {\n  height: 40px;\n  width: 90px;\n  background-color: #42966f;\n  transition: all 0.2s ease-in-out;\n}\n\n.newToDoButton:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 15px 500px 40px 40px 15px 15px;\n  column-gap: 8px;\n  padding: 5px;\n  border: 1px solid #4974df;\n  background-color: #e0e0e0;\n  transition: all 0.2s ease-in-out;\n}\n\n.todo:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.projectFrame {\n  grid-area: projects;\n  max-height: 650px;\n  height: 100%;\n  max-width: 300px;\n  width: 100%;\n  border: 2px solid #42966f;\n  border-top-right-radius: 40px;\n  border-bottom-right-radius: 40px;\n  display: grid;\n  grid-template-columns: 250px;\n  grid-template-rows: 80px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'projectList'\n    'projectButton';\n  justify-content: center;\n  align-content: center;\n  padding: 30px;\n  background-color: #ffffff;\n  color: #4974df;\n}\n\n.projectHeader {\n  font-size: larger;\n  font-weight: bold;\n  margin: auto;\n  grid-area: header;\n}\n\n.projectBody {\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px;\n  grid-auto-rows: 80px;\n  row-gap: 10px;\n  grid-area: projectList;\n}\n\n.projectList {\n  color: black;\n  transition: all 0.2s ease-in-out;\n}\n\n.projectList:hover {\n  transform: scale(1.1);\n}\n\n.projectButton {\n  grid-area: projectButton;\n}\n\n.todoForm {\n  width: 400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.form-title {\n  height: 30px;\n}\n.radios {\n  /* display: none; */\n}\n\n.priority-row {\n  display: flex;\n  gap: 25px;\n}\n.priorities {\n  text-align: center;\n  width: 70px;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.35);\n  padding: 5px;\n  border: 1px solid black;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.priorities:hover {\n  transform: scale(1.1);\n}\n\n.priority-row input[type='radio']:checked + .priorities {\n  border: 2px solid #4974df;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initToDoForm": () => (/* binding */ initToDoForm),
/* harmony export */   "priorityValue": () => (/* binding */ priorityValue)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _img_clipboard_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/clipboard.png */ "./src/img/clipboard.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _unappend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unappend */ "./src/unappend.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const priorityValue = function displayRadioValue() {
  const ele = document.getElementsByName('priority');
  for (let i = 0; i < ele.length; i += 1) {
    if (ele[i].checked) {
      const answer = ele[i].value;
      console.log(`this is the priority level ${answer}`);
      return answer;
    }
  }
};

const initToDoForm = () => {
  const toDoForm = document.createElement('form');
  toDoForm.setAttribute('method', 'post');
  toDoForm.setAttribute('action', 'example.com/path');
  toDoForm.classList.add('todoForm');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  title.setAttribute('required', '');
  title.setAttribute('placeholder', 'Title: Wash Dishes');
  title.classList.add('form-title');

  const description = document.createElement('textarea');
  description.setAttribute('rows', '20');
  description.setAttribute('cols', '400');
  description.setAttribute(
    'placeholder',
    'Details: ex. there are 3 plates and 1 pot in the sink that are mine to wash...'
  );

  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('required', '');

  const priorityRow = document.createElement('div');
  priorityRow.classList.add('priority-row');

  const lowPriorityLabel = document.createElement('label');
  lowPriorityLabel.setAttribute('for', 'low');
  lowPriorityLabel.textContent = 'Low';
  lowPriorityLabel.dataset.rank = 'lowP';
  lowPriorityLabel.classList.add('priorities');
  const lowPriorityRadio = document.createElement('input');
  lowPriorityRadio.setAttribute('type', 'radio');
  lowPriorityRadio.setAttribute('id', 'low');
  lowPriorityRadio.setAttribute('name', 'priority');
  lowPriorityRadio.setAttribute('value', 'low');
  // lowPriorityRadio.checked = true;
  lowPriorityRadio.classList.add('radios');

  const midPriorityLabel = document.createElement('label');
  midPriorityLabel.setAttribute('for', 'mid');
  midPriorityLabel.textContent = 'Mid';
  midPriorityLabel.dataset.rank = 'midP';
  midPriorityLabel.classList.add('priorities');
  const midPriorityRadio = document.createElement('input');
  midPriorityRadio.setAttribute('type', 'radio');
  midPriorityRadio.setAttribute('id', 'mid');
  midPriorityRadio.setAttribute('name', 'priority');
  midPriorityRadio.setAttribute('value', 'mid');
  midPriorityRadio.classList.add('radios');

  const highPriorityLabel = document.createElement('label');
  highPriorityLabel.setAttribute('for', 'high');
  highPriorityLabel.textContent = 'High';
  highPriorityLabel.dataset.rank = 'highP';
  highPriorityLabel.classList.add('priorities');
  const highPriorityRadio = document.createElement('input');
  highPriorityRadio.setAttribute('type', 'radio');
  highPriorityRadio.setAttribute('id', 'high');
  highPriorityRadio.setAttribute('name', 'priority');
  highPriorityRadio.setAttribute('value', 'high');
  highPriorityRadio.classList.add('radios');

  const createToDo = (event) => {
    event.PreventDefault();
    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.makeTodo)(
      title.value,
      description.value,
      date.value,
      priorityValue()
    );
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.checkChosenProject)(todo);
    (0,_unappend__WEBPACK_IMPORTED_MODULE_4__.openTodoDisplay)();
  };

  const toDoSubmit = document.createElement('button');
  toDoSubmit.textContent = 'Make To Do';
  toDoSubmit.addEventListener('click', createToDo);

  priorityRow.append(
    lowPriorityLabel,
    lowPriorityRadio,
    midPriorityLabel,
    midPriorityRadio,
    highPriorityLabel,
    highPriorityRadio
  );
  toDoForm.append(title, description, date, priorityRow, toDoSubmit);
  ___WEBPACK_IMPORTED_MODULE_3__.frameBody.classList.add('frameBodyTodo');
  ___WEBPACK_IMPORTED_MODULE_3__.frameBody.append(toDoForm);
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "frame": () => (/* binding */ frame),
/* harmony export */   "frameBody": () => (/* binding */ frameBody),
/* harmony export */   "frameHeader": () => (/* binding */ frameHeader),
/* harmony export */   "newToDoButton": () => (/* binding */ newToDoButton),
/* harmony export */   "projectBody": () => (/* binding */ projectBody),
/* harmony export */   "projectFrame": () => (/* binding */ projectFrame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");



const contentDiv = document.getElementById('content');
const frame = document.createElement('div');
const frameHeader = document.createElement('div');
const frameBody = document.createElement('div');
const projectFrame = document.createElement('div');
const projectBody = document.createElement('div');
const newToDoButton = document.createElement('button');

(0,_page__WEBPACK_IMPORTED_MODULE_1__.initPage)();


/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "initFrame": () => (/* binding */ initFrame),
/* harmony export */   "initNewToDo": () => (/* binding */ initNewToDo),
/* harmony export */   "initPage": () => (/* binding */ initPage),
/* harmony export */   "initProjectFrame": () => (/* binding */ initProjectFrame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_clipboard_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/clipboard.png */ "./src/img/clipboard.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _unappend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unappend */ "./src/unappend.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/projects.js");







// export const initPage = () => {
//   frame.id = 'case';
//   frameHeader.classList.add('frameHead');
//   const clipboardArt = new Image();
//   clipboardArt.src = clipboard;
//   clipboardArt.classList.add('frameHeadArt');

//   const frameTitle = document.createElement('p');
//   frameTitle.textContent = 'To Do';

//   frameHeader.append(clipboardArt, frameTitle);

//   frameBody.classList.add('frameBody');

//   newToDoButton.classList.add('newToDoButton');
//   newToDoButton.textContent = 'New To Do';
//   newToDoButton.addEventListener('click', initToDoForm);

//   frame.append(frameHeader, frameBody, newToDoButton);

//   projectFrame.classList.add('projectFrame');

//   contentDiv.append(frame, projectFrame);
// };

const initFrame = () => {
  ___WEBPACK_IMPORTED_MODULE_2__.frame.id = 'case';
  ___WEBPACK_IMPORTED_MODULE_2__.frameHeader.classList.add('frameHead');
  const clipboardArt = new Image();
  clipboardArt.src = _img_clipboard_png__WEBPACK_IMPORTED_MODULE_1__;
  clipboardArt.classList.add('frameHeadArt');

  const frameTitle = document.createElement('p');
  frameTitle.textContent = 'To Do';

  ___WEBPACK_IMPORTED_MODULE_2__.frameHeader.append(clipboardArt, frameTitle);

  ___WEBPACK_IMPORTED_MODULE_2__.frameBody.classList.add('frameBody');
  ___WEBPACK_IMPORTED_MODULE_2__.frame.append(___WEBPACK_IMPORTED_MODULE_2__.frameHeader, ___WEBPACK_IMPORTED_MODULE_2__.frameBody);
  ___WEBPACK_IMPORTED_MODULE_2__.contentDiv.append(___WEBPACK_IMPORTED_MODULE_2__.frame);
};

const initNewToDo = () => {
  ___WEBPACK_IMPORTED_MODULE_2__.newToDoButton.classList.add('newToDoButton');
  ___WEBPACK_IMPORTED_MODULE_2__.newToDoButton.textContent = 'New To Do';
  ___WEBPACK_IMPORTED_MODULE_2__.newToDoButton.addEventListener('click', _unappend__WEBPACK_IMPORTED_MODULE_4__.openTodoForm);

  ___WEBPACK_IMPORTED_MODULE_2__.frame.append(___WEBPACK_IMPORTED_MODULE_2__.newToDoButton);
};

const initProjectFrame = () => {
  ___WEBPACK_IMPORTED_MODULE_2__.projectFrame.classList.add('projectFrame');
  ___WEBPACK_IMPORTED_MODULE_2__.projectBody.classList.add('projectBody');
  ___WEBPACK_IMPORTED_MODULE_2__.projectFrame.append(___WEBPACK_IMPORTED_MODULE_2__.projectBody);
  ___WEBPACK_IMPORTED_MODULE_2__.contentDiv.append(___WEBPACK_IMPORTED_MODULE_2__.projectFrame);
  displayProjects(_projects__WEBPACK_IMPORTED_MODULE_5__.projectslist);
};

const displayProjects = (obj) => {
  for (const project of obj) {
    const disp = document.createElement('p');
    disp.textContent = `${project.title}`;
    disp.classList.add('projectList');
    ___WEBPACK_IMPORTED_MODULE_2__.projectBody.append(disp);
  }
};

const displayTodo = (obj) => {
  // for (const todo of obj.list) {
  obj.forEach((todo) => {
    if (todo === 'list') {
      const disp = document.createElement('div');
      disp.classList.add('todo');
      todo.forEach((item) => {
        if (item === 'title') {
          const title = document.createElement('p');
          title.textContent = `${todo[item]}`;
          title.classList.add('title-todo');
          disp.append(title);
        }
        if (item === 'description') {
          const description = document.createElement('button');
          description.textContent = `Details`;
          description.classList.add('desc-todo');
          disp.append(description);
        }
        if (item === 'date') {
          const date = document.createElement('p');
          const inputDate = new Date(todo[item]);
          date.textContent = `${inputDate}`;
          date.classList.add('date-todo');
          disp.append(date);
        }
        if (item === 'priority') {
          const priority = document.createElement('div');
          if (todo[item] === 'low') {
            priority.classList.add('low-priority-div');
          } else if (todo[item] === 'mid') {
            priority.classList.add('mid-priority-div');
          } else priority.classList.add('high-priority-div');
          disp.append(priority);
        }
        if (item === 'checked') {
          const checkbox = document.createElement('div');
          checkbox.classList.add('checkbox-todo');
          disp.append(checkbox);
        }
      });
      ___WEBPACK_IMPORTED_MODULE_2__.frameBody.append(disp);
    }
  });
};

const initPage = () => {
  initFrame();
  initNewToDo();
  initProjectFrame();
  displayTodo((0,_projects__WEBPACK_IMPORTED_MODULE_5__.whichProject)());
};


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProject": () => (/* binding */ addToProject),
/* harmony export */   "checkChosenProject": () => (/* binding */ checkChosenProject),
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "makeNewProject": () => (/* binding */ makeNewProject),
/* harmony export */   "projectslist": () => (/* binding */ projectslist),
/* harmony export */   "updateChosenProject": () => (/* binding */ updateChosenProject),
/* harmony export */   "whichProject": () => (/* binding */ whichProject)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const buyGroceries = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.makeTodo)(
  'Buy Groceries',
  'Need fruits and veggies',
  '2023-11-17',
  'high'
);

const defaultProject = {
  title: 'default',
  list: [buyGroceries],
};

const projectslist = [defaultProject];

let chosenProject = '';

const Project = (title) => {
  const list = [];
  return { title, list };
};

const makeNewProject = (name) => {
  const project = Project(name);
  projectslist.push(project);
  return project;
};

const addToProject = (todoItem, x) => {
  x.list.push(todoItem);
};

const checkChosenProject = (x) => {
  if (chosenProject === '') {
    addToProject(x, defaultProject);
  } else {
    addToProject(x, chosenProject);
  }
};

const whichProject = () => {
  if (chosenProject === '') {
    chosenProject = defaultProject;
  } else {
    return chosenProject;
  }
};

const updateChosenProject = (x) => {
  const index = projectslist.findIndex((project) => project.title === x.title);
  console.log(x);
  console.log(index);
  chosenProject = projectslist[index];
};


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodo": () => (/* binding */ makeTodo)
/* harmony export */ });
// const ToDo = (title, description, date, priority) => {
//   let checked = false;
//   const toggleChecked = () => {
//     checked === false ? (checked = true) : (checked = false);
//   };
//   return { title, description, date, priority, checked, toggleChecked };
// };
class ToDo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = false;
  }

  togglechecked() {
    if (this.checked === false) {
      return (this.checked = true);
    }
    return (this.checked = false);
  }
}

// export const makeTodo = (titleValue, descValue, dateValue, priorityValue) => {
//   const task = ToDo(titleValue, descValue, dateValue, priorityValue);
//   return task;
// };

const makeTodo = () => new ToDo();


/***/ }),

/***/ "./src/unappend.js":
/*!*************************!*\
  !*** ./src/unappend.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openTodoDisplay": () => (/* binding */ openTodoDisplay),
/* harmony export */   "openTodoForm": () => (/* binding */ openTodoForm)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.js");




function clearFrameBody() {
  ___WEBPACK_IMPORTED_MODULE_1__.frameBody.replaceChildren();
}

function unappendAll() {
  ___WEBPACK_IMPORTED_MODULE_1__.frame.replaceChildren();
}

function removeNewTodo() {
  ___WEBPACK_IMPORTED_MODULE_1__.newToDoButton.remove();
}

function openTodoForm() {
  ___WEBPACK_IMPORTED_MODULE_1__.frameBody.className = '';
  clearFrameBody();
  removeNewTodo();
  (0,_forms__WEBPACK_IMPORTED_MODULE_0__.initToDoForm)();
}

function openTodoDisplay() {
  ___WEBPACK_IMPORTED_MODULE_1__.frameBody.className = '';
  clearFrameBody();
  (0,_page__WEBPACK_IMPORTED_MODULE_2__.displayTodo)();
}


/***/ }),

/***/ "./src/img/clipboard.png":
/*!*******************************!*\
  !*** ./src/img/clipboard.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "440559eff2fc12627832.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQLEVBQUUsa0RBQW1CO0FBQ3JCO0FBQ0EsRUFBRSxrREFBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy91bmFwcGVuZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlYmUwO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxMDAwcHggNDAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI3MHB4IDEwMHB4IDgwMHB4IDM3MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnLiAuIC4nXFxuICAgICdwcm9qZWN0cyB0b2RvIC4nXFxuICAgICdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Nhc2Uge1xcbiAgZ3JpZC1hcmVhOiB0b2RvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzQyOTY2ZjtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDQwcHg7ICovXFxuICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Nhc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7XFxuICBsZWZ0OiA1JTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDc4LCA3OCwgNzgsIDAuMzUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uZnJhbWVIZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTc0ZGY7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogNDBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZnJhbWVIZWFkQXJ0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uZnJhbWVCb2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA4MHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lQm9keVRvZG8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmV3VG9Eb0J1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjk2NmY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ld1RvRG9CdXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggNTAwcHggNDBweCA0MHB4IDE1cHggMTVweDtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OTc0ZGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucHJvamVjdEZyYW1lIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XFxuICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Mjk2NmY7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDEwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlcidcXG4gICAgJ3Byb2plY3RMaXN0J1xcbiAgICAncHJvamVjdEJ1dHRvbic7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICM0OTc0ZGY7XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLnByb2plY3RCb2R5IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDgwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0TGlzdDtcXG59XFxuXFxuLnByb2plY3RMaXN0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdExpc3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IHByb2plY3RCdXR0b247XFxufVxcblxcbi50b2RvRm9ybSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucmFkaW9zIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi5wcmlvcml0eS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuLnByaW9yaXRpZXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByaW9yaXRpZXM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJpb3JpdHktcm93IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIC5wcmlvcml0aWVzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OTc0ZGY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLDJDQUEyQztFQUMzQzs7OzswQkFJd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDOzs7bUJBR2lCO0VBQ2pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlYmUwO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxMDAwcHggNDAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI3MHB4IDEwMHB4IDgwMHB4IDM3MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnLiAuIC4nXFxuICAgICdwcm9qZWN0cyB0b2RvIC4nXFxuICAgICdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Nhc2Uge1xcbiAgZ3JpZC1hcmVhOiB0b2RvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzQyOTY2ZjtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDQwcHg7ICovXFxuICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Nhc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7XFxuICBsZWZ0OiA1JTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDc4LCA3OCwgNzgsIDAuMzUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uZnJhbWVIZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTc0ZGY7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogNDBweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZnJhbWVIZWFkQXJ0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uZnJhbWVCb2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA4MHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lQm9keVRvZG8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmV3VG9Eb0J1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjk2NmY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ld1RvRG9CdXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggNTAwcHggNDBweCA0MHB4IDE1cHggMTVweDtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OTc0ZGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucHJvamVjdEZyYW1lIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XFxuICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Mjk2NmY7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDEwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlcidcXG4gICAgJ3Byb2plY3RMaXN0J1xcbiAgICAncHJvamVjdEJ1dHRvbic7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICM0OTc0ZGY7XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLnByb2plY3RCb2R5IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDgwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0TGlzdDtcXG59XFxuXFxuLnByb2plY3RMaXN0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdExpc3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IHByb2plY3RCdXR0b247XFxufVxcblxcbi50b2RvRm9ybSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucmFkaW9zIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi5wcmlvcml0eS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuLnByaW9yaXRpZXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByaW9yaXRpZXM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJpb3JpdHktcm93IGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIC5wcmlvcml0aWVzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OTc0ZGY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBtYWtlVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3QsIHByb2plY3RzbGlzdCwgY2hlY2tDaG9zZW5Qcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgY2xpcGJvYXJkIGZyb20gJy4vaW1nL2NsaXBib2FyZC5wbmcnO1xuaW1wb3J0IHtcbiAgY29udGVudERpdixcbiAgZnJhbWUsXG4gIHByb2plY3RGcmFtZSxcbiAgZnJhbWVIZWFkZXIsXG4gIGZyYW1lQm9keSxcbiAgbmV3VG9Eb0J1dHRvbixcbn0gZnJvbSAnLic7XG5pbXBvcnQgeyBvcGVuVG9kb0Rpc3BsYXkgfSBmcm9tICcuL3VuYXBwZW5kJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZWxlW2ldLmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IGVsZVtpXS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKGB0aGlzIGlzIHRoZSBwcmlvcml0eSBsZXZlbCAke2Fuc3dlcn1gKTtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFRvRG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9Eb0Zvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICB0b0RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdleGFtcGxlLmNvbS9wYXRoJyk7XG4gIHRvRG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiBXYXNoIERpc2hlcycpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMjAnKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjb2xzJywgJzQwMCcpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXG4gICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAnRGV0YWlsczogZXguIHRoZXJlIGFyZSAzIHBsYXRlcyBhbmQgMSBwb3QgaW4gdGhlIHNpbmsgdGhhdCBhcmUgbWluZSB0byB3YXNoLi4uJ1xuICApO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gIGNvbnN0IHByaW9yaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Um93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXJvdycpO1xuXG4gIGNvbnN0IGxvd1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvdycpO1xuICBsb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIGxvd1ByaW9yaXR5TGFiZWwuZGF0YXNldC5yYW5rID0gJ2xvd1AnO1xuICBsb3dQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXRpZXMnKTtcbiAgY29uc3QgbG93UHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxvd1ByaW9yaXR5UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIGxvd1ByaW9yaXR5UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsICdsb3cnKTtcbiAgbG93UHJpb3JpdHlSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgbG93UHJpb3JpdHlSYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAvLyBsb3dQcmlvcml0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICBsb3dQcmlvcml0eVJhZGlvLmNsYXNzTGlzdC5hZGQoJ3JhZGlvcycpO1xuXG4gIGNvbnN0IG1pZFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBtaWRQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21pZCcpO1xuICBtaWRQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ01pZCc7XG4gIG1pZFByaW9yaXR5TGFiZWwuZGF0YXNldC5yYW5rID0gJ21pZFAnO1xuICBtaWRQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXRpZXMnKTtcbiAgY29uc3QgbWlkUHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG1pZFByaW9yaXR5UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIG1pZFByaW9yaXR5UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsICdtaWQnKTtcbiAgbWlkUHJpb3JpdHlSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgbWlkUHJpb3JpdHlSYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21pZCcpO1xuICBtaWRQcmlvcml0eVJhZGlvLmNsYXNzTGlzdC5hZGQoJ3JhZGlvcycpO1xuXG4gIGNvbnN0IGhpZ2hQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaGlnaFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnaGlnaCcpO1xuICBoaWdoUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgaGlnaFByaW9yaXR5TGFiZWwuZGF0YXNldC5yYW5rID0gJ2hpZ2hQJztcbiAgaGlnaFByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdGllcycpO1xuICBjb25zdCBoaWdoUHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGhpZ2hQcmlvcml0eVJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBoaWdoUHJpb3JpdHlSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZ2gnKTtcbiAgaGlnaFByaW9yaXR5UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIGhpZ2hQcmlvcml0eVJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICBoaWdoUHJpb3JpdHlSYWRpby5jbGFzc0xpc3QuYWRkKCdyYWRpb3MnKTtcblxuICBjb25zdCBjcmVhdGVUb0RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuUHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvID0gbWFrZVRvZG8oXG4gICAgICB0aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5VmFsdWUoKVxuICAgICk7XG4gICAgY2hlY2tDaG9zZW5Qcm9qZWN0KHRvZG8pO1xuICAgIG9wZW5Ub2RvRGlzcGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9Eb1N1Ym1pdC50ZXh0Q29udGVudCA9ICdNYWtlIFRvIERvJztcbiAgdG9Eb1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvRG8pO1xuXG4gIHByaW9yaXR5Um93LmFwcGVuZChcbiAgICBsb3dQcmlvcml0eUxhYmVsLFxuICAgIGxvd1ByaW9yaXR5UmFkaW8sXG4gICAgbWlkUHJpb3JpdHlMYWJlbCxcbiAgICBtaWRQcmlvcml0eVJhZGlvLFxuICAgIGhpZ2hQcmlvcml0eUxhYmVsLFxuICAgIGhpZ2hQcmlvcml0eVJhZGlvXG4gICk7XG4gIHRvRG9Gb3JtLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5Um93LCB0b0RvU3VibWl0KTtcbiAgZnJhbWVCb2R5LmNsYXNzTGlzdC5hZGQoJ2ZyYW1lQm9keVRvZG8nKTtcbiAgZnJhbWVCb2R5LmFwcGVuZCh0b0RvRm9ybSk7XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0UGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmV4cG9ydCBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZXhwb3J0IGNvbnN0IGZyYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgZnJhbWVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgcHJvamVjdEZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5leHBvcnQgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmV4cG9ydCBjb25zdCBuZXdUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmluaXRQYWdlKCk7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjbGlwYm9hcmQgZnJvbSAnLi9pbWcvY2xpcGJvYXJkLnBuZyc7XG5pbXBvcnQge1xuICBjb250ZW50RGl2LFxuICBmcmFtZSxcbiAgcHJvamVjdEZyYW1lLFxuICBwcm9qZWN0Qm9keSxcbiAgZnJhbWVIZWFkZXIsXG4gIGZyYW1lQm9keSxcbiAgbmV3VG9Eb0J1dHRvbixcbn0gZnJvbSAnLic7XG5pbXBvcnQgeyBpbml0VG9Eb0Zvcm0gfSBmcm9tICcuL2Zvcm1zJztcbmltcG9ydCB7IG9wZW5Ub2RvRm9ybSB9IGZyb20gJy4vdW5hcHBlbmQnO1xuaW1wb3J0IHsgcHJvamVjdHNsaXN0LCB3aGljaFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcblxuLy8gZXhwb3J0IGNvbnN0IGluaXRQYWdlID0gKCkgPT4ge1xuLy8gICBmcmFtZS5pZCA9ICdjYXNlJztcbi8vICAgZnJhbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZnJhbWVIZWFkJyk7XG4vLyAgIGNvbnN0IGNsaXBib2FyZEFydCA9IG5ldyBJbWFnZSgpO1xuLy8gICBjbGlwYm9hcmRBcnQuc3JjID0gY2xpcGJvYXJkO1xuLy8gICBjbGlwYm9hcmRBcnQuY2xhc3NMaXN0LmFkZCgnZnJhbWVIZWFkQXJ0Jyk7XG5cbi8vICAgY29uc3QgZnJhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbi8vICAgZnJhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdUbyBEbyc7XG5cbi8vICAgZnJhbWVIZWFkZXIuYXBwZW5kKGNsaXBib2FyZEFydCwgZnJhbWVUaXRsZSk7XG5cbi8vICAgZnJhbWVCb2R5LmNsYXNzTGlzdC5hZGQoJ2ZyYW1lQm9keScpO1xuXG4vLyAgIG5ld1RvRG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3VG9Eb0J1dHRvbicpO1xuLy8gICBuZXdUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUbyBEbyc7XG4vLyAgIG5ld1RvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0VG9Eb0Zvcm0pO1xuXG4vLyAgIGZyYW1lLmFwcGVuZChmcmFtZUhlYWRlciwgZnJhbWVCb2R5LCBuZXdUb0RvQnV0dG9uKTtcblxuLy8gICBwcm9qZWN0RnJhbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZyYW1lJyk7XG5cbi8vICAgY29udGVudERpdi5hcHBlbmQoZnJhbWUsIHByb2plY3RGcmFtZSk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdEZyYW1lID0gKCkgPT4ge1xuICBmcmFtZS5pZCA9ICdjYXNlJztcbiAgZnJhbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZnJhbWVIZWFkJyk7XG4gIGNvbnN0IGNsaXBib2FyZEFydCA9IG5ldyBJbWFnZSgpO1xuICBjbGlwYm9hcmRBcnQuc3JjID0gY2xpcGJvYXJkO1xuICBjbGlwYm9hcmRBcnQuY2xhc3NMaXN0LmFkZCgnZnJhbWVIZWFkQXJ0Jyk7XG5cbiAgY29uc3QgZnJhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZnJhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdUbyBEbyc7XG5cbiAgZnJhbWVIZWFkZXIuYXBwZW5kKGNsaXBib2FyZEFydCwgZnJhbWVUaXRsZSk7XG5cbiAgZnJhbWVCb2R5LmNsYXNzTGlzdC5hZGQoJ2ZyYW1lQm9keScpO1xuICBmcmFtZS5hcHBlbmQoZnJhbWVIZWFkZXIsIGZyYW1lQm9keSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kKGZyYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0TmV3VG9EbyA9ICgpID0+IHtcbiAgbmV3VG9Eb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdUb0RvQnV0dG9uJyk7XG4gIG5ld1RvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvIERvJztcbiAgbmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ub2RvRm9ybSk7XG5cbiAgZnJhbWUuYXBwZW5kKG5ld1RvRG9CdXR0b24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRQcm9qZWN0RnJhbWUgPSAoKSA9PiB7XG4gIHByb2plY3RGcmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RnJhbWUnKTtcbiAgcHJvamVjdEJvZHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJvZHknKTtcbiAgcHJvamVjdEZyYW1lLmFwcGVuZChwcm9qZWN0Qm9keSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kKHByb2plY3RGcmFtZSk7XG4gIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c2xpc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIG9iaikge1xuICAgIGNvbnN0IGRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGlzcC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBkaXNwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0Jyk7XG4gICAgcHJvamVjdEJvZHkuYXBwZW5kKGRpc3ApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVRvZG8gPSAob2JqKSA9PiB7XG4gIC8vIGZvciAoY29uc3QgdG9kbyBvZiBvYmoubGlzdCkge1xuICBvYmouZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvID09PSAnbGlzdCcpIHtcbiAgICAgIGNvbnN0IGRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpc3AuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgdG9kby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvW2l0ZW1dfWA7XG4gICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtdG9kbycpO1xuICAgICAgICAgIGRpc3AuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGV0YWlsc2A7XG4gICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzYy10b2RvJyk7XG4gICAgICAgICAgZGlzcC5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnZGF0ZScpIHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKHRvZG9baXRlbV0pO1xuICAgICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dERhdGV9YDtcbiAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtdG9kbycpO1xuICAgICAgICAgIGRpc3AuYXBwZW5kKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBpZiAodG9kb1tpdGVtXSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eS1kaXYnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvZG9baXRlbV0gPT09ICdtaWQnKSB7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtaWQtcHJpb3JpdHktZGl2Jyk7XG4gICAgICAgICAgfSBlbHNlIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHktZGl2Jyk7XG4gICAgICAgICAgZGlzcC5hcHBlbmQocHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSAnY2hlY2tlZCcpIHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXRvZG8nKTtcbiAgICAgICAgICBkaXNwLmFwcGVuZChjaGVja2JveCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZnJhbWVCb2R5LmFwcGVuZChkaXNwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRQYWdlID0gKCkgPT4ge1xuICBpbml0RnJhbWUoKTtcbiAgaW5pdE5ld1RvRG8oKTtcbiAgaW5pdFByb2plY3RGcmFtZSgpO1xuICBkaXNwbGF5VG9kbyh3aGljaFByb2plY3QoKSk7XG59O1xuIiwiaW1wb3J0IHsgbWFrZVRvZG8gfSBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBidXlHcm9jZXJpZXMgPSBtYWtlVG9kbyhcbiAgJ0J1eSBHcm9jZXJpZXMnLFxuICAnTmVlZCBmcnVpdHMgYW5kIHZlZ2dpZXMnLFxuICAnMjAyMy0xMS0xNycsXG4gICdoaWdoJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0ge1xuICB0aXRsZTogJ2RlZmF1bHQnLFxuICBsaXN0OiBbYnV5R3JvY2VyaWVzXSxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c2xpc3QgPSBbZGVmYXVsdFByb2plY3RdO1xuXG5sZXQgY2hvc2VuUHJvamVjdCA9ICcnO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgcmV0dXJuIHsgdGl0bGUsIGxpc3QgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlTmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0c2xpc3QucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9Qcm9qZWN0ID0gKHRvZG9JdGVtLCB4KSA9PiB7XG4gIHgubGlzdC5wdXNoKHRvZG9JdGVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0Nob3NlblByb2plY3QgPSAoeCkgPT4ge1xuICBpZiAoY2hvc2VuUHJvamVjdCA9PT0gJycpIHtcbiAgICBhZGRUb1Byb2plY3QoeCwgZGVmYXVsdFByb2plY3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZFRvUHJvamVjdCh4LCBjaG9zZW5Qcm9qZWN0KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdoaWNoUHJvamVjdCA9ICgpID0+IHtcbiAgaWYgKGNob3NlblByb2plY3QgPT09ICcnKSB7XG4gICAgY2hvc2VuUHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaG9zZW5Qcm9qZWN0O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2hvc2VuUHJvamVjdCA9ICh4KSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdHNsaXN0LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0geC50aXRsZSk7XG4gIGNvbnNvbGUubG9nKHgpO1xuICBjb25zb2xlLmxvZyhpbmRleCk7XG4gIGNob3NlblByb2plY3QgPSBwcm9qZWN0c2xpc3RbaW5kZXhdO1xufTtcbiIsIi8vIGNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuLy8gICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuLy8gICBjb25zdCB0b2dnbGVDaGVja2VkID0gKCkgPT4ge1xuLy8gICAgIGNoZWNrZWQgPT09IGZhbHNlID8gKGNoZWNrZWQgPSB0cnVlKSA6IChjaGVja2VkID0gZmFsc2UpO1xuLy8gICB9O1xuLy8gICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjaGVja2VkLCB0b2dnbGVDaGVja2VkIH07XG4vLyB9O1xuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlY2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuICh0aGlzLmNoZWNrZWQgPSB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLmNoZWNrZWQgPSBmYWxzZSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IG1ha2VUb2RvID0gKHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlKSA9PiB7XG4vLyAgIGNvbnN0IHRhc2sgPSBUb0RvKHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlKTtcbi8vICAgcmV0dXJuIHRhc2s7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgbWFrZVRvZG8gPSAoKSA9PiBuZXcgVG9EbygpO1xuIiwiaW1wb3J0IHsgaW5pdFRvRG9Gb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XG5pbXBvcnQge1xuICBjb250ZW50RGl2LFxuICBmcmFtZSxcbiAgcHJvamVjdEZyYW1lLFxuICBmcmFtZUhlYWRlcixcbiAgZnJhbWVCb2R5LFxuICBuZXdUb0RvQnV0dG9uLFxufSBmcm9tICcuJztcbmltcG9ydCB7IGRpc3BsYXlUb2RvIH0gZnJvbSAnLi9wYWdlJztcblxuZnVuY3Rpb24gY2xlYXJGcmFtZUJvZHkoKSB7XG4gIGZyYW1lQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbn1cblxuZnVuY3Rpb24gdW5hcHBlbmRBbGwoKSB7XG4gIGZyYW1lLnJlcGxhY2VDaGlsZHJlbigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOZXdUb2RvKCkge1xuICBuZXdUb0RvQnV0dG9uLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblRvZG9Gb3JtKCkge1xuICBmcmFtZUJvZHkuY2xhc3NOYW1lID0gJyc7XG4gIGNsZWFyRnJhbWVCb2R5KCk7XG4gIHJlbW92ZU5ld1RvZG8oKTtcbiAgaW5pdFRvRG9Gb3JtKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuVG9kb0Rpc3BsYXkoKSB7XG4gIGZyYW1lQm9keS5jbGFzc05hbWUgPSAnJztcbiAgY2xlYXJGcmFtZUJvZHkoKTtcbiAgZGlzcGxheVRvZG8oKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==