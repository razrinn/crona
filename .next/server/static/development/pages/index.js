module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Base.js":
/*!****************************!*\
  !*** ./components/Base.js ***!
  \****************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/Base.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  base: {
    backgroundColor: "#35393C"
  }
});
const Base = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.base,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, props.children);
};

/***/ }),

/***/ "./components/GraphChart.js":
/*!**********************************!*\
  !*** ./components/GraphChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/GraphChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GraphChart = props => {
  const {
    data,
    valueField,
    argumentField
  } = props;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
    showLabels: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["AreaSeries"], {
    color: "#6C63FF",
    valueField: valueField,
    argumentField: argumentField,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })));
};

GraphChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  valueField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  argumentField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GraphChart);

/***/ }),

/***/ "./components/LastUpdate.js":
/*!**********************************!*\
  !*** ./components/LastUpdate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/LastUpdate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  link: {
    fontWeight: "bold",
    color: "#6C63FF",
    textDecoration: "none",
    marginLeft: 4
  }
});

const LastUpdate = () => {
  const classes = useStyles();
  const lastUpdate = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["useLastUpdate"])();

  const getCleanDate = date => {
    return date ? lastUpdate.toDateString().split(' ').slice(1).join(' ') : "Loading...";
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    className: classes.noMargin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Update terakhir : ", __jsx("span", {
    className: classes.date,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 31
    }
  }, getCleanDate(lastUpdate)), ".", __jsx("a", {
    className: classes.link,
    href: "https://github.com/mathdroid/indonesia-covid-19-api/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Sumber Data"));
};

/* harmony default export */ __webpack_exports__["default"] = (LastUpdate);

/***/ }),

/***/ "./components/PercentageCard.js":
/*!**************************************!*\
  !*** ./components/PercentageCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/PercentageCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {// borderLeft: "5px solid #6C63FF",
  },
  number: {
    fontWeight: "bold",
    color: "#6C63FF"
  },
  small: {
    fontSize: 12
  }
});

const PercentageCard = props => {
  const {
    percentage,
    information
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    variant: "h6",
    className: classes.number,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, percentage, " ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 34
    }
  }, "%")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, information)));
};

PercentageCard.propTypes = {
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  information: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PercentageCard);

/***/ }),

/***/ "./components/PercentageStats.js":
/*!***************************************!*\
  !*** ./components/PercentageStats.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PercentageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PercentageCard */ "./components/PercentageCard.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/PercentageStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  }
});

const PercentageStats = () => {
  const classes = useStyles();
  const stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["usePercentageStats"])();
  if (!stats) return "Fetching data please wait ...";
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Persentase Kasus")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.perawatan,
    information: "Dalam Perawatan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.sembuh,
    information: "Pasien Sembuh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.meninggal,
    information: "Pasien Meninggal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageStats);

/***/ }),

/***/ "./components/ProvinceCard.js":
/*!************************************!*\
  !*** ./components/ProvinceCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/ProvinceCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    borderLeft: "5px solid #6C63FF"
  },
  bold: {
    fontWeight: "bold"
  },
  card: {},
  death: {
    color: "#6C63FF"
  },
  healthyText: {
    color: "#329932"
  }
});

const ProvinceCard = props => {
  const classes = useStyles();
  const {
    important,
    stat
  } = props;
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    className: classes.bold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, stat.provinsi), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    variant: "subtitle2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Positif: ", stat.kasusPosi), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.healthyText,
    component: "p",
    variant: "subtitle2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Sembuh: ", stat.kasusSemb), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.death,
    component: "p",
    variant: "subtitle2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Meninggal: ", stat.kasusMeni)));
};

ProvinceCard.propTypes = {
  important: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ProvinceCard);

/***/ }),

/***/ "./components/ProvinceStats.js":
/*!*************************************!*\
  !*** ./components/ProvinceStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProvinceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProvinceCard */ "./components/ProvinceCard.js");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/ProvinceStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ProvinceStats = () => {
  const stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useProvinceStats"])();
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8);

  const handleChangeLimit = () => {
    setLimit(limit + 8);
  };

  if (!stats) return "Fetching data please wait ...";
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "verticalBottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h2",
    variant: "h5",
    style: {
      fontWeight: "bold"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Kasus Berdasarkan Provinsi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, stats.data.filter(data => data.kodeProvi !== 0).slice(0, limit).map((stat, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_ProvinceCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    important: index < 5,
    stat: stat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  })))), limit < stats.data.length ? __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "verticalTop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    align: "center",
    onClick: handleChangeLimit,
    style: {
      cursor: "pointer"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Tampilkan lebih banyak")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ProvinceStats);

/***/ }),

/***/ "./components/Spacer.js":
/*!******************************!*\
  !*** ./components/Spacer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/Spacer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  vertical: {
    paddingTop: 16,
    paddingBottom: 16
  },
  verticalBottom: {
    paddingBottom: 16
  },
  verticalTop: {
    paddingTop: 16
  },
  horizontal: {
    paddingLeft: 16,
    paddingRight: 16
  },
  both: {
    padding: 16
  }
});

const Spacer = props => {
  const {
    variant
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes[variant],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, props.children);
};

Spacer.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Spacer);

/***/ }),

/***/ "./components/StatsCard.js":
/*!*********************************!*\
  !*** ./components/StatsCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/StatsCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {//   minWidth: 275,
  },
  number: {
    fontWeight: "bold",
    color: "#6C63FF"
  }
});

const StatsCard = props => {
  const classes = useStyles();
  const {
    number,
    information
  } = props;
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "p",
    variant: "h3",
    className: classes.number,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, number), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, information)));
};

StatsCard.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  information: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (StatsCard);

/***/ }),

/***/ "./components/StatsCharts.js":
/*!***********************************!*\
  !*** ./components/StatsCharts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spacer */ "./components/Spacer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GraphChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphChart */ "./components/GraphChart.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/StatsCharts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  }
});

const StatsCharts = () => {
  const classes = useStyles();
  const stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useDailyStats"])();
  if (!stats) return "Fetching data please wait...";
  return __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Grafik Kumulatif Positif COVID-19"), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_GraphChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: stats.data,
    valueField: "jumlahKasusKumulatif",
    argumentField: "harike",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Grafik Kasus Baru COVID-19"), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_GraphChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: stats.data,
    valueField: "jumlahKasusBaruperHari",
    argumentField: "harike",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsCharts);

/***/ }),

/***/ "./components/SummaryStats.js":
/*!************************************!*\
  !*** ./components/SummaryStats.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/url */ "./utils/url.js");
/* harmony import */ var _StatsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsCard */ "./components/StatsCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/components/SummaryStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  }
});

const SummaryStats = () => {
  const classes = useStyles();
  const stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useSummaryStats"])();
  const lastUpdate = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useLastUpdate"])();
  if (!stats || !lastUpdate) return "Fetching data please wait ...";
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Kasus di Seluruh Indonesia")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.jumlahKasus,
    information: "Jumlah Kasus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.perawatan,
    information: "Kasus Positif",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.sembuh,
    information: "Sembuh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.meninggal,
    information: "Meninggal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SummaryStats);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SummaryStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SummaryStats */ "./components/SummaryStats.js");
/* harmony import */ var _components_StatsCharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StatsCharts */ "./components/StatsCharts.js");
/* harmony import */ var _components_PercentageStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PercentageStats */ "./components/PercentageStats.js");
/* harmony import */ var _components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProvinceStats */ "./components/ProvinceStats.js");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Base */ "./components/Base.js");
/* harmony import */ var _components_LastUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LastUpdate */ "./components/LastUpdate.js");
var _jsxFileName = "/home/razrinn/code/real/coronavirus/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    backgroundColor: "#F5F5F5",
    minHeight: "100vh"
  },
  doctorIcon: {
    width: "50%"
  }
});

const IndexPage = () => {
  const classes = useStyles();
  return __jsx(_components_Base__WEBPACK_IMPORTED_MODULE_9__["Base"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "sm",
    className: classes.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "h1",
    variant: "h3",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Crona Project"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "p",
    variant: "subtitle1",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Informasi Terbaru Perkembangan Kasus Corona di Indonesia")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    justifyContent: "center",
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classes.doctorIcon,
    src: "/assets/doctor.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  })), __jsx(_components_LastUpdate__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_components_SummaryStats__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_components_PercentageStats__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(_components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(_components_StatsCharts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/*! exports provided: useSummaryStats, useProvinceStats, useLastUpdate, usePercentageStats, useDailyStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSummaryStats", function() { return useSummaryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProvinceStats", function() { return useProvinceStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLastUpdate", function() { return useLastUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePercentageStats", function() { return usePercentageStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDailyStats", function() { return useDailyStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ "./utils/url.js");



const fetchData = url => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      const result = await fetch(url).then(response => response.json()).catch(err => err);
      setData(result);
    };

    fetchData();
  }, []);
  return data;
};

const useSummaryStats = () => fetchData(_url__WEBPACK_IMPORTED_MODULE_1__["summaryUrl"]);

const useProvinceStats = () => fetchData(_url__WEBPACK_IMPORTED_MODULE_1__["areaUrl"]);

const useLastUpdate = () => {
  const response = fetchData(_url__WEBPACK_IMPORTED_MODULE_1__["dailyUrl"]);
  return response ? new Date(response.data[response.data.length - 1].tanggal) : null;
};

const usePercentageStats = () => {
  const response = fetchData(_url__WEBPACK_IMPORTED_MODULE_1__["dailyUrl"]);
  const recentData = response ? response.data[response.data.length - 1] : null;
  return recentData ? {
    perawatan: recentData.persentasePasiendalamPerawatan.toFixed(2),
    sembuh: recentData.persentasePasienSembuh.toFixed(2),
    meninggal: recentData.persentasePasienMeninggal.toFixed(2)
  } : null;
};

const useDailyStats = () => fetchData(_url__WEBPACK_IMPORTED_MODULE_1__["dailyUrl"]);



/***/ }),

/***/ "./utils/url.js":
/*!**********************!*\
  !*** ./utils/url.js ***!
  \**********************/
/*! exports provided: summaryUrl, casesUrl, areaUrl, dailyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summaryUrl", function() { return summaryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "casesUrl", function() { return casesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaUrl", function() { return areaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailyUrl", function() { return dailyUrl; });
const rootUrl = "https://indonesia-covid-19.mathdro.id/api";
const summaryUrl = rootUrl;
const casesUrl = rootUrl + "/kasus";
const areaUrl = rootUrl + "/provinsi";
const dailyUrl = rootUrl + "/harian";


/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/razrinn/code/real/coronavirus/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@devexpress/dx-react-chart-material-ui":
/*!*********************************************************!*\
  !*** external "@devexpress/dx-react-chart-material-ui" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart-material-ui");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map