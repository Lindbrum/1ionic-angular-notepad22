(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"], {
    /***/
    "QSij":
    /*!*****************************************!*\
      !*** ./src/app/splash/splash.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function QSij(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background:black;\n}\n\n@-webkit-keyframes scale-in-center {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes scale-in-center {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.container {\n  -webkit-animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: scale-in-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.container img {\n  height: 100px;\n  margin-top: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQW1DO0lBQy9CLG1CQUFBO0lBQW1CLFVBQUE7RUFJckI7RUFKK0I7SUFBZ0MsbUJBQUE7SUFBbUIsVUFBQTtFQVNsRjtBQUNGOztBQVYrRjtFQUEyQjtJQUN0SCxtQkFBQTtJQUFtQixVQUFBO0VBZXJCO0VBZitCO0lBQWdDLG1CQUFBO0lBQW1CLFVBQUE7RUFvQmxGO0FBQ0Y7O0FBcEJBO0VBQ0ksK0VBQUE7RUFBd0UsdUVBQUE7QUF1QjVFOztBQXRCSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBd0JSIiwiZmlsZSI6InNwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDpibGFjaztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWluLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNjYWxlLWluLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1cclxuLmNvbnRhaW5lcntcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOnNjYWxlLWluLWNlbnRlciAycyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzY2FsZS1pbi1jZW50ZXIgMnMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "acyj":
    /*!***************************************!*\
      !*** ./src/app/splash/splash.page.ts ***!
      \***************************************/

    /*! exports provided: SplashPage */

    /***/
    function acyj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPage", function () {
        return SplashPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./splash.page.html */
      "hFcS");
      /* harmony import */


      var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./splash.page.scss */
      "QSij");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SplashPage = /*#__PURE__*/function () {
        function SplashPage(router) {
          var _this = this;

          _classCallCheck(this, SplashPage);

          this.router = router;
          setTimeout(function () {
            _this.router.navigateByUrl('notes');
          }, 2000);
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SplashPage;
      }();

      SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SplashPage);
      /***/
    },

    /***/
    "eYMH":
    /*!*****************************************!*\
      !*** ./src/app/splash/splash.module.ts ***!
      \*****************************************/

    /*! exports provided: SplashPageModule */

    /***/
    function eYMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
        return SplashPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./splash-routing.module */
      "zerW");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./splash.page */
      "acyj");

      var SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
      })], SplashPageModule);
      /***/
    },

    /***/
    "hFcS":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function hFcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n<div class=\"container ion-text-center\">\r\n  <img src=\"assets/ytlogo.png\">\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "zerW":
    /*!*************************************************!*\
      !*** ./src/app/splash/splash-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SplashPageRoutingModule */

    /***/
    function zerW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
        return SplashPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash.page */
      "acyj");

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
      }];

      var SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SplashPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=splash-splash-module-es5.js.map