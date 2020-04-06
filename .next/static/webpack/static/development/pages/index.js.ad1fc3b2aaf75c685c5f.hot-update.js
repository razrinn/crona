webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/doctor.svg":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_SummaryStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SummaryStats */ "./components/SummaryStats.js");
/* harmony import */ var _components_StatsCharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StatsCharts */ "./components/StatsCharts.js");
/* harmony import */ var _components_PercentageStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PercentageStats */ "./components/PercentageStats.js");
/* harmony import */ var _components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProvinceStats */ "./components/ProvinceStats.js");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Base */ "./components/Base.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var _components_LastUpdate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LastUpdate */ "./components/LastUpdate.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    backgroundColor: "#F5F5F5",
    minHeight: "100vh"
  },
  doctorIcon: {
    width: "50%"
  }
});

var IndexPage = function IndexPage() {
  var classes = useStyles();
  return __jsx(_components_Base__WEBPACK_IMPORTED_MODULE_9__["Base"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "h1",
    variant: "h3",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Crona.id"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    variant: "subtitle1",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Informasi Terbaru Perkembangan Kasus Corona di Indonesia")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    justifyContent: "center",
    my: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classes.doctorIcon,
    src: Doctor,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  })), __jsx(_components_LastUpdate__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_components_SummaryStats__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_components_PercentageStats__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(_components_StatsCharts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.ad1fc3b2aaf75c685c5f.hot-update.js.map