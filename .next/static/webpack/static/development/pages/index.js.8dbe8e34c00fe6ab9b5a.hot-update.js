webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StatsCharts.js":
/*!***********************************!*\
  !*** ./components/StatsCharts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spacer */ "./components/Spacer.js");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/StatsCharts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var data = [{
  argument: 1,
  value: 10
}, {
  argument: 2,
  value: 20
}, {
  argument: 3,
  value: 30
}];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  },
  date: {
    color: "#6C63FF"
  },
  noMargin: {
    margin: 0
  },
  link: {
    fontWeight: "bold",
    color: "#6C63FF",
    textDecoration: "none",
    marginLeft: 4
  }
});

var StatsCharts = function StatsCharts() {
  var classes = useStyles();
  return __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Kasus di Seluruh Indonesia"), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ArgumentAxis"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_2__["LineSeries"], {
    valueField: "value",
    argumentField: "argument",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsCharts);

/***/ })

})
//# sourceMappingURL=index.js.8dbe8e34c00fe6ab9b5a.hot-update.js.map