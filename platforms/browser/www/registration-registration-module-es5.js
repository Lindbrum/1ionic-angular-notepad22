(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
    /***/
    "DNuw":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function DNuw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
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


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-routing.module */
      "zF/k");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration.page */
      "hHzj");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
      })], RegistrationPageModule);
      /***/
    },

    /***/
    "XDXw":
    /*!*****************************************************!*\
      !*** ./src/app/registration/registration.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XDXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "hHzj":
    /*!***************************************************!*\
      !*** ./src/app/registration/registration.page.ts ***!
      \***************************************************/

    /*! exports provided: RegistrationPage */

    /***/
    function hHzj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
        return RegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registration.page.html */
      "mE0+");
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registration.page.scss */
      "XDXw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage() {
          _classCallCheck(this, RegistrationPage);
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegistrationPage;
      }();

      RegistrationPage.ctorParameters = function () {
        return [];
      };

      RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegistrationPage);
      /***/
    },

    /***/
    "mE0+":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registrazione</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nome</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Cognome</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Entra</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "zF/k":
    /*!*************************************************************!*\
      !*** ./src/app/registration/registration-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function zFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
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


      var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration.page */
      "hHzj");

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registration-registration-module-es5.js.map