"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts"],{

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

/***/ 76739:
/*!*********************************************!*\
  !*** ./src/app/services/podcast.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodcastService": () => (/* binding */ PodcastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 99900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database.service */ 60568);





let PodcastService = class PodcastService {
    // podcasts: any = [
    //   // {
    //   //   audio: new Audio("assets/audio/Toju.mp3"),
    //   //   // audio: new Audio("https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/podcasts%2FToju.mp3?alt=media&token=e1582f05-a1f7-4d31-8e6c-f6c16c1a7a53"),
    //   //   author: "Usimeke Ushoro",
    //   //   title: "Toju",
    //   //   CurrentTime: null,
    //   //   duration: null
    //   // },
    //   // {
    //   //   audio: new Audio("assets/audio/Jeho.mp3"),
    //   //   // audio: new Audio("https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/podcasts%2FJeho.mp3?alt=media&token=08f86ac3-7e6e-49fa-b13e-68b4f9bd89a1"),
    //   //   author: "Mulitiple",
    //   //   title: "MixTape",
    //   //   CurrentTime: null,
    //   //   duration: null
    //   // },
    // ];
    constructor(router, StorageService, DatabaseService) {
        this.router = router;
        this.StorageService = StorageService;
        this.DatabaseService = DatabaseService;
        this.playingPodcastID = null;
        this.podcasts = this.getPodcast();
    }
    play(id) {
        if (this.playingPodcastID === null) {
            // if(this.podcasts[id].audio.readyState > 0) {
            document.getElementById('playBTN' + id).style.display = "none";
            document.getElementById('pauseBTN' + id).style.display = "inline";
            this.podcasts[id].audio.play();
            this.playingPodcastID = id;
            this.StorageService.store("playing", {
                // Radio: "played",
                Status: "played",
                PlayingMedia: "podcast",
                podcastsID: id
            });
            // }
        }
        else {
            this.pause(this.playingPodcastID);
            // if(this.podcasts[id].audio.readyState > 0) {
            document.getElementById('playBTN' + id).style.display = "none";
            document.getElementById('pauseBTN' + id).style.display = "inline";
            this.podcasts[id].audio.play();
            this.playingPodcastID = id;
            this.StorageService.store("playing", {
                // Radio: "played",
                Status: "played",
                PlayingMedia: "podcast",
                podcastsID: id
            });
            // }
        }
    }
    pause(id) {
        if (this.router.url === "/podcast") {
            document.getElementById('playBTN' + id).style.display = "inline";
            document.getElementById('pauseBTN' + id).style.display = "none";
        }
        else {
            this.StorageService.store("outsidePodcast", {
                pauseFrmOutside: true,
                Status: "podcast",
                podcastsID: id
            });
        }
        this.playingPodcastID = id;
        this.podcasts[id].audio.pause();
    }
    getPodcast() {
        let result = null;
        this.DatabaseService.getRealtimeDBdata("podcasts").then(response => {
            let res = response;
            let arr = [];
            let k;
            let i = Object.keys(res).length - 1;
            for (const k in res) {
                if (Object.prototype.hasOwnProperty.call(res, k)) {
                    const element = res[k];
                    let podcast = {
                        audio: new Audio(element.audio),
                        author: element.author,
                        title: element.title,
                        CurrentTime: null,
                        duration: null,
                    };
                    arr.unshift(podcast);
                }
                i--;
            }
            this.podcasts = arr;
            result = arr;
            console.log(this.podcasts);
        }, err => {
            console.log(err);
        });
        return result;
    }
};
PodcastService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_1__.DatabaseService }
];
PodcastService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PodcastService);



/***/ }),

/***/ 49517:
/*!*******************************************!*\
  !*** ./src/app/services/shows.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsService": () => (/* binding */ ShowsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.service */ 60568);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 99900);





let ShowsService = class ShowsService {
    // shows = [
    //   // {
    //   //   audio: new Audio("assets/audio/Toju.mp3"),
    //   //   // audio: new Audio("https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/podcasts%2FToju.mp3?alt=media&token=e1582f05-a1f7-4d31-8e6c-f6c16c1a7a53"),
    //   //   showImg: "/assets/images/about.jpeg",
    //   //   showTitle: "Awesome Title",
    //   //   showDescription: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    //   // },
    //   // {
    //   //   audio: new Audio("assets/audio/Jeho.mp3"),
    //   //   // audio: new Audio("https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/podcasts%2FJeho.mp3?alt=media&token=08f86ac3-7e6e-49fa-b13e-68b4f9bd89a1"),
    //   //   showImg: "/assets/images/about.jpeg",
    //   //   showTitle: "Awesome Title",
    //   //   showDescription: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    //   // }
    // ];
    constructor(router, StorageService, DatabaseService) {
        this.router = router;
        this.StorageService = StorageService;
        this.DatabaseService = DatabaseService;
        this.playingID = null;
        this.shows = this.getShows();
    }
    play(id) {
        if (this.playingID === null) {
            document.getElementById('sPlayBTN' + id).style.display = "none";
            document.getElementById('sPauseBTN' + id).style.display = "block";
            document.getElementById('sWave' + id).style.display = "block";
            this.shows[id].audio.play();
            this.playingID = id;
            this.StorageService.store("playing", {
                Status: "played",
                PlayingMedia: "show",
                showsID: id
            });
        }
        else {
            this.pause(this.playingID);
            document.getElementById('sPlayBTN' + id).style.display = "none";
            document.getElementById('sPauseBTN' + id).style.display = "block";
            document.getElementById('sWave' + id).style.display = "block";
            this.shows[id].audio.play();
            this.playingID = id;
            this.StorageService.store("playing", {
                // Radio: "played",
                Status: "played",
                PlayingMedia: "show",
                showsID: id
            });
        }
    }
    pause(id) {
        if (this.router.url === "/shows") {
            document.getElementById('sPlayBTN' + id).style.display = "block";
            document.getElementById('sPauseBTN' + id).style.display = "none";
            document.getElementById('sWave' + id).style.display = "none";
        }
        else {
            this.StorageService.store("outsideShow", {
                pauseFrmOutside: true,
                Status: "show",
                showsID: id
            });
        }
        this.playingID = id;
        this.shows[id].audio.pause();
    }
    getShows() {
        let result = null;
        this.DatabaseService.getRealtimeDBdata("shows").then(response => {
            let res = response;
            let arr = [];
            let k;
            let i = Object.keys(res).length - 1;
            for (const k in res) {
                if (Object.prototype.hasOwnProperty.call(res, k)) {
                    const element = res[k];
                    let show = {
                        audio: new Audio(element.audio),
                        showImg: element.showImg,
                        showTitle: element.showTitle,
                        showDescription: element.showDescription,
                    };
                    arr.unshift(show);
                }
                i--;
            }
            this.shows = arr;
            result = arr;
            console.log(this.shows);
        }, err => {
            console.log(err);
        });
        return result;
    }
};
ShowsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService }
];
ShowsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ShowsService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_podcast_service_ts-src_app_services_shows_service_ts.js.map