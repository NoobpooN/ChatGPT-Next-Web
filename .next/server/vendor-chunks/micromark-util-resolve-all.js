"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all";
exports.ids = ["vendor-chunks/micromark-util-resolve-all"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-resolve-all/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-resolve-all/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n */ /**\n * Call all `resolveAll`s.\n *\n * @param {{resolveAll?: Resolver}[]} constructs\n * @param {Event[]} events\n * @param {TokenizeContext} context\n * @returns {Event[]}\n */ function resolveAll(constructs, events, context) {\n    /** @type {Resolver[]} */ const called = [];\n    let index = -1;\n    while(++index < constructs.length){\n        const resolve = constructs[index].resolveAll;\n        if (resolve && !called.includes(resolve)) {\n            events = resolve(events, context);\n            called.push(resolve);\n        }\n    }\n    return events;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0NBSUMsR0FFRDs7Ozs7OztDQU9DLEdBQ00sU0FBU0EsV0FBV0MsVUFBVSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87SUFDcEQsdUJBQXVCLEdBQ3ZCLE1BQU1DLFNBQVMsRUFBRTtJQUNqQixJQUFJQyxRQUFRLENBQUM7SUFFYixNQUFPLEVBQUVBLFFBQVFKLFdBQVdLLE1BQU0sQ0FBRTtRQUNsQyxNQUFNQyxVQUFVTixVQUFVLENBQUNJLE1BQU0sQ0FBQ0wsVUFBVTtRQUU1QyxJQUFJTyxXQUFXLENBQUNILE9BQU9JLFFBQVEsQ0FBQ0QsVUFBVTtZQUN4Q0wsU0FBU0ssUUFBUUwsUUFBUUM7WUFDekJDLE9BQU9LLElBQUksQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsT0FBT0w7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRjaGF0Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsL2luZGV4LmpzP2NkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV2ZW50fSBFdmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5SZXNvbHZlcn0gUmVzb2x2ZXJcbiAqL1xuXG4vKipcbiAqIENhbGwgYWxsIGByZXNvbHZlQWxsYHMuXG4gKlxuICogQHBhcmFtIHt7cmVzb2x2ZUFsbD86IFJlc29sdmVyfVtdfSBjb25zdHJ1Y3RzXG4gKiBAcGFyYW0ge0V2ZW50W119IGV2ZW50c1xuICogQHBhcmFtIHtUb2tlbml6ZUNvbnRleHR9IGNvbnRleHRcbiAqIEByZXR1cm5zIHtFdmVudFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFsbChjb25zdHJ1Y3RzLCBldmVudHMsIGNvbnRleHQpIHtcbiAgLyoqIEB0eXBlIHtSZXNvbHZlcltdfSAqL1xuICBjb25zdCBjYWxsZWQgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICBjb25zdCByZXNvbHZlID0gY29uc3RydWN0c1tpbmRleF0ucmVzb2x2ZUFsbFxuXG4gICAgaWYgKHJlc29sdmUgJiYgIWNhbGxlZC5pbmNsdWRlcyhyZXNvbHZlKSkge1xuICAgICAgZXZlbnRzID0gcmVzb2x2ZShldmVudHMsIGNvbnRleHQpXG4gICAgICBjYWxsZWQucHVzaChyZXNvbHZlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiJdLCJuYW1lcyI6WyJyZXNvbHZlQWxsIiwiY29uc3RydWN0cyIsImV2ZW50cyIsImNvbnRleHQiLCJjYWxsZWQiLCJpbmRleCIsImxlbmd0aCIsInJlc29sdmUiLCJpbmNsdWRlcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;