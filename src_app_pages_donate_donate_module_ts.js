"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_donate_donate_module_ts"],{

/***/ 57693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule
        ],
        exports: [],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 13304:
/*!*******************************************************!*\
  !*** ./src/app/pages/donate/donate-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageRoutingModule": () => (/* binding */ DonatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.page */ 73224);




const routes = [
    {
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_0__.DonatePage
    }
];
let DonatePageRoutingModule = class DonatePageRoutingModule {
};
DonatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonatePageRoutingModule);



/***/ }),

/***/ 67618:
/*!***********************************************!*\
  !*** ./src/app/pages/donate/donate.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageModule": () => (/* binding */ DonatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate-routing.module */ 13304);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.page */ 73224);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 57693);








let DonatePageModule = class DonatePageModule {
};
DonatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _donate_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonatePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_1__.DonatePage]
    })
], DonatePageModule);



/***/ }),

/***/ 73224:
/*!*********************************************!*\
  !*** ./src/app/pages/donate/donate.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePage": () => (/* binding */ DonatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./donate.page.html */ 73910);
/* harmony import */ var _donate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.page.scss */ 85956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DonatePage = class DonatePage {
    constructor() { }
    ngOnInit() {
    }
};
DonatePage.ctorParameters = () => [];
DonatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-donate',
        template: _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_donate_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_donate_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DonatePage);



/***/ }),

/***/ 73910:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/donate/donate.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <h1 style=\"margin: 0; padding-left: 10px;\">\n      <span style=\"color: #de2341;\">Tesa </span> <span style=\"color: white;\">Radio</span>\n    </h1>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\" style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid class=\"wrapper-outter\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"yCenter\">\n        <div class=\"wrapper-inner\">\n          <p style=\"line-height: 25px;\">\n            <span style=\"font-size: 20px; font-weight: bolder;\">Tesa <span style=\"color: #de2341;\">Radio</span> </span> \n            is brought to you with the help and support of <span style=\"color: #de2341; font-weight: bolder;\">Tespreneur </span> <span style=\"color: #fff; font-weight: bolder;\"> Foundation</span>.\n            <br>\n            If you love what we do and wish to support it, please donate so it can get to more people.\n          </p>\n\n          <div class=\"ion-text-center\">\n            <h3>Send your Support/Donation to:</h3>\n\n            <h1 style=\"margin-bottom: 0;\">1211949573</h1>\n            <h1 style=\"margin: 0; color: #de2341;\">Zenith Bank</h1>\n            <h1 style=\"margin-top: 0;\">Tesa Media</h1>\n          </div>\n\n          <!-- <div>\n            <div style=\"font-size: larger; font-weight: 700; margin-bottom: 10px;\">Enter Amount to donate <ion-text color=\"danger\">*</ion-text></div>\n            <input type=\"number\" name=\"amount\" id=\"addFundsAmount\" placeholder=\"Minimum donate amount {{minimumAmount}}\">\n            <div class=\"error\" *ngIf=\"addFundsAmountErrorStatus\"> Minimum amount must be above {{minimumAmount}} </div>\n          </div> -->\n\n        <ion-list>\n\n          <div style=\"background-color: #de2342af; color: white; text-align: center; border-radius: 10px;\">\n            <p style=\"padding-top: 15px; padding-bottom: 15px;\">\n              Thanks for your support to the Tespreneur Foundation!\n              <br>\n              Together we can change the world!!!\n            </p>\n          </div>\n\n          <div>\n            <a href=\"https://www.instagram.com/TesPreneurFoundation/\"\n            style=\"text-decoration: none; color: #fff; font-weight: bold;\"\n            >@TesPreneurFoundation</a>\n          </div>\n         \n          <!-- <ion-item lines=\"none\" (click)=\"flutterwaveBTN()\">\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/images/flutterwave.jpg\">\n            </ion-avatar>\n            <ion-label>Donate through <span style=\"color: #de2341; font-size: larger; font-weight: bolder;\">FlutterWave</span> </ion-label>\n          </ion-item> -->\n\n          <!-- <ion-item lines=\"none\" (click)=\"paystackBTN()\">\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/images/paystack.png\">\n            </ion-avatar>\n            <ion-label>Donate through <span style=\"color: #de2341; font-size: larger; font-weight: bolder;\">Paystack </span> </ion-label>\n          </ion-item> -->\n\n        </ion-list>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 85956:
/*!***********************************************!*\
  !*** ./src/app/pages/donate/donate.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --background: transparent !important;\n}\nion-header ion-toolbar {\n  --background: transparent !important;\n}\nion-footer {\n  --background: transparent !important;\n}\nion-footer ion-toolbar {\n  --background: transparent !important;\n}\nion-content {\n  --background:\n      linear-gradient(\n      rgba(0, 0, 0, 0.452),\n      #0000006c\n      ),\n      url(\"/assets/images/donate.jpg\")\n      no-repeat center center / cover;\n  --margin: 0;\n  --padding: 0;\n}\nion-content ion-grid.wrapper-outter,\nion-content ion-grid.wrapper-outter ion-row {\n  text-align: center;\n  height: 100%;\n}\nion-content .yCenter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content .wrapper-inner {\n  margin: auto;\n  color: white;\n}\nion-content ion-list {\n  background: transparent;\n}\nion-content ion-list ion-item {\n  margin-bottom: 10px;\n  --background: transparent;\n  --color: white;\n  font-weight: bold;\n}\nion-content ion-list ion-item ion-avatar {\n  margin-right: 10px;\n}\nion-content #addFundsAmount {\n  width: 95%;\n  padding: 10px 15px;\n  margin-bottom: 20px;\n}\nion-content .error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQ0FBQTtBQUFKO0FBQ0k7RUFDRSxvQ0FBQTtBQUNOO0FBR0E7RUFDSSxvQ0FBQTtBQUFKO0FBQ0k7RUFDSSxvQ0FBQTtBQUNSO0FBR0E7RUFDSTs7Ozs7O3FDQUFBO0VBVUEsV0FBQTtFQUNBLFlBQUE7QUFISjtBQUtJOztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpSO0FBT0k7RUFFSSxZQUFBO0VBQ0EsWUFBQTtBQU5SO0FBY0k7RUFDSSx1QkFBQTtBQVpSO0FBZUk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBYlI7QUFlSTtFQUNJLGtCQUFBO0FBYlI7QUFpQkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWZSO0FBaUJJO0VBQ0ksVUFBQTtBQWZSIiwiZmlsZSI6ImRvbmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC40NTIpLCBcbiAgICAgICAgIzAwMDAwMDZjXG4gICAgICAgICksXG4gICAgICAgIHVybChcIi9hc3NldHMvaW1hZ2VzL2RvbmF0ZS5qcGdcIikgXG4gICAgICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgLS1tYXJnaW46IDA7XG4gICAgLS1wYWRkaW5nOiAwO1xuXG4gICAgaW9uLWdyaWQud3JhcHBlci1vdXR0ZXIsXG4gICAgaW9uLWdyaWQud3JhcHBlci1vdXR0ZXIgaW9uLXJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC55Q2VudGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLndyYXBwZXItaW5uZXIge1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG5cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgICNhZGRGdW5kc0Ftb3VudCB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_donate_donate_module_ts.js.map