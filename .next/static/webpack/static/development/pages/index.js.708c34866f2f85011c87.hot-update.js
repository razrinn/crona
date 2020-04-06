webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PercentageCard.js":
/*!**************************************!*\
  !*** ./components/PercentageCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/components/PercentageCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {// borderLeft: "5px solid #6C63FF",
  },
  number: {
    fontWeight: "bold",
    color: "#6C63FF"
  }
});

var PercentageCard = function PercentageCard(props) {
  var percentage = props.percentage,
      information = props.information;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    variant: "h5",
    className: classes.number,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, percentage, " ", __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 34
    }
  }, "%")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, information)));
};

PercentageCard.propTypes = {
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  information: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PercentageCard);

/***/ })

})
//# sourceMappingURL=index.js.708c34866f2f85011c87.hot-update.js.map