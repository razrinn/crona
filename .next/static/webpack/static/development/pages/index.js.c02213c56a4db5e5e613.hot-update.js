webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/*! exports provided: useSummaryStats, useProvinceStats, useLastUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSummaryStats", function() { return useSummaryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProvinceStats", function() { return useProvinceStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLastUpdate", function() { return useLastUpdate; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./utils/url.js");




var fetchData = function fetchData(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("Fetching data...");
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              })["catch"](function (err) {
                return err;
              }));

            case 3:
              result = _context.sent;
              setData(result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    fetchData();
  }, []);
  return data;
};

var useSummaryStats = function useSummaryStats() {
  return fetchData(_url__WEBPACK_IMPORTED_MODULE_2__["summaryUrl"]);
};

var useProvinceStats = function useProvinceStats() {
  return fetchData(_url__WEBPACK_IMPORTED_MODULE_2__["areaUrl"]);
};

var useLastUpdate = function useLastUpdate() {
  var response = fetchData(_url__WEBPACK_IMPORTED_MODULE_2__["dailyUrl"]);
  console.log(response);
};



/***/ })

})
//# sourceMappingURL=index.js.c02213c56a4db5e5e613.hot-update.js.map