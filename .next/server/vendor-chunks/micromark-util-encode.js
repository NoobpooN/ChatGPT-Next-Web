"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-encode";
exports.ids = ["vendor-chunks/micromark-util-encode"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-encode/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark-util-encode/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nconst characterReferences = {\n    '\"': \"quot\",\n    \"&\": \"amp\",\n    \"<\": \"lt\",\n    \">\": \"gt\"\n};\n/**\n * Encode only the dangerous HTML characters.\n *\n * This ensures that certain characters which have special meaning in HTML are\n * dealt with.\n * Technically, we can skip `>` and `\"` in many cases, but CM includes them.\n *\n * @param {string} value\n * @returns {string}\n */ function encode(value) {\n    return value.replace(/[\"&<>]/g, replace);\n    /**\n   * @param {string} value\n   * @returns {string}\n   */ function replace(value) {\n        // @ts-expect-error Hush, it’s fine.\n        return \"&\" + characterReferences[value] + \";\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZW5jb2RlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxzQkFBc0I7SUFBQyxLQUFLO0lBQVEsS0FBSztJQUFPLEtBQUs7SUFBTSxLQUFLO0FBQUk7QUFFMUU7Ozs7Ozs7OztDQVNDLEdBQ00sU0FBU0MsT0FBT0MsS0FBSztJQUMxQixPQUFPQSxNQUFNQyxPQUFPLENBQUMsV0FBV0E7SUFFaEM7OztHQUdDLEdBQ0QsU0FBU0EsUUFBUUQsS0FBSztRQUNwQixvQ0FBb0M7UUFDcEMsT0FBTyxNQUFNRixtQkFBbUIsQ0FBQ0UsTUFBTSxHQUFHO0lBQzVDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Y2hhdC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1lbmNvZGUvaW5kZXguanM/MzcwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFyYWN0ZXJSZWZlcmVuY2VzID0geydcIic6ICdxdW90JywgJyYnOiAnYW1wJywgJzwnOiAnbHQnLCAnPic6ICdndCd9XG5cbi8qKlxuICogRW5jb2RlIG9ubHkgdGhlIGRhbmdlcm91cyBIVE1MIGNoYXJhY3RlcnMuXG4gKlxuICogVGhpcyBlbnN1cmVzIHRoYXQgY2VydGFpbiBjaGFyYWN0ZXJzIHdoaWNoIGhhdmUgc3BlY2lhbCBtZWFuaW5nIGluIEhUTUwgYXJlXG4gKiBkZWFsdCB3aXRoLlxuICogVGVjaG5pY2FsbHksIHdlIGNhbiBza2lwIGA+YCBhbmQgYFwiYCBpbiBtYW55IGNhc2VzLCBidXQgQ00gaW5jbHVkZXMgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlKHZhbHVlKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBIdXNoLCBpdOKAmXMgZmluZS5cbiAgICByZXR1cm4gJyYnICsgY2hhcmFjdGVyUmVmZXJlbmNlc1t2YWx1ZV0gKyAnOydcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNoYXJhY3RlclJlZmVyZW5jZXMiLCJlbmNvZGUiLCJ2YWx1ZSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-encode/index.js\n");

/***/ })

};
;