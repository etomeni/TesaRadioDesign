"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_shows_shows_module_ts"],{

/***/ 68294:
/*!*****************************************************!*\
  !*** ./src/app/pages/shows/shows-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsPageRoutingModule": () => (/* binding */ ShowsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shows_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows.page */ 29872);




const routes = [
    {
        path: '',
        component: _shows_page__WEBPACK_IMPORTED_MODULE_0__.ShowsPage
    }
];
let ShowsPageRoutingModule = class ShowsPageRoutingModule {
};
ShowsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowsPageRoutingModule);



/***/ }),

/***/ 29057:
/*!*********************************************!*\
  !*** ./src/app/pages/shows/shows.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsPageModule": () => (/* binding */ ShowsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shows_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows-routing.module */ 68294);
/* harmony import */ var _shows_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows.page */ 29872);







let ShowsPageModule = class ShowsPageModule {
};
ShowsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _shows_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowsPageRoutingModule
        ],
        declarations: [_shows_page__WEBPACK_IMPORTED_MODULE_1__.ShowsPage]
    })
], ShowsPageModule);



/***/ }),

/***/ 29872:
/*!*******************************************!*\
  !*** ./src/app/pages/shows/shows.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsPage": () => (/* binding */ ShowsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shows_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shows.page.html */ 32933);
/* harmony import */ var _shows_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows.page.scss */ 56563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var src_app_services_live_radio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/live-radio.service */ 11018);
/* harmony import */ var src_app_services_podcast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/podcast.service */ 76739);
/* harmony import */ var src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shows.service */ 49517);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ 99900);










let ShowsPage = class ShowsPage {
    constructor(router, PodcastService, StorageService, radioService, ShowsService) {
        this.router = router;
        this.PodcastService = PodcastService;
        this.StorageService = StorageService;
        this.radioService = radioService;
        this.ShowsService = ShowsService;
        this.playingID = null;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(500).subscribe((func => {
            if (this.shows == null) {
                this.shows = this.ShowsService.shows;
                this.playingID = this.ShowsService.playingID;
            }
            ;
            this.localStorage();
            this.StorageService.get("outsideShow").then(res => {
                let response = res;
                if (response.pauseFrmOutside && response.Status == "show") {
                    this.pause(response.showsID);
                    this.StorageService.removeItem("outsideShow");
                }
            });
        }));
    }
    play(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let playingRes = yield this.StorageService.get("playing");
            if (playingRes.Status == "played" && playingRes.PlayingMedia == "radio") {
                this.radioService.pauseRadio();
                this.playFunc(id);
            }
            else if (playingRes.Status == "played" && playingRes.PlayingMedia == "podcast") {
                this.PodcastService.pause(playingRes.podcastsID);
                this.playFunc(id);
            }
            else {
                this.playFunc(id);
            }
        });
    }
    pause(id) {
        this.StorageService.get("playing").then(res => {
            let response = res;
            if (response.PlayingMedia == "show" && response.Status == "played") {
                this.StorageService.removeItem("playing");
            }
        });
        this.playingID = id;
        this.ShowsService.pause(id);
    }
    localStorage() {
        if (this.router.url === "/shows") {
            this.StorageService.get("playing").then(res => {
                let response = res;
                if (response.PlayingMedia == "show" && response.Status == "played") {
                    document.getElementById('sPlayBTN' + response.showsID).style.display = "none";
                    document.getElementById('sPauseBTN' + response.showsID).style.display = "inline";
                    document.getElementById('sWave' + response.showsID).style.display = "inline";
                }
            });
        }
    }
    playFunc(id) {
        // if(this.ShowsService.shows[id].audio.readyState > 0) {
        this.ShowsService.play(id);
        this.playingID = id;
        // }
    }
    doRefresh(event) {
        window.location.reload();
        setTimeout(() => {
            // console.log('Async operation has ended');
            // this.loadingService.alertMessage("Please check Your internet connection", "no internet connection")
            event.target.complete();
        }, 500);
    }
};
ShowsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_podcast_service__WEBPACK_IMPORTED_MODULE_3__.PodcastService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: src_app_services_live_radio_service__WEBPACK_IMPORTED_MODULE_2__.LiveRadioService },
    { type: src_app_services_shows_service__WEBPACK_IMPORTED_MODULE_4__.ShowsService }
];
ShowsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-shows',
        template: _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shows_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shows_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowsPage);



/***/ }),

/***/ 32933:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/shows/shows.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>shoutOut</ion-title> -->\n    <h1 style=\"margin: 0; padding-left: 10px;\">\n      <span style=\"color: #de2341;\">Tesa </span> <span style=\"color: white;\">Radio</span>\n    </h1>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\" style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- Do ReFresh -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <ion-row>\n      \n      <ion-col \n        size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\"\n        *ngFor =\"let show of shows; let i=index\"\n      >\n        <ion-card style=\"background: rgba(255, 255, 255, 0.589);\">\n          <img src=\"{{show.showImg}}\" alt=\"Podcast Title\" height=\"150px\" width=\"100%\">\n          <ion-card-header>\n            <ion-card-title>\n              {{ show.showTitle }}\n            </ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content style=\"color: black;\">\n            {{ show.showDescription }}\n\n            <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"--background: transparent;\">\n              <ion-button fill=\"outline\" mode=\"md\" slot=\"start\" style=\"padding: -15px; color: #de2341; --border-color: #ffffff;\">\n                <ion-label [id]=\"'sPlayBTN'+i\" (click)=\"play(i)\">\n                  <ion-icon slot=\"start\" name=\"play\"></ion-icon>\n                  Play\n                </ion-label>\n\n                <ion-label [id]=\"'sPauseBTN'+i\" style=\"display: none;\" (click)=\"pause(i)\">\n                  <ion-icon slot=\"start\" name=\"pause\"></ion-icon>\n                  Pause\n                </ion-label>\n              </ion-button>\n\n              <ion-grid [id]=\"'sWave'+i\" style=\"display: none;\">\n                <ion-row>\n                  <ion-col style=\"display: flex; justify-content: center;\">\n\n                    <span class=\"playing\">\n                      <span class=\"playing__bar playing__bar1\"></span>\n                      <span class=\"playing__bar playing__bar2\"></span>\n                      <span class=\"playing__bar playing__bar3\"></span>\n                    </span>\n                    <span class=\"playing\" style=\"padding: 0 .3rem;\">\n                        <span class=\"playing__bar playing__bar1\"></span>\n                        <span class=\"playing__bar playing__bar2\"></span>\n                        <span class=\"playing__bar playing__bar3\"></span>\n                    </span>\n                    <span class=\"playing\">\n                        <span class=\"playing__bar playing__bar1\"></span>\n                        <span class=\"playing__bar playing__bar2\"></span>\n                        <span class=\"playing__bar playing__bar3\"></span>\n                    </span>\n\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 56563:
/*!*********************************************!*\
  !*** ./src/app/pages/shows/shows.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-footer ion-toolbar {\n  --background: transparent;\n}\n\nion-content {\n  --background:\n      linear-gradient(\n      rgba(0, 0, 0, 0.452),\n      #0000006c\n      ),\n      url(\"/assets/images/shows.jpg\")\n      no-repeat center center / cover;\n  --margin: 0;\n  --padding: 0;\n}\n\n.playing {\n  background: transparent;\n  width: 4rem;\n  height: 1.5rem;\n  border-radius: 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  /* padding: .5rem; */\n  box-sizing: border-box;\n}\n\n.playing__bar {\n  display: inline-block;\n  background: #de2341;\n  width: 30%;\n  height: 100%;\n  animation: up-and-down 1.3s ease infinite alternate;\n}\n\n.playing__bar1 {\n  height: 60%;\n}\n\n.playing__bar2 {\n  height: 30%;\n  animation-delay: -2.2s;\n}\n\n.playing__bar3 {\n  height: 75%;\n  animation-delay: -3.7s;\n}\n\n@keyframes up-and-down {\n  10% {\n    height: 30%;\n  }\n  30% {\n    height: 100%;\n  }\n  60% {\n    height: 50%;\n  }\n  80% {\n    height: 75%;\n  }\n  100% {\n    height: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLHlCQUFBO0FBRk47O0FBUUk7RUFDSSx5QkFBQTtBQUxSOztBQVNBO0VBQ0k7Ozs7OztxQ0FBQTtFQVVBLFdBQUE7RUFDQSxZQUFBO0FBVEo7O0FBeUJBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBdEJKOztBQXlCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0FBdEJKOztBQXlCQTtFQUNJLFdBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBdEJKOztBQXlCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQXRCSjs7QUF5QkE7RUFDSTtJQUNJLFdBQUE7RUF0Qk47RUF5QkU7SUFDSSxZQUFBO0VBdkJOO0VBMEJFO0lBQ0ksV0FBQTtFQXhCTjtFQTJCRTtJQUNJLFdBQUE7RUF6Qk47RUE0QkU7SUFDSSxXQUFBO0VBMUJOO0FBQ0YiLCJmaWxlIjoic2hvd3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1MiksIFxuICAgICAgICAjMDAwMDAwNmNcbiAgICAgICAgKSxcbiAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvc2hvd3MuanBnXCIpIFxuICAgICAgICBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgIC8vIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIC0tbWFyZ2luOiAwO1xuICAgIC0tcGFkZGluZzogMDtcblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4ucGxheWluZyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIC8qIHBhZGRpbmc6IC41cmVtOyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4gIFxuLnBsYXlpbmdfX2JhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNkZTIzNDE7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiB1cC1hbmQtZG93biAxLjNzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuICBcbi5wbGF5aW5nX19iYXIxIHtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cbiAgXG4ucGxheWluZ19fYmFyMiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMi4ycztcbn1cbiAgXG4ucGxheWluZ19fYmFyMyB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMy43cztcbn1cbiAgXG5Aa2V5ZnJhbWVzIHVwLWFuZC1kb3duIHtcbiAgICAxMCUge1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICB9XG4gIFxuICAgIDMwJSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgIH1cbiAgXG4gICAgODAlIHtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shows_shows_module_ts.js.map