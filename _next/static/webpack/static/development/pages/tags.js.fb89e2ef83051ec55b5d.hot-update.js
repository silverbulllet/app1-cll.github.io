webpackHotUpdate("static/development/pages/tags.js",{

/***/ "./src/redux/actions/tagActions.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/tagActions.js ***!
  \*****************************************/
/*! exports provided: actionTypes, getTagList, getTagWithPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagList", function() { return getTagList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagWithPosts", function() { return getTagWithPosts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/my-fetch */ "./src/utils/my-fetch.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/constants */ "./src/config/constants.js");

// import fetch from 'node-fetch'

 // Part 1. ACTION TYPES

var actionTypes = {
  GET_TAG_LIST: 'GET_TAG_LIST',
  GET_TAG_WITH_POSTS: 'GET_TAG_WITH_POSTS'
}; // Part 2 .ACTIONS

var getTagList = function getTagList() {
  return function _callee(dispatch) {
    var url, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(_config_constants__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "/api/tags");
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url));

          case 3:
            result = _context.sent;
            return _context.abrupt("return", dispatch({
              type: actionTypes.GET_TAG_LIST,
              data: result.code === 200 ? result.data : {}
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var getTagWithPosts = function getTagWithPosts(_ref) {
  var id = _ref.id;
  return function _callee2(dispatch) {
    var url, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(_config_constants__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "/api/tags/").concat(id, "&status=published");
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url));

          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: actionTypes.GET_TAG_WITH_POSTS,
              data: result.code === 200 ? result.data : {}
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };
};

/***/ })

})
//# sourceMappingURL=tags.js.fb89e2ef83051ec55b5d.hot-update.js.map