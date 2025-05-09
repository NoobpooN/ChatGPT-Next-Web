"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(ssr)/./node_modules/micromark-util-symbol/values.js\");\n\n/**\n * Normalize an identifier (such as used in definitions).\n *\n * @param {string} value\n * @returns {string}\n */ function normalizeIdentifier(value) {\n    return value// Collapse Markdown whitespace.\n    .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__.values.space)// Trim.\n    .replace(/^ | $/g, \"\")// Some characters are considered “uppercase”, but if their lowercase\n    // counterpart is uppercased will result in a different uppercase\n    // character.\n    // Hence, to get that form, we perform both lower- and uppercase.\n    // Upper case makes sure keys will not interact with default prototypal\n    // methods: no method is uppercase.\n    .toLowerCase().toUpperCase();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBRXREOzs7OztDQUtDLEdBQ00sU0FBU0Msb0JBQW9CQyxLQUFLO0lBQ3ZDLE9BQ0VBLEtBQ0UsZ0NBQWdDO0tBQy9CQyxPQUFPLENBQUMsZUFBZUgsbUVBQU1BLENBQUNJLEtBQUssQ0FDcEMsUUFBUTtLQUNQRCxPQUFPLENBQUMsVUFBVSxHQUNuQixxRUFBcUU7SUFDckUsaUVBQWlFO0lBQ2pFLGFBQWE7SUFDYixpRUFBaUU7SUFDakUsdUVBQXVFO0lBQ3ZFLG1DQUFtQztLQUNsQ0UsV0FBVyxHQUNYQyxXQUFXO0FBRWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGNoYXQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvZGV2L2luZGV4LmpzP2VkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt2YWx1ZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC92YWx1ZXMuanMnXG5cbi8qKlxuICogTm9ybWFsaXplIGFuIGlkZW50aWZpZXIgKHN1Y2ggYXMgdXNlZCBpbiBkZWZpbml0aW9ucykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllcih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlXG4gICAgICAvLyBDb2xsYXBzZSBNYXJrZG93biB3aGl0ZXNwYWNlLlxuICAgICAgLnJlcGxhY2UoL1tcXHRcXG5cXHIgXSsvZywgdmFsdWVzLnNwYWNlKVxuICAgICAgLy8gVHJpbS5cbiAgICAgIC5yZXBsYWNlKC9eIHwgJC9nLCAnJylcbiAgICAgIC8vIFNvbWUgY2hhcmFjdGVycyBhcmUgY29uc2lkZXJlZCDigJx1cHBlcmNhc2XigJ0sIGJ1dCBpZiB0aGVpciBsb3dlcmNhc2VcbiAgICAgIC8vIGNvdW50ZXJwYXJ0IGlzIHVwcGVyY2FzZWQgd2lsbCByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdXBwZXJjYXNlXG4gICAgICAvLyBjaGFyYWN0ZXIuXG4gICAgICAvLyBIZW5jZSwgdG8gZ2V0IHRoYXQgZm9ybSwgd2UgcGVyZm9ybSBib3RoIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICAgICAgLy8gVXBwZXIgY2FzZSBtYWtlcyBzdXJlIGtleXMgd2lsbCBub3QgaW50ZXJhY3Qgd2l0aCBkZWZhdWx0IHByb3RvdHlwYWxcbiAgICAgIC8vIG1ldGhvZHM6IG5vIG1ldGhvZCBpcyB1cHBlcmNhc2UuXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgKVxufVxuIl0sIm5hbWVzIjpbInZhbHVlcyIsIm5vcm1hbGl6ZUlkZW50aWZpZXIiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzcGFjZSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;