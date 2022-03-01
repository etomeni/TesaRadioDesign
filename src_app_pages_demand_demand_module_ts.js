"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_demand_demand_module_ts"],{

/***/ 73435:
/*!*******************************************************!*\
  !*** ./src/app/pages/demand/demand-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandPageRoutingModule": () => (/* binding */ DemandPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _demand_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demand.page */ 10909);




const routes = [
    {
        path: '',
        component: _demand_page__WEBPACK_IMPORTED_MODULE_0__.DemandPage
    }
];
let DemandPageRoutingModule = class DemandPageRoutingModule {
};
DemandPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DemandPageRoutingModule);



/***/ }),

/***/ 94918:
/*!***********************************************!*\
  !*** ./src/app/pages/demand/demand.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandPageModule": () => (/* binding */ DemandPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _demand_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demand-routing.module */ 73435);
/* harmony import */ var _demand_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demand.page */ 10909);







let DemandPageModule = class DemandPageModule {
};
DemandPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _demand_routing_module__WEBPACK_IMPORTED_MODULE_0__.DemandPageRoutingModule
        ],
        declarations: [_demand_page__WEBPACK_IMPORTED_MODULE_1__.DemandPage]
    })
], DemandPageModule);



/***/ }),

/***/ 10909:
/*!*********************************************!*\
  !*** ./src/app/pages/demand/demand.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemandPage": () => (/* binding */ DemandPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_demand_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./demand.page.html */ 46750);
/* harmony import */ var _demand_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demand.page.scss */ 57795);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 60568);
/* harmony import */ var src_app_services_sendmail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sendmail.service */ 44398);





// import { AngularFireDatabase } from '@angular/fire/compat/database';




// import { StorageService } from 'src/app/services/storage.service';
let DemandPage = class DemandPage {
    constructor(formBuilder, alertController, http, 
    // services here
    // private StoreService: StorageService,
    firebaseDataBase, sendmailService) {
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.http = http;
        this.firebaseDataBase = firebaseDataBase;
        this.sendmailService = sendmailService;
        this.submitted = false;
        this.sent = false;
    }
    ngOnInit() {
        this.demandForm = this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
                ]],
            category: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9+]+$'),
                ]],
            message: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)
                ]]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.demandForm.valid) {
            try {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;
                // save in firebase real time database
                let demandFormPath = "Demand Show/" + dateTime;
                let demandFormData = {
                    name: this.demandForm.value.name,
                    category: this.demandForm.value.category,
                    phoneNumber: this.demandForm.value.phoneNumber,
                    Message: this.demandForm.value.message,
                    date: date,
                    time: time,
                };
                let mailJSparam = {
                    page: "Demand for Show",
                    from_name: this.demandForm.value.name,
                    reply_to: this.demandForm.value.email,
                    from_phone_number: this.demandForm.value.phoneNumber,
                    cat_resip_title: '',
                    cat_resip: this.demandForm.value.category,
                    // msg_descip_title: 'Shout out to <br> ',
                    msg_descip_title: '',
                    msg_descip: this.demandForm.value.message,
                    to_name: "Team Tesa"
                };
                this.firebaseDataBase.saveToRealtimeDataDB(demandFormPath, demandFormData).then(() => {
                    this.sent = true;
                    this.sendmailService.demandShows(mailJSparam).then(res => {
                        this.presentAlert("Show Demand Request sent successfully!!!");
                    }, rejects => {
                        this.presentAlert("Ooops, unable to deliver request message");
                    }).catch(() => {
                        this.presentAlert("Ooops, unable to deliver request message");
                    });
                    // this.sendMail(this.demandForm.value);
                    this.submitted = false;
                }).catch(err => {
                    this.presentAlert("An error ocurred while sending the request");
                    this.submitted = false;
                    console.log(err);
                });
            }
            catch (error) {
                this.presentAlert("Ooops, an error just Orcured, please check your connection and try again.");
                this.submitted = false;
                console.log(error);
            }
        }
    }
    sendMail(demandFormData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let message = "Hello Team TESA, <br><b>" + demandFormData.name + "</b> just contacted us with this message below <br><br>" +
                demandFormData.message + "<br><br> Please do well to attend to it on time. <br><br> Thanks. <br> Team TESA";
            let postParam = JSON.stringify({
                receiverEmail: "Sundaywht@gmail.com",
                appName: "Tesa Radio App",
                subject: "Clients's Feedback From " + demandFormData.name,
                userName: demandFormData.name,
                userEmail: demandFormData.email,
                message: demandFormData.message
            });
            // const link = 'http://127.0.0.1/sendMailwithIonic/sendMail.php';
            const link = 'https://audiomackstream.com/sendMailwithIonic/sendMail.php';
            let response = this.http.post(link, postParam).subscribe(res => {
                console.log(res);
            });
        });
    }
    presentAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-class',
                // subHeader: message,
                // header: message,
                message: message,
                // buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
DemandPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: src_app_services_sendmail_service__WEBPACK_IMPORTED_MODULE_3__.SendmailService }
];
DemandPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-demand',
        template: _Users_user_Public_Ionic_Tesa_Radio_App_node_modules_ngtools_webpack_src_loaders_direct_resource_js_demand_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_demand_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DemandPage);



/***/ }),

/***/ 46750:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/demand/demand.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>shoutOut</ion-title> -->\n    <h1 style=\"margin: 0; padding-left: 10px;\">\n      <span style=\"color: #de2341;\">Tesa </span> <span style=\"color: white;\">Radio</span>\n    </h1>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\" style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid class=\"wrapper-outter\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"yCenter\">\n        <div class=\"wrapper-inner\">\n          \n          <div>\n            <h2 style=\"padding: 7px;\"> <span style=\"color: #de2341;\"> Demand </span> for a show!</h2>\n\n              <form [formGroup]=\"demandForm\" (ngSubmit)=\"onSubmit()\">\n                <div data-info=\"name input\">\n                  <ion-item lines=\"none\" style=\"border-radius: 10px 10px 0 0;\">\n                    <ion-label position=\"floating\">Full Name(s) <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required minlength=\"3\" formControlName=\"name\" autocomplete=\"name\" type=\"text\"></ion-input>\n                  </ion-item>\n      \n                  <span class=\"error ion-padding\" \n                    *ngIf=\"demandForm.get('name').touched && demandForm.get('name').dirty && demandForm.get('name').invalid\"\n                  >\n                    <span class=\"error ion-padding\" *ngIf=\"demandForm.get('name').errors?.required\">\n                      Please Enter your name\n                    </span>\n                    <span class=\"error ion-padding\" *ngIf=\"demandForm.get('name').errors?.minlength\">\n                      Name characters should be more than 3 characters.\n                    </span>\n                  </span>\n                </div>\n\n                <div data-info=\"email input\">\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"floating\">E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required minlength=\"5\" formControlName=\"email\" type=\"email\" autocomplete=\"email\"></ion-input>\n                  </ion-item>\n\n                  <span class=\"error ion-padding\" \n                    *ngIf=\"demandForm.get('email').touched && demandForm.get('email').dirty && demandForm.get('email').invalid\"\n                  >\n                    <span class=\"error ion-padding\" *ngIf=\"demandForm.get('email').errors?.required\">\n                      Please Enter your Email address.\n                    </span>\n                    <span class=\"error ion-padding\" *ngIf=\"demandForm.get('email').errors?.pattern || demandForm.get('email').errors?.email\">\n                      Incorrect Email address.\n                    </span>\n                  </span>\n                </div>\n                \n                <div data-info=\"Phone-Number input\">\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"floating\">Phone Number <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required minlength=\"10\" formControlName=\"phoneNumber\" type=\"tel\" autocomplete=\"tel\"></ion-input>\n                  </ion-item>\n\n                  <span class=\"error ion-padding\" \n                    *ngIf=\"demandForm.get('phoneNumber').touched && demandForm.get('phoneNumber').dirty && demandForm.get('phoneNumber').invalid\"\n                  >\n                    <span class=\"error\" *ngIf=\"demandForm.get('phoneNumber').errors?.required;\">\n                      Please Enter your Phone Number.\n                    </span>\n                    <span class=\"error\" *ngIf=\"demandForm.get('phoneNumber').errors?.pattern || demandForm.get('phoneNumber').errors?.minlength;\">\n                      Phone Number not correct.\n                    </span>\n                  </span>\n                </div>\n\n                <div data-info=\"Show-Category input\">\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"floating\">Show Category or tag <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required minlength=\"5\" formControlName=\"category\" type=\"text\"></ion-input>\n                  </ion-item>\n\n                  <span class=\"error ion-padding\" \n                    *ngIf=\"demandForm.get('category').touched && demandForm.get('category').dirty && demandForm.get('category').invalid\"\n                  >\n                    <span class=\"error\" *ngIf=\"demandForm.get('category').errors?.required;\">\n                      Please Enter a category or tag for the show.\n                    </span>\n                    <span class=\"error\" *ngIf=\"demandForm.get('category').errors?.minlength;\">\n                      The category or tag for the show must be more than 5 characters.\n                    </span>\n                  </span>\n                </div>\n                \n                <div data-info=\"Message input\">\n                  <ion-item lines=\"none\" style=\"border-radius: 0 0 10px 10px;\">\n                    <ion-label position=\"floating\">Show Description <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-textarea formControlName=\"message\" class=\"messageText\" required minlength=\"10\" placeholder=\"Please give detail description of the show...\"></ion-textarea>\n                  </ion-item>\n\n                  <span class=\"error ion-padding\" \n                    *ngIf=\"demandForm.get('message').touched && demandForm.get('message').dirty && demandForm.get('message').invalid\"\n                  >\n                    <span class=\"error\" *ngIf=\"demandForm.get('message').errors?.required;\">\n                      Please Enter Full Description of the Show.\n                    </span>\n                    <span class=\"error\" *ngIf=\"demandForm.get('message').errors?.minlength;\">\n                      Your description is too short, please drop a comprehensive description of the Show.\n                    </span>\n                  </span>\n                </div>\n\n                <div *ngIf=\"sent\" style=\"background-color: #de2341; color: white; text-align: center; border-radius: 10px;\">\n                  <p style=\"padding-top: 15px; padding-bottom: 15px;\">\n                    Show Demand Request sent successfully!!!\n                  </p>\n                </div>\n\n                <ion-button block type=\"submit\" [disabled]=\"demandForm.invalid\" mode=\"md\" style=\"--background: #de2341;\">\n                  Send Demand <i *ngIf=\"submitted\" class=\"loader\"></i>\n                </ion-button>\n              </form>\n          </div>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 57795:
/*!***********************************************!*\
  !*** ./src/app/pages/demand/demand.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --background: transparent;\n}\nion-header ion-toolbar {\n  --background: transparent;\n}\nion-footer {\n  --background: transparent;\n}\nion-footer ion-toolbar {\n  --background: transparent;\n}\nion-content {\n  --background:\n      linear-gradient(\n      rgba(0, 0, 0, 0.452),\n      #0000006c\n      ),\n      url(\"/assets/images/demand.jpeg\")\n      no-repeat center center / cover;\n  --margin: 0;\n  --padding: 0;\n}\nion-content ion-grid.wrapper-outter,\nion-content ion-grid.wrapper-outter ion-row {\n  text-align: center;\n  height: 100%;\n}\nion-content .yCenter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content .wrapper-inner {\n  width: 100%;\n  margin: auto;\n  color: white;\n}\nion-content form ion-item {\n  --background: rgba(255, 255, 255, 0.568);\n}\nion-content .error {\n  color: #de2341;\n  font-size: small;\n}\nion-content .loader {\n  border: 16px solid #f3f3f3;\n  /* Light grey */\n  border-top: 16px solid #de2341;\n  /* Blue */\n  border-bottom: 16px solid #de2341;\n  /* Blue */\n  border-radius: 50%;\n  animation: spin 0.3s linear infinite;\n  margin-left: 10px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbWFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtBQUFKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBQ0k7RUFDSSx5QkFBQTtBQUNSO0FBR0E7RUFDSTs7Ozs7O3FDQUFBO0VBVUEsV0FBQTtFQUNBLFlBQUE7QUFISjtBQUtJOztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpSO0FBT0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMUjtBQVdJO0VBQ0ksd0NBQUE7QUFUUjtBQVdJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBVFI7QUFlSTtFQUNJLDBCQUFBO0VBQTRCLGVBQUE7RUFDNUIsOEJBQUE7RUFBZ0MsU0FBQTtFQUNoQyxpQ0FBQTtFQUFtQyxTQUFBO0VBQ25DLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQVZSO0FBYUk7RUFDSTtJQUFLLHVCQUFBO0VBVlg7RUFXTTtJQUFPLHlCQUFBO0VBUmI7QUFDRiIsImZpbGUiOiJkZW1hbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQ1MiksIFxuICAgICAgICAjMDAwMDAwNmNcbiAgICAgICAgKSxcbiAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZGVtYW5kLmpwZWdcIikgXG4gICAgICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgLS1tYXJnaW46IDA7XG4gICAgLS1wYWRkaW5nOiAwO1xuXG4gICAgaW9uLWdyaWQud3JhcHBlci1vdXR0ZXIsXG4gICAgaW9uLWdyaWQud3JhcHBlci1vdXR0ZXIgaW9uLXJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC55Q2VudGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLndyYXBwZXItaW5uZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG4gICAgZm9ybSBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2OCk7XG4gICAgfVxuICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiAjZGUyMzQxO1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cblxuXG5cblxuICAgIC5sb2FkZXIge1xuICAgICAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICNkZTIzNDE7IC8qIEJsdWUgKi9cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCAjZGUyMzQxOyAvKiBCbHVlICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDAuM3MgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuICAgIFxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_demand_demand_module_ts.js.map