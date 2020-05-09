webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/es/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Baker/r/next-folio/components/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Carousel(_ref) {
  var _this = this;

  var work = _ref.work,
      activeImageIndex = _ref.activeImageIndex,
      setActiveImageIndex = _ref.setActiveImageIndex,
      setGalleryOpen = _ref.setGalleryOpen,
      segment = _ref.segment;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    showThumbs: false,
    showArrows: true,
    showIndicators: false,
    infiniteLoop: true,
    showStatus: false,
    selectedItem: activeImageIndex,
    renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
      return hasPrev && __jsx("div", {
        className: "button left",
        onClick: function onClick() {
          segment.track('Click Carousel Prev Arrow', {
            label: label
          });
          onClickHandler();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "icon-left-open",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }));
    },
    renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
      return hasNext && __jsx("div", {
        className: "button right",
        onClick: function onClick() {
          segment.track('Click Carousel Next Arrow', {
            label: label
          });
          onClickHandler();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "icon-right-open",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, work.map(function (project, index) {
    return __jsx("div", {
      key: project.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: project.image,
      onClick: function onClick() {
        segment.track('Click Carousel Image', {
          image: project.image
        });
        setActiveImageIndex(index); // @ebaker - quick hack to remove double bars on small device height

        document.body.style.overflowY = 'hidden';
        setGalleryOpen(true);
      },
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "legend",
      style: {
        opacity: 0.9
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, project.title), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, project.subtitle)));
  })), __jsx("div", {
    className: "open-gallery-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "icon-export",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.0a2d0989db6b769623c1.hot-update.js.map