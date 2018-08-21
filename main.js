(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-event-outside/fesm5/ng-event-outside.js":
/*!*********************************************************!*\
  !*** ./dist/ng-event-outside/fesm5/ng-event-outside.js ***!
  \*********************************************************/
/*! exports provided: EventOutsideDirective, NgEventOutsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOutsideDirective", function() { return EventOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEventOutsideModule", function() { return NgEventOutsideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var auto_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auto-subscriptions */ "./node_modules/auto-subscriptions/dist/public_api.js");
/* harmony import */ var auto_subscriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auto_subscriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EventOutsideDirective = /** @class */ (function () {
    function EventOutsideDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.ngEventOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.excludes = [];
        this.eventListener = 'click';
        this.event = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, _this.eventListener).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function ($event) {
                setTimeout(function () {
                    /** @type {?} */
                    var self = $event.path.includes(_this.elementRef.nativeElement);
                    /** @type {?} */
                    var trigger = $event.path.some(function (e) { return _this.excludes.includes(e); });
                    if (!self && !trigger) {
                        _this.ngEventOutside.emit($event);
                    }
                }, 0);
            }));
        };
    }
    /**
     * @return {?}
     */
    EventOutsideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EventOutsideDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EventOutsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngEventOutside]'
                },] },
    ];
    /** @nocollapse */
    EventOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    EventOutsideDirective.propDecorators = {
        ngEventOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        excludes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        eventListener: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        auto_subscriptions__WEBPACK_IMPORTED_MODULE_3__["AutoSubscription"],
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], EventOutsideDirective.prototype, "event", void 0);
    EventOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(auto_subscriptions__WEBPACK_IMPORTED_MODULE_3__["AutoSubscriptions"])({
            init: 'ngOnInit',
            destroy: 'ngOnDestroy'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], EventOutsideDirective);
    return EventOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgEventOutsideModule = /** @class */ (function () {
    function NgEventOutsideModule() {
    }
    NgEventOutsideModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [EventOutsideDirective],
                    exports: [EventOutsideDirective]
                },] },
    ];
    return NgEventOutsideModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXZlbnQtb3V0c2lkZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctZXZlbnQtb3V0c2lkZS9saWIvbmctZXZlbnQtb3V0c2lkZS5kaXJlY3RpdmUudHMiLCJuZzovL25nLWV2ZW50LW91dHNpZGUvbGliL25nLWV2ZW50LW91dHNpZGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvU3Vic2NyaXB0aW9ucywgQXV0b1N1YnNjcmlwdGlvbiB9IGZyb20gJ2F1dG8tc3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0V2ZW50T3V0c2lkZV0nXG59KVxuQEF1dG9TdWJzY3JpcHRpb25zKHtcbiAgaW5pdDogJ25nT25Jbml0JyxcbiAgZGVzdHJveTogJ25nT25EZXN0cm95J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudE91dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBuZ0V2ZW50T3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZXhjbHVkZXMgPSBbXTtcbiAgQElucHV0KCkgZXZlbnRMaXN0ZW5lciA9ICdjbGljayc7XG5cbiAgQEF1dG9TdWJzY3JpcHRpb25cbiAgZXZlbnQ6ICgpID0+IE9ic2VydmFibGU8YW55PiA9ICgpID0+IHtcbiAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgdGhpcy5ldmVudExpc3RlbmVyKS5waXBlKFxuICAgICAgdGFwKCgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxmID0gJGV2ZW50LnBhdGguaW5jbHVkZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSAkZXZlbnQucGF0aC5zb21lKChlKSA9PiB0aGlzLmV4Y2x1ZGVzLmluY2x1ZGVzKGUpKTtcbiAgICAgICAgICBpZiAoIXNlbGYgJiYgIXRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMubmdFdmVudE91dHNpZGUuZW1pdCgkZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG5cbiAgICAgIH0pXG4gICAgKX07XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50T3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctZXZlbnQtb3V0c2lkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0V2ZW50T3V0c2lkZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtFdmVudE91dHNpZGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nRXZlbnRPdXRzaWRlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQXdDRSwrQkFBbUIsVUFBc0I7UUFBekMsaUJBQ0M7UUFEa0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTs4QkF6QmQsSUFBSSxZQUFZLEVBQUU7d0JBQ3pCLEVBQUU7NkJBQ0csT0FBTztxQkFHRDtZQUM3QixPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLFVBQUMsTUFBVztnQkFDZCxVQUFVLENBQUM7O29CQUNULElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O29CQUNqRSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2xDO2lCQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFFUCxDQUFDLENBQ0gsQ0FBQTtTQUFDO0tBU0g7Ozs7SUFQRCwyQ0FBVzs7O0lBQVg7S0FDQzs7OztJQUVELHdDQUFROzs7SUFBUjtLQUNDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQVRtQixVQUFVOzs7aUNBZTNCLE1BQU07MkJBQ04sS0FBSztnQ0FDTCxLQUFLOzs7UUFFTCxnQkFBZ0I7OztJQUxOLHFCQUFxQjtRQUpqQyxpQkFBaUIsQ0FBQztZQUNqQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsYUFBYTtTQUN2QixDQUFDO3lDQTJCK0IsVUFBVTtPQTFCOUIscUJBQXFCLEVBNkJqQztnQ0EzQ0Q7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ2pDOzsrQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n:host * {\r\n  margin: 0 5px;\r\n}\r\n.btn-cont {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.popover {\r\n  top: inherit;\r\n  bottom: 100%;\r\n  left: inherit;\r\n}\r\n.popover .arrow {\r\n  top: 100%;\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n}\r\n/*div {*/\r\n/*box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);*/\r\n/*width: 25vw;*/\r\n/*height: 25vh;*/\r\n/*display: flex;*/\r\n/*justify-content: center;*/\r\n/*align-items: center;*/\r\n/*background: white;*/\r\n/*}*/\r\n.popover-content {\r\n  padding: 9px 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-cont\" *ngFor=\"let event of events\">\n  <button type=\"button\" (click)=\"event.show = !event.show\" #triggerButton\n          class=\"btn btn-{{event.class}}\">{{event.listener}}\n  </button>\n\n  <div class=\"popover fade bottom in show\"\n       *ngIf=\"event.show\"\n       [eventListener]=\"event.listener\"\n       [excludes]=\"[triggerButton]\"\n       (ngEventOutside)=\"event.show = false\">\n\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\">{{event.listener}}</h3>\n    <div class=\"popover-content\">Some content</div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.events = [
            {
                listener: 'click',
                class: 'primary',
                show: false
            },
            {
                listener: 'pointermove',
                class: 'success',
                show: false
            },
            {
                listener: 'mousedown',
                class: 'info',
                show: false
            },
            {
                listener: 'mousewheel',
                class: 'danger',
                show: false
            }
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_event_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-event-outside */ "./dist/ng-event-outside/fesm5/ng-event-outside.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_event_outside__WEBPACK_IMPORTED_MODULE_3__["NgEventOutsideModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Development\self\ng-event-outside\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map