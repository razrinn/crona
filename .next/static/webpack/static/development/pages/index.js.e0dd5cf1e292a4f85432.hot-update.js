webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js ***!
  \*************************************************************************/
/*! exports provided: ARGUMENT_DOMAIN, BAND, BOTTOM, DIFFERENCE, END, HORIZONTAL, HOVERED, LEFT, LINEAR, MIDDLE, RIGHT, SELECTED, START, TOP, VALUE_DOMAIN, VERTICAL, addDomain, addSeries, adjustBarSize, adjustLayout, attachEvents, bBoxes, buildAnimation, buildEventHandlers, buildScales, changeSeriesState, createAreaHitTester, createBarHitTester, createLineHitTester, createPieHitTester, createReference, createScatterHitTester, createSplineHitTester, dArea, dBar, dLine, dPie, dRotateArea, dRotateLine, dRotateSpline, dSpline, dSymbol, defaultDomains, detachEvents, easeOutCubic, extendDomains, findSeriesByName, getAreaPointTransformer, getBarPointTransformer, getDelay, getDeltaForTouches, getEventCoords, getLegendItems, getLinePointTransformer, getOffset, getParameters, getPathStart, getPiePointTransformer, getPieStart, getPointStart, getRanges, getReadiness, getRect, getRotatedPosition, getScatterPointTransformer, getStackedDomains, getStackedSeries, getStartVal, getTickCoordinates, getValueDomainName, getViewport, getVisibility, getWheelDelta, getWidth, gridCoordinatesGetter, growBounds, invertBoundsRange, isCoordinatesChanged, isHorizontal, isKeyPressed, isMultiTouch, isScalesChanged, isValidPosition, isValuesChanged, makeScale, moveBounds, processAreaAnimation, processBarAnimation, processHandleTooltip, processLineAnimation, processPieAnimation, processPointAnimation, processPointerMove, rangesEqual, scaleBand, scaleBounds, scaleLinear, scaleSeriesPoints, setCursorType, tickCoordinatesGetter, updateDomainItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARGUMENT_DOMAIN", function() { return ARGUMENT_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAND", function() { return BAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM", function() { return BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIFFERENCE", function() { return DIFFERENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL", function() { return HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOVERED", function() { return HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR", function() { return LINEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDDLE", function() { return MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED", function() { return SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_DOMAIN", function() { return VALUE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL", function() { return VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomain", function() { return addDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeries", function() { return addSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustBarSize", function() { return adjustBarSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustLayout", function() { return adjustLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachEvents", function() { return attachEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bBoxes", function() { return bBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAnimation", function() { return buildAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEventHandlers", function() { return buildEventHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildScales", function() { return buildScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSeriesState", function() { return changeSeriesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaHitTester", function() { return createAreaHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBarHitTester", function() { return createBarHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineHitTester", function() { return createLineHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieHitTester", function() { return createPieHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReference", function() { return createReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScatterHitTester", function() { return createScatterHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSplineHitTester", function() { return createSplineHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dArea", function() { return dArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dBar", function() { return dBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dLine", function() { return dLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dPie", function() { return dPie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dRotateArea", function() { return dRotateArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dRotateLine", function() { return dRotateLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dRotateSpline", function() { return dRotateSpline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dSpline", function() { return dSpline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dSymbol", function() { return dSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDomains", function() { return defaultDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachEvents", function() { return detachEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendDomains", function() { return extendDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSeriesByName", function() { return findSeriesByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaPointTransformer", function() { return getAreaPointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarPointTransformer", function() { return getBarPointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelay", function() { return getDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeltaForTouches", function() { return getDeltaForTouches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventCoords", function() { return getEventCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegendItems", function() { return getLegendItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinePointTransformer", function() { return getLinePointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return getParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathStart", function() { return getPathStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPiePointTransformer", function() { return getPiePointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieStart", function() { return getPieStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointStart", function() { return getPointStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRanges", function() { return getRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadiness", function() { return getReadiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotatedPosition", function() { return getRotatedPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScatterPointTransformer", function() { return getScatterPointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackedDomains", function() { return getStackedDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackedSeries", function() { return getStackedSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartVal", function() { return getStartVal$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTickCoordinates", function() { return getTickCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueDomainName", function() { return getValueDomainName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewport", function() { return getViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibility", function() { return getVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWheelDelta", function() { return getWheelDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridCoordinatesGetter", function() { return gridCoordinatesGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growBounds", function() { return growBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertBoundsRange", function() { return invertBoundsRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoordinatesChanged", function() { return isCoordinatesChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHorizontal", function() { return isHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyPressed", function() { return isKeyPressed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiTouch", function() { return isMultiTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalesChanged", function() { return isScalesChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPosition", function() { return isValidPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValuesChanged", function() { return isValuesChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeScale", function() { return makeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBounds", function() { return moveBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAreaAnimation", function() { return processAreaAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processBarAnimation", function() { return processBarAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processHandleTooltip", function() { return processHandleTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLineAnimation", function() { return processLineAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPieAnimation", function() { return processPieAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPointAnimation", function() { return processPointAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPointerMove", function() { return processPointerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesEqual", function() { return rangesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return scaleBand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBounds", function() { return scaleBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return scaleLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSeriesPoints", function() { return scaleSeriesPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCursorType", function() { return setCursorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickCoordinatesGetter", function() { return tickCoordinatesGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDomainItems", function() { return updateDomainItems; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/**
 * Bundle of @devexpress/dx-chart-core
 * Generated: 2020-03-27
 * Version: 2.6.0
 * License: https://js.devexpress.com/Licensing
 */





/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @internal */
var HORIZONTAL = 'horizontal';
/** @internal */
var VERTICAL = 'vertical';
/** @internal */
var TOP = 'top';
/** @internal */
var BOTTOM = 'bottom';
/** @internal */
var LEFT = 'left';
/** @internal */
var RIGHT = 'right';
/** @internal */
var MIDDLE = 'middle';
/** @internal */
var END = 'end';
/** @internal */
var START = 'start';
/** @internal */
var LINEAR = 'linear';
/** @internal */
var BAND = 'band';
/** @internal */
var ARGUMENT_DOMAIN = 'argument-domain';
/** @internal */
var VALUE_DOMAIN = 'value-domain';
/** @internal */
var HOVERED = 'hovered';
/** @internal */
var SELECTED = 'selected';
/** @internal */
var DIFFERENCE = 0.9;

/** @internal */
var scaleLinear = d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"];
/** @internal */
var scaleBand = function () { return Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])().paddingInner(0.3).paddingOuter(0.15); };
/** @internal */
var isHorizontal = function (name, rotated) { return (name === ARGUMENT_DOMAIN === !rotated); };
// tslint:disable-next-line: ban-types
var makeScaleHelper = function (linear, band) {
    var func = function (scale) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var choosen = 'bandwidth' in scale ? band : linear;
        return choosen.apply(void 0, __spread([scale], args));
    };
    return func;
};
var getLinearScaleWidth = function (_) { return 0; };
var getBandScaleWidth = function (scale) { return scale.bandwidth(); };
/** @internal */
var getWidth = makeScaleHelper(getLinearScaleWidth, getBandScaleWidth);
/** @internal */
var getValueDomainName = function (name) { return name || VALUE_DOMAIN; };
var floatsEqual = function (a, b) { return Math.abs(a - b) < Number.EPSILON; };
/** @internal */
var rangesEqual = function (r1, r2) {
    return floatsEqual(r1[0], r2[0]) && floatsEqual(r1[1], r2[1]);
};
var wrapLinearScale = function (scale) { return scale; };
var wrapBandScale = function (scale) {
    var ret = function (value) { return scale(value) + scale.bandwidth() / 2; };
    Object.assign(ret, scale);
    return ret;
};
var wrapScale = makeScaleHelper(wrapLinearScale, wrapBandScale);
/** @internal */
var makeScale = function (_a, range) {
    var factory = _a.factory, domain = _a.domain;
    var scale = (factory || scaleLinear)().domain(domain).range(range);
    return wrapScale(scale);
};
// It is implicitly supposed that Chart can accept any d3 scale. It is wrong.
// The followings notes show that. d3 scales are not seamlessly interchangeable themselves
// (i.e. band scale has no "invert", continuous scale has no "bandwidth").
// We have to use "adapters" to mitigate the differences.
// Hence Chart can actually accept any object that matches "adapter" interface.
// TODO: We should update reference accordingly. There might be breaking changes though.
var scaleLinearBounds = function (scale, bounds) { return bounds.map(scale); };
// There is an issue - when range is "inverted" values are scaled incorrectly.
//   scaleBand().domain(['a', 'b', 'c']).range([0, 60])('b') === 20
//   scaleBand().domain(['a', 'b', 'c']).range([60, 0])('b') === 20 (should be 40)
var scaleBandBounds = function (scale, bounds) {
    var cleanScale = scale.copy().paddingInner(0).paddingOuter(0);
    var fullRange = scale.range();
    var sign = Math.sign(fullRange[1] - fullRange[0]);
    return sign >= 0
        ? [cleanScale(bounds[0]), cleanScale(bounds[1]) + cleanScale.bandwidth()]
        : [cleanScale(bounds[0]) + cleanScale.bandwidth(), cleanScale(bounds[1])];
};
var moveLinearScaleBounds = function (scale, bounds, delta) {
    var fullRange = scale.range();
    var sign = Math.sign(fullRange[1] - fullRange[0]);
    var range = scaleLinearBounds(scale, bounds);
    var r0 = range[0] + delta;
    var r1 = range[1] + delta;
    // Check if new range is outside of the left border.
    if (Math.sign(r0 - fullRange[0]) !== sign) {
        r0 = fullRange[0];
        r1 = r0 + range[1] - range[0];
    }
    // Check if new range is outside of the right border.
    if (Math.sign(fullRange[1] - r1) !== sign) {
        r1 = fullRange[1];
        r0 = r1 - range[1] + range[0];
    }
    var newBounds = [scale.invert(r0), scale.invert(r1)];
    return rangesEqual(bounds, newBounds) ? bounds : newBounds;
};
// This is pointer "delta" processing specific for "band" scale.
// If pointer delta is significantly smaller than band size (0.3) then movement should be skipped
// and current delta should be added to a next one (from a new "move" event).
// Now there is no code that accumulates deltas.
// In order to allow band scrolling at least somehow the following is applied - if pointer delta
// is at least greater than 30 pixel then minimal movement is performed.
// TODO: Make proper delta accumulation!
var adjustBandScaleMoveStep = function (delta, step) {
    var ratio = Math.abs(delta / step);
    var sign = Math.sign(delta / step);
    if (ratio >= 0.5) {
        return sign * Math.round(ratio);
    }
    if (ratio >= 0.3) {
        return sign;
    }
    if (Math.abs(delta) > 30) {
        return sign;
    }
    return 0;
};
// Band case is processed separately to preserve categories count in the bounds range.
// If common inversion mechanism is used start and end bounds cannot be inverted independently
// because of rounding issues which may add or remove categories to the new bounds.
var moveBandScaleBounds = function (scale, bounds, delta) {
    var domain = scale.domain();
    var fullRange = scale.range();
    var step = (fullRange[1] - fullRange[0]) / domain.length;
    var rangeStep = adjustBandScaleMoveStep(delta, step);
    if (rangeStep === 0) {
        return bounds;
    }
    var range = scaleBounds(scale, bounds);
    var range0 = Math.round((range[0] - fullRange[0]) / step);
    var range1 = range0 + Math.round((range[1] - range[0]) / step) - 1;
    var new0 = range0 + rangeStep;
    var new1 = range1 + rangeStep;
    if (new0 < 0) {
        new0 = 0;
        new1 = new0 + range1 - range0;
    }
    if (new1 > domain.length - 1) {
        new1 = domain.length - 1;
        new0 = new1 - range1 + range0;
    }
    if (new0 === range0 || new1 === range1) {
        return bounds;
    }
    return [domain[new0], domain[new1]];
};
// Defines how much linear scale can be zoomed it.
// I.e. if original scale domain has size of 1, then fully zoomed scale domain has size
// of 1 / LINEAR_SCALE_ZOOMING_THRESHOLD.
var LINEAR_SCALE_ZOOMING_THRESHOLD = 1000;
var growLinearScaleBounds = function (scale, bounds, delta, anchor) {
    var fullRange = scale.range();
    var minRangeThreshold = (fullRange[1] - fullRange[0]) / LINEAR_SCALE_ZOOMING_THRESHOLD;
    var sign = Math.sign(fullRange[1] - fullRange[0]);
    var range = scaleBounds(scale, bounds);
    // If zooming in and initial range is already too small then do nothing.
    if (delta > 0 && Math.abs(range[1] - range[0]) <= Math.abs(minRangeThreshold)) {
        return bounds;
    }
    // If zooming out and initial range is already too large then do nothing.
    if (delta < 0 && Math.abs(range[1] - range[0]) >= Math.abs(fullRange[1] - fullRange[0])) {
        return bounds;
    }
    var t = Math.abs((anchor - range[0]) / (range[1] - range[0]));
    var r0 = range[0] + sign * delta * 2 * t;
    var r1 = range[1] - sign * delta * 2 * (1 - t);
    // If new range is outside of the left border then clamp it.
    if (Math.sign(r0 - fullRange[0]) !== sign) {
        r0 = fullRange[0];
    }
    // If new range is outside of the right border then clamp it.
    if (Math.sign(fullRange[1] - r1) !== sign) {
        r1 = fullRange[1];
    }
    // If new range is too small then make it no less than minimal available.
    if (Math.sign(r1 - r0) !== sign || Math.abs(r1 - r0) < Math.abs(minRangeThreshold)) {
        if (Math.abs(r0 - range[0]) < Math.abs(minRangeThreshold / 2)) {
            // Dock it to the start.
            r0 = range[0];
            r1 = r0 + minRangeThreshold;
        }
        else if (Math.abs(r1 - range[1]) < Math.abs(minRangeThreshold / 2)) {
            // Dock it to the end.
            r1 = range[1];
            r0 = r1 - minRangeThreshold;
        }
        else {
            // Dock it to the anchor.
            r0 = anchor - minRangeThreshold / 2;
            r1 = anchor + minRangeThreshold / 2;
        }
    }
    var newBounds = [scale.invert(r0), scale.invert(r1)];
    return rangesEqual(bounds, newBounds) ? bounds : newBounds;
};
var growBandScaleBounds = function (scale, bounds, delta, anchor) {
    var domain = scale.domain();
    var fullRange = scale.range();
    var step = (fullRange[1] - fullRange[0]) / domain.length;
    var range = scaleBounds(scale, bounds);
    var range0 = Math.round((range[0] - fullRange[0]) / step);
    var range1 = range0 + Math.round((range[1] - range[0]) / step) - 1;
    // Let it be always 1 for now.
    var rangeStep = Math.sign(delta);
    if ((rangeStep === 0) ||
        (rangeStep > 0 && range0 === range1) ||
        (rangeStep < 0 && range0 === 0 && range1 === domain.length - 1)) {
        return bounds;
    }
    var t = Math.abs((anchor - range[0]) / (range[1] - range[0]));
    var new0 = range0 + Math.round(rangeStep * 2 * t);
    var new1 = range1 - Math.round(rangeStep * 2 * (1 - t));
    if (new0 < 0) {
        new0 = 0;
    }
    if (new1 > domain.length - 1) {
        new1 = domain.length - 1;
    }
    if (new0 > new1) {
        if (t <= 0.5) {
            new1 = new0;
        }
        else {
            new0 = new1;
        }
    }
    if (new0 === range0 && new1 === range1) {
        return bounds;
    }
    return [domain[new0], domain[new1]];
};
var invertLinearScaleBounds = function (scale, range) {
    var fullRange = scale.range();
    var match = Math.sign(fullRange[1] - fullRange[0]) === Math.sign(range[1] - range[0]);
    return [
        scale.invert(range[match ? 0 : 1]),
        scale.invert(range[match ? 1 : 0]),
    ];
};
var matchPointToBand = function (domain, range, p) {
    var i = Math.floor(domain.length * (p - range[0]) / (range[1] - range[0]));
    return domain[Math.min(i, domain.length - 1)];
};
var invertBandScaleBounds = function (scale, range) {
    var domain = scale.domain();
    var fullRange = scale.range();
    return [
        matchPointToBand(domain, fullRange, range[0]),
        matchPointToBand(domain, fullRange, range[1]),
    ];
};
// Though these functions are used only in *Viewport* plugin (and so should be placed right there),
// they reside here so that internal scale specifics (*getWidth*)
// are encapsulated in this utility file.
/** @internal */
var scaleBounds = makeScaleHelper(scaleLinearBounds, scaleBandBounds);
/** @internal */
var moveBounds = makeScaleHelper(moveLinearScaleBounds, moveBandScaleBounds);
// "scaleBounds" would be a better name but "scale" is already occupied.
/** @internal */
var growBounds = makeScaleHelper(growLinearScaleBounds, growBandScaleBounds);
/** @internal */
var invertBoundsRange = makeScaleHelper(invertLinearScaleBounds, invertBandScaleBounds);

var _a;
var makeDomain = function (_a) {
    var factory = _a.factory, modifyDomain = _a.modifyDomain;
    return ({
        domain: [],
        factory: factory,
        isDiscrete: !!(factory && isDiscrete(factory)),
        modifyDomain: modifyDomain,
    });
};
/** @internal */
var defaultDomains = (_a = {},
    _a[ARGUMENT_DOMAIN] = makeDomain({}),
    _a[VALUE_DOMAIN] = makeDomain({}),
    _a);
/** @internal */
var addDomain = function (domains, name, options) {
    var _a;
    return (__assign(__assign({}, domains), (_a = {}, _a[name] = makeDomain(options), _a)));
};
var mergeContinuousDomains = function (domain, items) {
    var newDomain = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(__spread(domain, items));
    return rangesEqual(newDomain, domain) ? domain : newDomain;
};
var mergeDiscreteDomains = function (domain, items) {
    var newDomain = Array.from(new Set(__spread(domain, items)));
    return newDomain.length === domain.length ? domain : newDomain;
};
var getArgument = function (point) { return point.argument; };
var getValue = function (point) { return point.value; };
var guessFactory = function (points, getItem) { return (points.length && typeof getItem(points[0]) === 'string' ? scaleBand : scaleLinear); };
var isDiscrete = function (factory) { return 'bandwidth' in factory(); };
var updateDomainFactory = function (domain, series, getItem) {
    if (domain.factory) {
        return domain;
    }
    var factory = guessFactory(series.points, getItem);
    return __assign(__assign({}, domain), { factory: factory, isDiscrete: isDiscrete(factory) });
};
/** @internal */
var updateDomainItems = function (domain, items) {
    var merge = domain.isDiscrete ? mergeDiscreteDomains : mergeContinuousDomains;
    var merged = merge(domain.domain, items);
    return merged === domain.domain ? domain : __assign(__assign({}, domain), { domain: domain.modifyDomain ? domain.modifyDomain(merged) : merged });
};
var getArgumentDomainItems = function (series) { return series.points.map(getArgument); };
var getValueDomainItems = function (series) {
    var items = series.points.map(getValue);
    return series.getPointTransformer.isStartedFromZero ? __spread([0], items) : items;
};
var updateDomain = function (domain, series, getItem, getDomainItems) { return updateDomainItems(updateDomainFactory(domain, series, getItem), getDomainItems(series)); };
/** @internal */
var extendDomains = function (domains, series) {
    var argumentDomain = updateDomain(domains[ARGUMENT_DOMAIN], series, getArgument, getArgumentDomainItems);
    var valueDomainName = getValueDomainName(series.scaleName);
    var valueDomain = updateDomain(domains[valueDomainName], series, getValue, getValueDomainItems);
    var changes = {};
    if (argumentDomain !== domains[ARGUMENT_DOMAIN]) {
        changes[ARGUMENT_DOMAIN] = argumentDomain;
    }
    if (valueDomain !== domains[valueDomainName]) {
        changes[valueDomainName] = valueDomain;
    }
    return Object.keys(changes).length ? __assign(__assign({}, domains), changes) : domains;
};
/** @internal */
var buildScales = function (domains, ranges) {
    var scales = {};
    Object.keys(domains).forEach(function (name) {
        scales[name] = makeScale(domains[name], ranges[name === ARGUMENT_DOMAIN ? ARGUMENT_DOMAIN : VALUE_DOMAIN]);
    });
    return scales;
};

var isEqual = function (_a, _b) {
    var firstWidth = _a.width, firstHeight = _a.height;
    var secondWidth = _b.width, secondHeight = _b.height;
    return firstWidth === secondWidth && firstHeight === secondHeight;
};
/** @internal */
var bBoxes = function (prevBBoxes, _a) {
    var _b;
    var bBox = _a.bBox, placeholder = _a.placeholder;
    if (isEqual(prevBBoxes[placeholder] || {}, bBox))
        return prevBBoxes;
    return __assign(__assign({}, prevBBoxes), (_b = {}, _b[placeholder] = bBox, _b));
};
/** @internal */
var getRanges = function (paneSize, rotated) {
    var _a;
    var horRange = [0, paneSize.width];
    var verRange = [paneSize.height, 0];
    return _a = {},
        _a[ARGUMENT_DOMAIN] = rotated ? verRange : horRange,
        _a[VALUE_DOMAIN] = rotated ? horRange : verRange,
        _a;
};

var _a$1, _b;
var getTicks = function (scale, count) { return (scale.ticks ? scale.ticks(count) : scale.domain()); };
var createTicks = function (scale, count, callback) { return (getTicks(scale, count)
    .map(function (tick, index) { return callback(scale(tick), String(index), tick); })); };
var getFormat = function (scale, count, tickFormat) {
    if (scale.tickFormat) {
        return tickFormat ? tickFormat(scale, count) : scale.tickFormat(count);
    }
    return function (tick) { return tick; };
};
var rotatedPositions = (_a$1 = {},
    _a$1[LEFT] = BOTTOM,
    _a$1[RIGHT] = TOP,
    _a$1[BOTTOM] = LEFT,
    _a$1[TOP] = RIGHT,
    _a$1);
var positionFlags = (_b = {},
    _b[LEFT] = false,
    _b[RIGHT] = false,
    _b[BOTTOM] = true,
    _b[TOP] = true,
    _b);
/** @internal */
var getRotatedPosition = function (position) { return rotatedPositions[position]; };
/** @internal */
var isValidPosition = function (position, scaleName, rotated) {
    return positionFlags[position] === isHorizontal(scaleName, rotated);
};
var createHorizontalOptions = function (position, tickSize, indentFromAxis) {
    // Make *position* orientation agnostic - should be START or END.
    var isStart = position === BOTTOM;
    return {
        y1: 0,
        y2: isStart ? +tickSize : -tickSize,
        yText: isStart ? +indentFromAxis : -indentFromAxis,
        dy: isStart ? '1em' : '0em',
        textAnchor: MIDDLE,
    };
};
var createVerticalOptions = function (position, tickSize, indentFromAxis) {
    // Make *position* orientation agnostic - should be START or END.
    var isStart = position === LEFT;
    return {
        x1: 0,
        x2: isStart ? -tickSize : +tickSize,
        xText: isStart ? -indentFromAxis : +indentFromAxis,
        dy: '0.3em',
        textAnchor: isStart ? END : START,
    };
};
// Constant is selected to preserve original behavior described in
// https://github.com/d3/d3-scale#continuous_ticks.
var DEFAULT_TICK_COUNT = 10;
var getTickCount = function (scaleRange, paneSize) {
    var rangeToPaneRatio = Math.abs(scaleRange[0] - scaleRange[1]) / paneSize;
    return Math.round(DEFAULT_TICK_COUNT * (isFinite(rangeToPaneRatio) ? rangeToPaneRatio : 1));
};
var createTickFilter = function (isHor, size) { return (isHor
    ? function (tick) { return tick.x1 >= 0 && tick.x1 <= size; }
    : function (tick) { return tick.y1 >= 0 && tick.y1 <= size; }); };
/** @internal */
var tickCoordinatesGetter = function (_a) {
    var isHor = _a.isHor, scale = _a.scale, tickCount = _a.tickCount, tickFormat = _a.tickFormat, position = _a.position, tickSize = _a.tickSize, indentFromAxis = _a.indentFromAxis;
    var formatTick = getFormat(scale, tickCount, tickFormat);
    var options = (isHor ? createHorizontalOptions : createVerticalOptions)(position, tickSize, indentFromAxis);
    return function (coordinates, key, tick) { return (__assign({ key: key, x1: coordinates, x2: coordinates, y1: coordinates, y2: coordinates, xText: coordinates, yText: coordinates, text: formatTick(tick) }, options)); };
};
/** @internal */
var gridCoordinatesGetter = function (_a) {
    var isHor = _a.isHor;
    var options = isHor ? { y1: 0 } : { x1: 0 };
    return function (coordinates, key) { return (__assign({ key: key, x1: coordinates, y1: coordinates }, options)); };
};
/** @internal */
var getTickCoordinates = function (_a) {
    var scaleName = _a.scaleName, scale = _a.scale, paneSize = _a.paneSize, rotated = _a.rotated, callback = _a.callback, restProps = __rest(_a, ["scaleName", "scale", "paneSize", "rotated", "callback"]);
    var isHor = isHorizontal(scaleName, rotated);
    var tickCount = getTickCount(scale.range(), paneSize[1 - Number(isHor)]);
    var ticks = createTicks(scale, tickCount, callback(__assign({ isHor: isHor, scale: scale, tickCount: tickCount }, restProps)));
    var visibleTicks = ticks.filter(createTickFilter(isHor, paneSize[1 - Number(isHor)]));
    return {
        ticks: visibleTicks,
        sides: [Number(isHor), Number(!isHor)],
    };
};

var getArg = function (_a) {
    var arg = _a.arg;
    return arg;
};
var getVal = function (_a) {
    var val = _a.val;
    return val;
};
var getStartVal = function (_a) {
    var startVal = _a.startVal;
    return startVal;
};
/** @internal */
var dArea = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])()
    .x(getArg)
    .y1(getVal)
    .y0(getStartVal);
/** @internal */
var dRotateArea = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])()
    .x1(getStartVal)
    .x0(getVal)
    .y(getArg);
/** @internal */
var dLine = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])()
    .x(getArg)
    .y(getVal);
/** @internal */
var dRotateLine = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])()
    .x(getVal)
    .y(getArg);
/** @internal */
var dSpline = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])()
    .x(getArg)
    .y(getVal)
    .curve(d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveMonotoneX"]);
/** @internal */
var dRotateSpline = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])()
    .x(getVal)
    .y(getArg)
    .curve(d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveMonotoneY"]);
/** @internal */
var dBar = function (arg, val, startVal, width, rotated) {
    var height = Math.abs(val - startVal);
    var minVal = Math.min(val, startVal);
    return {
        x: rotated ? minVal : arg - width / 2,
        y: rotated ? arg - width / 2 : minVal,
        width: rotated ? height : width || 2,
        height: rotated ? width || 2 : height,
    };
};
/** @internal */
var getPiePointTransformer = function (_a) {
    var argumentScale = _a.argumentScale, valueScale = _a.valueScale, points = _a.points;
    var x = Math.max.apply(Math, __spread(argumentScale.range())) / 2;
    var y = Math.max.apply(Math, __spread(valueScale.range())) / 2;
    var maxRadius = Math.min(x, y);
    var pieData = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])().sort(null).value(function (d) { return d.value; })(points);
    return function (point) {
        var _a = pieData[point.index], startAngle = _a.startAngle, endAngle = _a.endAngle;
        return __assign(__assign({}, point), { arg: x, val: y, startAngle: startAngle,
            endAngle: endAngle,
            maxRadius: maxRadius });
    };
};
/** @internal */
var getLinePointTransformer = function (_a) {
    var argumentScale = _a.argumentScale, valueScale = _a.valueScale;
    return function (point) { return (__assign(__assign({}, point), { arg: argumentScale(point.argument), val: valueScale(point.value) })); };
};
// Though transformations for line and scatter are the same,
// separate function instance is required as it contains additional static fields.
/** @internal */
var getScatterPointTransformer = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return getLinePointTransformer.apply(void 0, __spread(args));
};
/** @internal */
var getAreaPointTransformer = function (series) {
    var transform = getLinePointTransformer(series);
    var startVal = series.valueScale(0);
    return function (point) {
        var ret = transform(point);
        return __assign(__assign({}, ret), { startVal: startVal });
    };
};
// Used for domain calculation and stacking.
getAreaPointTransformer.isStartedFromZero = true;
/** @internal */
var getBarPointTransformer = function (_a) {
    var argumentScale = _a.argumentScale, valueScale = _a.valueScale;
    var startVal = valueScale(0);
    return function (point) { return (__assign(__assign({}, point), { arg: argumentScale(point.argument), val: valueScale(point.value), startVal: startVal, maxBarWidth: getWidth(argumentScale) })); };
};
// Used for domain calculation and stacking.
getBarPointTransformer.isStartedFromZero = true;
// Used for Bar grouping.
getBarPointTransformer.isBroad = true;
getPiePointTransformer.getPointColor = function (palette, index) { return palette[index % palette.length]; };
/** @internal */
var findSeriesByName = function (name, series) { return series.find(function (seriesItem) { return seriesItem.symbolName === name; }); };
/** @internal */
var dSymbol = function (_a) {
    var size = _a.size;
    return Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbol"])().size(Math.pow(size, 2)).type(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbolCircle"])();
};
/** @internal */
var dPie = function (maxRadius, innerRadius, outerRadius, startAngle, endAngle) { return Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])()({
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: innerRadius * maxRadius,
    outerRadius: outerRadius * maxRadius,
}); };
var getRect = function (cArg, cVal, dArg, dVal, rotated) {
    var minArg = cArg - dArg;
    var minVal = cVal - dVal;
    var maxArg = cArg + dArg;
    var maxVal = cVal + dVal;
    return rotated ? [minVal, minArg, maxVal, maxArg] : [minArg, minVal, maxArg, maxVal];
};
getBarPointTransformer.getTargetElement = function (point) {
    var _a = point, arg = _a.arg, val = _a.val, startVal = _a.startVal, barWidth = _a.barWidth, maxBarWidth = _a.maxBarWidth, rotated = _a.rotated;
    var halfWidth = barWidth * maxBarWidth / 2;
    var halfHeight = Math.abs(startVal - val) / 2;
    var centerVal = (val + startVal) / 2;
    return getRect(arg, centerVal, halfWidth, halfHeight, rotated);
};
getPiePointTransformer.getTargetElement = function (point) {
    var _a = point, x = _a.arg, y = _a.val, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, maxRadius = _a.maxRadius, startAngle = _a.startAngle, endAngle = _a.endAngle;
    var center = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])().centroid({
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: innerRadius * maxRadius,
        outerRadius: outerRadius * maxRadius,
    });
    var cx = center[0] + x;
    var cy = center[1] + y;
    return getRect(cx, cy, 0.5, 0.5, false);
};
getAreaPointTransformer.getTargetElement = function (_a) {
    var arg = _a.arg, val = _a.val, rotated = _a.rotated;
    return (getRect(arg, val, 1, 1, rotated));
};
getLinePointTransformer.getTargetElement = getAreaPointTransformer.getTargetElement;
getScatterPointTransformer.getTargetElement = function (obj) {
    var _a = obj, arg = _a.arg, val = _a.val, point = _a.point, rotated = _a.rotated;
    var t = point.size / 2;
    return getRect(arg, val, t, t, rotated);
};
var getUniqueName = function (list, name) {
    var names = new Set(list.map(function (item) { return item.name; }));
    var ret = name;
    while (names.has(ret)) {
        // @ts-ignore
        ret = ret.replace(/\d*$/, function (str) { return (str ? +str + 1 : 0); });
    }
    return ret;
};
// TODO: Memoization is much needed here.
// Though "series" list never persists, single "series" item most often does.
var createPoints = function (_a, data, props, palette) {
    var argumentField = _a.argumentField, valueField = _a.valueField, getPointTransformer = _a.getPointTransformer;
    var points = [];
    data.forEach(function (dataItem, index) {
        var argument = dataItem[argumentField];
        var value = dataItem[valueField];
        if (argument !== undefined && value !== undefined) {
            points.push(__assign(__assign({ argument: argument,
                value: value,
                index: index }, props), { color: getPointTransformer.getPointColor
                    ? getPointTransformer.getPointColor(palette, index) : props.color }));
        }
    });
    return points;
};
/** @internal */
var addSeries = function (series, data, palette, props, restProps) {
    // It is used to generate unique series dependent attribute names for patterns.
    // *symbolName* cannot be used as it cannot be part of DOM attribute name.
    var index = series.length;
    var seriesColor = props.color || palette[index % palette.length];
    return __spread(series, [__assign(__assign({}, props), { index: index, name: getUniqueName(series, props.name), points: createPoints(props, data, __assign(__assign({}, restProps), { color: seriesColor }), palette), color: seriesColor })]);
};
// TODO: Memoization is much needed here by the same reason as in "createPoints".
// Make "scales" persistent first.
var scalePoints = function (series, scales, rotated) {
    var transform = series.getPointTransformer(__assign(__assign({}, series), { argumentScale: scales[ARGUMENT_DOMAIN], valueScale: scales[getValueDomainName(series.scaleName)] }));
    var ret = __assign(__assign({}, series), { rotated: rotated, points: series.points.map(function (point) { return (__assign(__assign({}, transform(point)), { rotated: rotated })); }) });
    return ret;
};
/** @internal */
var scaleSeriesPoints = function (series, scales, rotated) { return series.map(function (seriesItem) { return scalePoints(seriesItem, scales, rotated); }); };
/** @internal */
var getVisibility = function (pane, centerX, centerY, width, height) {
    return (centerX - width / 2 < 0 && centerX + width / 2 < 0)
        || (centerX - width / 2 > pane.width && centerX + width / 2 > pane.width)
        || (centerY - height / 2 < 0 && centerY + height / 2 < 0)
        || (centerY - height / 2 > pane.height && centerY + height / 2 > pane.height) ?
        'hidden' : 'visible';
};
/** @internal */
var adjustBarSize = function (bar, _a) {
    var width = _a.width, height = _a.height;
    var x = Math.max(0, bar.x);
    var y = Math.max(0, bar.y);
    return {
        x: x,
        y: y,
        width: Math.min(width, bar.x + bar.width) - x,
        height: Math.min(height, bar.y + bar.height) - y,
    };
};
/** @internal */
var isValuesChanged = function (previous, current) {
    return Object.entries(previous).some(function (el) { return el[1] !== current[el[0]]; });
};
/** @internal */
var isCoordinatesChanged = function (_a, _b) {
    var prevCoordinates = _a.coordinates;
    var coordinates = _b.coordinates;
    if (prevCoordinates.length !== coordinates.length) {
        return true;
    }
    return prevCoordinates.some(function (el, index) {
        return el.arg !== coordinates[index].arg || el.val !== coordinates[index].val;
    });
};
/** @internal */
var isScalesChanged = function (previous, current) {
    return !rangesEqual(previous.argScale.range(), current.argScale.range()) ||
        !rangesEqual(previous.valScale.range(), current.valScale.range());
};

// "Stack" plugin relies on "data" and "series" getters and
// knowledge about "getPointTransformer" and "path" functions behavior.
var buildSeriesToStackMap = function (stacks) {
    var result = {};
    stacks.forEach(function (_a, i) {
        var series = _a.series;
        series.forEach(function (name) {
            result[name] = i;
        });
    });
    return result;
};
var getStackedPointTransformer = function (getPointTransformer) {
    var wrapper = function (series) {
        var transform = getPointTransformer(series);
        var valueScale = series.valueScale;
        return function (point) {
            var ret = transform(point);
            return __assign(__assign({}, ret), { startVal: valueScale(point.value0) });
        };
    };
    // Preserve static fields of original transformer.
    Object.assign(wrapper, getPointTransformer);
    return wrapper;
};
var collectStacks = function (seriesList, seriesToStackMap, stacksKeys, seriesPositions) {
    seriesList.forEach(function (_a) {
        var name = _a.name, valueField = _a.valueField;
        var stackId = seriesToStackMap[name];
        if (stackId === undefined) {
            return;
        }
        if (!stacksKeys[stackId]) {
            stacksKeys[stackId] = [];
        }
        seriesPositions[name] = stacksKeys[stackId].length;
        stacksKeys[stackId].push(valueField);
    });
    // Stack cannot consist of single series.
    Object.keys(stacksKeys).forEach(function (stackId) {
        if (stacksKeys[stackId].length === 1) {
            delete stacksKeys[stackId];
        }
    });
};
var getStackedData = function (stacksKeys, dataItems, offset, order) {
    var result = {};
    Object.keys(stacksKeys).forEach(function (stackId) {
        result[stackId] = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(stacksKeys[stackId])
            .order(order)
            .offset(offset)(dataItems);
    });
    return result;
};
var buildStackedSeries = function (series, dataItems) {
    var points = series.points.map(function (point) {
        var _a = __read(dataItems[point.index], 2), value0 = _a[0], value = _a[1];
        return __assign(__assign({}, point), { value: value, value0: value0 });
    });
    var stackedSeries = __assign(__assign({}, series), { points: points, isStacked: true });
    if (series.getPointTransformer.isStartedFromZero) {
        stackedSeries.getPointTransformer = getStackedPointTransformer(series.getPointTransformer);
    }
    return stackedSeries;
};
var applyStacking = function (seriesList, dataItems, seriesToStackMap, offset, order) {
    var stacksKeys = {};
    var seriesPositions = {};
    collectStacks(seriesList, seriesToStackMap, stacksKeys, seriesPositions);
    if (Object.keys(stacksKeys).length === 0) {
        return seriesList;
    }
    var stackedData = getStackedData(stacksKeys, dataItems, offset, order);
    return seriesList.map(function (seriesItem) {
        var stackId = seriesToStackMap[seriesItem.name];
        var stackData = stackedData[stackId];
        if (!stackData) {
            return seriesItem;
        }
        var position = seriesPositions[seriesItem.name];
        return buildStackedSeries(seriesItem, stackData[position]);
    });
};
var getGroupName = function (series, i, seriesToStackMap) {
    var stackId = seriesToStackMap[series.name];
    return stackId >= 0 ? String(stackId) : "group-" + i;
};
var getGroupedPointTransformer = function (getPointTransformer, groupCount, groupOffset) {
    var wrapper = function (series) {
        var transform = getPointTransformer(series);
        var widthCoeff = 1 / groupCount;
        return function (point) {
            var original = transform(point);
            var arg = (original.arg - original.maxBarWidth * (0.5 - 0.5 * widthCoeff - groupOffset * widthCoeff));
            var result = __assign(__assign({}, original), { arg: arg, maxBarWidth: original.maxBarWidth / groupCount });
            return result;
        };
    };
    // Preserve static fields of original transformer.
    Object.assign(wrapper, getPointTransformer);
    return wrapper;
};
var applyGrouping = function (seriesList, seriesToStackMap) {
    var groups = new Set();
    seriesList.forEach(function (seriesItem, i) {
        if (seriesItem.getPointTransformer.isBroad) {
            groups.add(getGroupName(seriesItem, i, seriesToStackMap));
        }
    });
    // There cannot be single group.
    if (groups.size < 2) {
        return seriesList;
    }
    var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])().domain(Array.from(groups)).range([0, groups.size]);
    return seriesList.map(function (seriesItem, i) {
        if (!seriesItem.getPointTransformer.isBroad) {
            return seriesItem;
        }
        var getPointTransformer = getGroupedPointTransformer(seriesItem.getPointTransformer, groups.size, scale(getGroupName(seriesItem, i, seriesToStackMap)));
        return __assign(__assign({}, seriesItem), { getPointTransformer: getPointTransformer });
    });
};
/** @internal */
var getStackedSeries = function (seriesList, dataItems, _a) {
    var stacks = _a.stacks, offset = _a.offset, order = _a.order;
    var map = buildSeriesToStackMap(stacks);
    var stackedSeriesList = applyStacking(seriesList, dataItems, map, offset, order);
    var groupedSeriesList = applyGrouping(stackedSeriesList, map);
    return groupedSeriesList;
};
var resetDomainItems = function (domains) {
    var result = {};
    Object.keys(domains).forEach(function (key) {
        result[key] = __assign(__assign({}, domains[key]), { domain: [] });
    });
    return result;
};
var extendDomainsWithAdditionalItems = function (domains, series) {
    var _a;
    var items = series.points.map(function (point) { return point.value0; });
    var key = getValueDomainName(series.scaleName);
    var domain = updateDomainItems(domains[key], items);
    return domain !== domains[key] ? __assign(__assign({}, domains), (_a = {}, _a[key] = domain, _a)) : domains;
};
// Stacking changes data - so computed domains have to be discarded
// and recalculated from the new stacked data.
/** @internal */
var getStackedDomains = function (domains, seriesList) {
    var stackedSeries = seriesList.filter(function (series) { return series.isStacked; });
    if (!stackedSeries.length) {
        return domains;
    }
    // Recalculate domains in a common way.
    var rebuiltDomains = seriesList.reduce(extendDomains, resetDomainItems(domains));
    // Take additional "value0" fields into account.
    return stackedSeries.reduce(extendDomainsWithAdditionalItems, rebuiltDomains);
};

/** @internal */
var easeOutCubic = function (t) { return (t - 1) * (t - 1) * (t - 1) + 1; };
/** @internal */
var getDelay = function (index, isStart) { return isStart ? index * 30 : 0; };
/** @internal */
var getStartVal$1 = function (scales) {
    return scales.valScale.copy().clamp(true)(0);
};
/** @internal */
var getPathStart = function (scales, _a) {
    var coordinates = _a.coordinates;
    var start = getStartVal$1(scales);
    return { coordinates: coordinates.map(function (coord) {
            return ({ arg: coord.arg, val: start, startVal: start });
        }) };
};
/** @internal */
var getPointStart = function (scales, _a) {
    var arg = _a.arg;
    var start = getStartVal$1(scales);
    return { arg: arg, val: start, startVal: start };
};
/** @internal */
var getPieStart = function (scales, _a) {
    var startAngle = _a.startAngle, endAngle = _a.endAngle;
    return ({ innerRadius: 0, outerRadius: 0, startAngle: startAngle, endAngle: endAngle });
};

// Comparing by reference is not an option as Tracker always sends new objects.
// Tracker cannot persist references as it actually operates with simple scalars
// and constructs objects to provide info in a slightly more suitable way.
var compareTargets = function (target1, target2) { return (target1.series === target2.series && target1.point === target2.point); };
// If *currentTarget* is among *targets* then it has priority but only while its distance
// is not significantly greater (DISTANCE_PRIORITY_RATIO) than that of the best candidate.
var selectTarget = function (targets, currentTarget) {
    var candidate = targets[0];
    if (!currentTarget) {
        return candidate;
    }
    if (!candidate) {
        return null;
    }
    return compareTargets(candidate, currentTarget) ? undefined : candidate;
};
/** @internal */
var processPointerMove = function (targets, currentTarget, notify) {
    var nextTarget = selectTarget(targets, currentTarget);
    if (nextTarget === undefined) {
        return undefined;
    }
    if (notify) {
        notify(nextTarget);
    }
    return nextTarget;
};

// This function is to be called from context where DOM is available -
// so *window* can be accessed safely.
/** @internal */
var getOffset = function (element) {
    var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top;
    // Safer way to get window.
    var defaultView = element.ownerDocument.defaultView;
    var _b = defaultView, pageXOffset = _b.pageXOffset, pageYOffset = _b.pageYOffset;
    return [left + pageXOffset, top + pageYOffset];
};
/** @internal */
var getEventCoords = function (e, offset) {
    var _a = e.touches ? e.touches[0] : e, pageX = _a.pageX, pageY = _a.pageY;
    return [pageX - offset[0], pageY - offset[1]];
};

/** @internal */
var getParameters = function (series, target) {
    var currentSeries = series.find(function (_a) {
        var name = _a.name;
        return target.series === name;
    });
    var item = currentSeries.points.find(function (point) { return point.index === target.point; });
    return {
        element: currentSeries.getPointTransformer.getTargetElement(item),
        text: "" + item.value,
    };
};
/** @internal */
var createReference = function (rect, rootRef) { return ({
    // These two fields together with *width* and *height* are left with stub data for
    // simplicity reasons - they seem to be unused by *Popper*.
    clientWidth: 0,
    clientHeight: 0,
    getBoundingClientRect: function () {
        // This function is expected to be called (by the *Popper*) when DOM is ready -
        // so *rootRef.current* can be accessed.
        var offset = getOffset(rootRef.current);
        // *getBoundingClientRect* of a real html element is affected by window scrolling.
        // *popper.js* subscribes "html -> getBoundingClientRect -> (left, top)" from
        // "reference -> getBoundingClientRect" - so here it is added.
        var htmlRect = rootRef.current.ownerDocument.documentElement.getBoundingClientRect();
        return {
            left: rect[0] + offset[0] + htmlRect.left,
            top: rect[1] + offset[1] + htmlRect.top,
            right: rect[2] + offset[0] + htmlRect.left,
            bottom: rect[3] + offset[1] + htmlRect.top,
            width: 0,
            height: 0,
        };
    },
}); };
/** @internal */
var processHandleTooltip = function (targets, currentTarget, onTargetItemChange) {
    var filterTargets = targets.filter(function (target) { return target.point !== undefined; });
    return processPointerMove(filterTargets, currentTarget, onTargetItemChange);
};

var getArgumentBounds = function (viewport) { return (viewport && viewport.argumentStart !== undefined && viewport.argumentEnd !== undefined
    ? [viewport.argumentStart, viewport.argumentEnd] : null); };
var getValueBounds = function (viewport) { return (viewport && viewport.valueStart !== undefined && viewport.valueEnd !== undefined
    ? [viewport.valueStart, viewport.valueEnd] : null); };
var getValueScaleName = function (viewport) { return (getValueDomainName(viewport && viewport.scaleName)); };
var getDefaultBounds = function (scale) {
    var domain = scale.domain();
    return [domain[0], domain[domain.length - 1]];
};
var proportionallyExtendRange = function (range, subRange) {
    var p = (subRange[0] - subRange[1]) / (range[0] - range[1]);
    var q = subRange[0] - p * range[0];
    return [
        (range[0] - q) / p,
        (range[1] - q) / p,
    ];
};
var adjustRange = function (domain, bounds, range) {
    var scale = makeScale(domain, range);
    var subRange = scaleBounds(scale, bounds);
    return rangesEqual(subRange, range) ? range : proportionallyExtendRange(range, subRange);
};
var update = function (ranges, changes, key, domain, bounds) {
    var newRange = adjustRange(domain, bounds, ranges[key]);
    if (newRange !== ranges[key]) {
        changes[key] = newRange;
    }
};
/** @internal */
var adjustLayout = function (domains, ranges, viewport) {
    var changes = {};
    var argumentBounds = getArgumentBounds(viewport);
    if (argumentBounds) {
        update(ranges, changes, ARGUMENT_DOMAIN, domains[ARGUMENT_DOMAIN], argumentBounds);
    }
    var valueBounds = getValueBounds(viewport);
    if (valueBounds) {
        update(ranges, changes, VALUE_DOMAIN, domains[getValueScaleName(viewport)], valueBounds);
    }
    return Object.keys(changes).length ? __assign(__assign({}, ranges), changes) : ranges;
};
var boundsForScale = function (name, scales, currentBounds, interaction, type, delta, anchor, range) {
    if (!checkInteraction(interaction, type)) {
        return null;
    }
    var scale = scales[name];
    var bounds = currentBounds || getDefaultBounds(scale);
    var newBounds;
    if (type === 'pan') {
        newBounds = moveBounds(scale, bounds, delta);
    }
    else if (type === 'zoom') {
        newBounds = range ? invertBoundsRange(scale, range) : growBounds(scale, bounds, delta, anchor);
    }
    return newBounds !== bounds ? newBounds : null;
};
/** @internal */
var getViewport = function (scales, rotated, _a, type, deltas, anchors, ranges, viewport, onViewportChange) {
    var _b = __read(_a, 2), argInteraction = _b[0], valInteraction = _b[1];
    var argIndex = Number(rotated);
    var valIndex = 1 - argIndex;
    var changes = {};
    var argumentBounds = boundsForScale(ARGUMENT_DOMAIN, scales, getArgumentBounds(viewport), argInteraction, type, deltas ? deltas[argIndex] : 0, anchors ? anchors[argIndex] : 0, ranges ? ranges[argIndex] : undefined);
    var valueBounds = boundsForScale(getValueScaleName(viewport), scales, getValueBounds(viewport), valInteraction, type, deltas ? deltas[valIndex] : 0, anchors ? anchors[valIndex] : 0, ranges ? ranges[valIndex] : undefined);
    if (argumentBounds) {
        changes.argumentStart = argumentBounds[0];
        changes.argumentEnd = argumentBounds[1];
    }
    if (valueBounds) {
        changes.valueStart = valueBounds[0];
        changes.valueEnd = valueBounds[1];
    }
    if (Object.keys(changes).length) {
        var newViewport = __assign(__assign({}, viewport), changes);
        if (onViewportChange) {
            onViewportChange(newViewport);
        }
        return { viewport: newViewport };
    }
    return null;
};
/** @internal */
var getDeltaForTouches = function (touches) {
    var deltaX = touches[0].pageX - touches[1].pageX;
    var deltaY = touches[0].pageY - touches[1].pageY;
    var delta = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    var center = [
        (touches[0].pageX + touches[1].pageX) / 2,
        (touches[0].pageY + touches[1].pageY) / 2,
    ];
    return { delta: delta, center: center };
};
/** @internal */
var isKeyPressed = function (event, key) { return event[key + "Key"]; };
/** @internal */
var getWheelDelta = function (_a) {
    var wheelDelta = _a.wheelDelta, deltaY = _a.deltaY;
    return wheelDelta !== undefined ? wheelDelta : deltaY * -30; // deltaY for FF
};
/** @internal */
var isMultiTouch = function (e) { return e.touches && e.touches.length === 2; };
/** @internal */
var attachEvents = function (node, handlers) {
    Object.keys(handlers).forEach(function (el) {
        node.addEventListener(el, handlers[el], { passive: false });
    });
};
/** @internal */
var detachEvents = function (node, handlers) {
    Object.keys(handlers).forEach(function (el) {
        node.removeEventListener(el, handlers[el]);
    });
};
/** @internal */
var getRect$1 = function (rotated, interactionWithArguments, interactionWithValues, initial, current, pane) {
    var isZoomArgument = checkInteraction(interactionWithArguments, 'zoom');
    var isZoomValue = checkInteraction(interactionWithValues, 'zoom');
    var isXFixed = rotated ? isZoomValue : isZoomArgument;
    var isYFixed = rotated ? isZoomArgument : isZoomValue;
    var x = isXFixed ? Math.min(initial[0], current[0]) : 0;
    var width = isXFixed ? Math.abs(initial[0] - current[0]) : pane.width;
    var y = isYFixed ? Math.min(initial[1], current[1]) : 0;
    var height = isYFixed ? Math.abs(initial[1] - current[1]) : pane.height;
    return {
        x: x, y: y, width: width, height: height,
    };
};
var checkInteraction = function (interaction, type) {
    return interaction === 'both' || interaction === type;
};
/** @internal */
var setCursorType = function (node, type) {
    var defaultType = 'pointer';
    node.style.cursor = type ? type : defaultType;
};

/** @internal */
var getReadiness = function (_a, _b) {
    var current = _b.current;
    var pane = _a.pane, restLayouts = __rest(_a, ["pane"]);
    if (!pane.width && !pane.height) {
        return false;
    }
    var bbox = current.getBoundingClientRect();
    var width = pane.width;
    var height = pane.height;
    Object.entries(restLayouts).forEach(function (el) {
        if (el[0].includes('top') || el[0].includes('bottom')) {
            height += el[1].height;
        }
        else {
            width += el[1].width;
        }
    });
    return Math.abs(bbox.width - width) < DIFFERENCE &&
        Math.abs(bbox.height - height) < DIFFERENCE;
};

var getSegmentLength = function (dx, dy) { return Math.sqrt(dx * dx + dy * dy); };
// *distance* is a normalized distance to point.
// It belongs to [0, Infinity):
//  = 0 - at point center
//  = 1 - at point border
//  > 1 - outside point
// This function is called from event handlers (when DOM is available) -
// *window.document* can be accessed safely.
var createContext = function () { return document.createElement('canvas').getContext('2d'); };
// For a start using browser canvas will suffice.
// However a better and more clean solution should be found.
// Can't d3 perform hit testing?
var createCanvasAbusingHitTester = function (makePath, points, rotated) {
    var ctx = createContext();
    var path = makePath(rotated);
    path.context(ctx);
    path(points);
    return function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        return ctx.isPointInPath(x, y);
    };
};
var LINE_POINT_SIZE = 20;
var LINE_TOLERANCE = 10;
var getDistance = function (_a, _b, rotated) {
    var _c = __read(_a, 2), px = _c[0], py = _c[1];
    var arg = _b.arg, val = _b.val;
    var x = rotated ? val : arg;
    var y = rotated ? arg : val;
    return getSegmentLength(px - x, py - y);
};
var createContinuousSeriesHitTesterCreator = function (makePath) { return function (points, rotated) {
    var fallbackHitTest = createCanvasAbusingHitTester(makePath, points, rotated);
    return function (target) {
        var minDistance = Number.MAX_VALUE;
        var minIndex = 0;
        var list = [];
        points.forEach(function (point, i) {
            var distance = getDistance(target, point, rotated);
            if (distance <= LINE_POINT_SIZE) {
                list.push({ distance: distance, index: point.index });
            }
            if (distance < minDistance) {
                minDistance = distance;
                minIndex = i;
            }
        });
        // This is special case for continuous series - if no point is actually hit
        // then the closest point to the pointer position is picked.
        if (!list.length && fallbackHitTest(target)) {
            list.push({ index: points[minIndex].index, distance: minDistance });
        }
        return list.length ? { points: list } : null;
    };
}; };
var createPointsEnumeratingHitTesterCreator = function (hitTestPoint) { return function (points, rotated) { return function (target) {
    var list = [];
    points.forEach(function (point) {
        var status = hitTestPoint(target, point, rotated);
        if (status) {
            list.push({ index: point.index, distance: status.distance });
        }
    });
    return list.length ? { points: list } : null;
}; }; };
/** @internal */
var createAreaHitTester = createContinuousSeriesHitTesterCreator(function (rotated) {
    var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
    var hitArea = rotated ? dRotateArea : dArea;
    if (rotated) {
        path.x1(hitArea.x1());
        path.x0(hitArea.x0());
        path.y(hitArea.y());
    }
    else {
        path.x(hitArea.x());
        path.y1(hitArea.y1());
        path.y0(hitArea.y0());
    }
    return path;
});
/** @internal */
var createLineHitTester = createContinuousSeriesHitTesterCreator(function (rotated) {
    var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
    var hitLine = rotated ? dRotateLine : dLine;
    if (rotated) {
        var getX_1 = hitLine.x();
        path.y(hitLine.y());
        path.x0(function (point) { return getX_1(point) + LINE_TOLERANCE; });
        path.x1(function (point) { return getX_1(point) - LINE_TOLERANCE; });
    }
    else {
        var getY_1 = hitLine.y();
        path.x(hitLine.x());
        path.y1(function (point) { return getY_1(point) - LINE_TOLERANCE; });
        path.y0(function (point) { return getY_1(point) + LINE_TOLERANCE; });
    }
    return path;
});
/** @internal */
var createSplineHitTester = createContinuousSeriesHitTesterCreator(function (rotated) {
    var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
    var hitSpline = rotated ? dRotateSpline : dSpline;
    if (rotated) {
        var getX_2 = hitSpline.x();
        path.y(hitSpline.y());
        path.x1(function (point) { return getX_2(point) - LINE_TOLERANCE; });
        path.x0(function (point) { return getX_2(point) + LINE_TOLERANCE; });
    }
    else {
        var getY_2 = hitSpline.y();
        path.x(hitSpline.x());
        path.y1(function (point) { return getY_2(point) - LINE_TOLERANCE; });
        path.y0(function (point) { return getY_2(point) + LINE_TOLERANCE; });
    }
    path.curve(hitSpline.curve());
    return path;
});
var hitTestRect = function (dx, dy, halfX, halfY) { return (Math.abs(dx) <= halfX && Math.abs(dy) <= halfY ? {
    distance: getSegmentLength(dx, dy),
} : null); };
// Some kind of binary search can be used here as bars can be ordered along argument axis.
/** @internal */
var createBarHitTester = createPointsEnumeratingHitTesterCreator(function (_a, point, rotated) {
    var _b = __read(_a, 2), px = _b[0], py = _b[1];
    var _c = point, arg = _c.arg, val = _c.val, startVal = _c.startVal, barWidth = _c.barWidth, maxBarWidth = _c.maxBarWidth;
    var halfWidth = maxBarWidth * barWidth / 2;
    var halfHeight = Math.abs(val - startVal) / 2;
    var centerVal = (val + startVal) / 2;
    var xCenter = rotated ? centerVal : arg;
    var yCenter = rotated ? arg : centerVal;
    return hitTestRect(px - xCenter, py - yCenter, rotated ? halfHeight : halfWidth, rotated ? halfWidth : halfHeight);
});
/** @internal */
var createScatterHitTester = createPointsEnumeratingHitTesterCreator(function (_a, obj, rotated) {
    var _b = __read(_a, 2), px = _b[0], py = _b[1];
    var point = obj.point;
    var distance = getDistance([px, py], obj, rotated);
    return distance <= point.size / 2 ? { distance: distance } : null;
});
var mapAngleTod3 = function (angle) {
    var ret = angle + Math.PI / 2;
    return ret >= 0 ? ret : ret + Math.PI * 2;
};
// Some kind of binary search can be used here as pies can be ordered along angle axis.
/** @internal */
var createPieHitTester = createPointsEnumeratingHitTesterCreator(function (_a, point) {
    var _b = __read(_a, 2), px = _b[0], py = _b[1];
    var _c = point, x = _c.arg, y = _c.val, innerRadius = _c.innerRadius, outerRadius = _c.outerRadius, startAngle = _c.startAngle, maxRadius = _c.maxRadius, endAngle = _c.endAngle;
    var inner = innerRadius * maxRadius;
    var outer = outerRadius * maxRadius;
    var rCenter = (inner + outer) / 2;
    var angleCenter = (startAngle + endAngle) / 2;
    var halfRadius = (outer - inner) / 2;
    var halfAngle = Math.abs(startAngle - endAngle) / 2;
    var dx = px - x;
    var dy = py - y;
    var r = getSegmentLength(dx, dy);
    var angle = mapAngleTod3(Math.atan2(dy, dx));
    // This is not a correct distance calculation but for now it will suffice.
    // For Pie series it would not be actually used.
    return hitTestRect(r - rCenter, angle - angleCenter, halfRadius, halfAngle);
});
var buildFilter = function (targets) {
    var result = {};
    targets.forEach(function (_a) {
        var series = _a.series, point = _a.point;
        (result[series] = result[series] || new Set()).add(point);
    });
    return result;
};
/** @internal */
var changeSeriesState = function (seriesList, targets, state) {
    if (targets.length === 0) {
        return seriesList;
    }
    var filter = buildFilter(targets);
    var matches = 0;
    var result = seriesList.map(function (seriesItem) {
        var set = filter[seriesItem.name];
        if (!set) {
            return seriesItem;
        }
        matches += 1;
        var props = { state: state };
        if (set.size) {
            props.points = seriesItem.points.map(function (point) { return (set.has(point.index) ? __assign(__assign({}, point), { state: state }) : point); });
        }
        return __assign(__assign({}, seriesItem), props);
    });
    // This is to prevent false rerenders.
    return matches > 0 ? result : seriesList;
};

var getDefaultLegendItems = function (series) { return series.map(function (_a) {
    var text = _a.name, color = _a.color;
    return ({ text: text, color: color });
}); };
var getPieLegendItems = function (series) { return series[0]
    .points.map(function (_a) {
    var text = _a.argument, color = _a.color;
    return ({ text: text, color: color });
}); };
// The function supports special case when there is single Pie series.
// There is no common way to tell if series is PieSeries -
// checking `radius` props will suffice for now.
var isSinglePieSeriesCase = function (series) { return (series.length === 1 && 'innerRadius' in series[0] && 'outerRadius' in series[0]); };
/** @internal */
var getLegendItems = function (series) { return ((isSinglePieSeriesCase(series) ? getPieLegendItems : getDefaultLegendItems)(series)); };

var DISTANCE_THRESHOLD = 20;
var compareHitTargets = function (t1, t2) {
    var distanceDelta = t1.distance - t2.distance;
    if (Math.abs(distanceDelta) <= DISTANCE_THRESHOLD) {
        var orderDelta = t2.order - t1.order;
        return orderDelta !== 0 ? orderDelta : distanceDelta;
    }
    return distanceDelta;
};
var buildEventHandler = function (seriesList, handlers) {
    var hitTesters = null;
    var createHitTesters = function () {
        var obj = {};
        seriesList.forEach(function (seriesItem) {
            obj[seriesItem.symbolName] = seriesItem
                .createHitTester(seriesItem.points, seriesItem.rotated);
        });
        return obj;
    };
    return function (e) {
        var location = getEventCoords(e, getOffset(e.currentTarget));
        hitTesters = hitTesters || createHitTesters();
        var targets = [];
        seriesList.forEach(function (_a) {
            var series = _a.name, order = _a.index, symbolName = _a.symbolName;
            var status = hitTesters[symbolName](location);
            if (status) {
                targets.push.apply(targets, __spread(status.points.map(function (point) { return ({
                    series: series, order: order, point: point.index, distance: point.distance,
                }); })));
            }
        });
        targets.sort(compareHitTargets);
        var arg = { location: location, targets: targets, event: e.nativeEvent };
        handlers.forEach(function (handler) { return handler(arg); });
    };
};
var buildLeaveEventHandler = function (handlers) { return function (e) {
    var location = getEventCoords(e, getOffset(e.currentTarget));
    var arg = { location: location, targets: [] };
    handlers.forEach(function (handler) { return handler(arg); });
}; };
// The result is of Map<string, Function> type.
// Keys are DOM event names (https://developer.mozilla.org/en-US/docs/Web/Events).
/** @internal */
var buildEventHandlers = function (seriesList, _a) {
    var clickHandlers = _a.clickHandlers, pointerMoveHandlers = _a.pointerMoveHandlers;
    var handlers = {};
    if (clickHandlers.length) {
        handlers.click = buildEventHandler(seriesList, clickHandlers);
    }
    if (pointerMoveHandlers.length) {
        var moveHandler = buildEventHandler(seriesList, pointerMoveHandlers);
        var leaveHandler = buildLeaveEventHandler(pointerMoveHandlers);
        if ('ontouchstart' in window) {
            handlers.touchstart = moveHandler;
        }
        else {
            handlers.mousemove = moveHandler;
            handlers.mouseleave = leaveHandler;
        }
    }
    return handlers;
};

/** @internal */
var getProgress = function (_a) {
    var elapsed = _a.elapsed, total = _a.total;
    return Math.min(elapsed / total, 1);
};
/** @internal */
var runAnimation = function (setAttributes, getNewPositions, easing, duration, delay) { return new Promise(function (resolve) {
    setTimeout(function () {
        var time = {
            start: Date.now(),
            total: duration,
            elapsed: 0,
        };
        var step = function () {
            time.elapsed = Date.now() - time.start;
            var progress = getProgress(time);
            setAttributes(getNewPositions(easing(progress)));
            if (progress < 1)
                requestAnimationFrame(step);
        };
        resolve(requestAnimationFrame(step));
    }, delay);
}); };
/** @internal */
var buildAnimation = function (easing, duration) { return function (startCoords, endCoords, processAnimation, setAttributes, delay) {
    if (delay === void 0) { delay = 0; }
    var animationID;
    var stop = function () {
        if (animationID) {
            cancelAnimationFrame(animationID);
            animationID = undefined;
        }
    };
    var run = function (start, end, delayValue) {
        animationID = runAnimation(setAttributes, processAnimation(start, end), easing, duration, delayValue).then(function (res) {
            animationID = res;
        });
    };
    run(startCoords, endCoords, delay);
    return {
        update: function (updatedStartCoords, updatedEndCoords, updatedDelay) {
            if (updatedDelay === void 0) { updatedDelay = 0; }
            stop();
            run(updatedStartCoords, updatedEndCoords, updatedDelay);
        },
        stop: stop,
    };
}; };
var lerp = function (a, b, t) { return a + t * (b - a); };
/** @internal */
var processPointAnimation = function (startCoords, endCoords) {
    return function (progress) {
        return {
            arg: lerp(startCoords.arg, endCoords.arg, progress),
            val: lerp(startCoords.val, endCoords.val, progress),
        };
    };
};
/** @internal */
var processBarAnimation = function (startCoords, endCoords) {
    return function (progress) {
        return {
            arg: lerp(startCoords.arg, endCoords.arg, progress),
            val: lerp(startCoords.val, endCoords.val, progress),
            startVal: lerp(startCoords.startVal, endCoords.startVal, progress),
        };
    };
};
/** @internal */
var processLineAnimation = function (_a, _b) {
    var coordinates = _a.coordinates;
    var endCoordinates = _b.coordinates;
    return function (progress) {
        return {
            coordinates: endCoordinates.map(function (coord, index) {
                var startCurCoord = coordinates[index];
                return __assign(__assign({}, coord), { arg: lerp(startCurCoord.arg, coord.arg, progress), val: lerp(startCurCoord.val, coord.val, progress) });
            }),
        };
    };
};
/** @internal */
var processAreaAnimation = function (_a, _b) {
    var coordinates = _a.coordinates;
    var endCoordinates = _b.coordinates;
    return function (progress) {
        return {
            coordinates: endCoordinates.map(function (coord, index) {
                var startCurCoord = coordinates[index];
                return __assign(__assign({}, coord), { arg: lerp(startCurCoord.arg, coord.arg, progress), val: lerp(startCurCoord.val, coord.val, progress), startVal: lerp(startCurCoord.startVal, coord.startVal, progress) });
            }),
        };
    };
};
/** @internal */
var processPieAnimation = function (start, end) {
    return function (progress) {
        return {
            innerRadius: lerp(start.innerRadius, end.innerRadius, progress),
            outerRadius: lerp(start.outerRadius, end.outerRadius, progress),
            startAngle: lerp(start.startAngle, end.startAngle, progress),
            endAngle: lerp(start.endAngle, end.endAngle, progress),
        };
    };
};


//# sourceMappingURL=dx-chart-core.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-core/dist/dx-core.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@devexpress/dx-core/dist/dx-core.es.js ***!
  \*************************************************************/
/*! exports provided: EventEmitter, PluginHost, argumentsShallowEqual, createClickHandlers, easeInCubic, easeInOutCubic, easeInOutQuad, easeInOutQuart, easeInOutQuint, easeInQuad, easeInQuart, easeInQuint, easeOutCubic, easeOutQuad, easeOutQuart, easeOutQuint, getMessagesFormatter, memoize, shallowEqual, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginHost", function() { return PluginHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsShallowEqual", function() { return argumentsShallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClickHandlers", function() { return createClickHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesFormatter", function() { return getMessagesFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/**
 * Bundle of @devexpress/dx-core
 * Generated: 2020-03-27
 * Version: 2.6.0
 * License: https://js.devexpress.com/Licensing
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var DELAY = 200;
var compare = function (a, b) {
    var aPosition = a.position();
    var bPosition = b.position();
    for (var i = 0; i < Math.min(aPosition.length, bPosition.length); i += 1) {
        if (aPosition[i] < bPosition[i])
            return -1;
        if (aPosition[i] > bPosition[i])
            return 1;
    }
    return aPosition.length - bPosition.length;
};
/** @internal */
var insertPlugin = function (array, newItem) {
    var result = array.slice();
    var nextItemIndex = array.findIndex(function (item) { return compare(newItem, item) <= 0; });
    var targetIndex = nextItemIndex < 0 ? array.length : nextItemIndex;
    var alreadyExists = (targetIndex >= 0 && targetIndex < array.length)
        && compare(newItem, array[targetIndex]) === 0;
    result.splice(targetIndex, alreadyExists ? 1 : 0, newItem);
    return result;
};
/** @internal */
var removePlugin = function (array, item) {
    var itemIndex = array.indexOf(item);
    return itemIndex >= 0 ? __spread(array.slice(0, itemIndex), array.slice(itemIndex + 1)) : array;
};
/** @internal */
var createClickHandlers = function (click, dblClick) {
    var timeoutId;
    var events = {};
    if (click) {
        events.onClick = function (e) {
            if (!timeoutId) {
                timeoutId = setTimeout(function () {
                    clearTimeout(timeoutId);
                    click(e);
                }, DELAY);
            }
        };
    }
    if (dblClick) {
        events.onDoubleClick = function (e) {
            clearTimeout(timeoutId);
            dblClick(e);
        };
    }
    return events;
};
/** @internal */
var slice = function (arr) { return Array.prototype.slice.call(arr); }; // slice can be renamed to copy as well

var getDependencyError = function (pluginName, dependencyName) { return new Error("The '" + pluginName + "' plugin requires '" + dependencyName + "' to be defined before it."); };
/** @internal */
var PluginHost = /*#__PURE__*/ (function () {
    function PluginHost() {
        this.gettersCache = {};
        this.knownKeysCache = {};
        this.validationRequired = true;
        this.plugins = [];
        this.subscriptions = new Set();
    }
    PluginHost.prototype.ensureDependencies = function () {
        var defined = new Set();
        var knownOptionals = new Map();
        this.plugins
            .filter(function (plugin) { return plugin.container; })
            .forEach(function (plugin) {
            var pluginName = plugin.name || '';
            if (knownOptionals.has(pluginName)) {
                throw (getDependencyError(knownOptionals.get(pluginName), pluginName));
            }
            (plugin.dependencies || [])
                .forEach(function (dependency) {
                if (defined.has(dependency.name))
                    return;
                if (dependency.optional) {
                    if (!knownOptionals.has(dependency.name)) {
                        knownOptionals.set(dependency.name, pluginName);
                    }
                    return;
                }
                throw (getDependencyError(pluginName, dependency.name));
            });
            defined.add(pluginName);
        });
    };
    PluginHost.prototype.registerPlugin = function (plugin) {
        this.plugins = insertPlugin(this.plugins, plugin);
        this.cleanPluginsCache();
    };
    PluginHost.prototype.unregisterPlugin = function (plugin) {
        this.plugins = removePlugin(this.plugins, plugin);
        this.cleanPluginsCache();
    };
    PluginHost.prototype.knownKeys = function (postfix) {
        if (!this.knownKeysCache[postfix]) {
            this.knownKeysCache[postfix] = Array.from(this.plugins
                .map(function (plugin) { return Object.keys(plugin); })
                .map(function (keys) { return keys.filter(function (key) { return key.endsWith(postfix); })[0]; })
                .filter(function (key) { return !!key; })
                .reduce(function (acc, key) { return acc.add(key); }, new Set()))
                .map(function (key) { return key.replace(postfix, ''); });
        }
        return this.knownKeysCache[postfix];
    };
    PluginHost.prototype.collect = function (key, upTo) {
        var _this = this;
        if (this.validationRequired) {
            this.ensureDependencies();
            this.validationRequired = false;
        }
        if (!this.gettersCache[key]) {
            this.gettersCache[key] = this.plugins.map(function (plugin) { return plugin[key]; }).filter(function (plugin) { return !!plugin; });
        }
        if (!upTo)
            return this.gettersCache[key];
        var upToIndex = this.plugins.indexOf(upTo);
        return this.gettersCache[key].filter(function (getter) {
            var pluginIndex = _this.plugins.findIndex(function (plugin) { return plugin[key] === getter; });
            return pluginIndex < upToIndex;
        });
    };
    PluginHost.prototype.get = function (key, upTo) {
        var plugins = this.collect(key, upTo);
        if (!plugins.length)
            return undefined;
        var result = plugins[0]();
        plugins.slice(1).forEach(function (plugin) {
            result = plugin(result);
        });
        return result;
    };
    PluginHost.prototype.registerSubscription = function (subscription) {
        this.subscriptions.add(subscription);
    };
    PluginHost.prototype.unregisterSubscription = function (subscription) {
        this.subscriptions.delete(subscription);
    };
    PluginHost.prototype.broadcast = function (event, message) {
        this.subscriptions.forEach(function (subscription) { return subscription[event] && subscription[event](message); });
    };
    PluginHost.prototype.cleanPluginsCache = function () {
        this.validationRequired = true;
        this.gettersCache = {};
        this.knownKeysCache = {};
    };
    return PluginHost;
}());

/** @internal */
var EventEmitter = /*#__PURE__*/ (function () {
    function EventEmitter() {
        this.handlers = [];
    }
    EventEmitter.prototype.emit = function (e) {
        this.handlers.forEach(function (handler) { return handler(e); });
    };
    EventEmitter.prototype.subscribe = function (handler) {
        this.handlers.push(handler);
    };
    EventEmitter.prototype.unsubscribe = function (handler) {
        this.handlers.splice(this.handlers.indexOf(handler), 1);
    };
    return EventEmitter;
}());

/** @internal */
var shallowEqual = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < keysA.length; i += 1) {
        if (!hasOwn.call(objB, keysA[i])
            || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
        var valA = objA[keysA[i]];
        var valB = objB[keysA[i]];
        if (valA !== valB) {
            return false;
        }
    }
    return true;
};
/** @internal */
var argumentsShallowEqual = function (prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
        return false;
    }
    for (var i = 0; i < prev.length; i += 1) {
        if (prev[i] !== next[i]) {
            return false;
        }
    }
    return true;
};

/** @internal */
var memoize = function (func) {
    var lastArgs = null;
    var lastResult = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (lastArgs === null || !argumentsShallowEqual(lastArgs, args)) {
            lastResult = func.apply(void 0, __spread(args));
        }
        lastArgs = args;
        return lastResult;
    };
};

/** @internal */
var easeInQuad = function (t) { return t * t; };
/** @internal */
var easeOutQuad = function (t) { return t * (2 - t); };
/** @internal */
var easeInOutQuad = function (t) { return (t < 0.5
    ? 2 * t * t
    : -1 + ((4 - (2 * t)) * t)); };
/** @internal */
var easeInCubic = function (t) { return t * t * t; };
/** @internal */
var easeOutCubic = function (t) { return ((t - 1) * (t - 1) * (t - 1)) + 1; };
/** @internal */
var easeInOutCubic = function (t) { return (t < 0.5
    ? 4 * t * t * t
    : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1); };
/** @internal */
var easeInQuart = function (t) { return t * t * t * t; };
/** @internal */
var easeOutQuart = function (t) { return 1 - ((t - 1) * (t - 1) * (t - 1) * (t - 1)); };
/** @internal */
var easeInOutQuart = function (t) { return (t < 0.5
    ? 8 * t * t * t * t
    : 1 - (8 * (t - 1) * (t - 1) * (t - 1) * (t - 1))); };
/** @internal */
var easeInQuint = function (t) { return t * t * t * t * t; };
/** @internal */
var easeOutQuint = function (t) { return 1 + ((t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1)); };
/** @internal */
var easeInOutQuint = function (t) { return (t < 0.5
    ? 16 * t * t * t * t * t
    : 1 + (16 * (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1))); };

var processPattern = function (pattern, params) { return Object.keys(params).reduce(function (msg, key) { return msg.replace("{" + key + "}", params[key]); }, pattern); };
/** @internal */
var getMessagesFormatter = function (messages) { return function (key, params) {
    var message = messages[key];
    if (typeof message === 'function') {
        return message(params);
    }
    if (params) {
        return processPattern(message, params);
    }
    return message;
}; };


//# sourceMappingURL=dx-core.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js ***!
  \***************************************************************************************************/
/*! exports provided: AreaSeries, BarSeries, LineSeries, PieSeries, SplineSeries, ArgumentAxis, Chart, Legend, ScatterSeries, Title, Tooltip, ValueAxis, ZoomAndPan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentAxis", function() { return ArgumentAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterSeries", function() { return ScatterSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxis", function() { return ValueAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomAndPan", function() { return ZoomAndPan; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-core */ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["AreaSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["BarSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplineSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["SplineSeries"]; });

/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @devexpress/dx-chart-core */ "./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/**
 * Bundle of @devexpress/dx-react-chart-material-ui
 * Generated: 2020-03-27
 * Version: 2.6.0
 * License: https://js.devexpress.com/Licensing
 */

















function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var getBorderColor = function getBorderColor(theme) {
  return theme.palette.type === 'light' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["lighten"])(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.divider, 1), 0.88) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["darken"])(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.divider, 1), 0.68);
};
var withClassName = function withClassName() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var setClassName = function setClassName(_ref) {
    var className = _ref.className,
        classes = _ref.classes,
        restProps = _objectWithoutProperties(_ref, ["className", "classes"]);

    return _objectSpread2({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className)
    }, restProps);
  }; // TODO: First candidate to `compose` util?


  return function (Target) {
    return _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"].apply(void 0, args)(Object(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["withPatchedProps"])(setClassName)(Target));
  };
};

var styles = function styles(theme) {
  var _theme$typography = theme.typography,
      fontFamily = _theme$typography.fontFamily,
      fontSize = _theme$typography.fontSize,
      fontWeightLight = _theme$typography.fontWeightLight;
  return {
    root: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeightLight,
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box'
    }
  };
};

var Root = withClassName(styles)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].Root);

var styles$1 = function styles(theme) {
  var fontFamily = theme.typography.fontFamily;
  return {
    root: {
      fill: theme.palette.text.secondary,
      fontFamily: fontFamily,
      fontSize: 12,
      fontWeight: 400
    }
  };
};

var Label = withClassName(styles$1)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].Label);

var palette = ['#42A5F5', '#FF7043', '#9CCC65', '#FFCA28', '#26A69A', '#EC407A'];

var ChartWithPalette = function ChartWithPalette(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"], props, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Palette"], {
    scheme: palette
  }), children);
};

ChartWithPalette.components = _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].components;
 true ? ChartWithPalette.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired
} : undefined;
var Chart = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root
})(ChartWithPalette);
Chart.Label = Label;

var styles$2 = function styles() {
  return {
    root: {
      paddingTop: 16,
      paddingBottom: 16
    }
  };
};

var Root$1 = withClassName(styles$2, {
  name: 'LegendRoot'
})(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"]);

var styles$3 = function styles() {
  return {
    root: {
      fontSize: 14,
      paddingLeft: 8,
      paddingRight: 8
    }
  };
};

var Label$1 = withClassName(styles$3, {
  name: 'LegendLabel'
})(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__["default"], restProps, text);
});

var styles$4 = function styles(theme) {
  return {
    root: {
      alignItems: 'center',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5)
    }
  };
};

var Item = withClassName(styles$4, {
  name: 'LegendItem'
})(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"]);

var Legend = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$1,
  Item: Item,
  Label: Label$1
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Legend"]);

var styles$5 = function styles() {
  return {
    root: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '20px'
    }
  };
};

var Text = withClassName(styles$5, {
  name: 'Title'
})(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
    component: "h3",
    variant: "h5"
  }, restProps), text);
});

var Title = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Text: Text
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Title"]);

var styles$6 = function styles(theme) {
  return {
    point: {
      fill: theme.palette.background.paper
    }
  };
};

var setClassName = function setClassName(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  if (restProps.state) {
    var className = restProps.className,
        rest = _objectWithoutProperties(restProps, ["className"]);

    return _objectSpread2({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.point, className)
    }, rest);
  }

  return restProps;
};

var Point = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles$6)(Object(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["withPatchedProps"])(setClassName)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ScatterSeries"].Point));

var ScatterSeries = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Point: Point
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ScatterSeries"]);

var styles$7 = function styles() {
  return {
    root: {
      shapeRendering: 'crispEdges'
    }
  };
};

var Root$2 = withClassName(styles$7)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Root);

var styles$8 = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Tick = withClassName(styles$8)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Tick);

var styles$9 = function styles(theme) {
  var fontFamily = theme.typography.fontFamily;
  return {
    root: {
      fill: theme.palette.text.secondary,
      fontFamily: fontFamily,
      fontSize: 12,
      fontWeight: 400,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var Label$2 = withClassName(styles$9)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Label);

var styles$a = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Line = withClassName(styles$a)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Line);

var styles$b = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Grid = withClassName(styles$b)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Grid);

var ValueAxis = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]);

var ArgumentAxis = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"]);

var styles$c = function styles(theme) {
  var arrowSize = theme.spacing(1.2);
  return {
    'popper-top': {
      zIndex: 1,
      marginBottom: "".concat(arrowSize, "px")
    },
    'popper-right': {
      zIndex: 1,
      marginLeft: "".concat(arrowSize, "px")
    }
  };
};

var popperModifiers = function popperModifiers(arrowRef) {
  return {
    flip: {
      enabled: false
    },
    arrow: {
      element: arrowRef
    }
  };
};

var OverlayBase = function OverlayBase(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      target = _ref.target,
      rotated = _ref.rotated,
      ArrowComponent = _ref.arrowComponent,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "children", "target", "rotated", "arrowComponent"]);

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      arrowRef = _React$useState2[0],
      setArrowRef = _React$useState2[1];

  var placement = rotated ? _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_12__["RIGHT"] : _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_12__["TOP"];
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    open: true,
    anchorEl: target,
    placement: placement,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes["popper-".concat(placement)], className),
    modifiers: popperModifiers(arrowRef)
  }, restProps), children, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ArrowComponent, {
    placement: placement,
    ref: setArrowRef
  }));
};

 true ? OverlayBase.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"].isRequired,
  rotated: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  arrowComponent: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]]).isRequired
} : undefined;
OverlayBase.defaultProps = {
  className: undefined
};
var Overlay = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles$c)(OverlayBase);

var styles$d = function styles(theme) {
  return {
    root: {
      fontSize: 14,
      padding: theme.spacing(0.5)
    }
  };
};

var Content = withClassName(styles$d, {
  name: 'TooltipContent'
})(function (_ref) {
  var text = _ref.text,
      targetItem = _ref.targetItem,
      restProps = _objectWithoutProperties(_ref, ["text", "targetItem"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], restProps, text);
});

var styles$e = function styles(theme) {
  var arrowSize = theme.spacing(1.2);
  return {
    'arrow-top': {
      width: "".concat(arrowSize * 2, "px"),
      height: "".concat(arrowSize, "px"),
      position: 'absolute',
      top: '100%',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: "".concat(arrowSize, "px"),
        height: "".concat(arrowSize, "px"),
        background: theme.palette.background.paper,
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
        left: '50%',
        boxShadow: theme.shadows[2]
      }
    },
    'arrow-right': {
      width: "".concat(arrowSize, "px"),
      height: "".concat(arrowSize * 2, "px"),
      position: 'absolute',
      top: '50%',
      transform: 'translateX(-100%)',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: "".concat(arrowSize, "px"),
        height: "".concat(arrowSize, "px"),
        background: theme.palette.background.paper,
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
        top: '50%',
        left: '100%',
        boxShadow: theme.shadows[2]
      }
    }
  };
};

var BaseArrow = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (_ref, ref) {
  var classes = _ref.classes,
      className = _ref.className,
      placement = _ref.placement,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "placement"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes["arrow-".concat(placement)], className),
    ref: ref
  }, restProps));
});
BaseArrow.propTypes = {
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
BaseArrow.defaultProps = {
  className: undefined
};
var Arrow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles$e)(BaseArrow);

var styles$f = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(0.5, 1)
    }
  };
};

var Sheet = withClassName(styles$f)(function (props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], props);
});

var Tooltip = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Overlay: Overlay,
  Content: Content,
  Sheet: Sheet,
  Arrow: Arrow
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Tooltip"]);

var styles$g = function styles(theme) {
  return {
    root: {
      fill: theme.palette.primary.main,
      opacity: 0.2
    }
  };
};

var DragBox = withClassName(styles$g)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ZoomAndPan"].DragBox);

var ZoomAndPan = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  DragBox: DragBox
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ZoomAndPan"]);


//# sourceMappingURL=dx-react-chart-material-ui.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js ***!
  \***************************************************************************/
/*! exports provided: Animation, AreaSeries, ArgumentAxis, ArgumentScale, Axis, BarSeries, Chart, EventTracker, HoverState, Legend, LineSeries, Palette, PieSeries, Scale, ScatterSeries, SelectionState, SplineSeries, Stack, Title, Tooltip, ValueAxis, ValueScale, ZoomAndPan, withPatchedProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSeries", function() { return AreaSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentAxis", function() { return ArgumentAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentScale", function() { return ArgumentScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarSeries", function() { return BarSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTracker", function() { return EventTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverState", function() { return HoverState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSeries", function() { return LineSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieSeries", function() { return PieSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterSeries", function() { return ScatterSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionState", function() { return SelectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplineSeries", function() { return SplineSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxis", function() { return ValueAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueScale", function() { return ValueScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomAndPan", function() { return ZoomAndPan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPatchedProps", function() { return withPatchedProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-core */ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-chart-core */ "./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/**
 * Bundle of @devexpress/dx-react-chart
 * Generated: 2020-03-27
 * Version: 2.6.0
 * License: https://js.devexpress.com/Licensing
 */






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var series = [];
var BasicData = function (_a) {
    var data = _a.data, rotated = _a.rotated;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Basis" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "data", value: data }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "domains", value: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["defaultDomains"] }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", value: series }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "rotated", value: rotated })));
};

var getScales = function (_a) {
    var domains = _a.domains, ranges = _a.ranges;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["buildScales"])(domains, ranges);
};
var getSeries = function (_a) {
    var series = _a.series, scales = _a.scales, rotated = _a.rotated;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["scaleSeriesPoints"])(series, scales, rotated);
};
var ChartCore = /*#__PURE__*/ (function (_super) {
    __extends(ChartCore, _super);
    function ChartCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartCore.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "scales", computed: getScales }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", computed: getSeries })));
    };
    return ChartCore;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var AxesLayout = /*#__PURE__*/ (function (_super) {
    __extends(AxesLayout, _super);
    function AxesLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        return _this;
    }
    AxesLayout.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "centerDivRef", value: this.ref }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "canvas" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "center-center", ref: this.ref, style: { display: 'flex', flexDirection: 'column', flexGrow: 1 } },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-axis-container", style: { display: 'flex', flexDirection: 'row' } },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] + "-axis" }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-axis" }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] + "-axis" })),
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "center-axis-container", style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] + "-axis" }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] + "-axis" })),
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-axis-container", style: { display: 'flex', flexDirection: 'row' } },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] + "-axis" }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-axis" }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] + "-axis" }))))));
    };
    return AxesLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var SpaceFillingRects = /*#__PURE__*/ (function (_super) {
    __extends(SpaceFillingRects, _super);
    function SpaceFillingRects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceFillingRects.prototype.render = function () {
        var placeholders = this.props.placeholders;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "SpaceFillingRects" }, placeholders.map(function (name) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: name, key: name },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                var layouts = _a.layouts;
                var key = name.slice(name.indexOf('-') + 1);
                var width = Object.keys(layouts).reduce(function (prev, cur) {
                    if (cur.includes(key)) {
                        return prev + layouts[cur].width;
                    }
                    return prev;
                }, 0);
                return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: name, style: { width: width } });
            }))); })));
    };
    return SpaceFillingRects;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var doGetReadiness = function (_a) {
    var layouts = _a.layouts, centerDivRef = _a.centerDivRef;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getReadiness"])(layouts, centerDivRef);
};
var ControllerComponent = /*#__PURE__*/ (function (_super) {
    __extends(ControllerComponent, _super);
    function ControllerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerComponent.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "ControllerComponent" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "readyToRenderSeries", computed: doGetReadiness })));
    };
    return ControllerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var EXTRA_PIXELS = 2;
var ClipPath = /*#__PURE__*/ (function (_super) {
    __extends(ClipPath, _super);
    function ClipPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipPath.prototype.render = function () {
        var _a = this.props, id = _a.id, width = _a.width, height = _a.height;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", { id: id },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: -EXTRA_PIXELS / 2, y: -EXTRA_PIXELS / 2, width: width + EXTRA_PIXELS, height: height + EXTRA_PIXELS }))));
    };
    return ClipPath;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

// It is located in a separate file only for testing purpose -
// it should actually be placed next to PaneLayout.
var UpdatableSizer = /*#__PURE__*/ (function (_super) {
    __extends(UpdatableSizer, _super);
    function UpdatableSizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        return _this;
    }
    UpdatableSizer.prototype.componentDidUpdate = function () {
        this.ref.current.setupListeners();
    };
    UpdatableSizer.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Sizer"], __assign({ ref: this.ref }, this.props));
    };
    return UpdatableSizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var DIV_STYLE = {
    flex: 1, zIndex: 1, position: 'relative', width: '100%',
};
var SVG_STYLE = {
    position: 'absolute', left: 0, top: 0, overflow: 'visible',
};
var SizerContainer = function (_a) {
    var children = _a.children;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: DIV_STYLE }, children));
};
var numDefs = 0;
var getUniqueId = function () {
    numDefs += 1;
    return numDefs;
};
var PaneLayout = /*#__PURE__*/ (function (_super) {
    __extends(PaneLayout, _super);
    function PaneLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        _this.clipPathId = "clip_path_" + getUniqueId();
        return _this;
    }
    PaneLayout.prototype.render = function () {
        var _this = this;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "PaneLayout" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "rootRef", value: this.ref }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "clipPathId", value: this.clipPathId }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "canvas" }, function (params) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a, _b) {
                var layouts = _a.layouts;
                var changeBBox = _b.changeBBox;
                var _c = layouts.pane, width = _c.width, height = _c.height;
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(UpdatableSizer, { containerComponent: SizerContainer, onSizeChange: function (size) { return changeBBox({ placeholder: 'pane', bBox: size }); } },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", __assign({ ref: _this.ref }, params, { width: width, height: height, style: SVG_STYLE }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClipPath, { id: _this.clipPathId, width: width, height: height }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: "series" }))));
            })); })));
    };
    return PaneLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var doGetRanges = function (_a) {
    var layouts = _a.layouts, rotated = _a.rotated;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getRanges"])(layouts.pane, rotated);
};
var LayoutManager = /*#__PURE__*/ (function (_super) {
    __extends(LayoutManager, _super);
    function LayoutManager(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { bBoxes: { pane: { width: 0, height: 0 } } };
        var stateHelper = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["createStateHelper"])(_this);
        _this.changeBBox = stateHelper.applyFieldReducer.bind(stateHelper, 'bBoxes', _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["bBoxes"]);
        return _this;
    }
    LayoutManager.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, Root = _a.rootComponent, restProps = __rest(_a, ["width", "height", "rootComponent"]);
        var stateBBoxes = this.state.bBoxes;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "layouts", value: stateBBoxes }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "ranges", computed: doGetRanges }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Action"], { name: "changeBBox", action: this.changeBBox }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "root" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Root, __assign({ width: width, height: height }, restProps),
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: "canvas" })))));
    };
    LayoutManager.defaultProps = {
        width: 0,
    };
    return LayoutManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var ComponentLayout = function () { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "ComponentLayout" },
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "canvas" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-container", style: { display: 'flex', flexDirection: 'row' } },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "center-container", style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] })),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-container", style: { display: 'flex', flexDirection: 'row' } },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] }))))); };

var PaletteBase = /*#__PURE__*/ (function (_super) {
    __extends(PaletteBase, _super);
    function PaletteBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteBase.prototype.render = function () {
        var scheme = this.props.scheme;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Palette" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "palette", value: scheme })));
    };
    return PaletteBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Palette = PaletteBase;

var Root = /*#__PURE__*/ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        var _a = this.props, children = _a.children, width = _a.width, height = _a.height, style = _a.style, restProps = __rest(_a, ["children", "width", "height", "style"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", __assign({ style: __assign(__assign(__assign({}, style), { height: height + "px" }), width ? { width: width + "px" } : null) }, restProps), children));
    };
    return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var Label = /*#__PURE__*/ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", __assign({}, this.props)));
    };
    return Label;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var scheme = [];
var placeholders = [
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"],
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"],
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"],
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"],
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] + "-axis",
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["TOP"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] + "-axis",
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"] + "-axis",
    _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"] + "-" + _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["RIGHT"] + "-axis",
];
var RawChart = /*#__PURE__*/ (function (_super) {
    __extends(RawChart, _super);
    function RawChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawChart.prototype.render = function () {
        var _a = this.props, data = _a.data, width = _a.width, height = _a.height, children = _a.children, rotated = _a.rotated, rootComponent = _a.rootComponent, restProps = __rest(_a, ["data", "width", "height", "children", "rotated", "rootComponent"]);
        return ((Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["PluginHost"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BasicData, { data: data, rotated: rotated }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Palette, { scheme: scheme }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LayoutManager, __assign({ width: width, height: height, rootComponent: rootComponent }, restProps)),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PaneLayout, null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AxesLayout, null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ComponentLayout, null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SpaceFillingRects, { placeholders: placeholders }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ControllerComponent, null),
            children,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ChartCore, null))));
    };
    RawChart.defaultProps = {
        height: 500,
        rotated: false,
    };
    RawChart.components = {
        rootComponent: 'Root',
    };
    return RawChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Chart = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["withComponents"])({ Root: Root })(RawChart);
Chart.Label = Label;

var Marker = /*#__PURE__*/ (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marker.prototype.render = function () {
        var _a = this.props, color = _a.color, restProps = __rest(_a, ["color"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", __assign({ fill: color, width: "10", height: "10" }, restProps),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", __assign({ r: 5, cx: 5, cy: 5 }, restProps))));
    };
    return Marker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var RawLegend = /*#__PURE__*/ (function (_super) {
    __extends(RawLegend, _super);
    function RawLegend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawLegend.prototype.render = function () {
        var _a = this.props, MarkerComponent = _a.markerComponent, Label = _a.labelComponent, Root = _a.rootComponent, Item = _a.itemComponent, position = _a.position, getItems = _a.getItems;
        var placeholder = position;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Legend" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: placeholder },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (getters) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Root, { name: "legend-" + placeholder }, getItems(getters).map(function (_a) {
                    var text = _a.text, color = _a.color;
                    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Item, { key: text },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MarkerComponent, { name: text, color: color }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Label, { text: text })));
                }))); }))));
    };
    RawLegend.defaultProps = {
        position: 'right',
        getItems: function (_a) {
            var series = _a.series;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getLegendItems"])(series);
        },
    };
    RawLegend.components = {
        rootComponent: 'Root',
        itemComponent: 'Item',
        markerComponent: 'Marker',
        labelComponent: 'Label',
    };
    return RawLegend;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Legend = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["withComponents"])({ Marker: Marker })(RawLegend);

var TitleBase = /*#__PURE__*/ (function (_super) {
    __extends(TitleBase, _super);
    function TitleBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBase.prototype.render = function () {
        var _a = this.props, Text = _a.textComponent, text = _a.text, position = _a.position;
        var placeholder = position;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Title" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: placeholder },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Text, { text: text }))));
    };
    TitleBase.components = {
        textComponent: 'Text',
    };
    TitleBase.defaultProps = {
        position: 'top',
    };
    return TitleBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Title = TitleBase;

/** @internal */
var declareSeries = function (pluginName, _a) {
    var components = _a.components, getPointTransformer = _a.getPointTransformer, createHitTester = _a.createHitTester;
    var Component = /*#__PURE__*/ (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.render = function () {
            var _a = this.props, name = _a.name, argumentField = _a.argumentField, valueField = _a.valueField, scaleName = _a.scaleName, seriesComponent = _a.seriesComponent, pointComponent = _a.pointComponent, color = _a.color, restProps = __rest(_a, ["name", "argumentField", "valueField", "scaleName", "seriesComponent", "pointComponent", "color"]);
            var symbolName = Symbol(name);
            var seriesItem = __assign(__assign({ getPointTransformer: getPointTransformer,
                createHitTester: createHitTester }, this.props), { symbolName: symbolName });
            var getSeries = function (_a) {
                var series = _a.series, data = _a.data, palette = _a.palette;
                return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["addSeries"])(series, data, palette, seriesItem, restProps);
            };
            var getDomains = function (_a) {
                var series = _a.series, domains = _a.domains;
                return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["extendDomains"])(domains, Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["findSeriesByName"])(symbolName, series));
            };
            return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: pluginName },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", computed: getSeries }),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "domains", computed: getDomains }),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "series" },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                        var series = _a.series, scales = _a.scales, animation = _a.animation, rotated = _a.rotated, layouts = _a.layouts, clipPathId = _a.clipPathId, readyToRenderSeries = _a.readyToRenderSeries;
                        var pane = layouts.pane;
                        var currentSeries = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["findSeriesByName"])(symbolName, series);
                        var currentScales = {
                            argScale: scales[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["ARGUMENT_DOMAIN"]],
                            valScale: scales[Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getValueDomainName"])(currentSeries.scaleName)],
                        };
                        var Path = currentSeries.seriesComponent;
                        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, { index: currentSeries.index, pointComponent: currentSeries.pointComponent, coordinates: currentSeries.points, rotated: rotated, state: currentSeries.state, color: currentSeries.color, scales: currentScales, pane: pane, clipPathId: clipPathId, animation: animation, readyToRenderSeries: readyToRenderSeries }));
                    }))));
        };
        Component.defaultProps = {
            name: 'defaultSeriesName',
        };
        return Component;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    Component.components = {};
    if (components.Path) {
        Component.components.seriesComponent = 'Path';
    }
    if (components.Point) {
        Component.components.pointComponent = 'Point';
    }
    return Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["withComponents"])(components)(Component);
};

/** @internal */
var withPatchedProps = function (patch) { return function (Target) {
    var Component = /*#__PURE__*/ (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.render = function () {
            var props = patch(this.props);
            return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, __assign({}, props));
        };
        Component.components = Target.components;
        return Component;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    return Component;
}; };

/** @internal */
var Scale = /*#__PURE__*/ (function (_super) {
    __extends(Scale, _super);
    function Scale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scale.prototype.render = function () {
        var _a = this.props, name = _a.name, factory = _a.factory, modifyDomain = _a.modifyDomain;
        var args = { factory: factory, modifyDomain: modifyDomain };
        var getDomains = function (_a) {
            var domains = _a.domains;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["addDomain"])(domains, name, args);
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Scale" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "domains", computed: getDomains })));
    };
    return Scale;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var ArgumentScale = withPatchedProps(function (props) { return (__assign(__assign({}, props), { name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["ARGUMENT_DOMAIN"] })); })(Scale);
var ValueScale = withPatchedProps(function (props) { return (__assign(__assign({}, props), { name: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getValueDomainName"])(props.name) })); })(Scale);

var getDomains = function (_a) {
    var domains = _a.domains, series = _a.series;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getStackedDomains"])(domains, series);
};
var StackBase = /*#__PURE__*/ (function (_super) {
    __extends(StackBase, _super);
    function StackBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackBase.prototype.render = function () {
        var _a = this.props, stacks = _a.stacks, offset = _a.offset, order = _a.order;
        var params = {
            stacks: stacks,
            offset: offset,
            order: order,
        };
        var getSeries = function (_a) {
            var series = _a.series, data = _a.data;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getStackedSeries"])(series, data, params);
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Stack" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", computed: getSeries }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "domains", computed: getDomains })));
    };
    StackBase.defaultProps = {
        stacks: [],
        offset: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetDiverging"],
        order: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderNone"],
    };
    return StackBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Stack = StackBase;

var AnimationBase = /*#__PURE__*/ (function (_super) {
    __extends(AnimationBase, _super);
    function AnimationBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationBase.prototype.render = function () {
        var _a = this.props, easing = _a.easing, duration = _a.duration;
        var buildAnimationGetter = function () { return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["buildAnimation"])(easing, duration); };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Animation" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "animation", computed: buildAnimationGetter })));
    };
    AnimationBase.defaultProps = {
        easing: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["easeOutCubic"],
        duration: 1000,
    };
    return AnimationBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Animation = AnimationBase;

var withStates = function (states) { return function (Component) {
    var ComponentWithStates = /*#__PURE__*/ (function (_super) {
        __extends(ComponentWithStates, _super);
        function ComponentWithStates() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComponentWithStates.prototype.render = function () {
            var _a = this.props, state = _a.state, restProps = __rest(_a, ["state"]);
            var stateFunc = state && states[state];
            var result = stateFunc ? stateFunc(restProps) : restProps;
            return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(result) ? result : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, __assign({}, result));
        };
        return ComponentWithStates;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    return ComponentWithStates;
}; };

var Pattern = /*#__PURE__*/ (function (_super) {
    __extends(Pattern, _super);
    function Pattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pattern.prototype.render = function () {
        var _a = this.props, id = _a.id, size = _a.size, color = _a.color, opacity = _a.opacity;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pattern", { id: id, width: size, height: size, patternUnits: "userSpaceOnUse" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: 0, y: 0, width: size, height: size, fill: color, opacity: opacity }),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { 
                    // tslint:disable-next-line: max-line-length
                    d: "M " + size / 2 + " " + -size / 2 + " L " + -size / 2 + " " + size / 2 + " M 0 " + size + " L " + size + " 0 M " + size * 1.5 + " " + size / 2 + " L " + size / 2 + " " + size * 1.5, strokeWidth: 2, stroke: color }))));
    };
    Pattern.defaultProps = {
        size: 6,
        opacity: 0.75,
    };
    return Pattern;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

// Function is returned (not PureComponent descendant) because
// result is invoked as function (not as React component).
var withPattern = function (getPatternId, props) { return function (Target) { return function (targetProps) {
    var color = targetProps.color, restProps = __rest(targetProps, ["color"]);
    var patternId = getPatternId(restProps);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, __assign({ color: "url(#" + patternId + ")" }, restProps)),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Pattern, __assign({ id: patternId, color: color }, props))));
}; }; };

var withAnimation = function (processAnimation, getProps, getStartCoordinates, isValuesChanged, getDelay) { return function (Component) {
    var ComponentWithAnimation = /*#__PURE__*/ (function (_super) {
        __extends(ComponentWithAnimation, _super);
        function ComponentWithAnimation(props) {
            var _this = _super.call(this, props) || this;
            _this.setAttribute = _this.setAttribute.bind(_this);
            return _this;
        }
        ComponentWithAnimation.prototype.setAttribute = function (state) {
            this.setState(state);
        };
        ComponentWithAnimation.prototype.componentDidMount = function () {
            var _a = this.props, animation = _a.animation, scales = _a.scales, index = _a.index, readyToRenderSeries = _a.readyToRenderSeries;
            if (!readyToRenderSeries) {
                return;
            }
            var props = getProps(this.props);
            this.processComponent(animation, { scales: {} }, scales, props, {}, index);
        };
        ComponentWithAnimation.prototype.componentDidUpdate = function (prevProps) {
            var _a = this.props, scales = _a.scales, index = _a.index, animation = _a.animation, readyToRenderSeries = _a.readyToRenderSeries;
            if (!readyToRenderSeries) {
                return;
            }
            this.processComponent(animation, prevProps, scales, getProps(this.props), getProps(prevProps), index);
        };
        ComponentWithAnimation.prototype.processComponent = function (animation, _a, scales, props, prevProps, index) {
            var prevScales = _a.scales;
            if (!animation) {
                this.setAttribute(props);
            }
            else if (this.animate) {
                if (Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isScalesChanged"])(prevScales, scales)) {
                    this.setAttribute(props);
                }
                else if (isValuesChanged(prevProps, props)) {
                    var delay = getDelay ? getDelay(index, false) : 0;
                    this.animate.update(prevProps, props, delay);
                }
            }
            else {
                this.animate = animation(getStartCoordinates(scales, props), props, processAnimation, this.setAttribute, getDelay && getDelay(index, true));
            }
        };
        ComponentWithAnimation.prototype.componentWillUnmount = function () {
            return this.animate && this.animate.stop();
        };
        ComponentWithAnimation.prototype.render = function () {
            var _a = this.props, readyToRenderSeries = _a.readyToRenderSeries, restProps = __rest(_a, ["readyToRenderSeries"]);
            if (!this.state) {
                return null;
            }
            return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, __assign({}, restProps, this.state)));
        };
        return ComponentWithAnimation;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    return ComponentWithAnimation;
}; };

var _a;
var RawArea = /*#__PURE__*/ (function (_super) {
    __extends(RawArea, _super);
    function RawArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawArea.prototype.render = function () {
        var _a = this.props, path = _a.path, coordinates = _a.coordinates, animation = _a.animation, index = _a.index, state = _a.state, pointComponent = _a.pointComponent, color = _a.color, clipPathId = _a.clipPathId, pane = _a.pane, scales = _a.scales, rotated = _a.rotated, restProps = __rest(_a, ["path", "coordinates", "animation", "index", "state", "pointComponent", "color", "clipPathId", "pane", "scales", "rotated"]);
        var dPath = path === undefined ? (rotated ? _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dRotateArea"] : _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dArea"]) : path;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", __assign({ clipPath: "url(#" + clipPathId + ")", d: dPath(coordinates), fill: color, opacity: 0.5 }, restProps)));
    };
    return RawArea;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
// It should actually be `withPattern<AreaSeries.PointProps>` but `opacity` is not decleared there.
// It is not clear if `opacity` should be explicitly enumerated or stay as part of `restProps`.
var Area = withAnimation(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processAreaAnimation"], function (_a) {
    var coordinates = _a.coordinates;
    return ({ coordinates: coordinates });
}, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPathStart"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isCoordinatesChanged"])(withStates((_a = {},
    _a[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]] = withPattern(function (_a) {
        var index = _a.index;
        return "series-" + index + "-hover";
    }, { opacity: 0.75 })(RawArea),
    _a[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]] = withPattern(function (_a) {
        var index = _a.index;
        return "series-" + index + "-selection";
    }, { opacity: 0.5 })(RawArea),
    _a))(RawArea));

// tslint:disable-next-line: max-line-length
var AreaSeries = declareSeries('AreaSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getAreaPointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createAreaHitTester"],
    components: { Path: Area },
});

/** @internal */
var PointCollection = /*#__PURE__*/ (function (_super) {
    __extends(PointCollection, _super);
    function PointCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointCollection.prototype.render = function () {
        var _a = this.props, pointComponent = _a.pointComponent, coordinates = _a.coordinates, index = _a.index, state = _a.state, clipPathId = _a.clipPathId, restProps = __rest(_a, ["pointComponent", "coordinates", "index", "state", "clipPathId"]) // restProps are used because of animation and scale
        ;
        var Point = pointComponent;
        return (coordinates.map(function (point) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Point, __assign({ key: String(point.index), seriesIndex: index }, restProps, point))); }));
    };
    return PointCollection;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var _a$1;
var RawBar = /*#__PURE__*/ (function (_super) {
    __extends(RawBar, _super);
    function RawBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawBar.prototype.render = function () {
        var _a = this.props, arg = _a.arg, val = _a.val, startVal = _a.startVal, barWidth = _a.barWidth, maxBarWidth = _a.maxBarWidth, animation = _a.animation, argument = _a.argument, value = _a.value, seriesIndex = _a.seriesIndex, index = _a.index, state = _a.state, rotated = _a.rotated, color = _a.color, pane = _a.pane, scales = _a.scales, restProps = __rest(_a, ["arg", "val", "startVal", "barWidth", "maxBarWidth", "animation", "argument", "value", "seriesIndex", "index", "state", "rotated", "color", "pane", "scales"]);
        var width = barWidth * maxBarWidth;
        var bar = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dBar"])(arg, val, startVal, width, rotated);
        var visibility = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getVisibility"])(pane, bar.x + bar.width / 2, bar.y + bar.height, bar.width, bar.height);
        var adjustedBar = visibility === 'visible' ? Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["adjustBarSize"])(bar, pane) : bar;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", __assign({}, adjustedBar, { fill: color, visibility: visibility }, restProps)));
    };
    return RawBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
// It should actually be `withPattern<BarSeries.PointProps>` but `opacity` is not decleared there.
// It is not clear if `opacity` should be explicitly enumerated or stay as part of `restProps`.
var Bar = withAnimation(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processBarAnimation"], function (_a) {
    var arg = _a.arg, val = _a.val, startVal = _a.startVal;
    return ({ arg: arg, val: val, startVal: startVal });
}, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPointStart"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isValuesChanged"])(withStates((_a$1 = {},
    _a$1[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]] = withPattern(function (_a) {
        var seriesIndex = _a.seriesIndex, index = _a.index;
        return "series-" + seriesIndex + "-point-" + index + "-hover";
    }, { opacity: 0.75 })(RawBar),
    _a$1[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]] = withPattern(function (_a) {
        var seriesIndex = _a.seriesIndex, index = _a.index;
        return "series-" + seriesIndex + "-point-" + index + "-selection";
    }, { opacity: 0.5 })(RawBar),
    _a$1))(RawBar));

// tslint:disable-next-line: max-line-length
var BarSeries = declareSeries('BarSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getBarPointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createBarHitTester"],
    components: { Path: PointCollection, Point: Bar },
});
BarSeries.defaultProps = {
    barWidth: 0.9,
};

var _a$2;
var RawPath = /*#__PURE__*/ (function (_super) {
    __extends(RawPath, _super);
    function RawPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawPath.prototype.render = function () {
        var _a = this.props, path = _a.path, animation = _a.animation, coordinates = _a.coordinates, rotated = _a.rotated, index = _a.index, state = _a.state, pointComponent = _a.pointComponent, color = _a.color, clipPathId = _a.clipPathId, scales = _a.scales, pane = _a.pane, restProps = __rest(_a, ["path", "animation", "coordinates", "rotated", "index", "state", "pointComponent", "color", "clipPathId", "scales", "pane"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", __assign({ clipPath: "url(#" + clipPathId + ")", d: path(coordinates), fill: "none", strokeWidth: 2, stroke: color }, restProps)));
    };
    return RawPath;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Path = withAnimation(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processLineAnimation"], function (_a) {
    var coordinates = _a.coordinates;
    return ({ coordinates: coordinates });
}, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPathStart"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isCoordinatesChanged"])(withStates((_a$2 = {},
    _a$2[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]] = function (props) { return (__assign({ strokeWidth: 4 }, props)); },
    _a$2[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]] = function (props) { return (__assign({ strokeWidth: 4 }, props)); },
    _a$2))(RawPath));

var Line = /*#__PURE__*/ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var _a = this.props, rotated = _a.rotated, path = _a.path;
        var dPath = path === undefined ? (rotated ? _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dRotateLine"] : _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dLine"]) : path;
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, __assign({}, this.props, { path: dPath }));
    };
    return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

// tslint:disable-next-line: max-line-length
var LineSeries = declareSeries('LineSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getLinePointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createLineHitTester"],
    components: { Path: Line },
});

var _a$3;
var RawSlice = /*#__PURE__*/ (function (_super) {
    __extends(RawSlice, _super);
    function RawSlice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawSlice.prototype.render = function () {
        var _a = this.props, arg = _a.arg, val = _a.val, rotated = _a.rotated, argument = _a.argument, value = _a.value, seriesIndex = _a.seriesIndex, index = _a.index, state = _a.state, maxRadius = _a.maxRadius, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, startAngle = _a.startAngle, endAngle = _a.endAngle, color = _a.color, animation = _a.animation, pane = _a.pane, scales = _a.scales, restProps = __rest(_a, ["arg", "val", "rotated", "argument", "value", "seriesIndex", "index", "state", "maxRadius", "innerRadius", "outerRadius", "startAngle", "endAngle", "color", "animation", "pane", "scales"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", { transform: "translate(" + arg + " " + val + ")" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", __assign({ d: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dPie"])(maxRadius, innerRadius, outerRadius, startAngle, endAngle), fill: color, stroke: "none" }, restProps))));
    };
    return RawSlice;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
// It should actually be `withPattern<PieSeries.PointProps>` but `opacity` is not decleared there.
// It is not clear if `opacity` should be explicitly enumerated or stay as part of `restProps`.
var Slice = withAnimation(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processPieAnimation"], function (_a) {
    var innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, startAngle = _a.startAngle, endAngle = _a.endAngle;
    return ({ innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle });
}, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPieStart"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isValuesChanged"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getDelay"])(withStates((_a$3 = {},
    _a$3[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]] = withPattern(function (_a) {
        var seriesIndex = _a.seriesIndex, index = _a.index;
        return "series-" + seriesIndex + "-point-" + index + "-hover";
    }, { opacity: 0.75 })(RawSlice),
    _a$3[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]] = withPattern(function (_a) {
        var seriesIndex = _a.seriesIndex, index = _a.index;
        return "series-" + seriesIndex + "-point-" + index + "-selection";
    }, { opacity: 0.5 })(RawSlice),
    _a$3))(RawSlice));

// tslint:disable-next-line: max-line-length
var PieSeries = declareSeries('PieSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPiePointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createPieHitTester"],
    components: { Path: PointCollection, Point: Slice },
});
PieSeries.defaultProps = {
    innerRadius: 0,
    outerRadius: 1,
};

var _a$4;
var RawPoint = /*#__PURE__*/ (function (_super) {
    __extends(RawPoint, _super);
    function RawPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RawPoint.prototype.render = function () {
        var _a = this.props, arg = _a.arg, val = _a.val, rotated = _a.rotated, animation = _a.animation, argument = _a.argument, value = _a.value, seriesIndex = _a.seriesIndex, index = _a.index, state = _a.state, pointOptions = _a.point, color = _a.color, pane = _a.pane, scales = _a.scales, restProps = __rest(_a, ["arg", "val", "rotated", "animation", "argument", "value", "seriesIndex", "index", "state", "point", "color", "pane", "scales"]);
        var x = rotated ? val : arg;
        var y = rotated ? arg : val;
        var visibility = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getVisibility"])(pane, x, y, 0, 0);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", __assign({ transform: "translate(" + x + " " + y + ")", d: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dSymbol"])(pointOptions), fill: color, visibility: visibility, stroke: "none" }, restProps)));
    };
    return RawPoint;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
// The expression is used to have 12 from 7 in default scenario
// and to adjust hovered or selected size when custom *point.size* is defined.
var getAdjustedOptions = function (_a) {
    var size = _a.size;
    return ({ size: Math.round(size * 1.7) });
};
var Point = withAnimation(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processPointAnimation"], function (_a) {
    var arg = _a.arg, val = _a.val;
    return ({ arg: arg, val: val });
}, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getPointStart"], _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isValuesChanged"])(withStates((_a$4 = {},
    _a$4[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]] = function (_a) {
        var color = _a.color, point = _a.point, restProps = __rest(_a, ["color", "point"]);
        return (__assign({ stroke: color, strokeWidth: 4, fill: 'none', point: getAdjustedOptions(point) }, restProps));
    },
    _a$4[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]] = function (_a) {
        var color = _a.color, point = _a.point, restProps = __rest(_a, ["color", "point"]);
        return (__assign({ stroke: color, strokeWidth: 4, fill: 'none', point: getAdjustedOptions(point) }, restProps));
    },
    _a$4))(RawPoint));

// tslint:disable-next-line: max-line-length
var ScatterSeries = declareSeries('ScatterSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getScatterPointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createScatterHitTester"],
    components: { Path: PointCollection, Point: Point },
});
ScatterSeries.defaultProps = {
    point: { size: 7 },
};

var Spline = /*#__PURE__*/ (function (_super) {
    __extends(Spline, _super);
    function Spline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spline.prototype.render = function () {
        var _a = this.props, rotated = _a.rotated, path = _a.path;
        var dPath = path === undefined ? (rotated ? _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dRotateSpline"] : _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["dSpline"]) : path;
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, __assign({}, this.props, { path: dPath }));
    };
    return Spline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

// tslint:disable-next-line: max-line-length
var SplineSeries = declareSeries('SplineSeries', {
    getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getLinePointTransformer"],
    createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createSplineHitTester"],
    components: { Path: Spline },
});

var getOffset = function (position) { return (position >= 0 ? 0 : -position); };
var getSize = function (position, delta) { return (position >= 0 ? position + delta : -position); };
var Root$1 = /*#__PURE__*/ (function (_super) {
    __extends(Root, _super);
    function Root(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        _this.state = {
            x: 0, y: 0,
        };
        _this.adjust = _this.adjust.bind(_this);
        return _this;
    }
    Root.prototype.componentDidMount = function () {
        this.setState(this.adjust);
    };
    Root.prototype.componentDidUpdate = function () {
        // *setState* is called unconditionally because PureComponent is expected to break the cycle.
        this.setState(this.adjust);
    };
    // Since calculated state does not depend on current state non-callback version of *setState*
    // might have been expected - it can't be done.
    // Parent component (Axis) accesses its DOM content in *onSizeChange* handler. When
    // this component is mounted parent is not yet - it crashes on DOM access.
    // *setState* callback is invoked later then *componentDidMount* - by that time parent component
    // is already mounted and can access its DOM.
    // Because of it callback version of *setState* has to be used here.
    // Can we rely on the fact that by the time of callback parent is mounted?
    // For now we stick with it, but need to find a more solid solution.
    Root.prototype.adjust = function (_, _a) {
        var dx = _a.dx, dy = _a.dy, onSizeChange = _a.onSizeChange;
        var bbox = this.ref.current.getBBox();
        var width = dx ? bbox.width : getSize(bbox.x, bbox.width);
        var height = dy ? bbox.height : getSize(bbox.y, bbox.height);
        var x = dx ? 0 : getOffset(bbox.x);
        var y = dy ? 0 : getOffset(bbox.y);
        onSizeChange({ width: width, height: height });
        return { x: x, y: y };
    };
    Root.prototype.render = function () {
        var _a = this.props, children = _a.children, onSizeChange = _a.onSizeChange, dx = _a.dx, dy = _a.dy, restProps = __rest(_a, ["children", "onSizeChange", "dx", "dy"]);
        var _b = this.state, x = _b.x, y = _b.y;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", __assign({ ref: this.ref, transform: "translate(" + x + " " + y + ")" }, restProps), children));
    };
    return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var Label$1 = /*#__PURE__*/ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, text = _a.text, restProps = __rest(_a, ["text"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", __assign({}, restProps), text));
    };
    return Label;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var Line$1 = /*#__PURE__*/ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var _a = this.props, x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2, restProps = __rest(_a, ["x1", "x2", "y1", "y2"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", __assign({ d: "M " + x1 + " " + y1 + " L " + x2 + " " + y2 }, restProps)));
    };
    return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var SVG_STYLE$1 = {
    position: 'absolute', left: 0, top: 0, overflow: 'visible',
};
var RawAxis = /*#__PURE__*/ (function (_super) {
    __extends(RawAxis, _super);
    function RawAxis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        _this.adjustedWidth = 0;
        _this.adjustedHeight = 0;
        return _this;
    }
    RawAxis.prototype.renderAxis = function (position) {
        var _this = this;
        var _a = this.props, scaleName = _a.scaleName, tickSize = _a.tickSize, tickFormat = _a.tickFormat, indentFromAxis = _a.indentFromAxis, showTicks = _a.showTicks, showLine = _a.showLine, showLabels = _a.showLabels, RootComponent = _a.rootComponent, TickComponent = _a.tickComponent, LabelComponent = _a.labelComponent, LineComponent = _a.lineComponent;
        var placeholder = position + "-axis";
        var layoutName = placeholder + "-" + scaleName;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: placeholder },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a, _b) {
                var scales = _a.scales, layouts = _a.layouts, rotated = _a.rotated;
                var changeBBox = _b.changeBBox;
                if (!Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isValidPosition"])(position, scaleName, rotated)) {
                    return null;
                }
                var scale = scales[scaleName];
                if (!scale) {
                    return null;
                }
                var _c = layouts[layoutName] || { width: 0, height: 0 }, width = _c.width, height = _c.height;
                var paneSize = layouts.pane;
                var _d = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getTickCoordinates"])({
                    callback: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["tickCoordinatesGetter"],
                    scaleName: scaleName,
                    position: position,
                    tickSize: tickSize,
                    tickFormat: tickFormat,
                    indentFromAxis: indentFromAxis,
                    scale: scale,
                    paneSize: [paneSize.width, paneSize.height],
                    rotated: rotated,
                }), _e = __read(_d.sides, 2), dx = _e[0], dy = _e[1], ticks = _d.ticks;
                var handleSizeChange = function (size) {
                    // The callback is called when DOM is available -
                    // *rootRef.current* can be surely accessed.
                    var rect = _this.rootRef.current.getBoundingClientRect();
                    var rectSize = [dx ? rect.width : size.width, dy ? rect.height : size.height];
                    if (rectSize[0] === _this.adjustedWidth && rectSize[1] === _this.adjustedHeight) {
                        return;
                    }
                    // *setState* is not used because it would cause excessive Plugin rerenders.
                    // Template rerender is provided by *changeBBox* invocation.
                    _this.adjustedWidth = rectSize[0];
                    _this.adjustedHeight = rectSize[1];
                    changeBBox({ placeholder: layoutName, bBox: size });
                };
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: {
                        position: 'relative',
                        width: (dy * width) || undefined,
                        height: (dx * height) || undefined,
                        flexGrow: dx || undefined,
                    }, ref: _this.rootRef },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { width: _this.adjustedWidth, height: _this.adjustedHeight, style: SVG_STYLE$1 },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RootComponent, { dx: dx, dy: dy, onSizeChange: handleSizeChange },
                            showTicks && ticks.map(function (_a) {
                                var x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2, key = _a.key;
                                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TickComponent, { key: key, x1: x1, x2: x2, y1: y1, y2: y2 }));
                            }),
                            showLine && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LineComponent, { x1: 0, x2: dx * paneSize.width, y1: 0, y2: dy * paneSize.height })),
                            showLabels && ticks.map(function (_a) {
                                var text = _a.text, xText = _a.xText, yText = _a.yText, delta = _a.dy, textAnchor = _a.textAnchor, key = _a.key;
                                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LabelComponent, { key: key, text: text, x: xText, y: yText, dy: delta, textAnchor: textAnchor }));
                            })))));
            })));
    };
    RawAxis.prototype.renderGrid = function () {
        var _a = this.props, scaleName = _a.scaleName, showGrid = _a.showGrid, GridComponent = _a.gridComponent;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "series" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                var scales = _a.scales, layouts = _a.layouts, rotated = _a.rotated;
                var scale = scales[scaleName];
                if (!scale || !showGrid) {
                    return null;
                }
                var _b = layouts.pane, width = _b.width, height = _b.height;
                var _c = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getTickCoordinates"])({
                    callback: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["gridCoordinatesGetter"],
                    scaleName: scaleName,
                    scale: scale,
                    paneSize: [width, height],
                    rotated: rotated,
                }), ticks = _c.ticks, _d = __read(_c.sides, 2), dx = _d[0], dy = _d[1];
                return ((Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, ticks.map(function (_a) {
                    var key = _a.key, x1 = _a.x1, y1 = _a.y1;
                    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GridComponent, { key: key, x1: x1, x2: x1 + dy * width, y1: y1, y2: y1 + dx * height }));
                }))));
            })));
    };
    RawAxis.prototype.render = function () {
        var position = this.props.position;
        var rotatedPosition = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getRotatedPosition"])(position);
        // We have to occupy two placeholders (one for default case and one for rotated case) because
        // by now it is unknown if Chart is rotated or not.
        // Only one of templates is rendered then, the other is discarded.
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Axis" },
            this.renderAxis(position),
            this.renderAxis(rotatedPosition),
            this.renderGrid()));
    };
    RawAxis.components = {
        rootComponent: 'Root',
        tickComponent: 'Tick',
        labelComponent: 'Label',
        lineComponent: 'Line',
        gridComponent: 'Grid',
    };
    RawAxis.defaultProps = {
        tickSize: 5,
        indentFromAxis: 10,
    };
    return RawAxis;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/** @internal */
var Axis = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["withComponents"])({
    Label: Label$1,
    Line: Line$1,
    Root: Root$1,
    Tick: Line$1,
    Grid: Line$1,
})(RawAxis);
// TODO: It is not axis who defines that argument is HORIZONTAL and value is VERTICAL.
// TODO: *position* should not be *orientation* dependent -
// if HORIZONTAL then TOP or BOTTOM, otherwise LEFT of RIGHT.
// It should be domain dependent - something like AT_DOMAIN_START or AT_DOMAIN_END.
var ArgumentAxis = withPatchedProps(function (props) { return (__assign(__assign({ position: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["BOTTOM"], showGrid: false, showTicks: true, showLine: true, showLabels: true }, props), { scaleName: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["ARGUMENT_DOMAIN"] })); })(Axis);
var ValueAxis = withPatchedProps(function (props) { return (__assign(__assign({ position: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["LEFT"], showGrid: true, showTicks: false, showLine: false, showLabels: true }, props), { scaleName: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getValueDomainName"])(props.scaleName) })); })(Axis);

var dependencies = [{ name: 'EventTracker', optional: true }];
var TooltipBase = /*#__PURE__*/ (function (_super) {
    __extends(TooltipBase, _super);
    function TooltipBase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            target: props.targetItem || props.defaultTargetItem,
        };
        var handlePointerMove = _this.handlePointerMove.bind(_this);
        _this.getPointerMoveHandlers = function (_a) {
            var _b = _a.pointerMoveHandlers, pointerMoveHandlers = _b === void 0 ? [] : _b;
            return __spread(pointerMoveHandlers, [
                handlePointerMove,
            ]);
        };
        return _this;
    }
    TooltipBase.getDerivedStateFromProps = function (props, state) {
        return { target: props.targetItem !== undefined ? props.targetItem : state.target };
    };
    TooltipBase.prototype.handlePointerMove = function (_a) {
        var targets = _a.targets;
        this.setState(function (_a, _b) {
            var currentTarget = _a.target;
            var onTargetItemChange = _b.onTargetItemChange;
            var target = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processHandleTooltip"])(targets, currentTarget, onTargetItemChange);
            if (target === undefined) {
                return null;
            }
            return { target: target };
        });
    };
    TooltipBase.prototype.render = function () {
        var _a = this.props, OverlayComponent = _a.overlayComponent, ContentComponent = _a.contentComponent, SheetComponent = _a.sheetComponent, arrowComponent = _a.arrowComponent;
        var target = this.state.target;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "Tooltip", dependencies: dependencies },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "pointerMoveHandlers", computed: this.getPointerMoveHandlers }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "series" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                    var series = _a.series, rootRef = _a.rootRef, rotated = _a.rotated;
                    if (!target) {
                        return null;
                    }
                    var _b = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getParameters"])(series, target), text = _b.text, element = _b.element;
                    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OverlayComponent, { key: "" + target.series + target.point, target: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["createReference"])(element, rootRef), rotated: rotated, arrowComponent: arrowComponent },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SheetComponent, null,
                            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentComponent, { text: text, targetItem: target }))));
                }))));
    };
    TooltipBase.components = {
        overlayComponent: 'Overlay',
        contentComponent: 'Content',
        arrowComponent: 'Arrow',
        sheetComponent: 'Sheet',
    };
    return TooltipBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Tooltip = TooltipBase;

var DragBox = /*#__PURE__*/ (function (_super) {
    __extends(DragBox, _super);
    function DragBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragBox.prototype.render = function () {
        var _a = this.props, rect = _a.rect, restProps = __rest(_a, ["rect"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", __assign({ x: rect.x, y: rect.y, width: rect.width, height: rect.height }, restProps)));
    };
    return DragBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

var events = {
    wheel: { func: 'onWheel' },
    mousedown: {
        func: 'onStart',
        extraEvents: ['mousemove', 'mouseup'],
    },
    touchstart: {
        func: 'onStart',
        extraEvents: ['touchmove', 'touchend'],
    },
};
var ZoomPanProvider = /*#__PURE__*/ (function (_super) {
    __extends(ZoomPanProvider, _super);
    function ZoomPanProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZoomPanProvider.prototype.componentDidMount = function () {
        var _this = this;
        this.svgElement = this.props.rootRef.current;
        Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["setCursorType"])(this.svgElement);
        this.windowHandlers = Object.keys(events).reduce(function (prev, key) {
            var _a, _b;
            var extraEvents = events[key].extraEvents;
            if (extraEvents) {
                return __assign(__assign({}, prev), (_a = {}, _a[key] = (_b = {},
                    _b[extraEvents[0]] = function (event) {
                        _this.props.onMove(event);
                    },
                    _b[extraEvents[1]] = function (event) {
                        _this.props.onEnd(event);
                        Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["setCursorType"])(_this.svgElement);
                        Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["detachEvents"])(window, _this.windowHandlers[key]);
                    },
                    _b), _a));
            }
            return prev;
        }, {});
        this.handlers = Object.keys(events).reduce(function (prev, key) {
            var _a;
            return __assign(__assign({}, prev), (_a = {}, _a[key] = function (e) {
                _this.props[events[key].func](e);
                if (events[key].extraEvents) {
                    Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["attachEvents"])(window, _this.windowHandlers[key]);
                }
            }, _a));
        }, {});
        Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["attachEvents"])(this.svgElement, this.handlers);
    };
    ZoomPanProvider.prototype.componentWillUnmount = function () {
        var _this = this;
        Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["detachEvents"])(this.svgElement, this.handlers);
        Object.keys(this.windowHandlers).forEach(function (el) {
            Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["detachEvents"])(window, _this.windowHandlers[el]);
        });
    };
    ZoomPanProvider.prototype.render = function () {
        return null;
    };
    return ZoomPanProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
// tslint:disable-next-line:max-classes-per-file
var ZoomAndPanBase = /*#__PURE__*/ (function (_super) {
    __extends(ZoomAndPanBase, _super);
    function ZoomAndPanBase(props) {
        var _this = _super.call(this, props) || this;
        _this.multiTouchDelta = null;
        _this.lastCoordinates = null;
        _this.rectOrigin = null;
        _this.offset = [0, 0];
        _this.state = {
            viewport: props.viewport || props.defaultViewport,
            rectBox: null,
        };
        return _this;
    }
    ZoomAndPanBase.getDerivedStateFromProps = function (props, state) {
        return {
            viewport: props.viewport !== undefined ? props.viewport : state.viewport,
        };
    };
    ZoomAndPanBase.prototype.handleStart = function (zoomRegionKey, e) {
        // Default browser behavior is prevented in "move" handler. It is not enough for IPad.
        // Calling "preventDefault" here (on "start") works for IPad.
        // Going further, since we have to call "preventDefault" on "start" we may try to get rid of
        // "preventDefault" on move.
        // TODO: Try to remove "preventDefault" from "move" handler.
        e.preventDefault();
        this.offset = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getOffset"])(e.currentTarget);
        var coords = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getEventCoords"])(e, this.offset);
        // Rectangle mode should be canceled if "zoomRegionKey" is released during mouse movevent or
        // not pressed when mouse is up. To do it access to "event" object is required in
        // "handleMove" and "handleEnd".
        // TODO: Provide rectangle mode canceling.
        if (Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isKeyPressed"])(e, zoomRegionKey)) {
            this.rectOrigin = coords;
        }
        else {
            Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["setCursorType"])(e.currentTarget, 'grabbing');
        }
        if (Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isMultiTouch"])(e)) {
            this.multiTouchDelta = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getDeltaForTouches"])(e.touches).delta;
        }
        this.lastCoordinates = coords;
    };
    ZoomAndPanBase.prototype.handleMove = function (scales, rotated, e, pane) {
        e.preventDefault();
        Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["clearSelection"])();
        if (Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["isMultiTouch"])(e)) {
            var current = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getDeltaForTouches"])(e.touches);
            this.zoom(scales, rotated, current.delta - this.multiTouchDelta, current.center);
            this.multiTouchDelta = current.delta;
        }
        else {
            this.scroll(scales, rotated, e, pane);
        }
    };
    ZoomAndPanBase.prototype.scroll = function (scales, rotated, e, pane) {
        var _this = this;
        var coords = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getEventCoords"])(e, this.offset);
        var deltaX = coords[0] - this.lastCoordinates[0];
        var deltaY = coords[1] - this.lastCoordinates[1];
        this.lastCoordinates = coords;
        this.setState(function (_a, _b) {
            var viewport = _a.viewport;
            var onViewportChange = _b.onViewportChange, interactionWithArguments = _b.interactionWithArguments, interactionWithValues = _b.interactionWithValues;
            if (_this.rectOrigin) {
                return {
                    rectBox: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getRect"])(rotated, interactionWithArguments, interactionWithValues, _this.rectOrigin, coords, pane),
                };
            }
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getViewport"])(scales, rotated, [interactionWithArguments, interactionWithValues], 'pan', [-deltaX, -deltaY], null, null, viewport, onViewportChange);
        });
    };
    ZoomAndPanBase.prototype.handleEnd = function (scales, rotated) {
        var _this = this;
        this.lastCoordinates = null;
        this.multiTouchDelta = null;
        if (this.rectOrigin) {
            this.setState(function (_a, _b) {
                var viewport = _a.viewport, rectBox = _a.rectBox;
                var onViewportChange = _b.onViewportChange, interactionWithArguments = _b.interactionWithArguments, interactionWithValues = _b.interactionWithValues;
                _this.rectOrigin = null;
                return __assign({ rectBox: null }, Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getViewport"])(scales, rotated, [interactionWithArguments, interactionWithValues], 'zoom', null, null, [
                    [rectBox.x, rectBox.x + rectBox.width],
                    [rectBox.y, rectBox.y + rectBox.height],
                ], viewport, onViewportChange));
            });
        }
    };
    ZoomAndPanBase.prototype.zoom = function (scales, rotated, delta, anchors) {
        this.setState(function (_a, _b) {
            var viewport = _a.viewport;
            var onViewportChange = _b.onViewportChange, interactionWithArguments = _b.interactionWithArguments, interactionWithValues = _b.interactionWithValues;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getViewport"])(scales, rotated, [interactionWithArguments, interactionWithValues], 'zoom', [delta, delta], anchors, null, viewport, onViewportChange);
        });
    };
    ZoomAndPanBase.prototype.handleZoom = function (scales, rotated, e) {
        e.preventDefault();
        var center = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getEventCoords"])(e, Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getOffset"])(e.currentTarget));
        this.zoom(scales, rotated, Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["getWheelDelta"])(e), center);
    };
    ZoomAndPanBase.prototype.render = function () {
        var _this = this;
        var _a = this.state, viewport = _a.viewport, rectBox = _a.rectBox;
        var _b = this.props, DragBoxComponent = _b.dragBoxComponent, zoomRegionKey = _b.zoomRegionKey;
        var getAdjustedLayout = function (_a) {
            var domains = _a.domains, ranges = _a.ranges;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["adjustLayout"])(domains, ranges, viewport);
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "zoomAndPan" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "ranges", computed: getAdjustedLayout }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "root" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                    var scales = _a.scales, rotated = _a.rotated, rootRef = _a.rootRef, layouts = _a.layouts;
                    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ZoomPanProvider, { rootRef: rootRef, onWheel: function (e) { return _this.handleZoom(scales, rotated, e); }, onStart: function (e) { return _this.handleStart(zoomRegionKey, e); }, onMove: function (e) { return _this.handleMove(scales, rotated, e, layouts.pane); }, onEnd: function (e) { return _this.handleEnd(scales, rotated); } }));
                })),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "series" },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], null),
                rectBox ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DragBoxComponent, { rect: rectBox })) : null)));
    };
    ZoomAndPanBase.components = {
        dragBoxComponent: 'DragBox',
    };
    ZoomAndPanBase.defaultProps = {
        interactionWithValues: 'none',
        interactionWithArguments: 'both',
        zoomRegionKey: 'shift',
    };
    return ZoomAndPanBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var ZoomAndPan = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["withComponents"])({ DragBox: DragBox })(ZoomAndPanBase);

var wrapToList = function (arg) { return (arg ? [arg] : []); };
var EVENT_NAME_TO_REACT_MAP = {
    click: 'onClick',
    mousemove: 'onMouseMove',
    mouseleave: 'onMouseLeave',
    touchstart: 'onTouchStart',
};
// Translates event names from common space to React.
// https://developer.mozilla.org/en-US/docs/Web/Events
var translateEventNames = function (handlers) {
    var result = {};
    Object.entries(handlers).forEach(function (_a) {
        var _b = __read(_a, 2), name = _b[0], handler = _b[1];
        result[EVENT_NAME_TO_REACT_MAP[name]] = handler;
    });
    return result;
};
var EventTrackerBase = /*#__PURE__*/ (function (_super) {
    __extends(EventTrackerBase, _super);
    function EventTrackerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventTrackerBase.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, onPointerMove = _a.onPointerMove;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "EventTracker" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "clickHandlers", value: wrapToList(onClick) }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "pointerMoveHandlers", value: wrapToList(onPointerMove) }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Template"], { name: "canvas" }, function (params) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplateConnector"], null, function (_a) {
                var series = _a.series, clickHandlers = _a.clickHandlers, pointerMoveHandlers = _a.pointerMoveHandlers;
                var handlers = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["buildEventHandlers"])(series, { clickHandlers: clickHandlers, pointerMoveHandlers: pointerMoveHandlers });
                // TODO: Conflicts are still possible. Improve this code.
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["TemplatePlaceholder"], { params: __assign(__assign({}, params), translateEventNames(handlers)) }));
            })); })));
    };
    return EventTrackerBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var EventTracker = EventTrackerBase;

var dependencies$1 = [{ name: 'EventTracker', optional: true }];
var HoverStateBase = /*#__PURE__*/ (function (_super) {
    __extends(HoverStateBase, _super);
    function HoverStateBase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hover: props.hover || props.defaultHover,
        };
        var handlePointerMove = _this.handlePointerMove.bind(_this);
        _this.getPointerMoveHandlers = function (_a) {
            var _b = _a.pointerMoveHandlers, pointerMoveHandlers = _b === void 0 ? [] : _b;
            return __spread(pointerMoveHandlers, [
                handlePointerMove,
            ]);
        };
        return _this;
    }
    HoverStateBase.getDerivedStateFromProps = function (props, state) {
        return { hover: props.hover !== undefined ? props.hover : state.hover };
    };
    HoverStateBase.prototype.handlePointerMove = function (_a) {
        var targets = _a.targets;
        this.setState(function (_a, _b) {
            var currentTarget = _a.hover;
            var onHoverChange = _b.onHoverChange;
            var hover = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["processPointerMove"])(targets, currentTarget, onHoverChange);
            return hover !== undefined ? { hover: hover } : null;
        });
    };
    HoverStateBase.prototype.render = function () {
        var hover = this.state.hover;
        // Function has to be recreated every time as there is no other way
        // to notify that "series" is updated.
        var targets = hover ? [hover] : [];
        var getSeries = function (_a) {
            var series = _a.series;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["changeSeriesState"])(series, targets, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["HOVERED"]);
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "HoverState", dependencies: dependencies$1 },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "pointerMoveHandlers", computed: this.getPointerMoveHandlers }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", computed: getSeries })));
    };
    return HoverStateBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var HoverState = HoverStateBase;

var SelectionStateBase = /*#__PURE__*/ (function (_super) {
    __extends(SelectionStateBase, _super);
    function SelectionStateBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionStateBase.prototype.render = function () {
        var selection = this.props.selection;
        var targets = selection || [];
        var getSeries = function (_a) {
            var series = _a.series;
            return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["changeSeriesState"])(series, targets, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_2__["SELECTED"]);
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Plugin"], { name: "SelectionState" },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_1__["Getter"], { name: "series", computed: getSeries })));
    };
    return SelectionStateBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var SelectionState = SelectionStateBase;


//# sourceMappingURL=dx-react-chart.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js ***!
  \*************************************************************************/
/*! exports provided: Action, DragDropProvider, DragSource, Draggable, DropTarget, Getter, Plugin, PluginHost, RefHolder, RefType, Sizer, Template, TemplateConnector, TemplatePlaceholder, clearSelection, connectProps, createStateHelper, withComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropProvider", function() { return DragDropProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSource", function() { return DragSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTarget", function() { return DropTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getter", function() { return Getter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginHost", function() { return PluginHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefHolder", function() { return RefHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefType", function() { return RefType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizer", function() { return Sizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateConnector", function() { return TemplateConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePlaceholder", function() { return TemplatePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSelection", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectProps", function() { return connectProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStateHelper", function() { return createStateHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withComponents", function() { return withComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-core */ "./node_modules/@devexpress/dx-core/dist/dx-core.es.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Bundle of @devexpress/dx-react-core
 * Generated: 2020-03-27
 * Version: 2.6.0
 * License: https://js.devexpress.com/Licensing
 */






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @internal */
var PluginHostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/** @internal */
var PositionContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(function () { return []; });
/** @internal */
var TemplateHostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/** @internal */
var PluginIndexer = /*#__PURE__*/ (function (_super) {
    __extends(PluginIndexer, _super);
    function PluginIndexer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.indexes = {};
        _this.memoize = function (index, positionContext) {
            if (_this.indexes[index])
                return _this.indexes[index];
            var fn = function () {
                var calculatedPosition = positionContext();
                return __spread(calculatedPosition, [index]);
            };
            _this.indexes[index] = fn;
            return fn;
        };
        return _this;
    }
    PluginIndexer.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PositionContext.Consumer, null, function (positionContext) { return (react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
            if (!child || !child.type)
                return child;
            var childPosition = _this.memoize(index, positionContext);
            return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PositionContext.Provider, { key: String(index), value: childPosition }, child));
        })); }));
    };
    return PluginIndexer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/** @internal */
var PLUGIN_HOST_CONTEXT = 'dxcore_pluginHost_context';
/** @internal */
var POSITION_CONTEXT = 'dxcore_position_context';
/** @internal */
var TEMPLATE_HOST_CONTEXT = 'dxcore_templateHost_context';
/** @internal */
var RERENDER_TEMPLATE_EVENT = Symbol('rerenderTemplate');
/** @internal */
var RERENDER_TEMPLATE_SCOPE_EVENT = Symbol('rerenderTemplateScope');
/** @internal */
var UPDATE_CONNECTION_EVENT = Symbol('updateConnection');

/** @internal */
var withContext = function (Context, name) { return function (Component) { return function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, function (context) {
    var _a;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, __assign({}, props, (_a = {}, _a[name] = context, _a))));
})); }; }; };
/** @internal */
var withHostAndPosition = function (Component) { return withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(PositionContext, POSITION_CONTEXT)(Component)); };

/** @internal */
var PluginBase = /*#__PURE__*/ (function (_super) {
    __extends(PluginBase, _super);
    function PluginBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginBase.prototype.componentDidMount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b], _c = POSITION_CONTEXT, position = _a[_c];
        var _d = this.props, name = _d.name, dependencies = _d.dependencies;
        this.plugin = {
            position: position,
            name: name,
            dependencies: dependencies,
            container: true,
        };
        pluginHost.registerPlugin(this.plugin);
    };
    PluginBase.prototype.componentDidUpdate = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.ensureDependencies();
    };
    PluginBase.prototype.componentWillUnmount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.unregisterPlugin(this.plugin);
    };
    PluginBase.prototype.render = function () {
        var children = this.props.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginIndexer, null, children));
    };
    return PluginBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Plugin = withHostAndPosition(PluginBase);

var getRenderingData = function (props) {
    var name = props.name, params = props.params;
    if (name) {
        var _a = props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        return {
            params: params,
            templates: pluginHost.collect(name + "Template")
                .filter(function (template) { return template.predicate(params); })
                .reverse(),
        };
    }
    var _c = props, _d = TEMPLATE_HOST_CONTEXT, templateHost = _c[_d];
    return {
        params: params || templateHost.params(),
        templates: templateHost.templates(),
    };
};
var TemplatePlaceholderBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplatePlaceholderBase, _super);
    function TemplatePlaceholderBase() {
        var _a;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscription = (_a = {},
            _a[RERENDER_TEMPLATE_EVENT] = function (id) {
                if (_this.template && _this.template.id === id) {
                    _this.forceUpdate();
                }
            },
            _a[RERENDER_TEMPLATE_SCOPE_EVENT] = function (name) {
                var propsName = _this.props.name;
                if (propsName === name) {
                    _this.forceUpdate();
                }
            },
            _a);
        _this.template = null;
        _this.params = {};
        return _this;
    }
    TemplatePlaceholderBase.prototype.componentDidMount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.registerSubscription(this.subscription);
    };
    TemplatePlaceholderBase.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = getRenderingData(nextProps), params = _a.params, templates = _a.templates;
        var children = this.props.children;
        var _b = __read(templates, 1), template = _b[0];
        return children !== nextProps.children || this.template !== template
            || !Object(_devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"])(this.params, params);
    };
    TemplatePlaceholderBase.prototype.componentWillUnmount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.unregisterSubscription(this.subscription);
    };
    TemplatePlaceholderBase.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = getRenderingData(this.props), params = _b.params, templates = _b.templates;
        this.params = params;
        _a = __read(templates, 1), this.template = _a[0];
        var restTemplates = templates.slice(1);
        var content = null;
        if (this.template) {
            var templateContent = this.template.children;
            content = templateContent() || null;
            if (content && typeof content === 'function') {
                content = content(params);
            }
        }
        var templatePlaceholder = this.props.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TemplateHostContext.Provider, { value: {
                templates: function () { return restTemplates; },
                params: function () { return _this.params; },
            } }, templatePlaceholder ? templatePlaceholder(content) : content));
    };
    return TemplatePlaceholderBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/** A React component to which a related Template is rendered. */
var TemplatePlaceholder = withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(TemplateHostContext, TEMPLATE_HOST_CONTEXT)(TemplatePlaceholderBase));

/** @internal */
var PluginHostBase = /*#__PURE__*/ (function (_super) {
    __extends(PluginHostBase, _super);
    function PluginHostBase(props) {
        var _this = _super.call(this, props) || this;
        _this.host = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__["PluginHost"]();
        return _this;
    }
    PluginHostBase.prototype.render = function () {
        var children = this.props.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginHostContext.Provider, { value: this.host },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginIndexer, null, children),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TemplatePlaceholder, { name: "root" })));
    };
    return PluginHostBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var PluginHost = PluginHostBase;

/** @internal */
var getAvailableGetters = function (pluginHost, getGetterValue) {
    if (getGetterValue === void 0) { getGetterValue = function (getterName) { return pluginHost.get(getterName + "Getter"); }; }
    var trackedDependencies = {};
    var getters;
    if (typeof Proxy !== 'undefined') {
        getters = new Proxy({}, {
            get: function (target, prop) {
                if (typeof prop !== 'string')
                    return undefined;
                var result = getGetterValue(prop);
                trackedDependencies[prop] = result;
                return result;
            },
            getOwnPropertyDescriptor: function (target, prop) {
                return {
                    configurable: true,
                    enumerable: true,
                    value: this.get(target, prop, undefined),
                };
            },
            ownKeys: function () {
                return pluginHost.knownKeys('Getter');
            },
        });
    }
    else {
        getters = pluginHost.knownKeys('Getter')
            .reduce(function (acc, getterName) {
            Object.defineProperty(acc, getterName, {
                get: function () {
                    var result = getGetterValue(getterName);
                    trackedDependencies[getterName] = result;
                    return result;
                },
            });
            return acc;
        }, {});
    }
    return { getters: getters, trackedDependencies: trackedDependencies };
};
/** @internal */
var isTrackedDependenciesChanged = function (pluginHost, prevTrackedDependencies, getGetterValue) {
    if (getGetterValue === void 0) { getGetterValue = function (getterName) { return pluginHost.get(getterName + "Getter"); }; }
    var trackedDependencies = Object.keys(prevTrackedDependencies)
        // tslint:disable-next-line: prefer-object-spread
        .reduce(function (acc, getterName) {
        var _a;
        return Object.assign(acc, (_a = {},
            _a[getterName] = getGetterValue(getterName),
            _a));
    }, {});
    return !Object(_devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"])(prevTrackedDependencies, trackedDependencies);
};
/** @internal */
var getAvailableActions = function (pluginHost, getAction) {
    if (getAction === void 0) { getAction = function (actionName) { return pluginHost.collect(actionName + "Action").slice().reverse()[0]; }; }
    var actions;
    if (typeof Proxy !== 'undefined') {
        actions = new Proxy({}, {
            get: function (target, prop) {
                if (typeof prop !== 'string')
                    return undefined;
                return getAction(prop);
            },
            getOwnPropertyDescriptor: function (target, prop) {
                return {
                    configurable: true,
                    enumerable: true,
                    value: this.get(target, prop, undefined),
                };
            },
            ownKeys: function () {
                return pluginHost.knownKeys('Action');
            },
        });
    }
    else {
        actions = pluginHost.knownKeys('Action')
            .reduce(function (acc, actionName) {
            Object.defineProperty(acc, actionName, {
                get: function () { return getAction(actionName); },
            });
            return acc;
        }, {});
    }
    return actions;
};

var ActionBase = /*#__PURE__*/ (function (_super) {
    __extends(ActionBase, _super);
    function ActionBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        var _b = props, _c = PLUGIN_HOST_CONTEXT, pluginHost = _b[_c], _d = POSITION_CONTEXT, positionContext = _b[_d];
        var name = props.name;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Action"] = function (params) {
                var action = _this.props.action;
                var getters = getAvailableGetters(pluginHost, function (getterName) { return pluginHost.get(getterName + "Getter", _this.plugin); }).getters;
                var nextParams = params;
                var actions = getAvailableActions(pluginHost, function (actionName) { return (actionName === name
                    ? function (newParams) { nextParams = newParams; }
                    : pluginHost.collect(actionName + "Action", _this.plugin).slice().reverse()[0]); });
                action(params, getters, actions);
                var nextAction = pluginHost.collect(name + "Action", _this.plugin).slice().reverse()[0];
                if (nextAction) {
                    nextAction(nextParams);
                }
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        return _this;
    }
    ActionBase.prototype.componentWillUnmount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.unregisterPlugin(this.plugin);
    };
    ActionBase.prototype.render = function () {
        return null;
    };
    return ActionBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Action = withHostAndPosition(ActionBase);

var GetterBase = /*#__PURE__*/ (function (_super) {
    __extends(GetterBase, _super);
    function GetterBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        var _b = props, _c = PLUGIN_HOST_CONTEXT, pluginHost = _b[_c], _d = POSITION_CONTEXT, positionContext = _b[_d];
        var name = props.name;
        var lastComputed;
        var lastTrackedDependencies = {};
        var lastResult;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Getter"] = function (original) {
                var _a = _this.props, value = _a.value, computed = _a.computed;
                if (computed === undefined)
                    return value;
                var getGetterValue = function (getterName) { return ((getterName === name)
                    ? original
                    : pluginHost.get(getterName + "Getter", _this.plugin)); };
                if (computed === lastComputed
                    && !isTrackedDependenciesChanged(pluginHost, lastTrackedDependencies, getGetterValue)) {
                    return lastResult;
                }
                var _b = getAvailableGetters(pluginHost, getGetterValue), getters = _b.getters, trackedDependencies = _b.trackedDependencies;
                var actions = getAvailableActions(pluginHost);
                lastComputed = computed;
                lastTrackedDependencies = trackedDependencies;
                lastResult = computed(getters, actions);
                return lastResult;
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        return _this;
    }
    GetterBase.prototype.componentDidUpdate = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.broadcast(UPDATE_CONNECTION_EVENT);
    };
    GetterBase.prototype.componentWillUnmount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.unregisterPlugin(this.plugin);
    };
    GetterBase.prototype.render = function () {
        return null;
    };
    return GetterBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
var Getter = withHostAndPosition(GetterBase);

var globalTemplateId = 0;
/** @internal */
var TemplateBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplateBase, _super);
    function TemplateBase(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.children = function () { return void 0; };
        globalTemplateId += 1;
        _this.id = globalTemplateId;
        var _b = props, _c = PLUGIN_HOST_CONTEXT, pluginHost = _b[_c], _d = POSITION_CONTEXT, positionContext = _b[_d];
        var name = props.name, predicate = props.predicate;
        _this.plugin = (_a = {
                position: function () { return positionContext(); }
            },
            _a[name + "Template"] = {
                id: _this.id,
                predicate: function (params) { return (predicate ? predicate(params) : true); },
                children: function () {
                    var children = _this.props.children;
                    return children;
                },
            },
            _a);
        pluginHost.registerPlugin(_this.plugin);
        pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
        return _this;
    }
    TemplateBase.prototype.componentDidUpdate = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        pluginHost.broadcast(RERENDER_TEMPLATE_EVENT, this.id);
    };
    TemplateBase.prototype.componentWillUnmount = function () {
        var _a = this.props, _b = PLUGIN_HOST_CONTEXT, pluginHost = _a[_b];
        var name = this.props.name;
        pluginHost.unregisterPlugin(this.plugin);
        pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
    };
    TemplateBase.prototype.render = function () {
        return null;
    };
    return TemplateBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/*** A React component that defines a markup that is rendered
 * as the corresponding TemplatePlaceholder.
 */
var Template = withHostAndPosition(TemplateBase);

/** @internal */
var TemplateConnectorBase = /*#__PURE__*/ (function (_super) {
    __extends(TemplateConnectorBase, _super);
    function TemplateConnectorBase(props, context) {
        var _a;
        var _this = _super.call(this, props, context) || this;
        _this.trackedDependencies = {};
        _this.subscription = (_a = {},
            _a[UPDATE_CONNECTION_EVENT] = function () { return _this.updateConnection(); },
            _a);
        return _this;
    }
    TemplateConnectorBase.prototype.componentDidMount = function () {
        var pluginHost = this.context;
        pluginHost.registerSubscription(this.subscription);
    };
    TemplateConnectorBase.prototype.componentWillUnmount = function () {
        var pluginHost = this.context;
        pluginHost.unregisterSubscription(this.subscription);
    };
    TemplateConnectorBase.prototype.updateConnection = function () {
        var pluginHost = this.context;
        if (isTrackedDependenciesChanged(pluginHost, this.trackedDependencies)) {
            this.forceUpdate();
        }
    };
    TemplateConnectorBase.prototype.render = function () {
        var pluginHost = this.context;
        var children = this.props.children;
        var _a = getAvailableGetters(pluginHost), getters = _a.getters, trackedDependencies = _a.trackedDependencies;
        this.trackedDependencies = trackedDependencies;
        var actions = getAvailableActions(pluginHost);
        return children(getters, actions);
    };
    return TemplateConnectorBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
TemplateConnectorBase.contextType = PluginHostContext;
/** A React component that provides access to Getters and Actions within a Template. */
var TemplateConnector = TemplateConnectorBase;

var TIMEOUT = 180;
/** @internal */
var TouchStrategy = /*#__PURE__*/ (function () {
    function TouchStrategy(delegate) {
        this.delegate = delegate;
        this.touchStartTimeout = null;
        this.dragging = false;
    }
    TouchStrategy.prototype.isDragging = function () {
        return this.dragging;
    };
    TouchStrategy.prototype.isWaiting = function () {
        return !!this.touchStartTimeout;
    };
    TouchStrategy.prototype.cancelWaiting = function () {
        clearTimeout(this.touchStartTimeout);
        this.touchStartTimeout = undefined;
    };
    TouchStrategy.prototype.start = function (e) {
        var _this = this;
        var _a = e.touches[0], x = _a.clientX, y = _a.clientY;
        this.touchStartTimeout = setTimeout(function () {
            _this.delegate.onStart({ x: x, y: y });
            _this.dragging = true;
        }, TIMEOUT);
    };
    TouchStrategy.prototype.move = function (e) {
        this.cancelWaiting();
        if (this.dragging) {
            var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
            e.preventDefault();
            this.delegate.onMove({ x: clientX, y: clientY });
        }
    };
    TouchStrategy.prototype.end = function (e) {
        this.cancelWaiting();
        if (this.dragging) {
            var _a = e.changedTouches[0], clientX = _a.clientX, clientY = _a.clientY;
            this.delegate.onEnd({ x: clientX, y: clientY });
        }
        this.mouseInitialOffset = null;
        this.dragging = false;
    };
    return TouchStrategy;
}());

/* globals document:true */
var gestureCover;
/** @internal */
var toggleGestureCover = function (toggle, cursor) {
    var style = {
        pointerEvents: toggle ? 'all' : 'none',
    };
    if (toggle && cursor) {
        style = __assign(__assign({}, style), { cursor: cursor });
    }
    if (!gestureCover) {
        style = __assign(__assign({}, style), { position: 'fixed', top: 0, right: 0, left: 0, bottom: 0, opacity: 0, zIndex: 2147483647 });
        gestureCover = document.createElement('div');
        document.body.appendChild(gestureCover);
    }
    Object.keys(style).forEach(function (key) { gestureCover.style[key] = style[key]; });
};

/* globals document:true window:true */
/** @internal */
var clear = function () {
    var selection = window.getSelection && window.getSelection();
    if (selection) {
        if (selection.empty) {
            selection.empty();
        }
        else if (selection.removeAllRanges) {
            selection.removeAllRanges();
        }
    }
};

/* globals window:true document:true */
var BOUNDARY = 10;
var clamp = function (value, min, max) { return Math.max(Math.min(value, max), min); };
var isBoundExceeded = function (_a, _b) {
    var initialX = _a.x, initialY = _a.y;
    var x = _b.x, y = _b.y;
    return clamp(x, initialX - BOUNDARY, initialX + BOUNDARY) !== x
        || clamp(y, initialY - BOUNDARY, initialY + BOUNDARY) !== y;
};
/** @internal */
var MouseStrategy = /*#__PURE__*/ (function () {
    function MouseStrategy(delegate) {
        this.delegate = delegate;
        this.mouseInitialOffset = null;
        this.dragging = false;
    }
    MouseStrategy.prototype.isDragging = function () {
        return this.dragging;
    };
    MouseStrategy.prototype.start = function (e) {
        var x = e.clientX, y = e.clientY;
        this.e = e;
        this.mouseInitialOffset = { x: x, y: y };
    };
    MouseStrategy.prototype.move = function (e) {
        var x = e.clientX, y = e.clientY;
        var dragStarted = false;
        if (!this.dragging && this.mouseInitialOffset) {
            if (isBoundExceeded(this.mouseInitialOffset, { x: x, y: y })) {
                this.delegate.onStart(this.mouseInitialOffset);
                clear();
                dragStarted = true;
                this.dragging = true;
            }
        }
        if (this.dragging) {
            e.preventDefault();
            this.delegate.onMove({ x: x, y: y });
        }
        if (dragStarted) {
            var cursor = window.getComputedStyle(document.elementFromPoint(x, y)).cursor;
            toggleGestureCover(true, cursor);
        }
    };
    MouseStrategy.prototype.end = function (e) {
        if (this.dragging) {
            var x = e.clientX, y = e.clientY;
            toggleGestureCover(false);
            this.delegate.onEnd({ x: x, y: y });
        }
        this.mouseInitialOffset = null;
        this.dragging = false;
    };
    return MouseStrategy;
}());

/* globals window:true */
var eventEmitter;
/** @internal */
var getSharedEventEmitter = function () {
    if (!eventEmitter) {
        eventEmitter = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        ['mousemove', 'mouseup', 'touchmove', 'touchend', 'touchcancel']
            .forEach(function (name) { return window.addEventListener(name, function (e) { return eventEmitter.emit([name, e]); }, { passive: false }); });
    }
    return eventEmitter;
};

var draggingHandled = Symbol('draggingHandled');
/** @internal */
var Draggable = /*#__PURE__*/ (function (_super) {
    __extends(Draggable, _super);
    function Draggable(props, context) {
        var _this = _super.call(this, props, context) || this;
        var delegate = {
            onStart: function (_a) {
                var x = _a.x, y = _a.y;
                var onStart = _this.props.onStart;
                if (!onStart)
                    return;
                Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"])(function () {
                    onStart({ x: x, y: y });
                });
            },
            onMove: function (_a) {
                var x = _a.x, y = _a.y;
                var onUpdate = _this.props.onUpdate;
                if (!onUpdate)
                    return;
                Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"])(function () {
                    onUpdate({ x: x, y: y });
                });
            },
            onEnd: function (_a) {
                var x = _a.x, y = _a.y;
                var onEnd = _this.props.onEnd;
                if (!onEnd)
                    return;
                Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"])(function () {
                    onEnd({ x: x, y: y });
                });
            },
        };
        _this.mouseStrategy = new MouseStrategy(delegate);
        _this.touchStrategy = new TouchStrategy(delegate);
        _this.mouseDownListener = _this.mouseDownListener.bind(_this);
        _this.touchStartListener = _this.touchStartListener.bind(_this);
        _this.globalListener = _this.globalListener.bind(_this);
        return _this;
    }
    Draggable.prototype.componentDidMount = function () {
        getSharedEventEmitter().subscribe(this.globalListener);
        this.setupNodeSubscription();
    };
    Draggable.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    Draggable.prototype.componentDidUpdate = function () {
        this.setupNodeSubscription();
    };
    Draggable.prototype.componentWillUnmount = function () {
        getSharedEventEmitter().unsubscribe(this.globalListener);
    };
    Draggable.prototype.setupNodeSubscription = function () {
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this);
        if (!node)
            return;
        node.removeEventListener('mousedown', this.mouseDownListener);
        node.removeEventListener('touchstart', this.touchStartListener);
        node.addEventListener('mousedown', this.mouseDownListener, { passive: true });
        node.addEventListener('touchstart', this.touchStartListener, { passive: true });
    };
    Draggable.prototype.mouseDownListener = function (e) {
        if (this.touchStrategy.isWaiting() || e[draggingHandled])
            return;
        this.mouseStrategy.start(e);
        e[draggingHandled] = true;
    };
    Draggable.prototype.touchStartListener = function (e) {
        if (e[draggingHandled])
            return;
        this.touchStrategy.start(e);
        e[draggingHandled] = true;
    };
    Draggable.prototype.globalListener = function (_a) {
        var _b = __read(_a, 2), name = _b[0], e = _b[1];
        switch (name) {
            case 'mousemove':
                this.mouseStrategy.move(e);
                break;
            case 'mouseup':
                this.mouseStrategy.end(e);
                break;
            case 'touchmove': {
                this.touchStrategy.move(e);
                break;
            }
            case 'touchend':
            case 'touchcancel': {
                this.touchStrategy.end(e);
                break;
            }
        }
        if (this.mouseStrategy.isDragging() || this.touchStrategy.isDragging()) {
            clear();
        }
    };
    Draggable.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/** @internal */
var DragDropContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/** @internal */
var DragDropProviderCore = /*#__PURE__*/ (function () {
    function DragDropProviderCore() {
        this.payload = null;
        this.dragEmitter = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DragDropProviderCore.prototype.start = function (payload, clientOffset) {
        this.payload = payload;
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload });
    };
    DragDropProviderCore.prototype.update = function (clientOffset) {
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload });
    };
    DragDropProviderCore.prototype.end = function (clientOffset) {
        this.dragEmitter.emit({ clientOffset: clientOffset, payload: this.payload, end: true });
        this.payload = null;
    };
    return DragDropProviderCore;
}());
var defaultProps = {
    onChange: function (_a) {
        var payload = _a.payload, clientOffset = _a.clientOffset;
    },
};
/** @internal */
// tslint:disable-next-line: max-classes-per-file
var DragDropProvider = /*#__PURE__*/ (function (_super) {
    __extends(DragDropProvider, _super);
    function DragDropProvider(props) {
        var _this = _super.call(this, props) || this;
        var onChange = _this.props.onChange;
        _this.dragDropProvider = new DragDropProviderCore();
        _this.dragDropProvider.dragEmitter.subscribe(function (_a) {
            var payload = _a.payload, clientOffset = _a.clientOffset, end = _a.end;
            onChange({
                payload: end ? null : payload,
                clientOffset: end ? null : clientOffset,
            });
        });
        return _this;
    }
    DragDropProvider.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DragDropProvider.prototype.render = function () {
        var children = this.props.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DragDropContext.Provider, { value: this.dragDropProvider }, children));
    };
    DragDropProvider.defaultProps = defaultProps;
    return DragDropProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var defaultProps$1 = {
    onStart: function (_a) {
        var clientOffset = _a.clientOffset;
    },
    onUpdate: function (_a) {
        var clientOffset = _a.clientOffset;
    },
    onEnd: function (_a) {
        var clientOffset = _a.clientOffset;
    },
};
/** @internal */
var DragSource = /*#__PURE__*/ (function (_super) {
    __extends(DragSource, _super);
    function DragSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragSource.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DragSource.prototype.render = function () {
        var dragDropProvider = this.context;
        var _a = this.props, onStart = _a.onStart, onUpdate = _a.onUpdate, onEnd = _a.onEnd, payload = _a.payload, children = _a.children;
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Draggable, { onStart: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.start(payload, { x: x, y: y });
                onStart({ clientOffset: { x: x, y: y } });
            }, onUpdate: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.update({ x: x, y: y });
                onUpdate({ clientOffset: { x: x, y: y } });
            }, onEnd: function (_a) {
                var x = _a.x, y = _a.y;
                dragDropProvider.end({ x: x, y: y });
                onEnd({ clientOffset: { x: x, y: y } });
            } }, children));
    };
    DragSource.defaultProps = defaultProps$1;
    return DragSource;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
DragSource.contextType = DragDropContext;

var clamp$1 = function (value, min, max) { return Math.max(Math.min(value, max), min); };
var defaultProps$2 = {
    onEnter: function (args) { },
    onOver: function (args) { },
    onLeave: function (args) { },
    onDrop: function (args) { },
};
/** @internal */
var DropTarget = /*#__PURE__*/ (function (_super) {
    __extends(DropTarget, _super);
    function DropTarget(props) {
        var _this = _super.call(this, props) || this;
        _this.isOver = false;
        _this.handleDrag = _this.handleDrag.bind(_this);
        return _this;
    }
    DropTarget.prototype.componentDidMount = function () {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.subscribe(this.handleDrag);
    };
    DropTarget.prototype.shouldComponentUpdate = function (nextProps) {
        var children = this.props.children;
        return nextProps.children !== children;
    };
    DropTarget.prototype.componentWillUnmount = function () {
        var dragEmitter = this.context.dragEmitter;
        dragEmitter.unsubscribe(this.handleDrag);
    };
    DropTarget.prototype.handleDrag = function (_a) {
        var payload = _a.payload, clientOffset = _a.clientOffset, end = _a.end;
        var _b = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this).getBoundingClientRect(), left = _b.left, top = _b.top, right = _b.right, bottom = _b.bottom;
        var _c = this.props, onDrop = _c.onDrop, onEnter = _c.onEnter, onLeave = _c.onLeave, onOver = _c.onOver;
        var isOver = clientOffset
            && clamp$1(clientOffset.x, left, right) === clientOffset.x
            && clamp$1(clientOffset.y, top, bottom) === clientOffset.y;
        if (!this.isOver && isOver)
            onEnter({ payload: payload, clientOffset: clientOffset });
        if (this.isOver && isOver)
            onOver({ payload: payload, clientOffset: clientOffset });
        if (this.isOver && !isOver)
            onLeave({ payload: payload, clientOffset: clientOffset });
        if (isOver && end)
            onDrop({ payload: payload, clientOffset: clientOffset });
        this.isOver = isOver && !end;
    };
    DropTarget.prototype.render = function () {
        var children = this.props.children;
        return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
    };
    DropTarget.defaultProps = defaultProps$2;
    return DropTarget;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
DropTarget.contextType = DragDropContext;

/** @internal */
var RefHolder = /*#__PURE__*/ (function (_super) {
    __extends(RefHolder, _super);
    function RefHolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefHolder.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return RefHolder;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/* globals document:true */
var styles = {
    root: {
        position: 'relative',
    },
    triggersRoot: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: -1,
        visibility: 'hidden',
        opacity: 0,
    },
    expandTrigger: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'auto',
    },
    contractTrigger: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        minHeight: '1px',
        minWidth: '1px',
    },
    contractNotifier: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        minHeight: '2px',
        minWidth: '2px',
    },
};
/** @internal */
var Sizer = /*#__PURE__*/ (function (_super) {
    __extends(Sizer, _super);
    function Sizer(props) {
        var _this = _super.call(this, props) || this;
        _this.getSize = function () { return ({ height: _this.rootNode.clientHeight, width: _this.rootNode.clientWidth }); };
        _this.setupListeners = _this.setupListeners.bind(_this);
        _this.rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        return _this;
    }
    Sizer.prototype.componentDidMount = function () {
        this.createListeners();
        this.setupListeners();
    };
    Sizer.prototype.componentDidUpdate = function () {
        // We can scroll the VirtualTable manually only by changing
        // containter's (rootNode) scrollTop property.
        // Viewport changes its own properties automatically.
        var scrollTop = this.props.scrollTop;
        if (scrollTop > -1) {
            this.rootNode.scrollTop = scrollTop;
        }
    };
    // There is no need to remove listeners as divs are removed from DOM when component is unmount.
    // But there is a little chance that component unmounting and 'scroll' event happen roughly
    // at the same time so that `setupListeners` is called after component is unmount.
    Sizer.prototype.componentWillUnmount = function () {
        this.expandTrigger.removeEventListener('scroll', this.setupListeners);
        this.contractTrigger.removeEventListener('scroll', this.setupListeners);
    };
    Sizer.prototype.setupListeners = function () {
        var size = this.getSize();
        var width = size.width, height = size.height;
        this.contractTrigger.scrollTop = height;
        this.contractTrigger.scrollLeft = width;
        var scrollOffset = 2;
        this.expandNotifier.style.width = width + scrollOffset + "px";
        this.expandNotifier.style.height = height + scrollOffset + "px";
        this.expandTrigger.scrollTop = scrollOffset;
        this.expandTrigger.scrollLeft = scrollOffset;
        var onSizeChange = this.props.onSizeChange;
        onSizeChange(size);
    };
    Sizer.prototype.createListeners = function () {
        this.rootNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this.rootRef.current);
        this.triggersRoot = document.createElement('div');
        Object.assign(this.triggersRoot.style, styles.triggersRoot);
        this.rootNode.appendChild(this.triggersRoot);
        this.expandTrigger = document.createElement('div');
        Object.assign(this.expandTrigger.style, styles.expandTrigger);
        this.expandTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.expandTrigger);
        this.expandNotifier = document.createElement('div');
        this.expandTrigger.appendChild(this.expandNotifier);
        this.contractTrigger = document.createElement('div');
        Object.assign(this.contractTrigger.style, styles.contractTrigger);
        this.contractTrigger.addEventListener('scroll', this.setupListeners);
        this.triggersRoot.appendChild(this.contractTrigger);
        this.contractNotifier = document.createElement('div');
        Object.assign(this.contractNotifier.style, styles.contractNotifier);
        this.contractTrigger.appendChild(this.contractNotifier);
    };
    Sizer.prototype.render = function () {
        var _a = this.props, onSizeChange = _a.onSizeChange, Container = _a.containerComponent, style = _a.style, scrollTop = _a.scrollTop, restProps = __rest(_a, ["onSizeChange", "containerComponent", "style", "scrollTop"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RefHolder, { ref: this.rootRef },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Container // NOTE: should have `position: relative`
            , __assign({ style: style ? __assign(__assign({}, styles.root), style) : styles.root }, restProps))));
    };
    Sizer.defaultProps = {
        containerComponent: 'div',
    };
    return Sizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/*** A function that creates a new component that allows you to pass additional properties
 * to the wrapped component.
 */
var connectProps = function (WrappedComponent, getAdditionalProps) {
    var storedAdditionalProps = getAdditionalProps();
    var components = new Set();
    var RenderComponent = /*#__PURE__*/ (function (_super) {
        __extends(RenderComponent, _super);
        function RenderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderComponent.prototype.componentDidMount = function () {
            components.add(this);
        };
        RenderComponent.prototype.componentWillUnmount = function () {
            components.delete(this);
        };
        RenderComponent.prototype.render = function () {
            return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, __assign({}, this.props, storedAdditionalProps));
        };
        return RenderComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    RenderComponent.update = function () {
        storedAdditionalProps = getAdditionalProps();
        Array.from(components.values()).forEach(function (component) { return component.forceUpdate(); });
    };
    return RenderComponent;
};

/** @internal */
var createStateHelper = function (component, controlledStateProperties) {
    if (controlledStateProperties === void 0) { controlledStateProperties = {}; }
    var notifyStateChange = function (nextState, state) {
        Object.keys(controlledStateProperties).forEach(function (propertyName) {
            var changeEvent = controlledStateProperties[propertyName]();
            if (changeEvent && nextState[propertyName] !== state[propertyName]) {
                changeEvent(nextState[propertyName]);
            }
        });
    };
    var lastStateUpdater;
    var initialState = null;
    var lastInitialState = null;
    var newState = null;
    var shouldNotify = false;
    var applyReducer = function (reduce, payload, callback) {
        var stateUpdater = function (prevState) {
            if (initialState === null) {
                initialState = prevState;
            }
            var stateChange = reduce(__assign({}, prevState), payload);
            var state = __assign(__assign({}, prevState), stateChange);
            if (typeof callback === 'function') {
                callback(state, prevState);
            }
            if (stateUpdater === lastStateUpdater) {
                if (lastInitialState !== initialState) {
                    newState = state;
                    if (!shouldNotify) {
                        lastInitialState = initialState;
                        shouldNotify = true;
                    }
                }
                initialState = null;
            }
            return stateChange;
        };
        lastStateUpdater = stateUpdater;
        component.setState(stateUpdater, function () {
            if (shouldNotify) {
                notifyStateChange(newState, lastInitialState);
                shouldNotify = false;
            }
        });
    };
    var applyFieldReducer = function (field, reduce, payload) {
        applyReducer(function (state) {
            var _a;
            return (_a = {},
                _a[field] = reduce(state[field], payload),
                _a);
        });
    };
    return {
        applyReducer: applyReducer,
        applyFieldReducer: applyFieldReducer,
    };
};

var makeBoundComponent = function (Target, components, exposed) {
    var Component = /*#__PURE__*/ (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.render = function () {
            return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, __assign({}, components, this.props));
        };
        return Component;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
    Component.components = Target.components;
    Object.assign(Component, exposed);
    return Component;
};
// type ITargetComponentStatic = new() => ITargetComponent;
/** @internal */
var withComponents = function (components) { return function (Target) {
    var props = {};
    var exposed = {};
    var targetComponents = Target.components;
    Object.entries(targetComponents).forEach(function (_a) {
        var _b = __read(_a, 2), fieldName = _b[0], componentName = _b[1];
        var component = components[componentName];
        if (component && component !== Target[componentName]) {
            props[fieldName] = component;
        }
        exposed[componentName] = component || Target[componentName];
    });
    return Object.keys(props).length > 0
        ? makeBoundComponent(Target, props, exposed) : Target;
}; };

/* globals Element */
/** @internal */
var RefType = Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    current: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["instanceOf"])((typeof Element !== 'undefined') ? Element : Object),
});


//# sourceMappingURL=dx-react-core.es.js.map


/***/ }),

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/colorManipulator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;
exports.hslToRgb = hslToRgb;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */


function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bin.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/bin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/count.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/count.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return count; });
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-array/src/cumsum.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/cumsum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cumsum; });
function cumsum(values, valueof) {
  var sum = 0, index = 0;
  return Float64Array.from(values, valueof === undefined
    ? v => (sum += +v || 0)
    : v => (sum += +valueof(v, index++, values) || 0));
}

/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ "./node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/greatest.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/greatest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatest; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


function greatest(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let max;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, maxValue) > 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        max = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, max) > 0
          : compare(value, value) === 0) {
        max = value;
        defined = true;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/greatestIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-array/src/greatestIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatestIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/d3-array/src/maxIndex.js");



function greatestIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_maxIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let maxValue;
  let max = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (max < 0
        ? compare(value, value) === 0
        : compare(value, maxValue) > 0) {
      maxValue = value;
      max = index;
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/group.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/group.js ***!
  \********************************************/
/*! exports provided: default, groups, rollup, rollups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-array/src/identity.js");


function group(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, count, cross, cumsum, descending, deviation, extent, group, groups, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./node_modules/d3-array/src/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _cumsum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumsum.js */ "./node_modules/d3-array/src/cumsum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cumsum", function() { return _cumsum_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviation.js */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group.js */ "./node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["groups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["rollup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["rollups"]; });

/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bin.js */ "./node_modules/d3-array/src/bin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/scott.js */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./max.js */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/d3-array/src/maxIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxIndex", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mean.js */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./median.js */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/d3-array/src/minIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minIndex", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./permute.js */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__["quantileSorted"]; });

/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./range.js */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./least.js */ "./node_modules/d3-array/src/least.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "least", function() { return _least_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/d3-array/src/leastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leastIndex", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _greatest_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./greatest.js */ "./node_modules/d3-array/src/greatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatest", function() { return _greatest_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./greatestIndex.js */ "./node_modules/d3-array/src/greatestIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatestIndex", function() { return _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scan.js */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sum.js */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["tickStep"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./variance.js */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./zip.js */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });











 // Deprecated; use bin.



















 // Deprecated; use leastIndex.








/***/ }),

/***/ "./node_modules/d3-array/src/least.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/least.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return least; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


function least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minValue) < 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/leastIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/leastIndex.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leastIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/d3-array/src/minIndex.js");



function leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_minIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let minValue;
  let min = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (min < 0
        ? compare(value, value) === 0
        : compare(value, minValue) < 0) {
      minValue = value;
      min = index;
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/maxIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/maxIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxIndex; });
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-array/src/quantile.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5, valueof);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/minIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/minIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minIndex; });
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default, quantileSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return quantileSorted; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/d3-array/src/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/d3-array/src/quickselect.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-array/src/number.js");





function quantile(values, p, valueof) {
  values = Float64Array.from(Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["numbers"])(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values);
  if (p >= 1) return Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values, i0).subarray(0, i0 + 1)),
      value1 = Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/d3-array/src/leastIndex.js");


function scan(values, compare) {
  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, compare);
  return index < 0 ? undefined : index;
}


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quantile.js */ "./node_modules/d3-array/src/quantile.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.25)) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");
/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deviation.js */ "./node_modules/d3-array/src/deviation.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values)) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return FormatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["FormatSpecifier"]; });

/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumberArray", function() { return _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/index.js */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasisClosed"]; });

/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hsl.js */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["hslLong"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hcl.js */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["hclLong"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["cubehelixLong"]; });

/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./piecewise.js */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal_js__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["piecewise"])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, diverging());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_6__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");



function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : [0, 1];

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band.js */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radial.js */ "./node_modules/d3-scale/src/radial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleRadial", function() { return _radial_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold.js */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcTime.js */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sequentialQuantile.js */ "./node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _diverging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diverging.js */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSymlog"]; });

/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });




































/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(u, v, n);
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_0__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(Object(_linear_js__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/radial.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/radial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radial; });
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");





function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"])).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice.js */ "./node_modules/d3-scale/src/nice.js");







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target),
          step;
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
      return interval.every(step);
    }

    return interval;
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1]))
        ? domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_5__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init_js__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time_js__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point_js__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point_js__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line_js__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal_js__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc.js */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie.js */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial.js */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index.js */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol.js */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed.js */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen.js */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle.js */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed.js */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen.js */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed.js */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone.js */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural.js */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step.js */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack.js */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand.js */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging.js */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette.js */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle.js */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function() { return _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_descending_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/descending.js */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/insideOut.js */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/reverse.js */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point.js */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/appearance.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var peaks = series.map(peak);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
});

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_appearance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isoParse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse.js */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _isoParse_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat_js__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/index.js ***!
  \*******************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond.js */ "./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.js */ "./node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute.js */ "./node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour.js */ "./node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.js */ "./node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week.js */ "./node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month.js */ "./node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year.js */ "./node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute.js */ "./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _utcHour_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour.js */ "./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _utcDay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay.js */ "./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek.js */ "./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth.js */ "./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _utcYear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear.js */ "./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

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
  __jsx(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
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
//# sourceMappingURL=index.js.e0dd5cf1e292a4f85432.hot-update.js.map