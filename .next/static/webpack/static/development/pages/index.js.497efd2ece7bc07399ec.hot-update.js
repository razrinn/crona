webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LastUpdate.js":
/*!**********************************!*\
  !*** ./components/LastUpdate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/LastUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  link: {
    fontWeight: "bold",
    color: "#6C63FF",
    textDecoration: "none",
    marginLeft: 4
  }
});

var LastUpdate = function LastUpdate() {
  var classes = useStyles();
  var lastUpdate = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__["useLastUpdate"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    className: classes.noMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Update terakhir : ", __jsx("span", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 31
    }
  }, lastUpdate ? lastUpdate.toDateString().split(' ').slice(1).join(' ') : "Fetching data ..."), ".", __jsx("a", {
    className: classes.link,
    href: "https://github.com/mathdroid/indonesia-covid-19-api/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Sumber Data"));
};

/* harmony default export */ __webpack_exports__["default"] = (LastUpdate);

/***/ })

})
//# sourceMappingURL=index.js.497efd2ece7bc07399ec.hot-update.js.map