webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PercentageStats.js":
/*!***************************************!*\
  !*** ./components/PercentageStats.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _PercentageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PercentageCard */ "./components/PercentageCard.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/PercentageStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  }
});

var PercentageStats = function PercentageStats() {
  var classes = useStyles();
  var stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["usePercentageStats"])();
  if (!stats) return "Fetching data please wait ...";
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Persentase Kasus")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.perawatan,
    information: "Dalam Perawatan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.sembuh,
    information: "Pasien Sembuh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_PercentageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    percentage: stats.meninggal,
    information: "Pasien Meninggal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageStats);

/***/ })

})
//# sourceMappingURL=index.js.d0b0ed1944c91bcad4db.hot-update.js.map