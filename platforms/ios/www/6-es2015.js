(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "hH1s":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e23c3ffd.js */ "+9FH");
/* harmony import */ var _ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-fbc9a2ac.js */ "ntsc");
/* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "KwJk");




const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

const Avatar = class {
    constructor(hostRef) {
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
Avatar.style = {
    /*STENCIL:MODE:ios*/ ios: avatarIosCss,
    /*STENCIL:MODE:md*/ md: avatarMdCss
};

const badgeIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}";

const badgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";

const Badge = class {
    constructor(hostRef) {
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
Badge.style = {
    /*STENCIL:MODE:ios*/ ios: badgeIosCss,
    /*STENCIL:MODE:md*/ md: badgeMdCss
};

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
    constructor(hostRef) {
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_fbc9a2ac_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
Thumbnail.style = thumbnailCss;




/***/ })

}]);
//# sourceMappingURL=6-es2015.js.map