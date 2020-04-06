webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js");
/* harmony import */ var _components_SummaryStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SummaryStats */ "./components/SummaryStats.js");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spacer */ "./components/Spacer.js");
/* harmony import */ var _components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProvinceStats */ "./components/ProvinceStats.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Base */ "./components/Base.js");
/* harmony import */ var _assets_doctor_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/doctor.svg */ "./assets/doctor.svg");
/* harmony import */ var _assets_doctor_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_doctor_svg__WEBPACK_IMPORTED_MODULE_9__);
var _this = undefined,
    _jsxFileName = "/home/razrinn/code/real/coronavirus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 // import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    backgroundColor: "#F5F5F5",
    minHeight: "100vh"
  },
  doctorIcon: {
    width: "70%"
  }
});
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

var StatsCharts = function StatsCharts() {
  return __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__["ArgumentAxis"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__["LineSeries"], {
    valueField: "value",
    argumentField: "argument",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
};

var IndexPage = function IndexPage() {
  var classes = useStyles();
  return __jsx(_components_Base__WEBPACK_IMPORTED_MODULE_8__["Base"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "h1",
    variant: "h3",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Perkembangan COVID-19 di Indonesia")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    justifyContent: "center",
    my: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classes.doctorIcon,
    src: _assets_doctor_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_components_SummaryStats__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(_components_ProvinceStats__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  })), __jsx(_components_Spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(StatsCharts, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.eb7554f79b78b172b6d5.hot-update.js.map