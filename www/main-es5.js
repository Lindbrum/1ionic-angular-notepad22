(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+OVq":
    /*!***********************************************!*\
      !*** ./src/app/modal/modal-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ModalPageRoutingModule */

    /***/
    function OVq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function () {
        return ModalPageRoutingModule;
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


      var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal.page */
      "Af+r");

      var routes = [{
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
      }];

      var ModalPageRoutingModule = function ModalPageRoutingModule() {
        _classCallCheck(this, ModalPageRoutingModule);
      };

      ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalPageRoutingModule);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\OwO\Documents\GitHub\ionic-angular-notepad22\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "Af+r":
    /*!*************************************!*\
      !*** ./src/app/modal/modal.page.ts ***!
      \*************************************/

    /*! exports provided: ModalPage */

    /***/
    function AfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
        return ModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal.page.html */
      "wwHD");
      /* harmony import */


      var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal.page.scss */
      "qdCT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "Bg0J");

      var ModalPage = /*#__PURE__*/function () {
        function ModalPage(modalCtrl, localNotifications) {
          _classCallCheck(this, ModalPage);

          this.modalCtrl = modalCtrl;
          this.localNotifications = localNotifications;
        }

        _createClass(ModalPage, [{
          key: "delayed_notification",
          value: function delayed_notification() {
            // Schedule delayed notification
            this.localNotifications.schedule({
              text: 'Delayed ILocalNotification',
              trigger: {
                at: new Date(new Date().getTime() + 3600)
              },
              led: 'FF0000',
              sound: null
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ModalPage;
      }();

      ModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]
        }];
      };

      ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])], ModalPage);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.router.navigateByUrl('splash');
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _modal_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modal/modal.module */
      "hVeP");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "Bg0J");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot(), _modal_modal_module__WEBPACK_IMPORTED_MODULE_11__["ModalPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__["LocalNotifications"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "hVeP":
    /*!***************************************!*\
      !*** ./src/app/modal/modal.module.ts ***!
      \***************************************/

    /*! exports provided: ModalPageModule */

    /***/
    function hVeP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalPageModule", function () {
        return ModalPageModule;
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


      var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-routing.module */
      "+OVq");
      /* harmony import */


      var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal.page */
      "Af+r");

      var ModalPageModule = function ModalPageModule() {
        _classCallCheck(this, ModalPageModule);
      };

      ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"]],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
      })], ModalPageModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 0],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 1],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 2],
        "./ion-alert-md.entry.js": ["2/RY", "common", 3],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 4],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 5],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 6],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 7],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 8],
        "./ion-back-button-md.entry.js": ["/joy", "common", 9],
        "./ion-backdrop-ios.entry.js": ["uJLv", 10],
        "./ion-backdrop-md.entry.js": ["fSmE", 11],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 12],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 13],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 14],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 15],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 16],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 17],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 18],
        "./ion-chip-md.entry.js": ["yRpg", "common", 19],
        "./ion-col_3.entry.js": ["/CAe", 20],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 21],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 22],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 23],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 24],
        "./ion-img.entry.js": ["wHD8", 25],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", 26],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", 27],
        "./ion-input-ios.entry.js": ["sdJS", "common", 28],
        "./ion-input-md.entry.js": ["uQUw", "common", 29],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 30],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 31],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 32],
        "./ion-item_8-md.entry.js": ["8bam", "common", 33],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 34],
        "./ion-loading-md.entry.js": ["N3W9", "common", 35],
        "./ion-menu_3-ios.entry.js": ["IlGI", "common", 36],
        "./ion-menu_3-md.entry.js": ["WHty", "common", 37],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 38],
        "./ion-modal-md.entry.js": ["EpFf", "common", 39],
        "./ion-nav_2.entry.js": ["vnES", "common", 40],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 41],
        "./ion-popover-md.entry.js": ["VgKV", "common", 42],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 43],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 44],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 45],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 46],
        "./ion-range-ios.entry.js": ["5g9+", "common", 47],
        "./ion-range-md.entry.js": ["fD4w", "common", 48],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 49],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 50],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 51],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 52],
        "./ion-ripple-effect.entry.js": ["STjf", 53],
        "./ion-route_4.entry.js": ["k5eQ", "common", 54],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 55],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 56],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 57],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 58],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 59],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 60],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 61],
        "./ion-slide_2-md.entry.js": ["k8us", 62],
        "./ion-spinner.entry.js": ["nI0H", "common", 63],
        "./ion-split-pane-ios.entry.js": ["edcM", 64],
        "./ion-split-pane-md.entry.js": ["RyPD", 65],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 66],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 67],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 68],
        "./ion-text.entry.js": ["ISmu", "common", 69],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 70],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 71],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 72],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 73],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 74],
        "./ion-toggle-md.entry.js": ["upP9", "common", 75],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 76]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "qdCT":
    /*!***************************************!*\
      !*** ./src/app/modal/modal.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function qdCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | splash-splash-module */
          "splash-splash-module").then(__webpack_require__.bind(null,
          /*! ./splash/splash.module */
          "eYMH")).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      }, {
        path: 'notes',
        loadChildren: './home/home.module#HomePageModule'
      }, {
        path: 'notes/:id',
        loadChildren: './detail/detail.module#DetailPageModule'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-password-forgot-password-module */
          "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./forgot-password/forgot-password.module */
          "JgOp")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | registration-registration-module */
          "registration-registration-module").then(__webpack_require__.bind(null,
          /*! ./registration/registration.module */
          "DNuw")).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'nota',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nota-nota-module */
          [__webpack_require__.e("common"), __webpack_require__.e("nota-nota-module")]).then(__webpack_require__.bind(null,
          /*! ./nota/nota.module */
          "5bHp")).then(function (m) {
            return m.NotaPageModule;
          });
        }
      }, {
        path: 'modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./modal/modal.module */
          "hVeP")).then(function (m) {
            return m.ModalPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wwHD":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function wwHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Data&Time</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Titolo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Luogo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item-divider></ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Start Date</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" min=\"2021\" max=\"2021\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Data inizio</ion-label>\r\n      <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Fine</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" min=\"2021\" max=\"2021\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Ripetizione</ion-label>\r\n      <ion-datetime placeholder=\"Never\" disabled></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Travel Time</ion-label>\r\n      <ion-datetime placeholder=\"None\" disabled></ion-datetime>\r\n    </ion-item>\r\n    <ion-item-divider></ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Alert</ion-label>\r\n      <ion-datetime placeholder=\"None\"></ion-datetime>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-button (click)=\"delayed_notification()\">\r\n    Delayed Notification\r\n  </ion-button>\r\n<ion-button (click)=\"close()\" fill=\"clear\">chiudi</ion-button>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./detail/detail.module": ["lM0Z", "common", "detail-detail-module"],
        "./home/home.module": ["ct+p", "common", "home-home-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map