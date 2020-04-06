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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _GraphChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphChart */ "./components/GraphChart.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/StatsCharts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  }
});

var StatsCharts = function StatsCharts() {
  var classes = useStyles();
  var stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useDailyStats"])();
  if (!stats) return "Fetching data please wait...";
  return __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "verticalBottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Grafik Kumulatif COVID-19")), __jsx(_GraphChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: stats.data.map(function (d) {
      return {
        hariKe: d.hariKe,
        jumlahKasusKumulatif: d.jumlahKasusKumulatif
      };
    }),
    valueField: "jumlahKasusKumulatif",
    argumentField: "hariKe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsCharts);

/***/ })

})
//# sourceMappingURL=index.js.c1332b3bbaee3bef98c5.hot-update.js.map