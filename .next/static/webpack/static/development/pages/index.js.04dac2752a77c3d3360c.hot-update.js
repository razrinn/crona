webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProvinceStats.js":
/*!*************************************!*\
  !*** ./components/ProvinceStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ProvinceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProvinceCard */ "./components/ProvinceCard.js");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/ProvinceStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ProvinceStats = function ProvinceStats() {
  var stats = Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_4__["useProvinceStats"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8),
      limit = _useState[0],
      setLimit = _useState[1];

  var handleChangeLimit = function handleChangeLimit() {
    setLimit(limit + 8);
  };

  if (!stats) return "Fetching data please wait ...";
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "vertical",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Kasus Berdasarkan Provinsi")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, stats.data.filter(function (data) {
    return data.kodeProvi !== 0;
  }).slice(0, limit).map(function (stat, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 6,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx(_ProvinceCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      important: index < 5,
      stat: stat,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }));
  })), limit < stats.data.length ? __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "verticalTop",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Tampilkan lebih banyak")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ProvinceStats);

/***/ })

})
//# sourceMappingURL=index.js.04dac2752a77c3d3360c.hot-update.js.map