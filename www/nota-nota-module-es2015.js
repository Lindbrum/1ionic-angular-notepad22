(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nota-nota-module"],{

/***/ "5bHp":
/*!*************************************!*\
  !*** ./src/app/nota/nota.module.ts ***!
  \*************************************/
/*! exports provided: NotaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPageModule", function() { return NotaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nota-routing.module */ "XPIU");
/* harmony import */ var _nota_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nota.page */ "RhxC");







let NotaPageModule = class NotaPageModule {
};
NotaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaPageRoutingModule"],
            _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_nota_page__WEBPACK_IMPORTED_MODULE_6__["NotaPage"]]
    })
], NotaPageModule);



/***/ }),

/***/ "RhxC":
/*!***********************************!*\
  !*** ./src/app/nota/nota.page.ts ***!
  \***********************************/
/*! exports provided: NotaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPage", function() { return NotaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nota.page.html */ "TY2i");
/* harmony import */ var _nota_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nota.page.scss */ "gzNH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notes.service */ "ezX+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.page */ "Af+r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let NotaPage = class NotaPage {
    constructor(notesService, alertCtrl, navCtrl, modalCtrl, formBuilder) {
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
    ngOnInit() {
        this.notesService.load();
    }
    // funzione chiamata dal pulsante "salva"
    addNote() {
        this.notesService.createNote(this.title, this.content, this.color);
        this.navCtrl.back();
    }
    goToLogin() {
        this.navCtrl.navigateRoot('login');
    }
    showModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]
            }).then(modals => {
                modals.present();
            });
        });
    }
    addControl() {
        this.playerCount++;
        this.myForm.addControl('player' + this.playerCount, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required));
    }
    removeControl(control) {
        this.myForm.removeControl(control.key);
    }
};
NotaPage.ctorParameters = () => [
    { type: _services_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
NotaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nota',
        template: _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nota_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], NotaPage);



/***/ }),

/***/ "TY2i":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nota/nota.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/notes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titolo\">Nuova nota</ion-title>\n\n\n    <ion-radio-group [(ngModel)]=\"color\"  slot=\"end\"    (ionChange)=\"color\">\n      <ion-radio color=\"success\" value=\"success\"></ion-radio> &nbsp;\n      <ion-radio color=\"danger\" value=\"danger\"></ion-radio> &nbsp;\n      <ion-radio color=\"tertiary\" value=\"tertiary\"></ion-radio> &nbsp;\n      <ion-radio  color=\"warning\" value=\"warning\" ></ion-radio>\n    </ion-radio-group>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n  <ion-item>\n    <ion-input [(ngModel)]=\"title\" placeholder=\"Titolo\" class=\"titolo\"></ion-input>\n\n  </ion-item>\n  <!-- Textarea con placeholder -->\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"content\" placeholder=\"Scrivi qui la tua nota...\" class=\"areaTesto\"></ion-textarea>\n  </ion-item>\n  <div class=\"outer\">\n  <ion-button color=\"warning\" class=\"inner\" (click)=\"showModal()\">Reminder &nbsp;<ion-icon name=\"notifications-outline\"></ion-icon></ion-button>\n  <ion-button color=\"medium\" class=\"inner\">Link &nbsp;<ion-icon name=\"share-social-outline\"></ion-icon></ion-button>\n  </div>\n  <div class=\"outer\">\n  <ion-button color=\"dark\" (click)=\"addNote()\">Salva &nbsp;<ion-icon name=\"save-outline\"></ion-icon></ion-button>\n    <ion-button expand=\"full\" color=\"light\" (click)=\"addControl()\">Aggiungi Elenco</ion-button>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list lines=\"none\">\n    <form [formGroup]=\"myForm\">\n      <ion-item *ngFor=\"let control of myForm.controls | keyvalue\">\n        <ion-input required type=\"text\" [(ngModel)]=\"gesf\" [formControlName]=\"control.key\" placeHolder=\"Elenco ...\"></ion-input>\n        <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n      </ion-item>\n    </form>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "XPIU":
/*!*********************************************!*\
  !*** ./src/app/nota/nota-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NotaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPageRoutingModule", function() { return NotaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nota_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nota.page */ "RhxC");




const routes = [
    {
        path: '',
        component: _nota_page__WEBPACK_IMPORTED_MODULE_3__["NotaPage"]
    }
];
let NotaPageRoutingModule = class NotaPageRoutingModule {
};
NotaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotaPageRoutingModule);



/***/ }),

/***/ "gzNH":
/*!*************************************!*\
  !*** ./src/app/nota/nota.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titolo {\n  text-align: center;\n}\n\n.outer {\n  width: 100%;\n  text-align: center;\n}\n\n.inner {\n  display: inline-block;\n}\n\n.areaTesto {\n  height: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Im5vdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdG9sb3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3V0ZXIge1xuICB3aWR0aDoxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJlYVRlc3RvIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=nota-nota-module-es2015.js.map