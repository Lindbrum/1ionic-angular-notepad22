(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
    /***/
    "BJgb":
    /*!***************************************!*\
      !*** ./src/app/detail/detail.page.ts ***!
      \***************************************/

    /*! exports provided: DetailPage */

    /***/
    function BJgb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail.page.html */
      "rVzv");
      /* harmony import */


      var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail.page.scss */
      "rMtB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_notes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/notes.service */
      "ezX+");

      var DetailPage = /*#__PURE__*/function () {
        function DetailPage(route, notesService, navCtrl) {
          _classCallCheck(this, DetailPage);

          this.route = route;
          this.notesService = notesService;
          this.navCtrl = navCtrl; // Initialise a placeholder note until the actual note can be loaded in

          this.note = {
            id_user: '',
            id: '',
            title: '',
            content: '',
            color: ''
          };
        }

        _createClass(DetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Get the id of the note from the URL
            var noteId = this.route.snapshot.paramMap.get('id'); // Check that the data is loaded before getting the note
            // This handles the case where the detail page is loaded directly via the URL

            if (this.notesService.loaded) {
              this.notesService.getNote(noteId).subscribe(function (result) {
                return _this.note = result;
              });
            } else {
              this.notesService.load().then(function () {
                _this.notesService.getNote(noteId).subscribe(function (result) {
                  return _this.note = result;
                });
              });
            }
          }
        }, {
          key: "noteChanged",
          value: function noteChanged() {
            this.notesService.save();
          }
        }, {
          key: "deleteNote",
          value: function deleteNote() {
            this.notesService.deleteNote(this.route.snapshot.paramMap.get('id'));
            this.navCtrl.navigateBack('/notes');
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_notes_service__WEBPACK_IMPORTED_MODULE_6__["NotesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_notes_service__WEBPACK_IMPORTED_MODULE_6__["NotesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], DetailPage);
      /***/
    },

    /***/
    "R/Z5":
    /*!*************************************************!*\
      !*** ./src/app/detail/detail-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: DetailPageRoutingModule */

    /***/
    function RZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
        return DetailPageRoutingModule;
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


      var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail.page */
      "BJgb");

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
      }];

      var DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailPageRoutingModule);
      /***/
    },

    /***/
    "lM0Z":
    /*!*****************************************!*\
      !*** ./src/app/detail/detail.module.ts ***!
      \*****************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function lM0Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
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


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-routing.module */
      "R/Z5");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "BJgb");

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
      })], DetailPageModule);
      /***/
    },

    /***/
    "rMtB":
    /*!*****************************************!*\
      !*** ./src/app/detail/detail.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function rMtB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-textarea {\n  --background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "rVzv":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function rVzv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/notes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ note.title }}</ion-title>\n\n    <ion-radio-group  slot=\"end\"   (ionChange)=\"note.color\">\n      <ion-radio color=\"success\" value=\"success\" ></ion-radio> &nbsp;\n      <ion-radio color=\"danger\" value=\"danger\" ></ion-radio> &nbsp;\n      <ion-radio color=\"tertiary\" value=\"tertiary\" ></ion-radio> &nbsp;\n      <ion-radio  color=\"warning\" value=\"warning\"  ></ion-radio>\n    </ion-radio-group>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteNote()\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-textarea auto-grow (input)=\"noteChanged()\" [(ngModel)]=\"note.content\" placeholder=\"...metti una descrizione per bestemmiare come me\"></ion-textarea>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-detail-module-es5.js.map