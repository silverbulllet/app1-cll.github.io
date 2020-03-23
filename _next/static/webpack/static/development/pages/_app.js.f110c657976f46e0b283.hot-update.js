webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/actions/postActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/postActions.js ***!
  \******************************************/
/*! exports provided: actionTypes, getPostList, getPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostList", function() { return getPostList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/my-fetch */ "./src/utils/my-fetch.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/constants */ "./src/config/constants.js");

// import fetch from 'node-fetch'

 // Part 1. ACTION TYPES

var actionTypes = {
  GET_POST_LIST: 'GET_POST_LIST',
  GET_POST: 'GET_POST_LIST'
}; // Part 2 .ACTIONS

var getPostList = function getPostList(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit;
  return function _callee(dispatch) {
    var url, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(_config_constants__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "/api/articles?page=").concat(page, "&limit=").concat(limit, "&sort=-createdAt&status=published");
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url));

          case 3:
            result = _context.sent;
            return _context.abrupt("return", dispatch({
              type: actionTypes.GET_POST_LIST,
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
var getPost = function getPost(_ref2) {
  var id = _ref2.id;
  return function _callee2(dispatch) {
    var url, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(_config_constants__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "/api/articles/").concat(id, "?status=published");
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_my_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url));

          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: actionTypes.GET_POST,
              data: result.code === 200 ? result.data : {
                article: {
                  title: 'POST NOT FOUND'
                },
                previous: null,
                next: null
              }
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
//# sourceMappingURL=_app.js.f110c657976f46e0b283.hot-update.js.map