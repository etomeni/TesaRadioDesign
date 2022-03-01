"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_database_service_ts-src_app_services_sendmail_service_ts"],{

/***/ 59567:
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendPost": () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ 17762);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ 69571);


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ }),

/***/ 95139:
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   "send": () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   "sendForm": () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ 39311);
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ 46361);
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ 28991);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,
});


/***/ }),

/***/ 39311:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 69571);

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};


/***/ }),

/***/ 46361:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 69571);
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ 98415);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 59567);



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.4.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ }),

/***/ 28991:
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendForm": () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 69571);
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ 98415);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 59567);



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.4.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ }),

/***/ 17762:
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailJSResponseStatus": () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ }),

/***/ 69571:
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ 98415:
/*!******************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateParams": () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }),

/***/ 60568:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/database */ 97606);



let DatabaseService = class DatabaseService {
    constructor(realtimeDB) {
        this.realtimeDB = realtimeDB;
    }
    // getMultipleDBdata(path: string): Observable<Note[]> {
    //   const notesRef = collection(this.firestore, path);
    //   return collectionData(notesRef) as Observable<Note[]>;
    // }
    // getDBdataById(path: string, id): Observable<Note> {
    //   const noteDocRef = doc(this.firestore, `notes/${id}`);
    //   return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
    // }
    // async getFirestore(path: string) {
    //   try {
    //     const querySnapshot = await getDocs(collection(this.firestore, path));
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   } catch (error) {
    //     return error;
    //     console.error("Error adding document: ", error);
    //   }
    // }
    // addToDB(path: string, data: any) {
    //   try {
    //     const collectionRef = collection(this.firestore, path);
    //     const docRef: any = addDoc(collectionRef, data);
    //     return docRef;
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (error) {
    //     return error;
    //     console.error("Error adding document: ", error);
    //   }
    // }
    // deleteDb(path: string) {
    //   try {
    //     const docRef = doc(this.firestore, path);
    //     return deleteDoc(docRef);
    //     // await deleteDoc(doc(this.firestore, "cities", "DC"));
    //   } catch (error) {
    //     return error;
    //     console.error("Error updating document: ", error);
    //   }
    // }
    // updateDB(path: string, dataObj: any) {
    //   try {
    //     const noteDocRef = doc(this.firestore, path);
    //     const updateDb = updateDoc(noteDocRef, dataObj);
    //     return updateDb;
    //   } catch (error) {
    //     return error;
    //     console.error("Error updating document: ", error);
    //   }
    // }
    // THE FOLLOWING IS FOR THE COMPACTIBLE REALTIME DATABASE
    getRealtimeDBdata(path) {
        let dbPath = this.realtimeDB.database.ref(path);
        return new Promise((resolve, reject) => {
            this.realtimeDB.object(dbPath).valueChanges().subscribe(res => resolve(res), error => reject(error));
        });
    }
    saveToRealtimeDataDB(path, objData) {
        // save in firebase real time database
        // this.realtimeDB.object(path).set(objData).then( () => {
        //   return "true";
        // }).catch( ()=> {
        //   return false;
        // });
        return new Promise((resolve, reject) => {
            this.realtimeDB.object(path).set(objData).then(res => resolve(true), error => reject(false));
        });
    }
    updateRealtimeDBdata(path, objData) {
        return new Promise((resolve, reject) => {
            this.realtimeDB.object(path).update(objData).then(res => resolve(true), error => reject(false));
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_0__.AngularFireDatabase }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 44398:
/*!**********************************************!*\
  !*** ./src/app/services/sendmail.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendmailService": () => (/* binding */ SendmailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ 95139);



(0,_emailjs_browser__WEBPACK_IMPORTED_MODULE_0__.init)("user_e5j0ADby5pqaU68JoC3Bs");
let SendmailService = class SendmailService {
    constructor() {
        this.User_ID = "user_e5j0ADby5pqaU68JoC3Bs";
        this.Access_Token = "583053cc99a5479647dcef2d0668e15c";
        this.Service_ID = "service_xq301p2";
        this.generalTemplate_ID = "template_cx9rbe9";
    }
    shoutout(param = {
        page: '',
        from_name: '',
        reply_to: '',
        from_phone_number: '',
        cat_resip_title: '',
        cat_resip: '',
        msg_descip_title: '',
        msg_descip: '',
        to_name: 'Team Tesa',
    }) {
        const Template_ID = "template_d5b9za8";
        return new Promise((resolve, reject) => {
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(this.Service_ID, Template_ID, param, this.User_ID)
                .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                let res = {
                    status: true,
                    res: response
                };
                // return res;
                return resolve(res);
            }, function (error) {
                console.log('FAILED...', error);
                let res = {
                    status: false,
                    res: error
                };
                // return res;
                return reject(res);
            });
        });
    }
    demandShows(param = {
        page: '',
        from_name: '',
        reply_to: '',
        from_phone_number: '',
        cat_resip_title: '',
        cat_resip: '',
        msg_descip_title: '',
        msg_descip: '',
        to_name: 'Team Tesa',
    }) {
        const Template_ID = "template_d5b9za8";
        return new Promise((resolve, reject) => {
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(this.Service_ID, Template_ID, param, this.User_ID)
                .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                let res = {
                    status: true,
                    res: response
                };
                // return res;
                return resolve(res);
            }, function (error) {
                console.log('FAILED...', error);
                let res = {
                    status: false,
                    res: error
                };
                // return res;
                return reject(res);
            });
        });
    }
    contactUs(param = {
        subject: '',
        from_name: '',
        reply_to: '',
        from_phone_number: '',
        before_msg: '',
        message: '',
        after_msg: '',
        to_name: 'Team Tesa'
    }) {
        return new Promise((resolve, reject) => {
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(this.Service_ID, this.generalTemplate_ID, param, this.User_ID)
                .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                let res = {
                    status: true,
                    res: response
                };
                // return res;
                return resolve(res);
            }, function (error) {
                console.log('FAILED...', error);
                let res = {
                    status: false,
                    res: error
                };
                // return res;
                return reject(res);
            });
        });
    }
};
SendmailService.ctorParameters = () => [];
SendmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SendmailService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_database_service_ts-src_app_services_sendmail_service_ts.js.map