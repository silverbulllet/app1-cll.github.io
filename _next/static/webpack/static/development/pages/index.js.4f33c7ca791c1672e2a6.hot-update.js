webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/common/layouts/Footer/Footer.js":
/*!*********************************************!*\
  !*** ./src/common/layouts/Footer/Footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/components/footerStyle.js */ "./src/common/assets/jss/material-kit-react/components/footerStyle.js");
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Record */ "./src/common/layouts/Footer/Record.js");

var _jsxFileName = "/Users/leo_0/Documents/Skeleton/microservices/sb1st-station-svc/src/common/layouts/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*eslint-disable*/


 // material-ui core components






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(_assets_jss_material_kit_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;
  var footerClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.footer, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.a, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return __jsx("footer", {
    className: footerClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: classes.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Chen Leilei' Blog")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: "/archives",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Archives")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    href: "/tags",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Tags")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    href: "/about",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "About")))), __jsx("div", {
    className: classes.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\xA9 ", 1900 + new Date().getYear(), " ", __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), " ", " ", "for a better world with no bugs.")));
}
Footer.propTypes = {
  whiteFont: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/common/layouts/Footer/Record.js":
/*!*********************************************!*\
  !*** ./src/common/layouts/Footer/Record.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Record; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/leo_0/Documents/Skeleton/microservices/sb1st-station-svc/src/common/layouts/Footer/Record.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Record(props) {
  return __jsx("span", {
    className: "jsx-56886698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602007062",
    className: "jsx-56886698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "/static/record.png",
    className: "jsx-56886698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-56886698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u4EAC\u516C\u7F51\u5B89\u5907 11010602007062\u53F7")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "56886698",
    __self: this
  }, "a.jsx-56886698{display:inline-block;-webkit-text-decoration:none;text-decoration:none;height:20px;-webkit-ine-height:20px;ine-height:20px;}img.jsx-56886698{float:left;}p.jsx-56886698{color:blue;float:left;height:20px;line-height:20px;margin:0px 0px 0px 5px;color:#939393;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9fMC9Eb2N1bWVudHMvU2tlbGV0b24vbWljcm9zZXJ2aWNlcy9zYjFzdC1zdGF0aW9uLXN2Yy9zcmMvY29tbW9uL2xheW91dHMvRm9vdGVyL1JlY29yZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHK0IsQUFNVixBQUdDLFdBRmIsQUFHWSxVQVRVLENBVVQsWUFDSyxpQkFDTyxvQkFYWixHQVlFLFNBWEUsS0FZakIsbUNBWEEiLCJmaWxlIjoiL1VzZXJzL2xlb18wL0RvY3VtZW50cy9Ta2VsZXRvbi9taWNyb3NlcnZpY2VzL3NiMXN0LXN0YXRpb24tc3ZjL3NyYy9jb21tb24vbGF5b3V0cy9Gb290ZXIvUmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvcmQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIDxhXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9MTEwMTA2MDIwMDcwNjJcIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvcmVjb3JkLnBuZ1wiIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIOS6rOWFrOe9keWuieWkhyAxMTAxMDYwMjAwNzA2MuWPt1xuICAgICAgICA8L3A+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAgIGluZS1oZWlnaHQ6MjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICBoZWlnaHQ6MjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgIGNvbG9yOiM5MzkzOTM7IFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zcGFuPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/leo_0/Documents/Skeleton/microservices/sb1st-station-svc/src/common/layouts/Footer/Record.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.4f33c7ca791c1672e2a6.hot-update.js.map