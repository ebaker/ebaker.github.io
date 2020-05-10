webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folio; });
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
    segment().page('active', {
      path: "/".concat(active)
    });
  }, [active]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelectorAll('a').forEach(function (link) {
      segment().trackLink(link, "Contact Link Clicked - ".concat(link.className), {
        href: link.href
      });
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.title), __jsx("link", {
    rel: "icon",
    href: "/favicon.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error(\"Segment snippet included twice.\");else{analytics.invoked=!0;analytics.methods=[\"trackSubmit\",\"trackClick\",\"trackLink\",\"trackForm\",\"pageview\",\"identify\",\"reset\",\"group\",\"track\",\"ready\",\"alias\",\"debug\",\"page\",\"once\",\"off\",\"on\",\"addSourceMiddleware\",\"addIntegrationMiddleware\"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement(\"script\");n.type=\"text/javascript\";n.async=!0;n.src=\"https://cdn.segment.com/analytics.js/v1/\"+e+\"/analytics.min.js\";var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION=\"4.1.0\";\n    analytics.load(\"".concat(process.env.SEGMENT_WRITE_KEY, "\");\n    analytics.page();\n    }}();\n    ")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name), __jsx("div", {
    className: "mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "button",
    onClick: function onClick() {
      segment().track('Mobile Menu Clicked', {
        active: active,
        mobileMenuOpen: mobileMenuOpen
      });
      setMobileMenuOpen(!mobileMenuOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.name)), __jsx("div", {
    className: "overlay ".concat(mobileMenuOpen ? 'show' : ''),
    onClick: function onClick() {
      return setMobileMenuOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "navigation ".concat(mobileMenuOpen ? 'open' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "slider ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), nav.map(function (view) {
    return __jsx("li", {
      key: view,
      onClick: function onClick() {
        segment().track("Mobile Nav Link Clicked - ".concat(view), {
          active: active,
          mobileMenuOpen: mobileMenuOpen
        });
        setActive(view);
        setMobileMenuOpen(false);
      },
      onMouseEnter: function onMouseEnter() {
        active !== view && segment().track("Nav MouseEnter - ".concat(view), {
          active: active
        });
        !mobileMenuOpen && setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, view);
  }))), __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-subheader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, active), __jsx("div", {
    className: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "spinner ".concat(active),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, nav.map(function (view) {
    return __jsx("div", {
      key: view,
      className: "button ".concat(view),
      onClick: function onClick() {
        segment().track("Spinner Button Clicked - ".concat(view), {
          active: active
        });
        setActive(view);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    }, view)));
  })), __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "contents",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "content contact ".concat(active === 'contact' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, _me_json__WEBPACK_IMPORTED_MODULE_6__.contacts.map(function (contact) {
    return __jsx("div", {
      key: contact.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: contact.icon,
      href: contact.url,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-".concat(contact.icon),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 23
      }
    }), contact.icon === 'file-pdf' && __jsx("div", {
      className: "resume",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, "Resume")));
  })), __jsx("div", {
    className: "content work ".concat(active === 'work' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 147,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "content about ".concat(active === 'about' && 'active'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/me.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 165,
      columnNumber: 7
    }
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.d2970731b61d4c537a58.hot-update.js.map