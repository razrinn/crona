webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SummaryStats.js":
/*!************************************!*\
  !*** ./components/SummaryStats.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/url */ "./utils/url.js");
/* harmony import */ var _StatsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsCard */ "./components/StatsCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/SummaryStats.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  bold: {
    fontWeight: "bold"
  },
  date: {
    fontWeight: "bold",
    color: "#6C63FF"
  }
});

var SummaryStats = function SummaryStats() {
  var classes = useStyles();
  var stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useSummaryStats"])();
  var lastUpdate = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useLastUpdate"])();
  if (!stats || !lastUpdate) return "Fetching data please wait ...";
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h2",
    variant: "h5",
    className: classes.bold,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Kasus di Seluruh Indonesia")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.jumlahKasus,
    information: "Jumlah Kasus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.perawatan,
    information: "Kasus Positif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.sembuh,
    information: "Sembuh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    number: stats.meninggal,
    information: "Meninggal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Update terakhir : ", __jsx("span", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 39
    }
  }, lastUpdate.toDateString().split(' ').slice(1).join(' ')))));
};

/* harmony default export */ __webpack_exports__["default"] = (SummaryStats);

/***/ })

})
//# sourceMappingURL=index.js.ca04aceb94d2ee349e61.hot-update.js.map