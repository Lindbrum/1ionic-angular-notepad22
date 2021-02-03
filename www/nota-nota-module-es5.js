(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nota-nota-module"], {
    /***/
    "5bHp":
    /*!*************************************!*\
      !*** ./src/app/nota/nota.module.ts ***!
      \*************************************/

    /*! exports provided: NotaPageModule */

    /***/
    function bHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotaPageModule", function () {
        return NotaPageModule;
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


      var _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nota-routing.module */
      "XPIU");
      /* harmony import */


      var _nota_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nota.page */
      "RhxC");

      var NotaPageModule = function NotaPageModule() {
        _classCallCheck(this, NotaPageModule);
      };

      NotaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaPageRoutingModule"], _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_nota_page__WEBPACK_IMPORTED_MODULE_6__["NotaPage"]]
      })], NotaPageModule);
      /***/
    },

    /***/
    "RhxC":
    /*!***********************************!*\
      !*** ./src/app/nota/nota.page.ts ***!
      \***********************************/

    /*! exports provided: NotaPage */

    /***/
    function RhxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotaPage", function () {
        return NotaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nota.page.html */
      "TY2i");
      /* harmony import */


      var _nota_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nota.page.scss */
      "gzNH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/notes.service */
      "ezX+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/modal.page */
      "Af+r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var NotaPage = /*#__PURE__*/function () {
        function NotaPage(notesService, alertCtrl, navCtrl, modalCtrl, formBuilder) {
          _classCallCheck(this, NotaPage);

          this.notesService = notesService;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.formBuilder = formBuilder;
          this.playerCount = 1;
          this.myForm = formBuilder.group({
            player1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(NotaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.notesService.load();
          } // funzione chiamata dal pulsante "salva"

        }, {
          key: "addNote",
          value: function addNote() {
            this.notesService.createNote(this.title, this.content, this.color);
            this.navCtrl.back();
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.navCtrl.navigateRoot('login');
          }
        }, {
          key: "showModal",
          value: function showModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]
                      }).then(function (modals) {
                        modals.present();
                      });

                    case 2:
                      modal = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addControl",
          value: function addControl() {
            this.playerCount++;
            this.myForm.addControl('player' + this.playerCount, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required));
          }
        }, {
          key: "removeControl",
          value: function removeControl(control) {
            this.myForm.removeControl(control.key);
          }
        }]);

        return NotaPage;
      }();

      NotaPage.ctorParameters = function () {
        return [{
          type: _services_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      };

      NotaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nota',
        template: _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nota_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], NotaPage);
      /***/
    },

    /***/
    "TY2i":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nota/nota.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function TY2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/notes\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titolo\">Nuova nota</ion-title>\r\n\r\n\r\n    <ion-radio-group [(ngModel)]=\"color\"  slot=\"end\"    (ionChange)=\"color\">\r\n      <ion-radio color=\"success\" value=\"success\"></ion-radio> &nbsp;\r\n      <ion-radio color=\"danger\" value=\"danger\"></ion-radio> &nbsp;\r\n      <ion-radio color=\"tertiary\" value=\"tertiary\"></ion-radio> &nbsp;\r\n      <ion-radio  color=\"warning\" value=\"warning\" ></ion-radio>\r\n    </ion-radio-group>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"primary\">\r\n  <ion-item>\r\n    <ion-input [(ngModel)]=\"title\" placeholder=\"Titolo\" class=\"titolo\"></ion-input>\r\n\r\n  </ion-item>\r\n  <!-- Textarea con placeholder -->\r\n  <ion-item>\r\n    <ion-textarea [(ngModel)]=\"content\" placeholder=\"Scrivi qui la tua nota...\" class=\"areaTesto\"></ion-textarea>\r\n  </ion-item>\r\n  <div class=\"outer\">\r\n  <ion-button color=\"warning\" class=\"inner\" (click)=\"showModal()\">Reminder &nbsp;<ion-icon name=\"notifications-outline\"></ion-icon></ion-button>\r\n  <ion-button color=\"medium\" class=\"inner\">Link &nbsp;<ion-icon name=\"share-social-outline\"></ion-icon></ion-button>\r\n  </div>\r\n  <div class=\"outer\">\r\n  <ion-button color=\"dark\" (click)=\"addNote()\">Salva &nbsp;<ion-icon name=\"save-outline\"></ion-icon></ion-button>\r\n    <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Aggiungi Elenco</ion-button>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-content padding>\r\n\r\n  <ion-list lines=\"none\">\r\n    <form [formGroup]=\"myForm\">\r\n      <ion-item *ngFor=\"let control of myForm.controls | keyvalue\">\r\n        <ion-input required type=\"text\" [(ngModel)]=\"gesf\" [formControlName]=\"control.key\" placeHolder=\"Elenco ...\"></ion-input>\r\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\r\n      </ion-item>\r\n    </form>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "XPIU":
    /*!*********************************************!*\
      !*** ./src/app/nota/nota-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: NotaPageRoutingModule */

    /***/
    function XPIU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotaPageRoutingModule", function () {
        return NotaPageRoutingModule;
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


      var _nota_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nota.page */
      "RhxC");

      var routes = [{
        path: '',
        component: _nota_page__WEBPACK_IMPORTED_MODULE_3__["NotaPage"]
      }];

      var NotaPageRoutingModule = function NotaPageRoutingModule() {
        _classCallCheck(this, NotaPageRoutingModule);
      };

      NotaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotaPageRoutingModule);
      /***/
    },

    /***/
    "gzNH":
    /*!*************************************!*\
      !*** ./src/app/nota/nota.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function gzNH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titolo {\n  text-align: center;\n}\n\n.outer {\n  width: 100%;\n  text-align: center;\n}\n\n.inner {\n  display: inline-block;\n}\n\n.areaTesto {\n  height: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Im5vdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdG9sb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdXRlciB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hcmVhVGVzdG8ge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=nota-nota-module-es5.js.map