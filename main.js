(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/intro.guard */ 10151);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 28245)).then(m => m.HomePageModule),
        canActivate: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_0__.IntroGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_database_service_ts-src_app_services_sendmail_service_ts"), __webpack_require__.e("src_app_pages_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 73603)).then(m => m.ContactPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 20654)).then(m => m.AboutPageModule)
    },
    {
        path: 'podcast',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts"), __webpack_require__.e("src_app_pages_podcast_podcast_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/podcast/podcast.module */ 14617)).then(m => m.PodcastPageModule)
    },
    {
        path: 'shows',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts"), __webpack_require__.e("src_app_pages_shows_shows_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shows/shows.module */ 29057)).then(m => m.ShowsPageModule)
    },
    {
        path: 'donate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_donate_donate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/donate/donate.module */ 67618)).then(m => m.DonatePageModule)
    },
    {
        path: 'shout-out',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_database_service_ts-src_app_services_sendmail_service_ts"), __webpack_require__.e("src_app_pages_shout-out_shout-out_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shout-out/shout-out.module */ 21960)).then(m => m.ShoutOutPageModule)
    },
    {
        path: 'demand',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_database_service_ts-src_app_services_sendmail_service_ts"), __webpack_require__.e("src_app_pages_demand_demand_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/demand/demand.module */ 94918)).then(m => m.DemandPageModule)
    },
    {
        path: 'radio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts"), __webpack_require__.e("src_app_pages_radio_radio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/radio/radio.module */ 11500)).then(m => m.RadioPageModule)
    },
    {
        path: 'inframe-radio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts"), __webpack_require__.e("src_app_pages_inframe-radio_inframe-radio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inframe-radio/inframe-radio.module */ 74393)).then(m => m.InframeRadioPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 27567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ 35609);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 86559);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ 51070);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/storage.service */ 99900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var _services_live_radio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/live-radio.service */ 11018);









// Changes made to run firebase auth on ios simulator







let AppComponent = class AppComponent {
    constructor(storage, StorageService, location, alertController, platform, toastController, radioService) {
        this.storage = storage;
        this.StorageService = StorageService;
        this.location = location;
        this.alertController = alertController;
        this.platform = platform;
        this.toastController = toastController;
        this.radioService = radioService;
        this.initializeApp();
        // Changes made to run firebase auth on ios simulator
        const appi = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebaseConfig);
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.isNativePlatform) {
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.initializeAuth)(appi, {
                persistence: firebase_auth__WEBPACK_IMPORTED_MODULE_7__.indexedDBLocalPersistence
            });
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                setTimeout(() => {
                    _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
                }, 3000);
                const startNetStatus = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.getStatus();
                let disconnected = false;
                if (!startNetStatus.connected || disconnected) {
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(20000).subscribe((func => {
                        // console.log('Internet Connection is disconnected :-(');
                        this.presentToast("Internet Connection is disconnected :-(", "You're offline, please check your internet connection!!!");
                    }));
                }
                _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.addListener('networkStatusChange', status => {
                    // console.log('Network status changed', status);
                    if (status.connected) {
                        if (!startNetStatus.connected || disconnected) {
                            disconnected = false;
                            // console.log('Internet Connection Restored!');
                            this.radioService.TesaRadio.load();
                            if ((this.location.isCurrentPathEqualTo('/radio') || this.location.isCurrentPathEqualTo('/inframe-radio')) && this.radioService.TesaRadio.readyState > 1) {
                                this.radioService.playRadio();
                            }
                            this.presentToast("Internet Connection Restored.", "Welcome back, you're now Online!");
                        }
                    }
                    if (!status.connected) {
                        disconnected = true;
                        console.log('Internet Connection is disconnected :-(');
                        this.presentToast("Internet Connection is disconnected :-(", "You're offline, please check your internet connection!!!");
                    }
                });
                // const logCurrentNetworkStatus = async () => {
                // const status = await Network.getStatus();
                // console.log('Network status:', status);
                // };
            }));
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
            yield this.storage.create();
            this.StorageService.removeItem("playing");
            this.StorageService.removeItem("outsidePodcast");
            this.StorageService.removeItem("outsideShow");
            this.StorageService.removeItem("outsideRadio");
        });
    }
    initializeApp() {
        // let lastBack = Date.now();
        this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            // console.log('Back press handler!');
            if (this.location.isCurrentPathEqualTo('/radio')) {
                // Show Exit Alert!
                this.exitAppConfirmation();
                processNextHandler();
            }
            else {
                // console.log('Navigate to back page');
                this.location.back();
            }
        });
        this.platform.backButton.subscribeWithPriority(5, () => {
            console.log('Handler called to force close!');
            this.alertController.getTop().then(r => {
                if (r) {
                    navigator['app'].exitApp();
                }
            }).catch(e => {
                console.log(e);
            });
        });
    }
    exitAppConfirmation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.alertController.create({
                // header: headerTitle,
                message: "Are you sure you want to close this App?",
                cssClass: 'alert-class',
                buttons: [{
                        text: "Cancel",
                        role: 'cancel',
                        handler: () => {
                            this.alertController.dismiss();
                        }
                    },
                    {
                        text: "Close",
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }]
            });
            loading.present();
        });
    }
    presentToast(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                duration: 10000,
                position: 'top', // position: 'top' | 'bottom' | 'middle',
            });
            toast.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.Storage },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: _services_live_radio_service__WEBPACK_IMPORTED_MODULE_9__.LiveRadioService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-root',
        template: _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat */ 20762);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 29774);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/storage */ 39202);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 43059);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/database */ 97606);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);








// Google Firebase Backend
// import { environment } from '../environments/environment';






// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';


let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            // Google Firebase Backend Compactible function
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuthModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabaseModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__.AngularFireStorageModule,
            // Google Firebase Backend latest version config
            // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            // provideFirestore(() => getFirestore()),
            // local storage
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot(),
        ],
        providers: [
            Storage,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 10151:
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroGuard": () => (/* binding */ IntroGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 99900);




let IntroGuard = class IntroGuard {
    constructor(router, localStore) {
        this.router = router;
        this.localStore = localStore;
    }
    canActivate(route, state) {
        // return true;
        return this.localStore.get("intro").then(res => {
            if (res) {
                this.router.navigateByUrl('/radio', { replaceUrl: true });
                return false;
            }
            else {
                return true;
            }
            ;
        }).catch(error => {
            return true;
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
IntroGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ 11018:
/*!************************************************!*\
  !*** ./src/app/services/live-radio.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveRadioService": () => (/* binding */ LiveRadioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 99900);






let LiveRadioService = class LiveRadioService {
    constructor(router, StorageService, toastController) {
        this.router = router;
        this.StorageService = StorageService;
        this.toastController = toastController;
        this.TesaRadio = new Audio("https://stream.zeno.fm/1z937nxzhchvv.aac?aw_0_req_lsid=abb8ff6579ff6846da042209e9f8cc8c&amp;cto-uid=82be2501-73c1-4d64-8cd6-d8e89c98334a-61c88d08-4e47&amp;bsw-uid=9a5e42dc-e03e-4a58-a899-f08b49a1fb02&amp;acu-uid=634703972344&amp;dyn-uid=03030002_61c88d5f77c87&amp;ttd-uid=b2fc98ed-cfd9-43fe-80b0-41390fd58d43&amp;an-uid=6052206826910576709&amp;mm-uid=3cbc61c8-8d0d-4700-a588-0e7c76352f48&amp;triton-uid=cookie%3A09ce438b-1c48-45c3-a2ed-9ea945b6806a&amp;adt-uid=cuid_5e8b5326-6662-11ec-afcb-1202f1c33782&amp;amb-uid=3382607208856530122&amp;aw-uid=abb8ff6579ff6846da042209e9f8cc8c&amp;dbm-uid=CAESEEXwF8Vm2hCiuyiCtEpt0vg");
        // TesaRadio = new Audio("https://stream.zeno.fm/td86cpxzhchvv.aac?aw_0_req_lsid=abb8ff6579ff6846da042209e9f8cc8c");
        // TesaRadio = new Audio("https://stream.zeno.fm/1z937nxzhchvv.aac");
        // TesaRadio = new Audio("https://stream.zeno.fm/1z937nxzhchvv");
        // TesaRadio = new Audio("http://stream.zeno.fm/td86cpxzhchvv"); //relay STREAM URL
        this.playing = false;
        this.TesaRadio.setAttribute("type", "audio/mpeg");
        // this.TesaRadio.load();
    }
    playRadio(timeout = false) {
        try {
            this.TesaRadio.play()
                .then(fufil => {
                document.getElementById("play-BTN").style.display = "none";
                document.getElementById("pause-BTN").style.display = "block";
                if (timeout) {
                    document.getElementById("wave").style.display = "none";
                }
                else {
                    document.getElementById("wave").style.display = "block";
                }
                this.TesaRadio.addEventListener("playing", () => {
                    document.getElementById("wave").style.display = "block";
                });
                this.playing = true;
                // add to storage that its playing;
                this.StorageService.store("playing", {
                    Status: "played",
                    PlayingMedia: "radio"
                });
            }, rej => {
                document.getElementById("play-BTN").style.display = "none";
                document.getElementById("pause-BTN").style.display = "block";
                if (timeout) {
                    document.getElementById("wave").style.display = "none";
                }
                else {
                    document.getElementById("wave").style.display = "block";
                }
                this.playing = false;
                if (!this.playing) {
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(10000).subscribe((func => {
                        this.TesaRadio.load();
                        this.presentToast("Unable to play Radio, Please check internet connection or reload the app!!!");
                    }));
                }
            })
                .catch(() => {
                this.presentToast("Unable to play Radio, Reloading the page in a bit, please wait...", 8000);
                setTimeout(() => {
                    window.location.reload();
                }, 10000);
            });
        }
        catch (error) {
            this.presentToast("Unable to play Radio, Reloading the page in a bit, please wait...", 8000);
            setTimeout(() => {
                window.location.reload();
            }, 10000);
        }
    }
    pauseRadio() {
        // var Radio = document.getElementById("playRadio");
        if (this.router.url === "/radio" || this.router.url === "/inframe-radio") {
            document.getElementById("play-BTN").style.display = "block";
            document.getElementById("pause-BTN").style.display = "none";
            document.getElementById("wave").style.display = "none";
        }
        else {
            this.StorageService.store("outsideRadio", {
                pauseFrmOutside: true,
                Status: "radio",
            });
        }
        this.TesaRadio.pause();
    }
    presentToast(message, duration = 5000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration,
                // position: 'top' | 'bottom' | 'middle',
            });
            toast.present();
        });
    }
};
LiveRadioService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
LiveRadioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LiveRadioService);



/***/ }),

/***/ 99900:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 17897);



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    store(storageKey, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const encryptedvalue = btoa(escape(JSON.stringify(value)));
            return yield this.storage.set(storageKey, encryptedvalue);
        });
    }
    get(storageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.storage.get(storageKey).then((value) => {
                    if (value == null) {
                        resolve(false);
                    }
                    else {
                        resolve(JSON.parse(unescape(atob(value))));
                    }
                });
            });
        });
    }
    removeItem(storageKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove(storageKey);
        });
    }
    clear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBeBWXaMG_MiRUkbCASIsr9xp_xatJchdM",
        authDomain: "tesa-radio.firebaseapp.com",
        projectId: "tesa-radio",
        storageBucket: "tesa-radio.appspot.com",
        messagingSenderId: "558985101546",
        appId: "1:558985101546:web:21b66917674f8228815793",
        measurementId: "G-J2TDMF6D1Y"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n\n  <ion-menu contentId=\"menu-content\" menuId=\"main-menu\" side=\"end\" type=\"overlay\">\n    <!-- <ion-header>\n      <ion-toolbar>\n        <ion-title>Awesome avocado menu</ion-title>\n      </ion-toolbar>\n    </ion-header> -->\n\n    <ion-content>\n\n      <div class=\"menu-content-header-bg\"></div>\n      <div class=\"menu-content-header-content\">\n        <img src=\"assets/icon/favicon.png\" alt=\"Tesa Radio\" srcset=\"\">\n        <ion-label>\n          <h1>Tesa <span style=\"color: black;\">Radio</span></h1>\n          <p>The TesPreneur Radio for Entrepreneurs</p>\n        </ion-label>\n      </div>\n\n      <div class=\"live-radio-BTN\">\n        <ion-menu-toggle class=\"ion-no-border\">\n          <ion-button mode=\"md\" routerLink=\"/radio\" class=\"ion-no-border\">\n            <ion-icon name=\"musical-notes-sharp\"></ion-icon>\n            Live Radio\n          </ion-button>\n        </ion-menu-toggle>\n      </div>\n\n      <ion-list lines=\"none\" class=\"menu-items\">\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/podcast\" [routerLinkActive]=\"['active']\">\n            <ion-icon slot=\"start\" name=\"radio\"></ion-icon>\n            <ion-label>PodCast</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/shows\" [routerLinkActive]=\"['active']\">\n            <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n            <ion-label>Shows</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/demand\" [routerLinkActive]=\"['active']\"> \n            <ion-icon slot=\"start\" name=\"mic\"></ion-icon>\n            <ion-label>Show on Demand</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/shout-out\" [routerLinkActive]=\"['active']\">\n            <ion-icon slot=\"start\" name=\"megaphone\"></ion-icon>\n            <ion-label>Shout out</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/about\" [routerLinkActive]=\"['active']\">\n            <ion-icon name=\"business\"></ion-icon>\n            <ion-label>About Us</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item [routerLinkActive]=\"['active']\" routerLink=\"/donate\">\n            <ion-icon name=\"heart-sharp\"></ion-icon>\n            <ion-label>Foundation Support</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/contact\" [routerLinkActive]=\"['active']\">\n            <ion-icon name=\"chatbubble-ellipses-sharp\"></ion-icon>\n            <ion-label>Contact Us</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n      </ion-list>\n\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content .menu-content-header-bg {\n  height: 180px;\n  width: 350px;\n  background: #de2341;\n  box-shadow: 0px 1px 10px #de234275;\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 15px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\nion-menu ion-content .menu-content-header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\nion-menu ion-content .menu-content-header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  margin-right: 5px;\n  background-color: #fff;\n}\nion-menu ion-content .menu-content-header-content h1 {\n  font-weight: 700;\n  color: #fff;\n}\nion-menu ion-content .menu-content-header-content p {\n  font-size: 12px;\n  color: #fff;\n  font-weight: 300;\n  letter-spacing: 0.4px;\n}\nion-menu ion-content .live-radio-BTN {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\nion-menu ion-content .live-radio-BTN ion-button {\n  text-transform: capitalize;\n  font-weight: 500;\n  --background: #de2341;\n  --border-radius: 7px;\n  --box-shadow: none;\n  --border-color: none;\n  --border: none;\n  outline: none;\n  --outline: none;\n}\nion-menu ion-content .live-radio-BTN ion-icon {\n  margin-right: 5px;\n}\nion-menu ion-content .menu-items {\n  margin: 0px;\n  background: transparent !important;\n  --background: transparent !important;\n}\nion-menu ion-content .menu-items ion-icon {\n  margin-right: 10px;\n  color: #86979f;\n}\nion-menu ion-content .menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n  --background: transparent !important;\n}\nion-menu ion-content .menu-items .active {\n  border-left: 5px solid;\n  color: #de2341;\n  padding-left: 15px;\n  background-color: #de234217 !important;\n}\nion-menu ion-content .menu-items .active ion-icon {\n  color: #de2341;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQUtRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHNCQUFBO0FBSmhCO0FBT1k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFMaEI7QUFRWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5oQjtBQVdRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUWjtBQVdZO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBVGhCO0FBV1k7RUFDSSxpQkFBQTtBQVRoQjtBQWFRO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7QUFYWjtBQWFZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBWGhCO0FBY1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFaaEI7QUFlWTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFiaEI7QUFlZ0I7RUFDSSxjQUFBO0FBYnBCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLW1lbnUge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLm1lbnUtY29udGVudC1oZWFkZXItYmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZTIzNDE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggI2RlMjM0Mjc1O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1jb250ZW50LWhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLXJhZGlvLUJUTiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2RlMjM0MTtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAtLW91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4Njk3OWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkZTIzNDE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZTIzNDIxNyAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RlMjM0MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map