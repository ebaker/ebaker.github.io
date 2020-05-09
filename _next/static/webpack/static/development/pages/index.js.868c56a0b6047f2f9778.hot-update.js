webpackHotUpdate("static/development/pages/index.js",{

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
      setGalleryOpen = _ref.setGalleryOpen,
      segment = _ref.segment;
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
      segment().track('Click Gallery Close', {
        gallery: work[activeImageIndex].gallery
      });
      setGalleryOpen(false);
    },
    nextButtonPressed: function nextButtonPressed() {
      segment().track('Click Gallery Next', {
        gallery: work[activeImageIndex].gallery
      });
      var nextIndex = activeImageIndex + 1 >= work.length ? 0 : activeImageIndex + 1;
      setActiveImageIndex(nextIndex);
    },
    prevButtonPressed: function prevButtonPressed() {
      segment().track('Click Gallery Prev', {
        gallery: work[activeImageIndex].gallery
      });
      var prevIndex = activeImageIndex - 1 < 0 ? work.length - 1 : activeImageIndex - 1;
      setActiveImageIndex(prevIndex);
    },
    activePhotoPressed: function activePhotoPressed(moveNext) {
      var link = work[activeImageIndex].gallery.link;

      if (link) {
        segment().track('Click Gallery Link', {
          gallery: work[activeImageIndex].gallery
        });
        window.open(link);
      } else {
        segment().track('Click Gallery Image', {
          gallery: work[activeImageIndex].gallery
        });
        var nextIndex = activeImageIndex + 1 >= work.length ? 0 : activeImageIndex + 1;
        setActiveImageIndex(nextIndex);
        moveNext();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.868c56a0b6047f2f9778.hot-update.js.map