webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gallery */ "./components/Gallery.js");
/* harmony import */ var _styles_app_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/app.styl */ "./styles/app.styl");
/* harmony import */ var _styles_app_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_styl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_fontello_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/fontello.css */ "./public/css/fontello.css");
/* harmony import */ var _public_css_fontello_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_fontello_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _me_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../me.json */ "./me.json");
var _me_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../me.json */ "./me.json", 1);
var _jsxFileName = "/Users/Baker/r/next-folio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var nav = ['contact', 'work', 'about'];
function Folio() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nav[0]),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mobileMenuOpen = _useState2[0],
      setMobileMenuOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      galleryOpen = _useState3[0],
      setGalleryOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      activeImageIndex = _useState4[0],
      setActiveImageIndex = _useState4[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.title), __jsx("link", {
    rel: "icon",
    href: "/favicon.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name), __jsx("div", {
    className: "mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "button",
    onClick: function onClick() {
      return setMobileMenuOpen(!mobileMenuOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name)), __jsx("div", {
    id: "app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "navigation ".concat(mobileMenuOpen ? 'open' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "slider ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), nav.map(function (view) {
    return __jsx("li", {
      key: view,
      onClick: function onClick() {
        setActive(view);
        setMobileMenuOpen(false);
      },
      onMouseEnter: function onMouseEnter() {
        return !mobileMenuOpen && setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, view);
  }))), __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-subheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, active), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "spinner ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, nav.map(function (view) {
    return __jsx("div", {
      key: view,
      className: "button ".concat(view),
      onClick: function onClick() {
        return setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, view)));
  })), __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contents",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "content contact ".concat(active === 'contact' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.contacts.map(function (contact) {
    return __jsx("div", {
      key: contact.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: contact.icon,
      href: contact.url,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-".concat(contact.icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }), contact.icon === 'file-pdf' && __jsx("div", {
      className: "resume",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, "Resume")));
  })), __jsx("div", {
    className: "content work ".concat(active === 'work' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    work: _me_json__WEBPACK_IMPORTED_MODULE_6__.work,
    activeImageIndex: activeImageIndex,
    setActiveImageIndex: setActiveImageIndex,
    setGalleryOpen: setGalleryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "content about ".concat(active === 'about' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/me.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.about.bio)))))), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    work: _me_json__WEBPACK_IMPORTED_MODULE_6__.work,
    activeImageIndex: activeImageIndex,
    setActiveImageIndex: setActiveImageIndex,
    galleryOpen: galleryOpen,
    setGalleryOpen: setGalleryOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.796c9fc8bd9a89a8ed2f.hot-update.js.map