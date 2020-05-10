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
      setGalleryOpen = _ref.setGalleryOpen;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    showThumbs: false,
    showArrows: true,
    showIndicators: false,
    infiniteLoop: true,
    showStatus: false,
    selectedItem: activeImageIndex,
    renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev) {
      return hasPrev && __jsx("div", {
        className: "button left",
        onClick: onClickHandler,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "icon-left-open",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      }));
    },
    renderArrowNext: function renderArrowNext(onClickHandler, hasNext) {
      return hasNext && __jsx("div", {
        className: "button right",
        onClick: onClickHandler,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "icon-right-open",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, work.map(function (project, index) {
    return __jsx("div", {
      key: project.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: project.image,
      onClick: function onClick() {
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
        lineNumber: 36,
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
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, project.title), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, project.subtitle)));
  })), __jsx("div", {
    className: "open-gallery-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "icon-export",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bnb_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bnb-gallery */ "./node_modules/react-bnb-gallery/dist/index.es.js");
/* harmony import */ var react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bnb-gallery/dist/style.css */ "./node_modules/react-bnb-gallery/dist/style.css");
/* harmony import */ var react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_gallery_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/gallery.styl */ "./styles/gallery.styl");
/* harmony import */ var _styles_gallery_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_gallery_styl__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Baker/r/next-folio/components/Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Carousel(_ref) {
  var work = _ref.work,
      activeImageIndex = _ref.activeImageIndex,
      setActiveImageIndex = _ref.setActiveImageIndex,
      galleryOpen = _ref.galleryOpen,
      setGalleryOpen = _ref.setGalleryOpen;
  return __jsx(react_bnb_gallery__WEBPACK_IMPORTED_MODULE_1__["ReactBnbGallery"], {
    show: galleryOpen,
    preloadSize: 1,
    activePhotoIndex: activeImageIndex,
    photos: work.map(function (_ref2) {
      var gallery = _ref2.gallery;
      return gallery;
    }),
    onClose: function onClose() {
      // @ebaker - quick hack to remove double bars on small device height
      document.body.style.removeProperty('overflow-y');
      setGalleryOpen(false);
    },
    nextButtonPressed: function nextButtonPressed() {
      var nextIndex = activeImageIndex + 1 >= work.length ? 0 : activeImageIndex + 1;
      setActiveImageIndex(nextIndex);
    },
    prevButtonPressed: function prevButtonPressed() {
      var prevIndex = activeImageIndex - 1 < 0 ? work.length - 1 : activeImageIndex - 1;
      setActiveImageIndex(prevIndex);
    },
    activePhotoPressed: function activePhotoPressed(moveNext) {
      var link = work[activeImageIndex].gallery.link;

      if (link) {
        window.open(link);
      } else {
        var nextIndex = activeImageIndex + 1 >= work.length ? 0 : activeImageIndex + 1;
        setActiveImageIndex(nextIndex);
        moveNext();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.8445b651d5669820bc7f.hot-update.js.map