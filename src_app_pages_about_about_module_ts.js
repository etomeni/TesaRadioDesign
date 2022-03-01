"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 2355:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 49570);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 20654:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 2355);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 49570);







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 49570:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.page.html */ 42221);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 27787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 42221:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <h1 style=\"margin: 0; padding-left: 10px;\">\n      <span style=\"color: #de2341;\">Tesa </span> <span style=\"color: white;\">Radio</span>\n    </h1>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\" style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n \n  <div class=\"content-header ion-text-center\">\n    <h1>About Us</h1>\n\n    <div class=\"divide-line\">____</div>\n  </div>\n\n  <ion-grid>\n    <ion-row style=\"color: white; text-align: center; margin-top: 30px;\">\n      <ion-col size=\"12\">\n        <div class=\"about-text\">\n          We are driven by outcomes, not by how much work we do. \n          This is why we never stop innovating and trying new things to \n          make sure we help businesses, brands and enterpreneurs grow their business.\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"our-story\" style=\"color: white; text-align: center;\">\n      <ion-col size=\"12\">\n        <h1 style=\"font-weight: bolder;\">Our <span style=\"color: #de2341;\">Story</span></h1>\n\n        <div>\n          We're a team of young <span style=\"font-weight: bolder;\">enterpreneurs</span>, devoted to \n          <span style=\"font-weight: bolder;\">inspire</span> and <span style=\"font-weight: bolder;\">motivate</span> other enterpreneurs\n          towards <span style=\"color: #de2341; font-weight: bolder;\">achiving goals</span>.\n          <br>\n          With a large community of <span style=\"font-weight: bolder;\"> over 1 million active followers and listerners</span>.\n          <br>\n        </div>\n\n        <div style=\"margin: 20px auto;\">\n          <ion-icon name=\"heart\" style=\"color: #de2341; font-size: 25px;\"></ion-icon>\n        </div>\n\n        <div class=\"\">\n          We <span style=\"color: #de2341; font-weight: bolder;\">Inspire </span> \n          <span style=\"font-weight: bolder;\"> \n            Ideas, Positivity, Greatness, Possibilities, Motivations, Productivity,\n          </span> and many more.\n        </div>\n        \n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 27787:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-footer ion-toolbar {\n  --background: transparent;\n}\n\nion-content {\n  font-family: lato;\n  --background:\n      linear-gradient(\n      rgba(0, 0, 0, 0.452),\n      #0000006c\n      ),\n      url(\"/assets/images/about.jpeg\")\n      no-repeat center center / cover;\n  --margin: 0;\n  --padding: 0;\n}\n\nion-content .content-header {\n  height: 180px;\n  background: #de23424d;\n  box-shadow: 0px 1px 10px #de234275;\n  padding-top: 30px;\n  color: white;\n}\n\nion-content .content-header .divide-line {\n  color: white;\n  font-weight: 500;\n  font-size: 30px;\n}\n\nion-content .our-story,\nion-content .about-text {\n  line-height: 30px;\n  font-size: x-large;\n}\n\nion-content .colorRed {\n  color: #de2341;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHlCQUFBO0FBRE47O0FBT0k7RUFDSSx5QkFBQTtBQUpSOztBQVFBO0VBQ0ksaUJBQUE7RUFFQTs7Ozs7O3FDQUFBO0VBVUEsV0FBQTtFQUNBLFlBQUE7QUFUSjs7QUFXSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVFI7O0FBV1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVFo7O0FBY0k7O0VBRUksaUJBQUE7RUFDQSxrQkFBQTtBQVpSOztBQTZESTtFQUNJLGNBQUE7QUEzRFIiLCJmaWxlIjoiYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG5cbiAgICAtLWJhY2tncm91bmQ6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1MiksIFxuICAgICAgICAjMDAwMDAwNmNcbiAgICAgICAgKSxcbiAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBlZ1wiKSBcbiAgICAgICAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICAvLyAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIC0tYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAtLW1hcmdpbjogMDtcbiAgICAtLXBhZGRpbmc6IDA7XG5cbiAgICAuY29udGVudC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGUyMzQyNGQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjZGUyMzQyNzU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgLmRpdmlkZS1saW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vdXItc3RvcnksXG4gICAgLmFib3V0LXRleHQge1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICAvLyAuY29udGVudC1oZWFkZXItYmcge1xuICAgIC8vICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIC8vICAgICAvLyB3aWR0aDogMzUwcHg7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICNkZTIzNDE7XG4gICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjZGUyMzQyNzU7XG4gICAgLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogLTEyMHB4O1xuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIC8vIH1cblxuICAgIC8vIC5jb250ZW50LWhlYWRlci1jb250ZW50IHtcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICB0b3A6IDMwcHg7XG4gICAgLy8gICAgIGxlZnQ6IDE1cHg7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyAgICAgaW1nIHtcbiAgICAvLyAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgIC8vICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgICAvLyAgICAgICAgIC8vIHBhZGRpbmc6IDVweDtcbiAgICAvLyAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGgxIHtcbiAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLy8gICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHAge1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgLy8gICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC8vICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG5cbiAgICAuY29sb3JSZWQge1xuICAgICAgICBjb2xvcjogI2RlMjM0MTtcbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map