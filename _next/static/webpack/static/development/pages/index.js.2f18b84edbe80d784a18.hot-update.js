webpackHotUpdate("static/development/pages/index.js",{

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

  function segment() {
    var noop = function noop() {
      return undefined;
    };

    return window && window.analytics || {
      track: noop,
      identify: noop,
      page: noop,
      trackLink: noop
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    segment().identify();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    segment().page(active);
  }, [active]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return document.querySelectorAll('a').forEach(function (_ref) {
      var href = _ref.href;
      segment().trackLink('Contact Link Clicked', {
        href: href
      });
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.title), __jsx("link", {
    rel: "icon",
    href: "/favicon.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error(\"Segment snippet included twice.\");else{analytics.invoked=!0;analytics.methods=[\"trackSubmit\",\"trackClick\",\"trackLink\",\"trackForm\",\"pageview\",\"identify\",\"reset\",\"group\",\"track\",\"ready\",\"alias\",\"debug\",\"page\",\"once\",\"off\",\"on\",\"addSourceMiddleware\",\"addIntegrationMiddleware\"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement(\"script\");n.type=\"text/javascript\";n.async=!0;n.src=\"https://cdn.segment.com/analytics.js/v1/\"+e+\"/analytics.min.js\";var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION=\"4.1.0\";\n    analytics.load(\"t5QSvw4fH0VfJgLCnB00nHfxo8vfGV3T\");\n    analytics.page();\n    }}();\n    "
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name), __jsx("div", {
    className: "mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "button",
    onClick: function onClick() {
      segment().track('Click Mobile Menu', {
        active: active,
        mobileMenuOpen: mobileMenuOpen
      });
      setMobileMenuOpen(!mobileMenuOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name)), __jsx("div", {
    id: "app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "navigation ".concat(mobileMenuOpen ? 'open' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "slider ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), nav.map(function (view) {
    return __jsx("li", {
      key: view,
      onClick: function onClick() {
        segment().track('Click Mobile Nav Link', {
          view: view,
          active: active,
          mobileMenuOpen: mobileMenuOpen
        });
        setActive(view);
        setMobileMenuOpen(false);
      },
      onMouseEnter: function onMouseEnter() {
        segment().track('MouseEnter Nav', {
          view: view
        });
        !mobileMenuOpen && setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, view);
  }))), __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-subheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, active), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "spinner ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, nav.map(function (view) {
    return __jsx("div", {
      key: view,
      className: "button ".concat(view),
      onClick: function onClick() {
        segment().track('Click Spinner Button', {
          view: view
        });
        setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, view)));
  })), __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contents",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "content contact ".concat(active === 'contact' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.contacts.map(function (contact) {
    return __jsx("div", {
      key: contact.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: contact.icon,
      href: contact.url,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-".concat(contact.icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 23
      }
    }), contact.icon === 'file-pdf' && __jsx("div", {
      className: "resume",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, "Resume")));
  })), __jsx("div", {
    className: "content work ".concat(active === 'work' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    work: _me_json__WEBPACK_IMPORTED_MODULE_6__.work,
    activeImageIndex: activeImageIndex,
    setActiveImageIndex: setActiveImageIndex,
    setGalleryOpen: setGalleryOpen,
    segment: segment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "content about ".concat(active === 'about' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/me.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.about.bio)))))), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    work: _me_json__WEBPACK_IMPORTED_MODULE_6__.work,
    activeImageIndex: activeImageIndex,
    setActiveImageIndex: setActiveImageIndex,
    galleryOpen: galleryOpen,
    setGalleryOpen: setGalleryOpen,
    segment: segment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.2f18b84edbe80d784a18.hot-update.js.map