(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home-page/home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/search-results-page/search-results-page.component */ "./src/app/components/pages/search-results-page/search-results-page.component.ts");
/* harmony import */ var _components_pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/help-page/help-page.component */ "./src/app/components/pages/help-page/help-page.component.ts");
/* harmony import */ var _components_pages_collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/collection-page/collection-page.component */ "./src/app/components/pages/collection-page/collection-page.component.ts");
/* harmony import */ var _components_pages_entity_page_entity_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/entity-page/entity-page.component */ "./src/app/components/pages/entity-page/entity-page.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_pages_callback_page_callback_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/callback-page/callback-page.component */ "./src/app/components/pages/callback-page/callback-page.component.ts");
/* harmony import */ var _components_pages_error_unauthorised_page_error_unauthorised_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/error-unauthorised-page/error-unauthorised-page.component */ "./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.ts");
/* harmony import */ var _components_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/error-page/error-page.component */ "./src/app/components/pages/error-page/error-page.component.ts");












var routes = [
    { path: '', component: _components_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'search', component: _components_pages_search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsPageComponent"] },
    { path: 'help', component: _components_pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_5__["HelpPageComponent"] },
    { path: 'entity/:slug', component: _components_pages_entity_page_entity_page_component__WEBPACK_IMPORTED_MODULE_7__["EntityPageComponent"] },
    { path: 'collection/:slug', component: _components_pages_collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_6__["CollectionPageComponent"] },
    { path: 'callback', component: _components_pages_callback_page_callback_page_component__WEBPACK_IMPORTED_MODULE_9__["CallbackPageComponent"] },
    { path: 'error-401', component: _components_pages_error_unauthorised_page_error_unauthorised_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorUnauthorisedPageComponent"] },
    { path: 'error-500', component: _components_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: true // For debugging only
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-bar-partial></app-header-bar-partial>\n<ng-container *ngIf=\"profile.isAuthenticated() && !profile.isVerified() && !appService.isEmbedTemplate()\">\n    <app-verify-account-message-bar></app-verify-account-message-bar>\n</ng-container>\n<router-outlet></router-outlet>\n<app-cookie-banner></app-cookie-banner>\n<ui-footer>\n    <ng-container logo>\n        <img class=\"c-footer--logo\" src=\"\" alt=\"Adaptavist Library Logo\" />\n    </ng-container>\n    <ng-container links>\n        <a\n                class=\"c-footer--navigation-link\"\n                routerLink=\"/help\"\n        >Help\n        </a>\n        <a\n                class=\"c-footer--navigation-link\"\n                href=\"https://productsupport.adaptavist.com/servicedesk/customer/portal/49\"\n        >\n            Support\n        </a>\n        <!--    <span>-->\n        <!--        <a (click)=\"auth.login()\" *ngIf=\"!profile.isAuthenticated()\" class=\"c-footer&#45;&#45;navigation-link\">Login</a>-->\n        <!--        <a (click)=\"auth.signUp()\" *ngIf=\"!profile.isAuthenticated()\" class=\"c-footer&#45;&#45;navigation-link\">Create Library</a>-->\n        <!--        <a href=\"/library/entities\" *ngIf=\"profile.isAuthenticatedAndVerified()\" class=\"c-footer&#45;&#45;navigation-link\">My Library</a>-->\n        <!--    </span>-->\n        <a class=\"c-footer--navigation-link\" href=\"https://www.adaptavist.com/company/privacy-policy\">Privacy Policy</a>\n        <a class=\"c-footer--navigation-link\" href=\"https://www.adaptavist.com/company/adaptavist-eula/\">EULA</a>\n        <p class=\"c-footer--copyright\">© 2010-2019 Adaptavist, All rights reserved.</p>\n    </ng-container>\n</ui-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cookie/cookie.service */ "./src/app/services/cookie/cookie.service.ts");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(profile, appService) {
        this.profile = profile;
        this.appService = appService;
        this.appService.primeNavigationEventsListener();
    }
    AppComponent.prototype.ngOnInit = function () {
        // Only check for cookies within client browser
        if (this.appService.isRunningInClientBrowser()) {
            // Only initialise Segment if the user has accepted analytics cookies
            if (_services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"].get('cookieControl') &&
                _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"].get('cookieControlPrefs') &&
                _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"].get('cookieControlPrefs').includes('analytics')) {
                this.appService.primeSegmentAnalytics();
            }
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _services_application_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_error_unauthorised_page_error_unauthorised_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/error-unauthorised-page/error-unauthorised-page.component */ "./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.ts");
/* harmony import */ var _components_pages_error_not_found_page_error_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/error-not-found-page/error-not-found-page.component */ "./src/app/components/pages/error-not-found-page/error-not-found-page.component.ts");
/* harmony import */ var _components_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/error-page/error-page.component */ "./src/app/components/pages/error-page/error-page.component.ts");
/* harmony import */ var _components_pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/help-page/help-page.component */ "./src/app/components/pages/help-page/help-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cookie/cookie.service */ "./src/app/services/cookie/cookie.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _http_headers_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http-headers.interceptor */ "./src/app/http-headers.interceptor.ts");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _components_pages_callback_page_callback_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/callback-page/callback-page.component */ "./src/app/components/pages/callback-page/callback-page.component.ts");
/* harmony import */ var _directives_app_shell_render_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/app-shell-render.directive */ "./src/app/directives/app-shell-render.directive.ts");
/* harmony import */ var _directives_app_shell_no_render_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/app-shell-no-render.directive */ "./src/app/directives/app-shell-no-render.directive.ts");
/* harmony import */ var _components_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/home-page/home-page.module */ "./src/app/components/pages/home-page/home-page.module.ts");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _components_pages_search_results_page_search_results_page_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/search-results-page/search-results-page.module */ "./src/app/components/pages/search-results-page/search-results-page.module.ts");
/* harmony import */ var _components_pages_entity_page_entity_page_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/entity-page/entity-page.module */ "./src/app/components/pages/entity-page/entity-page.module.ts");
/* harmony import */ var _components_pages_collection_page_collection_page_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/collection-page/collection-page.module */ "./src/app/components/pages/collection-page/collection-page.module.ts");
/* harmony import */ var _components_partials_header_bar_partial_header_bar_partial_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/partials/header-bar-partial/header-bar-partial.component */ "./src/app/components/partials/header-bar-partial/header-bar-partial.component.ts");
/* harmony import */ var _components_pages_library_library_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/library/library.module */ "./src/app/components/pages/library/library.module.ts");
/* harmony import */ var _components_partials_verify_account_message_bar_verify_account_message_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/partials/verify-account-message-bar/verify-account-message-bar.component */ "./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.ts");
/* harmony import */ var _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/admin.module */ "./src/app/components/admin/admin.module.ts");
/* harmony import */ var _components_partials_cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/partials/cookie-banner/cookie-banner.component */ "./src/app/components/partials/cookie-banner/cookie-banner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





























var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformBrowser"])(this.platformId) ?
            'in the browser' : 'on the server';
        // console.log(`Running ${platform} with appId=${appId}`);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_pages_error_unauthorised_page_error_unauthorised_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorUnauthorisedPageComponent"],
                _components_pages_error_not_found_page_error_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorNotFoundPageComponent"],
                _components_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
                _components_pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_8__["HelpPageComponent"],
                _components_pages_callback_page_callback_page_component__WEBPACK_IMPORTED_MODULE_15__["CallbackPageComponent"],
                _directives_app_shell_no_render_directive__WEBPACK_IMPORTED_MODULE_17__["AppShellNoRenderDirective"],
                _directives_app_shell_render_directive__WEBPACK_IMPORTED_MODULE_16__["AppShellRenderDirective"],
                _components_partials_header_bar_partial_header_bar_partial_component__WEBPACK_IMPORTED_MODULE_23__["HeaderBarPartialComponent"],
                _components_partials_verify_account_message_bar_verify_account_message_bar_component__WEBPACK_IMPORTED_MODULE_25__["VerifyAccountMessageBarComponent"],
                _components_partials_cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_27__["CookieBannerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _components_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_18__["HomePageModule"],
                _components_pages_search_results_page_search_results_page_module__WEBPACK_IMPORTED_MODULE_20__["SearchResultsPageModule"],
                _components_pages_entity_page_entity_page_module__WEBPACK_IMPORTED_MODULE_21__["EntityPageModule"],
                library_components__WEBPACK_IMPORTED_MODULE_19__["NavigationModule"],
                _components_pages_collection_page_collection_page_module__WEBPACK_IMPORTED_MODULE_22__["CollectionPageModule"],
                _components_pages_library_library_module__WEBPACK_IMPORTED_MODULE_24__["LibraryModule"],
                _components_admin_admin_module__WEBPACK_IMPORTED_MODULE_26__["AdminModule"],
                library_components__WEBPACK_IMPORTED_MODULE_19__["TypographyModule"],
                library_components__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' },
                _services_application_application_service__WEBPACK_IMPORTED_MODULE_14__["ApplicationService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: function (auth) { return function () { return auth.init(); }; },
                    deps: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _http_headers_interceptor__WEBPACK_IMPORTED_MODULE_13__["HTTPHeadersInterceptor"],
                    multi: true
                }
            ],
            exports: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _apps_admin_apps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apps/admin.apps.component */ "./src/app/components/admin/apps/admin.apps.component.ts");
/* harmony import */ var _collections_admin_collections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collections/admin.collections.component */ "./src/app/components/admin/collections/admin.collections.component.ts");
/* harmony import */ var _companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies/admin.companies.component */ "./src/app/components/admin/companies/admin.companies.component.ts");
/* harmony import */ var _kinds_admin_kinds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kinds/admin.kinds.component */ "./src/app/components/admin/kinds/admin.kinds.component.ts");
/* harmony import */ var _platforms_admin_platforms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./platforms/admin.platforms.component */ "./src/app/components/admin/platforms/admin.platforms.component.ts");
/* harmony import */ var _products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/admin.products.component */ "./src/app/components/admin/products/admin.products.component.ts");
/* harmony import */ var _tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tags/admin.tags.component */ "./src/app/components/admin/tags/admin.tags.component.ts");
/* harmony import */ var _features_admin_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/admin.features.component */ "./src/app/components/admin/features/admin.features.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");













var routes = [
    { path: 'dexad', redirectTo: '/dexad/collections', pathMatch: 'full' },
    {
        path: 'dexad',
        canActivate: [
            _guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]
        ],
        children: [
            {
                path: 'apps',
                component: _apps_admin_apps_component__WEBPACK_IMPORTED_MODULE_4__["AdminAppsComponent"]
            },
            {
                path: 'collections',
                component: _collections_admin_collections_component__WEBPACK_IMPORTED_MODULE_5__["AdminCollectionsComponent"]
            },
            {
                path: 'companies',
                component: _companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_6__["AdminCompaniesComponent"]
            },
            {
                path: 'kinds',
                component: _kinds_admin_kinds_component__WEBPACK_IMPORTED_MODULE_7__["AdminKindsComponent"]
            },
            {
                path: 'platforms',
                component: _platforms_admin_platforms_component__WEBPACK_IMPORTED_MODULE_8__["AdminPlatformsComponent"]
            },
            {
                path: 'products',
                component: _products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__["AdminProductsComponent"]
            },
            {
                path: 'tags',
                component: _tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_10__["AdminTagsComponent"]
            },
            {
                path: 'features',
                component: _features_admin_features_component__WEBPACK_IMPORTED_MODULE_11__["AdminFeaturesComponent"]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collections_admin_collections_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collections/admin.collections.component */ "./src/app/components/admin/collections/admin.collections.component.ts");
/* harmony import */ var _companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies/admin.companies.component */ "./src/app/components/admin/companies/admin.companies.component.ts");
/* harmony import */ var _products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/admin.products.component */ "./src/app/components/admin/products/admin.products.component.ts");
/* harmony import */ var _platforms_admin_platforms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platforms/admin.platforms.component */ "./src/app/components/admin/platforms/admin.platforms.component.ts");
/* harmony import */ var _partials_left_nav_admin_left_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/left-nav/admin.left-nav.component */ "./src/app/components/admin/partials/left-nav/admin.left-nav.component.ts");
/* harmony import */ var _apps_admin_apps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps/admin.apps.component */ "./src/app/components/admin/apps/admin.apps.component.ts");
/* harmony import */ var _kinds_admin_kinds_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kinds/admin.kinds.component */ "./src/app/components/admin/kinds/admin.kinds.component.ts");
/* harmony import */ var _tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tags/admin.tags.component */ "./src/app/components/admin/tags/admin.tags.component.ts");
/* harmony import */ var _features_admin_features_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/admin.features.component */ "./src/app/components/admin/features/admin.features.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/components/admin/admin-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_13__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            exports: [],
            declarations: [
                _collections_admin_collections_component__WEBPACK_IMPORTED_MODULE_4__["AdminCollectionsComponent"],
                _companies_admin_companies_component__WEBPACK_IMPORTED_MODULE_5__["AdminCompaniesComponent"],
                _kinds_admin_kinds_component__WEBPACK_IMPORTED_MODULE_10__["AdminKindsComponent"],
                _partials_left_nav_admin_left_nav_component__WEBPACK_IMPORTED_MODULE_8__["AdminLeftNavComponent"],
                _products_admin_products_component__WEBPACK_IMPORTED_MODULE_6__["AdminProductsComponent"],
                _platforms_admin_platforms_component__WEBPACK_IMPORTED_MODULE_7__["AdminPlatformsComponent"],
                _tags_admin_tags_component__WEBPACK_IMPORTED_MODULE_11__["AdminTagsComponent"],
                _apps_admin_apps_component__WEBPACK_IMPORTED_MODULE_9__["AdminAppsComponent"],
                _features_admin_features_component__WEBPACK_IMPORTED_MODULE_12__["AdminFeaturesComponent"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/components/admin/apps/admin.apps.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/apps/admin.apps.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Apps</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New App\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr class=\"table--row\">\n                            <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">App</th>\n                            <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr class=\"table--row\" *ngFor=\"let app of apps\">\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                {{app.name}}\n                            </td>\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <div class=\"flex\">\n                                    <button type=\"button\" (click)=\"onEdit(app)\"\n                                            class=\"flex table--action-button\">\n                                        EDIT\n                                    </button>\n                                    <button type=\"button\" (click)=\"onDelete(app)\"\n                                            class=\"flex table--action-button\">\n                                        DELETE\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New App</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #appForm=\"ngForm\" class=\"form admin--form\"\n                                  enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                           #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"shortcode\" class=\"col-2 col-form-label\">\n                                        Shortcode\n                                        <small>(As referenced in the yaml file)</small>\n                                    </label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.shortcode\" name=\"shortcode\"\n                                           id=\"shortcode\"\n                                           #shortcode=\"ngModel\">\n                                    <div *ngIf=\"shortcode.errors && (shortcode.dirty || shortcode.touched)\"\n                                         class=\"alert alert-danger\">\n                                        <div [hidden]=\"!shortcode.errors.required\">\n                                            Shortcode is required\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                            class=\"btn btn-success admin--button admin--button-action-green\"\n                                            [disabled]=\"!appForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                            (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/components/admin/apps/admin.apps.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/apps/admin.apps.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminAppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAppsComponent", function() { return AdminAppsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_app_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/app.model */ "./src/app/models/app.model.ts");
/* harmony import */ var _services_admin_app_admin_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/app/admin.app.service */ "./src/app/services/admin/app/admin.app.service.ts");






var AdminAppsComponent = /** @class */ (function () {
    function AdminAppsComponent(applicationService, appService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.appService = appService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminAppsComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getApps();
        this.setPageMetaData();
    };
    AdminAppsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Apps - Admin - Adaptavist Library');
    };
    AdminAppsComponent.prototype.onNew = function () {
        this.model = new _models_app_model__WEBPACK_IMPORTED_MODULE_4__["AppModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminAppsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.appService.createApp(this.model)
                .subscribe(function (app) {
                _this.apps.push(app);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.appService.updateApp(this.model.id, this.model)
                .subscribe(function (app) {
                _this.selectedApp.name = app.name;
                _this.selectedApp.shortcode = app.shortcode;
                _this.selectedApp.icon = app.icon;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminAppsComponent.prototype.onEdit = function (app) {
        this.selectedApp = app;
        this.model = Object.assign(new _models_app_model__WEBPACK_IMPORTED_MODULE_4__["AppModel"](), this.selectedApp);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminAppsComponent.prototype.onDelete = function (app) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + app.name + '?')) {
            this.appService.deleteApp(app.id)
                .subscribe(function () {
                _this.apps.splice(_this.apps.indexOf(app), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminAppsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminAppsComponent.prototype.getApps = function () {
        var _this = this;
        this.appService.getApps()
            .subscribe(function (apps) { return _this.apps = apps; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminAppsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-apps',
            template: __webpack_require__(/*! ./admin.apps.component.html */ "./src/app/components/admin/apps/admin.apps.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_app_admin_app_service__WEBPACK_IMPORTED_MODULE_5__["AdminAppService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminAppsComponent);
    return AdminAppsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/collections/admin.collections.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/collections/admin.collections.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Collections</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Collection\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr class=\"table--row\">\n                                <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Collection</th>\n                                <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n\n                            <tr class=\"table--row\" *ngFor=\"let collection of collections\">\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <a routerLink=\"/collection/{{collection.slug}}\" class=\"link--orange\">\n                                        {{collection.name}}\n                                    </a>\n                                    <small *ngIf=\"collection.partner\">\n                                        (Partner Collection)\n                                    </small>\n                                </td>\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <div class=\"flex\">\n                                        <button type=\"button\" (click)=\"onEdit(collection)\"\n                                            class=\"flex table--action-button\">\n                                            EDIT\n                                        </button>\n                                        <button type=\"button\" (click)=\"onAssignEntities(collection)\"\n                                            class=\"flex table--action-button\">\n                                            ASSIGN ENTITIES\n                                        </button>\n                                        <button type=\"button\" (click)=\"onAssignCompanies(collection)\"\n                                            class=\"flex table--action-button\">\n                                            ASSIGN COMPANIES\n                                        </button>\n                                        <button type=\"button\" (click)=\"onDelete(collection)\"\n                                            class=\"flex table--action-button\">\n                                            DELETE\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showAssignEntities\" class=\"assign--container admin--content-section\">\n                            <h2 class=\"font-extra-bold mb-md-res\">Assign entities to {{model.name}}</h2>\n                            <div *ngFor=\"let entity of entities\" class=\"flex mb-md assign--row\">\n                                <div class=\"flex-shrink-0\">\n                                    <button type=\"button\"\n                                        class=\"btn btn-info admin--button admin--button-action-{{ hasEntity(this.model, entity) ? 'red admin--button-cross' : 'green admin--button-plus'}}\"\n                                        (click)=\"toggleAssignEntity(this.model, entity)\">\n                                    </button>\n                                </div>\n                                <div class=\"ml-md flex-grow flex-column-center\">\n                                    {{entity.name}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"showAssignCompanies\" class=\"assign--container admin--content-section\">\n                            <h2 class=\"font-extra-bold mb-md-res\">Assign companies to {{model.name}}</h2>\n                            <div *ngFor=\"let company of companies\" class=\"flex mb-md assign--row\">\n                                <div class=\"flex-shrink-0\">\n                                    <button type=\"button\"\n                                        class=\"btn btn-info admin--button admin--button-action-{{ hasCompany(this.model, company) ? 'red admin--button-cross' : 'green admin--button-plus'}}\"\n                                        (click)=\"toggleAssignCompany(this.model, company)\">\n                                    </button>\n                                </div>\n                                <div class=\"ml-md flex-grow flex-column-center\">\n                                    {{company.name}}\n                                    <ng-container *ngIf=\"company.icon\">\n                                        <img src=\"{{company.icon}}\" style=\"max-width: 100px;\" />\n                                    </ng-container>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Collection</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #collectionForm=\"ngForm\" class=\"form admin--form\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                        #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"slug\" class=\"col-2 col-form-label\">Slug</label>\n                                    <input type=\"text\" [required]=\"showEdit\" [(ngModel)]=\"model.slug\" name=\"slug\"\n                                        id=\"slug\" #slug=\"ngModel\">\n                                    <div *ngIf=\"slug.errors && (slug.dirty || slug.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!slug.errors.required\">\n                                            Slug is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row user-group--row-textarea row\">\n                                    <label for=\"description\" class=\"col-2 col-form-label\">Description</label>\n                                    <textarea required [(ngModel)]=\"model.description\" name=\"description\"\n                                        id=\"description\" #description=\"ngModel\" cols=\"5\" rows=\"5\"></textarea>\n                                    <div *ngIf=\"description.errors && (description.dirty || description.touched)\"\n                                        class=\"alert alert-danger\">\n                                        <div [hidden]=\"!description.errors.required\">\n                                            Description is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row user-group--row-textarea row\">\n                                    <label for=\"partner\" class=\"col-2 col-form-label\">\n                                        Partner collection?\n                                    </label>\n\n                                    <input type=\"checkbox\" [(ngModel)]=\"model.partner\" name=\"partner\" id=\"partner\"\n                                        #partner=\"ngModel\">\n                                </div>\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                        class=\"btn btn-success admin--button admin--button-action-green\"\n                                        [disabled]=\"!collectionForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                        (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/admin/collections/admin.collections.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/collections/admin.collections.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminCollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCollectionsComponent", function() { return AdminCollectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var _services_admin_company_admin_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/company/admin.company.service */ "./src/app/services/admin/company/admin.company.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_collection_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/collection.model */ "./src/app/models/collection.model.ts");








var AdminCollectionsComponent = /** @class */ (function () {
    function AdminCollectionsComponent(applicationService, collectionService, entityService, companyService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.collectionService = collectionService;
        this.entityService = entityService;
        this.companyService = companyService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
        this.showAssignEntities = false;
        this.showAssignCompanies = false;
    }
    AdminCollectionsComponent.prototype.ngOnInit = function () {
        this.getCollectionList();
        this.getEntities();
        this.getCompanies();
        this.applicationService.setAdminTemplate();
        this.setPageMetaData();
    };
    AdminCollectionsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Collections - Admin - Adaptavist Library');
    };
    AdminCollectionsComponent.prototype.onNew = function () {
        this.model = new _models_collection_model__WEBPACK_IMPORTED_MODULE_7__["CollectionModel"]();
        this.submitType = 'Save';
        this.showNew = true;
        this.showAssignEntities = false;
        this.showAssignCompanies = false;
    };
    AdminCollectionsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.collectionService.createCollection(this.model)
                .subscribe(function (collection) {
                _this.collections.push(collection);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.collectionService.updateCollection(this.model.id, this.model)
                .subscribe(function (collection) {
                _this.selectedCollection.name = collection.name;
                _this.selectedCollection.slug = collection.slug;
                _this.selectedCollection.description = collection.description;
                _this.selectedCollection.partner = collection.partner;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminCollectionsComponent.prototype.onEdit = function (collection) {
        this.selectedCollection = collection;
        this.model = new _models_collection_model__WEBPACK_IMPORTED_MODULE_7__["CollectionModel"]();
        this.model = Object.assign({}, this.selectedCollection);
        this.submitType = 'Update';
        this.showAssignEntities = false;
        this.showAssignCompanies = false;
        this.showNew = true;
        this.showEdit = true;
    };
    AdminCollectionsComponent.prototype.onDelete = function (collection) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + collection.name + '?')) {
            this.collectionService.deleteCollection(collection.id)
                .subscribe(function (unused) {
                _this.collections.splice(_this.collections.indexOf(collection), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminCollectionsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminCollectionsComponent.prototype.onAssignEntities = function (collection) {
        this.selectedCollection = collection;
        this.model = new _models_collection_model__WEBPACK_IMPORTED_MODULE_7__["CollectionModel"]();
        this.model = Object.assign({}, this.selectedCollection);
        this.showNew = false;
        this.showAssignEntities = true;
        this.showAssignCompanies = false;
    };
    AdminCollectionsComponent.prototype.onAssignCompanies = function (collection) {
        this.selectedCollection = collection;
        this.model = new _models_collection_model__WEBPACK_IMPORTED_MODULE_7__["CollectionModel"]();
        this.model = Object.assign({}, this.selectedCollection);
        this.showNew = false;
        this.showAssignEntities = false;
        this.showAssignCompanies = true;
    };
    AdminCollectionsComponent.prototype.toggleAssignEntity = function (collection, entity) {
        if (this.hasEntity(collection, entity)) {
            this.unAssignEntity(collection, entity);
        }
        else {
            this.assignEntity(collection, entity);
        }
    };
    AdminCollectionsComponent.prototype.toggleAssignCompany = function (collection, company) {
        if (this.hasCompany(collection, company)) {
            this.unAssignCompany(collection, company);
        }
        else {
            this.assignCompany(collection, company);
        }
    };
    AdminCollectionsComponent.prototype.assignEntity = function (collection, entity) {
        this.collectionService.assignEntity(collection.id, entity.id)
            .subscribe(function (unused) {
            collection.entities.push(entity);
        }, function (error) {
            console.log(JSON.stringify(error.error));
            // this.applicationService.handleError(error);
        });
    };
    AdminCollectionsComponent.prototype.unAssignEntity = function (collection, entity) {
        if (confirm('Are you sure you want to remove ' + entity.name + ' from ' + collection.name + '?')) {
            var index_1 = collection.entities.findIndex(function (findEntity) { return findEntity.id === entity.id; });
            this.collectionService.unAssignEntity(collection.id, entity.id)
                .subscribe(function (unused) {
                collection.entities.splice(index_1, 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                collection.entities.splice(index_1, 1);
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminCollectionsComponent.prototype.assignCompany = function (collection, company) {
        this.collectionService.assignCompany(collection.id, company.id)
            .subscribe(function (unused) {
            collection.companies.push(company);
        }, function (error) {
            console.log(JSON.stringify(error.error));
            // this.applicationService.handleError(error);
        });
    };
    AdminCollectionsComponent.prototype.unAssignCompany = function (collection, company) {
        if (confirm('Are you sure you want to remove ' + company.name + ' from ' + collection.name + '?')) {
            var index_2 = collection.companies.findIndex(function (findCompany) { return findCompany.id === company.id; });
            this.collectionService.unAssignCompany(collection.id, company.id)
                .subscribe(function (unused) {
                collection.companies.splice(index_2, 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                collection.companies.splice(index_2, 1);
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminCollectionsComponent.prototype.getCollectionList = function () {
        var _this = this;
        this.collectionService.getCollectionList()
            .subscribe(function (collections) { return _this.collections = collections; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminCollectionsComponent.prototype.getEntities = function () {
        var _this = this;
        this.entityService.getEntityList()
            .subscribe(function (entities) {
            _this.entities = entities;
        }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminCollectionsComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (companies) {
            _this.companies = companies;
        }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminCollectionsComponent.prototype.hasEntity = function (collection, entity) {
        var matched = false;
        collection.entities.map(function (obj) {
            if (obj['id'] === entity.id) {
                matched = true;
            }
        });
        return matched;
    };
    AdminCollectionsComponent.prototype.hasCompany = function (collection, company) {
        var matched = false;
        collection.companies.map(function (obj) {
            if (obj['id'] === company.id) {
                matched = true;
            }
        });
        return matched;
    };
    AdminCollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-collections',
            template: __webpack_require__(/*! ./admin.collections.component.html */ "./src/app/components/admin/collections/admin.collections.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_3__["CollectionService"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"],
            _services_admin_company_admin_company_service__WEBPACK_IMPORTED_MODULE_5__["AdminCompanyService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]])
    ], AdminCollectionsComponent);
    return AdminCollectionsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/companies/admin.companies.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/companies/admin.companies.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Companies</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Company\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr class=\"table--row\">\n                                <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Company</th>\n                                <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Logo</th>\n                                <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class=\"table--row\" *ngFor=\"let company of companies\">\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    {{company.name}}\n                                </td>\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <ng-container *ngIf=\"company.icon\">\n                                        <img src=\"{{company.icon}}\" style=\"max-width: 100px;\" />\n                                    </ng-container>\n                                </td>\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <div class=\"flex\">\n                                        <button type=\"button\" (click)=\"onEdit(company)\"\n                                            class=\"flex table--action-button\">\n                                            EDIT\n                                        </button>\n                                        <button type=\"button\" (click)=\"onDelete(company)\"\n                                            class=\"flex table--action-button\">\n                                            DELETE\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Company</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #companyForm=\"ngForm\" class=\"form admin--form\"\n                                enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                        #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"file\" class=\"col-2 col-form-label\">\n                                        Logo\n                                        <ng-container *ngIf=\"model.icon\">\n                                            <small>\n                                                (Current logo: <img src=\"{{model.icon}}\" style=\"max-width: 100px;\" />)\n                                            </small>\n                                        </ng-container>\n                                    </label>\n                                    <input type=\"file\" id=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n                                </div>\n\n                                <ng-container *ngIf=\"model.icon\">\n                                    <div class=\"form-group user-group--row  row\">\n\n                                        <label for=\"removeFile\" class=\"col-2 col-form-label\">\n                                            Remove current logo?\n                                        </label>\n\n                                        <input type=\"checkbox\" [(ngModel)]=\"model.removeFile\" name=\"removeFile\"\n                                            id=\"removeFile\" #removeFile=\"ngModel\">\n                                    </div>\n                                </ng-container>\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                        class=\"btn btn-success admin--button admin--button-action-green\"\n                                        [disabled]=\"!companyForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                        (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/admin/companies/admin.companies.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/companies/admin.companies.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompaniesComponent", function() { return AdminCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_company_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-company.model */ "./src/app/models/admin-company.model.ts");
/* harmony import */ var _services_admin_company_admin_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/company/admin.company.service */ "./src/app/services/admin/company/admin.company.service.ts");






var AdminCompaniesComponent = /** @class */ (function () {
    function AdminCompaniesComponent(applicationService, companyService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.companyService = companyService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminCompaniesComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getCompanies();
        this.setPageMetaData();
    };
    AdminCompaniesComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Companies - Admin - Adaptavist Library');
    };
    AdminCompaniesComponent.prototype.onNew = function () {
        this.model = new _models_admin_company_model__WEBPACK_IMPORTED_MODULE_4__["AdminCompanyModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminCompaniesComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.companyService.createCompany(this.model)
                .subscribe(function (company) {
                _this.companies.push(company);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.companyService.updateCompany(this.model.id, this.model)
                .subscribe(function (company) {
                _this.selectedCompany.name = company.name;
                _this.selectedCompany.icon = company.icon;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminCompaniesComponent.prototype.onEdit = function (company) {
        this.selectedCompany = company;
        this.model = Object.assign(new _models_admin_company_model__WEBPACK_IMPORTED_MODULE_4__["AdminCompanyModel"](), this.selectedCompany);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminCompaniesComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.model.file = event.target.files[0];
        }
    };
    AdminCompaniesComponent.prototype.onDelete = function (company) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + company.name + '?')) {
            this.companyService.deleteCompany(company.id)
                .subscribe(function (unused) {
                _this.companies.splice(_this.companies.indexOf(company), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminCompaniesComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-companies',
            template: __webpack_require__(/*! ./admin.companies.component.html */ "./src/app/components/admin/companies/admin.companies.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_company_admin_company_service__WEBPACK_IMPORTED_MODULE_5__["AdminCompanyService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminCompaniesComponent);
    return AdminCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/features/admin.features.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/features/admin.features.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Features</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Feature\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr class=\"table--row\">\n                                <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Feature</th>\n                                <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n\n                            <tr class=\"table--row\" *ngFor=\"let feature of features\">\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <ng-container *ngIf=\"feature.icon\">\n                                        <img src=\"{{feature.icon}}\" style=\"max-width: 20px;\" />\n                                    </ng-container>\n                                    {{feature.name}}\n                                </td>\n                                <td class=\"table--cell table--cell-primary-mobile\">\n                                    <div class=\"flex\">\n                                        <button type=\"button\" (click)=\"onEdit(feature)\"\n                                            class=\"flex table--action-button\">\n                                            EDIT\n                                        </button>\n                                        <button type=\"button\" (click)=\"onDelete(feature)\"\n                                            class=\"flex table--action-button\">\n                                            DELETE\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Feature</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #featureForm=\"ngForm\" class=\"form admin--form\"\n                                enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                        #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"shortcode\" class=\"col-2 col-form-label\">\n                                        Shortcode\n                                        <small>(As referenced in the yaml file)</small>\n                                    </label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.shortcode\" name=\"shortcode\"\n                                        id=\"shortcode\" #shortcode=\"ngModel\">\n                                    <div *ngIf=\"shortcode.errors && (shortcode.dirty || shortcode.touched)\"\n                                        class=\"alert alert-danger\">\n                                        <div [hidden]=\"!shortcode.errors.required\">\n                                            Shortcode is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                        class=\"btn btn-success admin--button admin--button-action-green\"\n                                        [disabled]=\"!featureForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                        (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/admin/features/admin.features.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/features/admin.features.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFeaturesComponent", function() { return AdminFeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_feature_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-feature.model */ "./src/app/models/admin-feature.model.ts");
/* harmony import */ var _services_admin_feature_admin_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/feature/admin.feature.service */ "./src/app/services/admin/feature/admin.feature.service.ts");






var AdminFeaturesComponent = /** @class */ (function () {
    function AdminFeaturesComponent(applicationService, featureService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.featureService = featureService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminFeaturesComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getFeatures();
        this.setPageMetaData();
    };
    AdminFeaturesComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Features - Admin - Adaptavist Library');
    };
    AdminFeaturesComponent.prototype.onNew = function () {
        this.model = new _models_admin_feature_model__WEBPACK_IMPORTED_MODULE_4__["AdminFeatureModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminFeaturesComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.featureService.createFeature(this.model)
                .subscribe(function (feature) {
                _this.features.push(feature);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.featureService.updateFeature(this.model.id, this.model)
                .subscribe(function (feature) {
                _this.selectedFeature.name = feature.name;
                _this.selectedFeature.shortcode = feature.shortcode;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminFeaturesComponent.prototype.onEdit = function (feature) {
        this.selectedFeature = feature;
        this.model = Object.assign(new _models_admin_feature_model__WEBPACK_IMPORTED_MODULE_4__["AdminFeatureModel"](), this.selectedFeature);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminFeaturesComponent.prototype.onDelete = function (feature) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + feature.name + '?')) {
            this.featureService.deleteFeature(feature.id)
                .subscribe(function () {
                _this.features.splice(_this.features.indexOf(feature), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminFeaturesComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminFeaturesComponent.prototype.getFeatures = function () {
        var _this = this;
        this.featureService.getFeatures()
            .subscribe(function (features) { return _this.features = features; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminFeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-features',
            template: __webpack_require__(/*! ./admin.features.component.html */ "./src/app/components/admin/features/admin.features.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_feature_admin_feature_service__WEBPACK_IMPORTED_MODULE_5__["AdminFeatureService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminFeaturesComponent);
    return AdminFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/kinds/admin.kinds.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/kinds/admin.kinds.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Kinds</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Kind\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr class=\"table--row\">\n                            <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Kind</th>\n                            <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr class=\"table--row\" *ngFor=\"let kind of kinds\">\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <ng-container *ngIf=\"kind.icon\">\n                                    <img src=\"{{kind.icon}}\" style=\"max-width: 20px;\"/>\n                                </ng-container>\n                                {{kind.name}}\n                            </td>\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <div class=\"flex\">\n                                    <button type=\"button\" (click)=\"onEdit(kind)\"\n                                            class=\"flex table--action-button\">\n                                        EDIT\n                                    </button>\n                                    <button type=\"button\" (click)=\"onDelete(kind)\"\n                                            class=\"flex table--action-button\">\n                                        DELETE\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Kind</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #kindForm=\"ngForm\" class=\"form admin--form\"\n                                  enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                           #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"shortcode\" class=\"col-2 col-form-label\">\n                                        Shortcode\n                                        <small>(As referenced in the yaml file)</small>\n                                    </label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.shortcode\" name=\"shortcode\"\n                                           id=\"shortcode\"\n                                           #shortcode=\"ngModel\">\n                                    <div *ngIf=\"shortcode.errors && (shortcode.dirty || shortcode.touched)\"\n                                         class=\"alert alert-danger\">\n                                        <div [hidden]=\"!shortcode.errors.required\">\n                                            Shortcode is required\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                            class=\"btn btn-success admin--button admin--button-action-green\"\n                                            [disabled]=\"!kindForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                            (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/components/admin/kinds/admin.kinds.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/kinds/admin.kinds.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminKindsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminKindsComponent", function() { return AdminKindsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_kind_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-kind.model */ "./src/app/models/admin-kind.model.ts");
/* harmony import */ var _services_admin_kind_admin_kind_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/kind/admin.kind.service */ "./src/app/services/admin/kind/admin.kind.service.ts");






var AdminKindsComponent = /** @class */ (function () {
    function AdminKindsComponent(applicationService, kindService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.kindService = kindService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminKindsComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getKinds();
        this.setPageMetaData();
    };
    AdminKindsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Kinds - Admin - Adaptavist Library');
    };
    AdminKindsComponent.prototype.onNew = function () {
        this.model = new _models_admin_kind_model__WEBPACK_IMPORTED_MODULE_4__["AdminKindModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminKindsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.kindService.createKind(this.model)
                .subscribe(function (kind) {
                _this.kinds.push(kind);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.kindService.updateKind(this.model.id, this.model)
                .subscribe(function (kind) {
                _this.selectedKind.name = kind.name;
                _this.selectedKind.shortcode = kind.shortcode;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminKindsComponent.prototype.onEdit = function (kind) {
        this.selectedKind = kind;
        this.model = Object.assign(new _models_admin_kind_model__WEBPACK_IMPORTED_MODULE_4__["AdminKindModel"](), this.selectedKind);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminKindsComponent.prototype.onDelete = function (kind) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + kind.name + '?')) {
            this.kindService.deleteKind(kind.id)
                .subscribe(function () {
                _this.kinds.splice(_this.kinds.indexOf(kind), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminKindsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminKindsComponent.prototype.getKinds = function () {
        var _this = this;
        this.kindService.getKinds()
            .subscribe(function (kinds) { return _this.kinds = kinds; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminKindsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-kinds',
            template: __webpack_require__(/*! ./admin.kinds.component.html */ "./src/app/components/admin/kinds/admin.kinds.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_kind_admin_kind_service__WEBPACK_IMPORTED_MODULE_5__["AdminKindService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminKindsComponent);
    return AdminKindsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/partials/left-nav/admin.left-nav.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/partials/left-nav/admin.left-nav.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-nav--button\">\n    <div class=\"left-nav--button-icon\"></div>\n</div>\n\n<aside class=\"left-nav--holder\">\n    <div class=\"left-nav--links-holder\">\n        <a routerLink=\"/\" class=\"left-nav--link left-nav--logo\">\n            <img class=\"left-nav--icon left-nav--icon-large\" src=\"/assets/img/white-logo.png\">\n            Adaptavist Library\n        </a>\n        <a routerLink=\"/dexad/apps\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Apps\n        </a>\n        <a routerLink=\"/dexad/collections\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Collections\n        </a>\n        <a routerLink=\"/dexad/companies\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Companies\n        </a>\n        <a routerLink=\"/dexad/features\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Features\n        </a>\n        <a routerLink=\"/dexad/kinds\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Kinds\n        </a>\n        <a routerLink=\"/dexad/platforms\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Platforms\n        </a>\n        <a routerLink=\"/dexad/products\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Products\n        </a>\n        <a routerLink=\"/dexad/tags\" routerLinkActive=\"left-nav--link-current\"\n            [routerLinkActiveOptions]=\"{exact: false }\" class=\"left-nav--link\">\n            Tags\n        </a>\n    </div>\n</aside>\n"

/***/ }),

/***/ "./src/app/components/admin/partials/left-nav/admin.left-nav.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/partials/left-nav/admin.left-nav.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminLeftNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLeftNavComponent", function() { return AdminLeftNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLeftNavComponent = /** @class */ (function () {
    function AdminLeftNavComponent() {
    }
    AdminLeftNavComponent.prototype.ngOnInit = function () {
    };
    AdminLeftNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-left-nav',
            template: __webpack_require__(/*! ./admin.left-nav.component.html */ "./src/app/components/admin/partials/left-nav/admin.left-nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLeftNavComponent);
    return AdminLeftNavComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/platforms/admin.platforms.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/platforms/admin.platforms.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Platforms</h1>\n        </div>\n        <div class=\"top-nav--right\">\n\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr class=\"table--row\">\n                            <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Platform</th>\n                            <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr class=\"table--row\" *ngFor=\"let platform of platforms\">\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                {{platform.name}}\n                            </td>\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <div class=\"flex\">\n                                    <button type=\"button\" (click)=\"onEdit(platform)\"\n                                            class=\"flex table--action-button\">\n                                        EDIT\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Platform</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #platformForm=\"ngForm\" class=\"form admin--form\"\n                                  enctype=\"multipart/form-data\">\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                            class=\"btn btn-success admin--button admin--button-action-green\"\n                                            [disabled]=\"!platformForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                            (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/components/admin/platforms/admin.platforms.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/platforms/admin.platforms.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminPlatformsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPlatformsComponent", function() { return AdminPlatformsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_platform_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-platform.model */ "./src/app/models/admin-platform.model.ts");
/* harmony import */ var _services_admin_platform_admin_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/platform/admin.platform.service */ "./src/app/services/admin/platform/admin.platform.service.ts");






var AdminPlatformsComponent = /** @class */ (function () {
    function AdminPlatformsComponent(applicationService, platformService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.platformService = platformService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminPlatformsComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getPlatforms();
        this.setPageMetaData();
    };
    AdminPlatformsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Platforms - Admin - Adaptavist Library');
    };
    AdminPlatformsComponent.prototype.onSave = function () {
        var _this = this;
        this.platformService.updatePlatform(this.model.id, this.model)
            .subscribe(function (platform) {
            _this.selectedPlatform.name = platform.name;
            _this.selectedPlatform.icon = platform.icon;
        }, function (error) {
            console.log(JSON.stringify(error.error));
            // this.applicationService.handleError(error);
        });
        this.showNew = false;
    };
    AdminPlatformsComponent.prototype.onEdit = function (platform) {
        this.selectedPlatform = platform;
        this.model = Object.assign(new _models_admin_platform_model__WEBPACK_IMPORTED_MODULE_4__["AdminPlatformModel"](), this.selectedPlatform);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminPlatformsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminPlatformsComponent.prototype.getPlatforms = function () {
        var _this = this;
        this.platformService.getPlatforms()
            .subscribe(function (platforms) { return _this.platforms = platforms; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminPlatformsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-platforms',
            template: __webpack_require__(/*! ./admin.platforms.component.html */ "./src/app/components/admin/platforms/admin.platforms.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_platform_admin_platform_service__WEBPACK_IMPORTED_MODULE_5__["AdminPlatformService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminPlatformsComponent);
    return AdminPlatformsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/products/admin.products.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/products/admin.products.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Products</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Product\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr class=\"table--row\">\n                            <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Product</th>\n                            <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr class=\"table--row\" *ngFor=\"let product of products\">\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                {{product.name}}\n                            </td>\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <div class=\"flex\">\n                                    <button type=\"button\" (click)=\"onEdit(product)\"\n                                            class=\"flex table--action-button\">\n                                        EDIT\n                                    </button>\n                                    <button type=\"button\" (click)=\"onDelete(product)\"\n                                            class=\"flex table--action-button\">\n                                        DELETE\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Product</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #productForm=\"ngForm\" class=\"form admin--form\"\n                                  enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                           #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"shortcode\" class=\"col-2 col-form-label\">\n                                        Shortcode\n                                        <small>(As referenced in the yaml file)</small>\n                                    </label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.shortcode\" name=\"shortcode\"\n                                           id=\"shortcode\"\n                                           #shortcode=\"ngModel\">\n                                    <div *ngIf=\"shortcode.errors && (shortcode.dirty || shortcode.touched)\"\n                                         class=\"alert alert-danger\">\n                                        <div [hidden]=\"!shortcode.errors.required\">\n                                            Shortcode is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"file\" class=\"col-2 col-form-label\">\n                                        Icon\n                                        <ng-container *ngIf=\"model.icon\">\n                                            <small>\n                                                (Current icon: <img src=\"{{model.icon}}\" style=\"max-width: 20px;\"/>)\n                                            </small>\n                                        </ng-container>\n                                    </label>\n                                    <input type=\"file\" id=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n                                </div>\n\n                                <ng-container *ngIf=\"model.icon\">\n                                    <div class=\"form-group user-group--row  row\">\n\n                                        <label for=\"removeFile\" class=\"col-2 col-form-label\">\n                                            Remove current icon?\n                                        </label>\n\n                                        <input type=\"checkbox\" [(ngModel)]=\"model.removeFile\" name=\"removeFile\"\n                                               id=\"removeFile\"\n                                               #removeFile=\"ngModel\">\n                                    </div>\n                                </ng-container>\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                            class=\"btn btn-success admin--button admin--button-action-green\"\n                                            [disabled]=\"!productForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                            (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/components/admin/products/admin.products.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/products/admin.products.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-product.model */ "./src/app/models/admin-product.model.ts");
/* harmony import */ var _services_admin_product_admin_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/product/admin.product.service */ "./src/app/services/admin/product/admin.product.service.ts");






var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(applicationService, productService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.productService = productService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getProducts();
        this.setPageMetaData();
    };
    AdminProductsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Products - Admin - Adaptavist Library');
    };
    AdminProductsComponent.prototype.onNew = function () {
        this.model = new _models_admin_product_model__WEBPACK_IMPORTED_MODULE_4__["AdminProductModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminProductsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.productService.createProduct(this.model)
                .subscribe(function (product) {
                _this.products.push(product);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.productService.updateProduct(this.model.id, this.model)
                .subscribe(function (product) {
                _this.selectedProduct.name = product.name;
                _this.selectedProduct.shortcode = product.shortcode;
                _this.selectedProduct.icon = product.icon;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminProductsComponent.prototype.onEdit = function (product) {
        this.selectedProduct = product;
        this.model = Object.assign(new _models_admin_product_model__WEBPACK_IMPORTED_MODULE_4__["AdminProductModel"](), this.selectedProduct);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminProductsComponent.prototype.onDelete = function (product) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + product.name + '?')) {
            this.productService.deleteProduct(product.id)
                .subscribe(function () {
                _this.products.splice(_this.products.indexOf(product), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminProductsComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.model.file = event.target.files[0];
        }
    };
    AdminProductsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin.products.component.html */ "./src/app/components/admin/products/admin.products.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_product_admin_product_service__WEBPACK_IMPORTED_MODULE_5__["AdminProductService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/tags/admin.tags.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/tags/admin.tags.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-left-nav></app-admin-left-nav>\n\n<main class=\"admin-main page-layout--push-down-element\">\n    <div class=\"top-nav--holder align-items-centre\">\n        <div class=\"top-nav--left\">\n            <h1 class=\"top-nav--title font-normal\">Tags</h1>\n        </div>\n        <div class=\"top-nav--right\">\n            <button type=\"submit\" class=\"admin--button admin--button-action-green\" (click)=\"onNew()\">New Tag\n            </button>\n        </div>\n    </div>\n\n    <div class=\"flex-mobile-column_tablet-row mt-lg-res\">\n        <div class=\"admin--layout-column-two\">\n            <div class=\"flex-grow\">\n\n                <div class=\"table--holder\">\n                    <table class=\"table\">\n                        <thead>\n                        <tr class=\"table--row\">\n                            <th class=\"table--cell-heading table--cell-primary-mobile flex-grow\">Tag</th>\n                            <th class=\"table--cell-heading table--cell-primary-mobile table--cell-action\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n\n                        <tr class=\"table--row\" *ngFor=\"let tag of tags\">\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                {{tag.name}}\n                            </td>\n                            <td class=\"table--cell table--cell-primary-mobile\">\n                                <div class=\"flex\">\n                                    <button type=\"button\" (click)=\"onEdit(tag)\"\n                                            class=\"flex table--action-button\">\n                                        EDIT\n                                    </button>\n                                    <button type=\"button\" (click)=\"onDelete(tag)\"\n                                            class=\"flex table--action-button\">\n                                        DELETE\n                                    </button>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin--layout-column-two\">\n\n            <div class=\"admin--wrapper\">\n                <div class=\"page-layout--columns page-layout--reset-top\">\n                    <div class=\"page-layout--column page-layout--column-four page-layout--reset-top\">\n                        <div *ngIf=\"showNew\" class=\"admin--content-section\">\n                            <h2 *ngIf=\"!showEdit\" class=\"font-extra-bold mb-md-res\">New Tag</h2>\n                            <h2 *ngIf=\"showEdit\" class=\"font-extra-bold mb-md-res\">{{model.name}}</h2>\n                            <form (ngSubmit)=\"onSave()\" #tagForm=\"ngForm\" class=\"form admin--form\"\n                                  enctype=\"multipart/form-data\">\n                                <div class=\"form-group user-group--row row\">\n                                    <label for=\"name\" class=\"col-2 col-form-label\">Name</label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.name\" name=\"name\" id=\"name\"\n                                           #name=\"ngModel\">\n                                    <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!name.errors.required\">\n                                            Name is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group user-group--row  row\">\n                                    <label for=\"shortcode\" class=\"col-2 col-form-label\">\n                                        Shortcode\n                                        <small>(As referenced in the yaml file)</small>\n                                    </label>\n                                    <input type=\"text\" required [(ngModel)]=\"model.shortcode\" name=\"shortcode\"\n                                           id=\"shortcode\"\n                                           #shortcode=\"ngModel\">\n                                    <div *ngIf=\"shortcode.errors && (shortcode.dirty || shortcode.touched)\"\n                                         class=\"alert alert-danger\">\n                                        <div [hidden]=\"!shortcode.errors.required\">\n                                            Shortcode is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"bottom-tool-bar--holder\">\n                                    <button type=\"submit\"\n                                            class=\"btn btn-success admin--button admin--button-action-green\"\n                                            [disabled]=\"!tagForm.form.valid\">\n                                        {{submitType}}\n                                    </button>\n                                    <button type=\"submit\" class=\"btn btn-primary admin--button admin--button-action-red\"\n                                            (click)=\"onCancel()\">\n                                        Cancel\n                                    </button>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/components/admin/tags/admin.tags.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/tags/admin.tags.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTagsComponent", function() { return AdminTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_admin_tag_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/admin-tag.model */ "./src/app/models/admin-tag.model.ts");
/* harmony import */ var _services_admin_tag_admin_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/admin/tag/admin.tag.service */ "./src/app/services/admin/tag/admin.tag.service.ts");






var AdminTagsComponent = /** @class */ (function () {
    function AdminTagsComponent(applicationService, tagService, pageTitle, meta) {
        this.applicationService = applicationService;
        this.tagService = tagService;
        this.pageTitle = pageTitle;
        this.meta = meta;
        this.submitType = 'Save';
        this.showNew = false;
        this.showEdit = false;
    }
    AdminTagsComponent.prototype.ngOnInit = function () {
        this.applicationService.setAdminTemplate();
        this.getTags();
        this.setPageMetaData();
    };
    AdminTagsComponent.prototype.setPageMetaData = function () {
        this.pageTitle.setTitle('Tags - Admin - Adaptavist Library');
    };
    AdminTagsComponent.prototype.onNew = function () {
        this.model = new _models_admin_tag_model__WEBPACK_IMPORTED_MODULE_4__["AdminTagModel"]();
        this.submitType = 'Save';
        this.showNew = true;
    };
    AdminTagsComponent.prototype.onSave = function () {
        var _this = this;
        if (this.submitType === 'Save') {
            this.tagService.createTag(this.model)
                .subscribe(function (tag) {
                _this.tags.push(tag);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        else {
            this.tagService.updateTag(this.model.id, this.model)
                .subscribe(function (tag) {
                _this.selectedTag.name = tag.name;
                _this.selectedTag.shortcode = tag.shortcode;
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
        this.showNew = false;
    };
    AdminTagsComponent.prototype.onEdit = function (tag) {
        this.selectedTag = tag;
        this.model = Object.assign(new _models_admin_tag_model__WEBPACK_IMPORTED_MODULE_4__["AdminTagModel"](), this.selectedTag);
        this.submitType = 'Update';
        this.showNew = true;
        this.showEdit = true;
    };
    AdminTagsComponent.prototype.onDelete = function (tag) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + tag.name + '?')) {
            this.tagService.deleteTag(tag.id)
                .subscribe(function () {
                _this.tags.splice(_this.tags.indexOf(tag), 1);
            }, function (error) {
                console.log(JSON.stringify(error.error));
                // this.applicationService.handleError(error);
            });
        }
    };
    AdminTagsComponent.prototype.onCancel = function () {
        this.showNew = false;
    };
    AdminTagsComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.getTags()
            .subscribe(function (tags) { return _this.tags = tags; }, function (error) {
            _this.applicationService.handleError(error);
        });
    };
    AdminTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-tags',
            template: __webpack_require__(/*! ./admin.tags.component.html */ "./src/app/components/admin/tags/admin.tags.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _services_admin_tag_admin_tag_service__WEBPACK_IMPORTED_MODULE_5__["AdminTagService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminTagsComponent);
    return AdminTagsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/callback-page/callback-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/callback-page/callback-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dex-loader--holder\">\n    <div class=\"dex-loader--spinner-holder\">\n        <div class=\"dex-loader--spinner\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/callback-page/callback-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/callback-page/callback-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: CallbackPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackPageComponent", function() { return CallbackPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");






var CallbackPageComponent = /** @class */ (function () {
    function CallbackPageComponent(auth, router, profile, appService) {
        this.auth = auth;
        this.router = router;
        this.profile = profile;
        this.appService = appService;
    }
    CallbackPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Don't attempt to process a Login whilst running on the Server
        if (this.appService.isRunningInClientBrowser()) {
            // Don't attempt to process a Login if the User is already Authenticated
            if (this.profile.isAuthenticated()) {
                return this.router.navigate(['/']);
            }
            // Handle Login
            this.auth.handleAuthenticationCallback().then(function (nextPage) {
                return _this.router.navigate([nextPage]);
            }).catch(function () {
                // Return the User to the Homepage in the case of an error
                return _this.router.navigate(['/']);
            });
        }
    };
    CallbackPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback-page',
            template: __webpack_require__(/*! ./callback-page.component.html */ "./src/app/components/pages/callback-page/callback-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _services_application_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]])
    ], CallbackPageComponent);
    return CallbackPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/collection-page/collection-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/collection-page/collection-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-hero-collection [collection]=\"collection\"></ui-hero-collection>\n<div class=\"l-page--wrapper l-padding-top--gutter\">\n    <ui-section-title titleBase=\"Collection\" titleEmphasis=\"Scripts\"></ui-section-title>\n    <ui-card-container columns=\"l-grid--1of4\">\n        <ui-card-item\n                *ngFor=\"let card of collectionCards\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n        >\n            <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                <a [routerLink]=\"'/search/category/' + category.link\">{{category.text}}</a>\n                <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n            </ng-container>\n            <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n        </ui-card-item>\n    </ui-card-container>\n    <ui-section-title titleBase=\"Suggested\" titleEmphasis=\"Scripts\"></ui-section-title>\n    <ui-card-container columns=\"l-grid--1of4\">\n        <ui-card-collection-item\n                *ngFor=\"let card of moreCollectionCards\" [card]=\"card\"\n                class=\"l-grid-cell\"\n        >\n            <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                <a [queryParams]=\"category.params\" [routerLink]=\"category.link\">{{category.text}}</a>\n                <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n            </ng-container>\n            <a [routerLink]=\"'/collection/' + card.slug\" link>View Collection ›</a>\n        </ui-card-collection-item>\n    </ui-card-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/collection-page/collection-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/collection-page/collection-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CollectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageComponent", function() { return CollectionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var CollectionPageComponent = /** @class */ (function () {
    function CollectionPageComponent(_location, _route, _collectionService, _entityService, _pageTitle, _meta) {
        this._location = _location;
        this._route = _route;
        this._collectionService = _collectionService;
        this._entityService = _entityService;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._moreCollectionCards = [];
    }
    Object.defineProperty(CollectionPageComponent.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionPageComponent.prototype, "collectionCards", {
        get: function () {
            return this._collection.entities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionPageComponent.prototype, "moreCollectionCards", {
        get: function () {
            return this._moreCollectionCards;
        },
        enumerable: true,
        configurable: true
    });
    CollectionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this._route.snapshot.paramMap.get('slug');
        this._collectionService.getCollectionItem(slug)
            .subscribe(function (collection) {
            _this._collection = {
                id: collection.id,
                name: collection.name,
                description: collection.description,
                slug: collection.slug,
                categories: [],
                updated_at: collection.updated_at,
                creator: 'Adaptavist',
                image: {
                    src: 'https://placehold.it/400x300',
                    alt: 'blah'
                },
                entities: collection.entities.map(function (e) { return ({
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    slug: e.slug,
                    categories: _this._entityService.extractCategories(e),
                    updated_at: e.updated_at
                }); })
            };
            _this._moreCollectionCards = collection.more_by_owner
                .map(function (c) { return ({
                name: c.name,
                id: c.id,
                description: c.description,
                slug: c.slug,
                categories: [],
                updated_at: '',
                image: {
                    src: 'https://placehold.it/630x260',
                    alt: 'alt description'
                },
                creator: 'Adaptavist'
            }); });
            _this.setPageMetaData();
        });
    };
    CollectionPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle(this._collection.name + ' - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: this._collection.description.replace(/<[^>]*>/g, '') });
    };
    CollectionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection-page',
            template: __webpack_require__(/*! ./collection-page.component.html */ "./src/app/components/pages/collection-page/collection-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_4__["CollectionService"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_5__["EntityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]])
    ], CollectionPageComponent);
    return CollectionPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/collection-page/collection-page.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/collection-page/collection-page.module.ts ***!
  \****************************************************************************/
/*! exports provided: CollectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _collection_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-page.component */ "./src/app/components/pages/collection-page/collection-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CollectionPageModule = /** @class */ (function () {
    function CollectionPageModule() {
    }
    CollectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["TypographyModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["ScriptModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CollectionModule"],
            ],
            exports: [
                _collection_page_component__WEBPACK_IMPORTED_MODULE_4__["CollectionPageComponent"]
            ],
            declarations: [
                _collection_page_component__WEBPACK_IMPORTED_MODULE_4__["CollectionPageComponent"]
            ]
        })
    ], CollectionPageModule);
    return CollectionPageModule;
}());



/***/ }),

/***/ "./src/app/components/pages/entity-page/entity-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/entity-page/entity-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-hero-script [script]=\"script\">\n    <a back class=\"c-hero--back-button c-text-link\" (click)=\"this.location.back()\">‹ Go Back</a>\n    <a type-link [routerLink]=\"'/' + script.type_name\" class=\"u-text-link\">{{ script.type_name }}</a>\n    <a owner-link [routerLink]=\"'/' + script.owner\" class=\"u-text-link\">{{ script.owner }}</a>\n    <ng-container buttons>\n        <button\n                (click)=\"addToMyLibrary()\"\n                class=\"c-button c-button--large c-button-text--white\"\n                [ngClass]=\"isInMyLibrary ? '' : 'c-button--blue'\"\n        >\n            {{isInMyLibrary ? 'Added to Library' : 'Add to my Library'}}\n        </button>\n    </ng-container>\n</ui-hero-script>\n<div class=\"l-page--wrapper\">\n    <div class=\"l-grid l-grid--full l-padding-bottom--gutter\">\n        <div class=\"l-grid-cell\">\n            <ui-requirements-container>\n                <ui-requirements-tag\n                    *ngFor=\"let requirement of requirements\"\n                    [requirement]=\"requirement\"\n                ></ui-requirements-tag>\n                <ui-dropdown>\n                    <option *ngFor=\"let option of ['version7', 'version4', 'version5']\">\n                        {{option}}\n                    </option>\n                </ui-dropdown>\n            </ui-requirements-container>\n        </div>\n    </div>\n    <div class=\"l-grid l-grid--full\">\n        <div class=\"l-grid-cell\">\n            <ui-script-attachment></ui-script-attachment>\n        </div>\n    </div>\n    <ui-section-title titleBase=\"Suggested\" titleEmphasis=\"Scripts\"></ui-section-title>\n    <ui-card-container columns=\"l-grid--1of4\">\n        <ui-card-item\n            *ngFor=\"let card of cards\"\n            [card]=\"card\"\n            class=\"l-grid-cell l-padding-bottom--gutter\"\n        >\n            <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                <a [queryParams]=\"category.params\" [routerLink]=\"category.link\">{{category.text}}</a>\n                <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n            </ng-container>\n            <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n        </ui-card-item>\n    </ui-card-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/entity-page/entity-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/entity-page/entity-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: EntityPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPageComponent", function() { return EntityPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_tab_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/tab.data */ "./src/data/tab.data.ts");
/* harmony import */ var _data_requirements_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/requirements.data */ "./src/data/requirements.data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var EntityPageComponent = /** @class */ (function () {
    function EntityPageComponent(_location, _route, _entityService, _pageTitle, _meta) {
        this._location = _location;
        this._route = _route;
        this._entityService = _entityService;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._isInMyLibrary = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this._requirements = _data_requirements_data__WEBPACK_IMPORTED_MODULE_3__["requirementsData"];
        this._tabs = _data_tab_data__WEBPACK_IMPORTED_MODULE_2__["tabData"];
    }
    Object.defineProperty(EntityPageComponent.prototype, "isInMyLibrary", {
        get: function () {
            return this._isInMyLibrary.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityPageComponent.prototype, "requirements", {
        get: function () {
            return this._requirements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityPageComponent.prototype, "tabs", {
        get: function () {
            return this._tabs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityPageComponent.prototype, "script", {
        get: function () {
            return this._script;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityPageComponent.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityPageComponent.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    EntityPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this._route.snapshot.paramMap.get('slug');
        this._entityService.getEntityItem(slug)
            .subscribe(function (e) {
            _this._script = _this.entityToScriptModel(e);
            _this._isInMyLibrary.next(e.subscribed);
            _this.setPageMetaData();
        });
        this._entityService.getRelatedEntityList(slug).subscribe(function (re) {
            _this._cards = re.map(function (e) { return ({
                name: e.name,
                id: e.id,
                description: e.description,
                slug: e.slug,
                categories: _this._entityService.extractCategories(e),
                updated_at: e.updated_at
            }); });
        });
    };
    EntityPageComponent.prototype.addToMyLibrary = function () {
        console.log('Add to library');
    };
    // Todo: remove this once owner is returned from API
    EntityPageComponent.prototype.entityToScriptModel = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, e, { type_name: e.type.name, owner: 'Adaptavist' });
    };
    EntityPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle(this._script.name + ' - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: this._script.description.replace(/<[^>]*>/g, '') });
    };
    EntityPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entity-page',
            template: __webpack_require__(/*! ./entity-page.component.html */ "./src/app/components/pages/entity-page/entity-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_5__["EntityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"]])
    ], EntityPageComponent);
    return EntityPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/entity-page/entity-page.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/entity-page/entity-page.module.ts ***!
  \********************************************************************/
/*! exports provided: EntityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityPageModule", function() { return EntityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _entity_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-page.component */ "./src/app/components/pages/entity-page/entity-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EntityPageModule = /** @class */ (function () {
    function EntityPageModule() {
    }
    EntityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["ScriptModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["TypographyModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["RequirementsModule"]
            ],
            exports: [
                _entity_page_component__WEBPACK_IMPORTED_MODULE_4__["EntityPageComponent"]
            ],
            declarations: [
                _entity_page_component__WEBPACK_IMPORTED_MODULE_4__["EntityPageComponent"]
            ]
        })
    ], EntityPageModule);
    return EntityPageModule;
}());



/***/ }),

/***/ "./src/app/components/pages/error-not-found-page/error-not-found-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/pages/error-not-found-page/error-not-found-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    error-not-found-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/error-not-found-page/error-not-found-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/error-not-found-page/error-not-found-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ErrorNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotFoundPageComponent", function() { return ErrorNotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ErrorNotFoundPageComponent = /** @class */ (function () {
    function ErrorNotFoundPageComponent(_pageTitle, _meta) {
        this._pageTitle = _pageTitle;
        this._meta = _meta;
    }
    ErrorNotFoundPageComponent.prototype.ngOnInit = function () {
        this.setPageMetaData();
    };
    ErrorNotFoundPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('404 Page Not Found - Adaptavist Library');
    };
    ErrorNotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-not-found-page',
            template: __webpack_require__(/*! ./error-not-found-page.component.html */ "./src/app/components/pages/error-not-found-page/error-not-found-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ErrorNotFoundPageComponent);
    return ErrorNotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/error-page/error-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/error-page/error-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    error-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/error-page/error-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/error-page/error-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(_pageTitle, _meta) {
        this._pageTitle = _pageTitle;
        this._meta = _meta;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        this.setPageMetaData();
    };
    ErrorPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('Error - Adaptavist Library');
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/components/pages/error-page/error-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    error-unauthorised-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ErrorUnauthorisedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorUnauthorisedPageComponent", function() { return ErrorUnauthorisedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ErrorUnauthorisedPageComponent = /** @class */ (function () {
    function ErrorUnauthorisedPageComponent(_pageTitle, _meta) {
        this._pageTitle = _pageTitle;
        this._meta = _meta;
    }
    ErrorUnauthorisedPageComponent.prototype.ngOnInit = function () {
        this.setPageMetaData();
    };
    ErrorUnauthorisedPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('401 Unauthorized - Adaptavist Library');
    };
    ErrorUnauthorisedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-unauthorised-page',
            template: __webpack_require__(/*! ./error-unauthorised-page.component.html */ "./src/app/components/pages/error-unauthorised-page/error-unauthorised-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ErrorUnauthorisedPageComponent);
    return ErrorUnauthorisedPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/help-page/help-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/help-page/help-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-page--wrapper l-padding-top--double-gutter l-padding-bottom--double-gutter\">\n    <h1 class=\"font-extra-bold\"><abbr title=\"Frequently Asked Questions\">FAQ</abbr></h1>\n    <h3>What is the Adaptavist Library?</h3>\n    <p>\n        The Adaptavist Library is a curated collection of tailor-made scripts designed to enable Atlassian users\n        to leverage Adaptavist products to create automations and perform complex customisations.\n    </p>\n    <h3>What can I use the Adaptavist Library for?</h3>\n    <p>\n        The Library contains scripts across many different features of ScriptRunner, from advanced Post\n        Functions and Behaviours to simple Snippets of code which can be used to create custom solutions.\n    </p>\n    <p>\n        The Adaptavist Library provides an array of out-of-the-box functionality, all you need to do is simply\n        copy and paste one of the pre-written scripts straight into ScriptRunner. One of the best aspects of the\n        library is that most of the hard work is already done for you, it is just a matter of selecting the\n        functionality you need.\n    </p>\n    <p>\n        With the Adaptavist Library you can:\n    </p>\n    <ul>\n        <li>\n            Leverage ready-made automation scripts across all ScriptRunner products\n        </li>\n        <li>\n            Maximise the value of Adaptavist Apps to carry out complex customisations with confidence\n        </li>\n        <li>\n            Put best standards in place for data compliance, auditing, and company regulations\n        </li>\n    </ul>\n    <h3>What platforms does it support?</h3>\n    <p>\n        The Adaptavist Library currently provides code suitable for use on Server and Cloud platforms, with the\n        aim to expand to Data Center in the near future.\n    </p>\n    <h3>How do I create an account?</h3>\n    <p>\n        First you need to create an account to access the content in the library. Simply click the Create\n        Library link in the header and then enter your e-mail address and password, you will then receive a\n        verification e-mail. Once your email is verified you can start using the Adaptavist Library.\n    </p>\n    <h3>Do I need to pay to access the library?</h3>\n    <p>\n        No, you don't need to pay for a licence to access Adaptavist Library, it is free.\n    </p>\n    <h3>Once I sign up, how do I use it?</h3>\n    <p>\n        Once you've signed up, simply find the Collection or Script that you want, and choose the relevant\n        ScriptRunner Platform (Cloud, Server,tc.). For additional support on getting the most from the library\n        you can access the ScriptRunner documentation (\n        <a href=\"https://scriptrunner.adaptavist.com\">scriptrunner.adaptavist.com</a>\n        ),\n        or contact Adaptavist directly.\n    </p>\n    <h3>What is the difference between a 'collection' and a 'script'?</h3>\n    <p>A 'script' is a piece of code that provides a type of functionality in ScriptRunner, you can copy the\n       code and paste it in ScriptRunner's console to build the functionality you need. A 'collection' is a\n       group of dedicated scripts that all provide similar functionality.</p>\n    <h3>What script collections are available?</h3>\n    <p>Currently script collections support ScriptRunner for JIRA Server and Cloud. Support for Apps for\n       Confluence Server, Confluence Cloud, Bitbucket Server, and Bamboo Server will be released soon.</p>\n    <h3>Is the library just for developers?</h3>\n    <p>\n        The Adaptavist Library is built for everyone. The aim of the library is to provide users with ready made\n        scripts to minimise time spent writing code from scratch. Whether you're a pro developer, a complete\n        beginner or a non-technical Jira admin, the Adaptavist Library is easy-to-use and will help you unlock\n        new opportunities using your Adaptavist apps.\n    </p>\n    <h3>How regularly are scripts updated or added to the library?</h3>\n    <p>\n        We aim to continuously expand our library with new script solutions, if you would like to contribute to\n        this please contact us using our\n        <a href=\"https://library.adaptavist.com/feedback\">dedicated feedback\n                                                          form\n        </a>\n        .\n    </p>\n    <h3>If I experience an issue how can I get help?</h3>\n    <p>\n        If you experience an issue using the Adaptavist Library, please contact the support portal service desk\n        for the product in question (e.g. ScriptRunner for Jira) and raise a ticket. Please include a link to\n        the Adaptavist Library page you are experiencing issues with and provide a short description of the\n        problem and Adaptavist support will get in touch.\n    </p>\n    <p>\n        Please note that the Adaptavist Library is a free service and as yet does not have a dedicated support\n        portal therefore please use the individual product support desk to raise a query.\n    </p>\n    <h3>Can I share my own scripts in the library?</h3>\n    <p>\n        We are actively looking for anyone who has their own script examples they'd like to share. If you want\n        to share your ScriptRunner awesomeness with the community, please contact us using our\n        <a\n            href=\"https://library.adaptavist.com/feedback\"\n        >dedicated feedback form\n        </a>\n        .\n    </p>\n    <h3>How long will the library's beta phase last?</h3>\n    <p>\n        We will keep you informed every step of the way so stay tuned to learn more about our future plans for\n        the Adaptavist Library. In the meantime, please give your feedback using our\n        <a\n            href=\"https://library.adaptavist.com/feedback\"\n        >dedicated feedback form\n        </a>\n        .\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/help-page/help-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/help-page/help-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: HelpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageComponent", function() { return HelpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HelpPageComponent = /** @class */ (function () {
    function HelpPageComponent(_pageTitle, _meta) {
        this._pageTitle = _pageTitle;
        this._meta = _meta;
    }
    HelpPageComponent.prototype.ngOnInit = function () {
        this.setPageMetaData();
    };
    HelpPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('FAQ - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: 'What is the Adaptavist Library?' });
    };
    HelpPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help-page',
            template: __webpack_require__(/*! ./help-page.component.html */ "./src/app/components/pages/help-page/help-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], HelpPageComponent);
    return HelpPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-hero-homepage (_search)=\"handleSearch($event)\" [data]=\"homeBannerData\"></ui-hero-homepage>\n<ui-side-bar-and-content>\n    <div sidebar>\n        <app-side-bar-partial></app-side-bar-partial>\n    </div>\n    <div content>\n        <ui-section-title titleBase=\"Newest in\" titleEmphasis=\"Collections\"></ui-section-title>\n        <ui-card-container columns=\"l-grid--1of3\">\n            <ui-card-collection-item\n                    *ngFor=\"let card of newestCollectionCards\" [card]=\"card\" class=\"l-grid-cell\"\n            >\n                <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                    <a [queryParams]=\"category.params\" [routerLink]=\"category.link\">{{category.text}}</a>\n                    <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n                </ng-container>\n                <a [routerLink]=\"'/collection/' + card.slug\" link>View Collection ›</a>\n            </ui-card-collection-item>\n        </ui-card-container>\n        <ui-section-title titleBase=\"Most Popular in\" titleEmphasis=\"ScriptRunner\"></ui-section-title>\n        <ui-card-container columns=\"l-grid--1of3\">\n            <ui-card-item\n                    *ngFor=\"let card of popularScriptRunnerCards\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n            >\n                <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                    <a [queryParams]=\"category.params\" [routerLink]=\"category.link\">{{category.text}}</a>\n                    <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n                </ng-container>\n                <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n            </ui-card-item>\n        </ui-card-container>\n        <ui-section-title titleBase=\"Most Popular in\" titleEmphasis=\"Test Management\"></ui-section-title>\n        <ui-card-container columns=\"l-grid--1of3\">\n            <ui-card-item\n                    *ngFor=\"let card of popularTestManagementCards\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n            >\n                <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                    <a [queryParams]=\"category.params\" [routerLink]=\"category.link\">{{category.text}}</a>\n                    <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n                </ng-container>\n                <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n            </ui-card-item>\n        </ui-card-container>\n    </div>\n</ui-side-bar-and-content>\n"

/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_home_banner_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/home-banner.data */ "./src/data/home-banner.data.ts");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_entityService, _collectionService, _router, _pageTitle, _meta) {
        this._entityService = _entityService;
        this._collectionService = _collectionService;
        this._router = _router;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._homeBannerData = _data_home_banner_data__WEBPACK_IMPORTED_MODULE_3__["homeBannerData"];
        this._popularScriptRunnerCards = [];
        this._popularTestManagementCards = [];
        this._newestCollectionCards = [];
    }
    Object.defineProperty(HomePageComponent.prototype, "homeBannerData", {
        get: function () {
            return this._homeBannerData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "popularScriptRunnerCards", {
        get: function () {
            return this._popularScriptRunnerCards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "popularTestManagementCards", {
        get: function () {
            return this._popularTestManagementCards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePageComponent.prototype, "newestCollectionCards", {
        get: function () {
            return this._newestCollectionCards;
        },
        enumerable: true,
        configurable: true
    });
    HomePageComponent.prototype.ngOnInit = function () {
        this.getNewestCollections();
        this.getPopularScriptRunnerEntities();
        this.getPopularTestManagementEntities();
        this.setPageMetaData();
    };
    HomePageComponent.prototype.getNewestCollections = function () {
        var _this = this;
        this._collectionService.getNewestCollections(3)
            .subscribe(function (collections) { return _this._newestCollectionCards = collections.map(function (c) { return ({
            name: c.name,
            id: c.id,
            description: c.description,
            slug: c.slug,
            categories: [],
            updated_at: '',
            image: {
                src: 'https://placehold.it/630x260',
                alt: 'alt description'
            },
            creator: 'Adaptavist'
        }); }); });
    };
    HomePageComponent.prototype.getPopularScriptRunnerEntities = function () {
        var _this = this;
        this._entityService.getPopularInAppEntityList('script-runner-jira')
            .subscribe(function (entities) { return _this._popularScriptRunnerCards = entities.map(function (e) { return ({
            name: e.name,
            id: e.id,
            description: e.description,
            slug: e.slug,
            categories: _this._entityService.extractCategories(e),
            updated_at: e.updated_at
        }); }); });
    };
    HomePageComponent.prototype.getPopularTestManagementEntities = function () {
        var _this = this;
        this._entityService.getPopularInAppEntityList('project-configurator')
            .subscribe(function (entities) { return _this._popularTestManagementCards = entities.map(function (e) { return ({
            name: e.name,
            id: e.id,
            description: e.description,
            slug: e.slug,
            categories: _this._entityService.extractCategories(e),
            updated_at: e.updated_at
        }); }); });
    };
    HomePageComponent.prototype.handleSearch = function ($event) {
        if (!$event) {
            return;
        }
        this._router.navigateByUrl(this._router.createUrlTree(['search'], { queryParams: { searchTerm: $event } }));
    };
    HomePageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('Adaptavist Library');
        this._meta.updateTag({
            name: 'description',
            content: 'Keep all your Atlassian app scripts in one place.'
        });
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/pages/home-page/home-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"],
            _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home-page/home-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/home-page/home-page.module.ts ***!
  \****************************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/components/pages/home-page/home-page.component.ts");
/* harmony import */ var _partials_side_bar_partial_side_bar_partial_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/side-bar-partial/side-bar-partial.module */ "./src/app/components/partials/side-bar-partial/side-bar-partial.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                _partials_side_bar_partial_side_bar_partial_module__WEBPACK_IMPORTED_MODULE_5__["SideBarPartialModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["TypographyModule"]
            ],
            exports: [
                _home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
            ],
            declarations: [
                _home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/components/pages/library/library-collections-page/library-collections-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/pages/library/library-collections-page/library-collections-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-side-bar-and-content *ngFor=\"let collection of collections\">\n    <div sidebar>\n        <ui-card-collection-item [card]=\"collection\">\n            <ng-container categories *ngFor=\"let category of collection.categories; let i = index\">\n                <a [routerLink]=\"category.link\">{{category.text}}</a>\n                <ui-text-list-separator\n                    [index]=\"i\"\n                    [length]=\"collection.categories.length\"\n                ></ui-text-list-separator>\n            </ng-container>\n            <a [routerLink]=\"'/collection/' + collection.slug\" link>View Collection ›</a>\n        </ui-card-collection-item>\n    </div>\n    <div content>\n        <ui-card-container columns=\"l-grid--1of3\">\n            <ui-card-item\n                *ngFor=\"let card of collection.entities\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n            >\n                <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                    <a [routerLink]=\"category.link\">{{category.text}}</a>\n                    <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n                </ng-container>\n                <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n            </ui-card-item>\n        </ui-card-container>\n    </div>\n</ui-side-bar-and-content>\n"

/***/ }),

/***/ "./src/app/components/pages/library/library-collections-page/library-collections-page.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/pages/library/library-collections-page/library-collections-page.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LibraryCollectionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryCollectionsPageComponent", function() { return LibraryCollectionsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/collection/collection.service */ "./src/app/services/collection/collection.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var LibraryCollectionsPageComponent = /** @class */ (function () {
    function LibraryCollectionsPageComponent(_collectionService, _entityService, _pageTitle, _meta) {
        this._collectionService = _collectionService;
        this._entityService = _entityService;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._collections = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    Object.defineProperty(LibraryCollectionsPageComponent.prototype, "collections", {
        get: function () {
            return this._collections.getValue();
        },
        enumerable: true,
        configurable: true
    });
    LibraryCollectionsPageComponent.prototype.ngOnInit = function () {
        this.getMyCollections();
        this.setPageMetaData();
    };
    LibraryCollectionsPageComponent.prototype.getMyCollections = function () {
        var _this = this;
        this._collectionService.getMyCollectionList()
            .subscribe(function (myCollections) { return _this._collections.next(myCollections.map(function (c) { return ({
            id: c.id,
            slug: c.slug,
            name: c.name,
            description: c.description,
            image: {
                src: 'https://placehold.it/400x300',
                alt: 'blah'
            },
            creator: 'Adaptavist',
            categories: [],
            updated_at: c.updated_at,
            entities: c.entities.map(function (e) { return ({
                name: e.name,
                id: e.id,
                description: e.description,
                slug: e.slug,
                categories: _this._entityService.extractCategories(e),
                updated_at: e.updated_at
            }); })
        }); })); });
    };
    LibraryCollectionsPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('Collections - My Library - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: 'View the Collections you have saved to your library.' });
    };
    LibraryCollectionsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-collections-page',
            template: __webpack_require__(/*! ./library-collections-page.component.html */ "./src/app/components/pages/library/library-collections-page/library-collections-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_collection_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]])
    ], LibraryCollectionsPageComponent);
    return LibraryCollectionsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/library/library-entities-page/library-entities-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/pages/library/library-entities-page/library-entities-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-card-container columns=\"l-grid--1of4\">\n    <ui-card-item\n        *ngFor=\"let card of cards\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n    >\n        <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n            <a [routerLink]=\"'/search/category/' + category.link\">{{category.text}}</a>\n            <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n        </ng-container>\n        <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n    </ui-card-item>\n</ui-card-container>\n"

/***/ }),

/***/ "./src/app/components/pages/library/library-entities-page/library-entities-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/pages/library/library-entities-page/library-entities-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LibraryEntitiesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryEntitiesPageComponent", function() { return LibraryEntitiesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var LibraryEntitiesPageComponent = /** @class */ (function () {
    function LibraryEntitiesPageComponent(_route, _entityService, _pageTitle, _meta) {
        this._route = _route;
        this._entityService = _entityService;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._cards = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    Object.defineProperty(LibraryEntitiesPageComponent.prototype, "cards", {
        get: function () {
            return this._cards.getValue();
        },
        enumerable: true,
        configurable: true
    });
    LibraryEntitiesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setPageMetaData();
        this._route.paramMap.subscribe(function (params) { return _this.getMyEntities(params.get('type')); });
    };
    LibraryEntitiesPageComponent.prototype.getMyEntities = function (type) {
        var _this = this;
        this._entityService.getMyEntityList(type)
            .subscribe(function (myEntities) { return _this._cards.next(myEntities.map(function (e) { return ({
            name: e.name,
            id: e.id,
            description: e.description,
            slug: e.slug,
            categories: _this._entityService.extractCategories(e),
            updated_at: e.updated_at
        }); })); });
    };
    LibraryEntitiesPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('Entities - My Library - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: 'View the Entities you have saved to your library.' });
    };
    LibraryEntitiesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-entities-page',
            template: __webpack_require__(/*! ./library-entities-page.component.html */ "./src/app/components/pages/library/library-entities-page/library-entities-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]])
    ], LibraryEntitiesPageComponent);
    return LibraryEntitiesPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/library/library-page/library-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/library/library-page/library-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-hero-my-library></ui-hero-my-library>\n<div class=\"l-page--wrapper\">\n    <div class=\"l-display--flex l-grid--1of2 l-padding-top--gutter\">\n        <div class=\"l-grid-cell\">\n            <ui-tab-menu-list>\n                <ui-tab-menu-item *ngFor=\"let tab of tabs\">\n                    <a\n                        [routerLink]=\"'/library/' + tab.link\"\n                        class=\"c-tab-menu--link l-margin-right--gutter\"\n                        routerLinkActive=\"active\"\n                    ><span class=\"c-menu-tab--emphasis\">{{tab.count}}</span> {{tab.text}}</a>\n                </ui-tab-menu-item>\n            </ui-tab-menu-list>\n        </div>\n        <div class=\"l-grid-cell\">\n            <div class=\"u-text-align--right\">\n                <ui-tab-menu-list>\n                    <ui-tab-menu-item>\n                        <a routerLink=\"/library/my-code\" routerLinkActive=\"active\" class=\"c-tab-menu--link\">\n                            <span class=\"c-menu-tab--emphasis\">12</span> My Code\n                        </a>\n                    </ui-tab-menu-item>\n                </ui-tab-menu-list>\n            </div>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/library/library-page/library-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/library/library-page/library-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LibraryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageComponent", function() { return LibraryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var LibraryPageComponent = /** @class */ (function () {
    function LibraryPageComponent(route, _pageTitle, _meta) {
        this.route = route;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        // Note: will need to marry up with router
        this._tabs = [
            {
                text: 'Collections',
                link: 'added-collections',
                count: 0,
            },
            {
                text: 'Scripts',
                link: 'added-scripts',
                count: 0,
            },
            {
                text: 'Snippets',
                link: 'added-snippets',
                count: 0,
            }
        ];
    }
    Object.defineProperty(LibraryPageComponent.prototype, "tabs", {
        get: function () {
            return this._tabs;
        },
        enumerable: true,
        configurable: true
    });
    LibraryPageComponent.prototype.ngOnInit = function () {
        this.setPageMetaData();
    };
    LibraryPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('My Library - Adaptavist Library');
        this._meta.updateTag({ name: 'description', content: 'View the Scripts, Snippets and Collections you have saved to your library.' });
    };
    LibraryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-page',
            template: __webpack_require__(/*! ./library-page.component.html */ "./src/app/components/pages/library/library-page/library-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], LibraryPageComponent);
    return LibraryPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/library/library-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/library/library-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: LibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function() { return LibraryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _library_collections_page_library_collections_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library-collections-page/library-collections-page.component */ "./src/app/components/pages/library/library-collections-page/library-collections-page.component.ts");
/* harmony import */ var _library_entities_page_library_entities_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library-entities-page/library-entities-page.component */ "./src/app/components/pages/library/library-entities-page/library-entities-page.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _library_page_library_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library-page/library-page.component */ "./src/app/components/pages/library/library-page/library-page.component.ts");







var routes = [
    {
        path: 'library',
        redirectTo: '/library/my-code',
        pathMatch: 'full'
    },
    {
        path: 'library',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _library_page_library_page_component__WEBPACK_IMPORTED_MODULE_6__["LibraryPageComponent"],
        children: [
            {
                path: 'added-collections',
                component: _library_collections_page_library_collections_page_component__WEBPACK_IMPORTED_MODULE_3__["LibraryCollectionsPageComponent"]
            },
            {
                path: ':type',
                component: _library_entities_page_library_entities_page_component__WEBPACK_IMPORTED_MODULE_4__["LibraryEntitiesPageComponent"]
            }
        ]
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/pages/library/library.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/pages/library/library.module.ts ***!
  \************************************************************/
/*! exports provided: LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _library_page_library_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library-page/library-page.component */ "./src/app/components/pages/library/library-page/library-page.component.ts");
/* harmony import */ var _partials_side_bar_partial_side_bar_partial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/side-bar-partial/side-bar-partial.module */ "./src/app/components/partials/side-bar-partial/side-bar-partial.module.ts");
/* harmony import */ var _library_entities_page_library_entities_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library-entities-page/library-entities-page.component */ "./src/app/components/pages/library/library-entities-page/library-entities-page.component.ts");
/* harmony import */ var _library_collections_page_library_collections_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library-collections-page/library-collections-page.component */ "./src/app/components/pages/library/library-collections-page/library-collections-page.component.ts");
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library-routing.module */ "./src/app/components/pages/library/library-routing.module.ts");










var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _partials_side_bar_partial_side_bar_partial_module__WEBPACK_IMPORTED_MODULE_6__["SideBarPartialModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["MyLibraryModule"],
                _library_routing_module__WEBPACK_IMPORTED_MODULE_9__["LibraryRoutingModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["TypographyModule"]
            ],
            exports: [
                _library_page_library_page_component__WEBPACK_IMPORTED_MODULE_5__["LibraryPageComponent"]
            ],
            declarations: [
                _library_page_library_page_component__WEBPACK_IMPORTED_MODULE_5__["LibraryPageComponent"],
                _library_entities_page_library_entities_page_component__WEBPACK_IMPORTED_MODULE_7__["LibraryEntitiesPageComponent"],
                _library_collections_page_library_collections_page_component__WEBPACK_IMPORTED_MODULE_8__["LibraryCollectionsPageComponent"],
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/components/pages/search-results-page/search-results-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/search-results-page/search-results-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-hero-search [searchTerm]=\"search.searchTerm\"></ui-hero-search>\n<ui-side-bar-and-content>\n    <div sidebar>\n        <app-filter-bar-partial\n            (toggleFilter)=\"handleFilterToggle($event)\"\n            [_filterGroups]=\"filtersGroups\"\n        ></app-filter-bar-partial>\n    </div>\n    <div content>\n        <h2>Search Results</h2>\n        <p>\n            {{resultCount}} Results\n            <ng-container *ngIf=\"search.searchTerm.getValue() || filters.hasFilters()\">\n                filtered by\n                <ui-filter-results-tag\n                        (click)=\"search.clearSearchTerm()\"\n                        *ngIf=\"search.searchTerm.getValue()\"\n                >\n                    &ldquo;{{search.searchTerm.getValue()}}&rdquo;\n                </ui-filter-results-tag>\n                <app-tag-list\n                    (removeFilter)=\"handleFilterToggle($event)\"\n                    [_filterGroups]=\"filtersGroups\"\n                ></app-tag-list>\n            </ng-container>\n        </p>\n        <ui-card-container columns=\"l-grid--1of3\">\n            <ui-card-item\n                *ngFor=\"let card of cards\" [card]=\"card\" class=\"l-grid-cell l-padding-bottom--gutter\"\n            >\n                <ng-container *ngFor=\"let category of card.categories; let i = index\" categories>\n                    <a [routerLink]=\"'/search/category/' + category.link\">{{category.text}}</a>\n                    <ui-text-list-separator [index]=\"i\" [length]=\"card.categories.length\"></ui-text-list-separator>\n                </ng-container>\n                <a [routerLink]=\"'/entity/' + card.slug\" link>View Script ›</a>\n            </ui-card-item>\n        </ui-card-container>\n        <ui-pagination [pagedData$]=\"pagedData$\" (handlePageChange)=\"handlePageChange($event)\"></ui-pagination>\n    </div>\n</ui-side-bar-and-content>\n"

/***/ }),

/***/ "./src/app/components/pages/search-results-page/search-results-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pages/search-results-page/search-results-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SearchResultsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPageComponent", function() { return SearchResultsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_search_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/search/search-filter.service */ "./src/app/services/search/search-filter.service.ts");
/* harmony import */ var _services_search_search_term_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search/search-term.service */ "./src/app/services/search/search-term.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/entity/entity.service */ "./src/app/services/entity/entity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var SearchResultsPageComponent = /** @class */ (function () {
    function SearchResultsPageComponent(_filters, _search, _http, _router, _entityService, _pageTitle, _meta) {
        this._filters = _filters;
        this._search = _search;
        this._http = _http;
        this._router = _router;
        this._entityService = _entityService;
        this._pageTitle = _pageTitle;
        this._meta = _meta;
        this._pagedData$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]({
            data: [],
            meta: {
                page: 1,
                total: 0,
                limit: 6
            }
        });
    }
    Object.defineProperty(SearchResultsPageComponent.prototype, "pagedData$", {
        get: function () {
            return this._pagedData$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "filtersGroups", {
        get: function () {
            return this._filters.filterGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "resultCount", {
        get: function () {
            return this._pagedData$.getValue().meta.total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "page", {
        get: function () {
            return this._pagedData$.getValue().meta.page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "search", {
        get: function () {
            return this._search;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResultsPageComponent.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        enumerable: true,
        configurable: true
    });
    SearchResultsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Todo: Filters, Search and Page/Limit data should be Observers/Subjects
        //       Which can be merged with a single subscriber to perform the search.
        // Todo: Need to handle resetting page when filter or search is updated
        this.initSearchFilterService();
        var params = this.getParamsFromQueryString();
        this._filters.selectFiltersFromQueryParams(params);
        this._search.addSearchTerm(params);
        var page = params.find(function (p) { return p.paramName === 'page'; });
        var current_page = page ? +page.value : 1;
        this._pagedData$.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._pagedData$.getValue(), { meta: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._pagedData$.getValue().meta, { page: current_page }) }));
        this.fetchSearchResults();
        this._search.searchTerm.subscribe(function () { return _this.performSearch(); });
        this.pagedData$.subscribe(function (response) {
            _this._cards = response.data.map(function (e) { return ({
                name: e.name,
                id: e.id,
                description: e.description,
                slug: e.slug,
                categories: _this._entityService.extractCategories(e),
                updated_at: e.updated_at
            }); });
        });
        this.setPageMetaData();
    };
    SearchResultsPageComponent.prototype.getQueryString = function () {
        var filterQuery = this._filters.getQueryStringWithNames();
        var searchQuery = this._search.getSearchTermQueryString();
        var page = this._pagedData$.getValue().meta.page;
        var limit = this._pagedData$.getValue().meta.limit;
        var endpoint = "/v2/search?page=" + page + "&limit=" + limit;
        if (filterQuery && searchQuery) {
            return endpoint + "&" + filterQuery + "&" + searchQuery;
        }
        else if (filterQuery) {
            return endpoint + "&" + filterQuery;
        }
        else if (searchQuery) {
            return endpoint + "&" + searchQuery;
        }
        return endpoint;
    };
    SearchResultsPageComponent.prototype.handleFilterToggle = function (_a) {
        var filterName = _a.filterName, slug = _a.slug;
        this._filters.getFilterGroup(filterName).toggleFilter(slug);
        this.performSearch();
    };
    SearchResultsPageComponent.prototype.performSearch = function () {
        this._router.navigateByUrl(this._router.createUrlTree(['search'], { queryParams: this.getParams() }));
        this.fetchSearchResults();
    };
    SearchResultsPageComponent.prototype.handlePageChange = function ($event) {
        this._pagedData$.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._pagedData$.getValue(), { meta: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._pagedData$.getValue().meta, { page: $event }) }));
        this.performSearch();
    };
    // Todo: Clean up the way response data is mapped to newestCollectionCards
    SearchResultsPageComponent.prototype.fetchSearchResults = function () {
        var _this = this;
        this._http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + this.getQueryString())
            .subscribe(function (response) {
            _this.pagedData$.next({
                data: response.data,
                meta: {
                    page: response.current_page,
                    limit: response.per_page,
                    total: response.total
                }
            });
        });
    };
    SearchResultsPageComponent.prototype.initSearchFilterService = function () {
        // Todo: pull in filter group data from API
        this._filters.resetFilters();
        this._filters
            .addFilterGroup('Discover', [
            {
                name: 'Most Popular',
                slug: 'most-popular',
            },
            {
                name: 'Most Viewed',
                slug: 'most-viewed',
            },
            {
                name: 'Top Picks',
                slug: 'top-picks',
            },
            {
                name: 'Recently Updated',
                slug: 'recently-updated',
            }
        ], true)
            .addFilterGroup('Products', [
            {
                name: 'Jira Software',
                slug: 'jira-software',
            },
            {
                name: 'Jira',
                slug: 'jira',
            },
            {
                name: 'Confluence',
                slug: 'confluence',
            },
            {
                name: 'Bitbucket',
                slug: 'bitbucket',
            }
        ], false)
            .addFilterGroup('Apps', [
            {
                name: 'ScriptRunner',
                slug: 'scriptrunner',
            },
            {
                name: 'Test Management',
                slug: 'test-management',
            }
        ], false)
            .addFilterGroup('Platforms', [
            {
                name: 'Cloud',
                slug: 'cloud',
            },
            {
                name: 'Server',
                slug: 'server',
            },
            {
                name: 'Data Centre',
                slug: 'data-centre',
            }
        ], false);
    };
    SearchResultsPageComponent.prototype.getParamsFromQueryString = function () {
        try {
            return this._router.url
                .split('?')[1]
                .split('&')
                .map(function (p) {
                var _a = p.split('='), paramName = _a[0], value = _a[1];
                return { paramName: paramName, value: value };
            });
        }
        catch (e) {
            return [];
        }
    };
    SearchResultsPageComponent.prototype.getParams = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ page: this._pagedData$.getValue().meta.page }, this._filters.getParams(), this._search.getParams());
    };
    SearchResultsPageComponent.prototype.setPageMetaData = function () {
        this._pageTitle.setTitle('Search Results - Adaptavist Library');
        this._meta.updateTag({
            name: 'description',
            content: 'Search across the Adaptavist Library for Atlassian Apps code snippets, workflows and collections.'
        });
    };
    SearchResultsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results-page',
            template: __webpack_require__(/*! ./search-results-page.component.html */ "./src/app/components/pages/search-results-page/search-results-page.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_search_filter_service__WEBPACK_IMPORTED_MODULE_2__["SearchFilterService"],
            _services_search_search_term_service__WEBPACK_IMPORTED_MODULE_3__["SearchTermService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_entity_entity_service__WEBPACK_IMPORTED_MODULE_7__["EntityService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"]])
    ], SearchResultsPageComponent);
    return SearchResultsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/search-results-page/search-results-page.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/pages/search-results-page/search-results-page.module.ts ***!
  \************************************************************************************/
/*! exports provided: SearchResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPageModule", function() { return SearchResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _search_results_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results-page.component */ "./src/app/components/pages/search-results-page/search-results-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partials_filter_bar_partial_filter_bar_partial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/filter-bar-partial/filter-bar-partial.module */ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.module.ts");
/* harmony import */ var _tag_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-list.component */ "./src/app/components/pages/search-results-page/tag-list.component.ts");








var SearchResultsPageModule = /** @class */ (function () {
    function SearchResultsPageModule() {
    }
    SearchResultsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["ExploreModule"],
                _partials_filter_bar_partial_filter_bar_partial_module__WEBPACK_IMPORTED_MODULE_6__["FilterBarPartialModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["TypographyModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]
            ],
            exports: [
                _search_results_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsPageComponent"],
                _tag_list_component__WEBPACK_IMPORTED_MODULE_7__["TagListComponent"]
            ],
            declarations: [
                _search_results_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsPageComponent"],
                _tag_list_component__WEBPACK_IMPORTED_MODULE_7__["TagListComponent"]
            ]
        })
    ], SearchResultsPageModule);
    return SearchResultsPageModule;
}());



/***/ }),

/***/ "./src/app/components/pages/search-results-page/tag-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/search-results-page/tag-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagListComponent = /** @class */ (function () {
    function TagListComponent() {
        this.removeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(TagListComponent.prototype, "filterGroups", {
        get: function () {
            return this._filterGroups;
        },
        enumerable: true,
        configurable: true
    });
    TagListComponent.prototype.ngOnInit = function () {
    };
    TagListComponent.prototype.getSelectedTagList = function () {
        return this._filterGroups.reduce(function (arr, fg) { return arr.concat(fg.getSelected().map(function (f) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, f, { filterName: fg.name })); })); }, []);
    };
    TagListComponent.prototype.removeTag = function (filterName, slug) {
        this.removeFilter.emit({ filterName: filterName, slug: slug });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagListComponent.prototype, "removeFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagListComponent.prototype, "_filterGroups", void 0);
    TagListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-list',
            template: "\n        <ui-filter-results-tag *ngFor=\"let tag of getSelectedTagList()\" (click)=\"removeTag(tag.filterName, tag.slug)\">{{tag.name}}</ui-filter-results-tag>\n    ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagListComponent);
    return TagListComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/cookie-banner/cookie-banner.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/partials/cookie-banner/cookie-banner.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"displayCookieBanner\" (ngSubmit)=\"submitCookiePreferences()\" [formGroup]=\"cookiePreferenceForm\" id=\"gdpr-cookie-message\" style=\"\">\n    <h4>Accept Cookies &amp; Privacy Policy?</h4>\n    <p>Adaptavist is committed to preserving the privacy of all visitors to this website and of clients using our products and services. </p>\n    <div *ngIf=\"displayMoreInfo\" id=\"gdpr-cookie-types\">\n        <h5>Select cookies to accept:</h5>\n        <ul>\n            <li>\n                <input type=\"checkbox\" name=\"gdpr[]\" value=\"necessary\" checked=\"checked\" disabled=\"disabled\">\n                <label class=\"ml-vsm-res\" title=\"These are cookies that are essential for the website to work correctly.\">Necessary</label>\n            </li>\n            <li>\n                <input type=\"checkbox\" formControlName=\"siteFunctionality\" id=\"gdpr-cookietype-site-functionality\" name=\"gdpr[]\" value=\"site-functionality\" data-auto=\"on\" checked=\"checked\">\n                <label class=\"ml-vsm-res\" for=\"gdpr-cookietype-site-functionality\" title=\"\">Site Functionality</label></li>\n            <li>\n                <input type=\"checkbox\" formControlName=\"analytics\" id=\"gdpr-cookietype-analytics\" name=\"gdpr[]\" value=\"analytics\" data-auto=\"on\" checked=\"checked\">\n                <label class=\"ml-vsm-res\" for=\"gdpr-cookietype-analytics\" title=\"\">Site Improvements</label>\n            </li>\n        </ul>\n        <input type=\"checkbox\" formControlName=\"customisedCookies\" id=\"gdpr-customised-cookies\" name=\"gdpr[]\" value=\"customisedCookies\" style=\"display: none;\">\n        <a href=\"https://www.adaptavist.com/company/privacy-policy\">See our Privacy Policy</a>\n    </div>\n    <div>\n        <button id=\"gdpr-cookie-accept\" type=\"submit\">\n            Accept Cookies\n        </button>\n        <a (click)=\"showMoreInfo()\" id=\"gdpr-cookie-advanced\">More information</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/partials/cookie-banner/cookie-banner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/partials/cookie-banner/cookie-banner.component.ts ***!
  \******************************************************************************/
/*! exports provided: CookieBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBannerComponent", function() { return CookieBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cookie/cookie.service */ "./src/app/services/cookie/cookie.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_segment_segment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/segment/segment.service */ "./src/app/services/segment/segment.service.ts");







var CookieBannerComponent = /** @class */ (function () {
    function CookieBannerComponent(profile, formBuilder, cookieService, appService) {
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.appService = appService;
        this.displayMoreInfo = false;
        this.displayCookieBanner = false;
    }
    CookieBannerComponent.prototype.ngOnInit = function () {
        // Only display cookie banner within client browser
        if (this.appService.isRunningInClientBrowser()) {
            // If the user has already interacted with the Cookie banner
            if (_services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"].get('cookieControl') === 'true') {
                // Don't display it again
                this.displayCookieBanner = false;
            }
            else {
                // Otherwise, display it
                this.displayCookieBanner = true;
                // Build the preference form
                this.cookiePreferenceForm = this.formBuilder.group({
                    siteFunctionality: [true],
                    analytics: [true],
                    customisedCookies: [false]
                });
            }
        }
    };
    CookieBannerComponent.prototype.showMoreInfo = function () {
        this.displayMoreInfo = true;
        this.cookiePreferenceForm = this.formBuilder.group({
            siteFunctionality: [true],
            analytics: [true],
            customisedCookies: [true]
        });
    };
    CookieBannerComponent.prototype.submitCookiePreferences = function () {
        var _this = this;
        var siteFunctionality = this.cookiePreferenceForm.get('siteFunctionality').value;
        var analytics = this.cookiePreferenceForm.get('analytics').value;
        var customisedCookies = this.cookiePreferenceForm.get('customisedCookies').value;
        var chosenCookies = [];
        // Desired outcome for the chosenCookies is to be ['site-functionality', 'analytics']
        if (siteFunctionality) {
            chosenCookies.push('\'site-functionality\'');
            this.appService.primeSurveyMonkey();
        }
        if (analytics) {
            chosenCookies.push('\'analytics\'');
            this.appService.primeSegmentAnalytics();
        }
        this.cookieService.set('cookieControl', 'true');
        this.cookieService.set('cookieControlPrefs', '[' + chosenCookies.join(', ') + ']');
        // Send AJAX request to API with preferences
        this.cookieService.createCookieConsent(customisedCookies, chosenCookies);
        this.displayCookieBanner = false;
        if (this.profile.isAuthenticated()) {
            _services_segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].identify(this.profile.profile.sub, {
                identify: {
                    userId: this.profile.profile.sub,
                    email: this.profile.profile.email,
                    firstName: this.profile.profile.firstName,
                    lastName: this.profile.profile.lastName,
                    nickname: this.profile.profile.nickname,
                }
            }, null, function () { return _services_segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].page({ logged_in: _this.profile.isAuthenticatedAndVerified(), accepted_cookies: true }); });
        }
        else {
            _services_segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].page({ logged_in: false, accepted_cookies: true });
        }
    };
    CookieBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cookie-banner',
            template: __webpack_require__(/*! ./cookie-banner.component.html */ "./src/app/components/partials/cookie-banner/cookie-banner.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_cookie_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _services_application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
    ], CookieBannerComponent);
    return CookieBannerComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-filter-menu *ngFor=\"let filterGroup of filterGroups\" [title]=\"filterGroup.name\">\n    <ul class=\"c-filter-menu--list\">\n        <li *ngFor=\"let filter of filterGroup.filters\" class=\"c-filter-menu--item\">\n            <button\n                    (click)=\"handleFilterToggle(filterGroup.name, filter.slug)\"\n                    class=\"c-filter-menu--link\"\n                    [ngClass]=\"filter.isSelected ? 'active' : ''\"\n            >{{filter.name}}</button>\n        </li>\n    </ul>\n</ui-filter-menu>\n"

/***/ }),

/***/ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FilterBarPartialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBarPartialComponent", function() { return FilterBarPartialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterBarPartialComponent = /** @class */ (function () {
    function FilterBarPartialComponent() {
        this.toggleFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(FilterBarPartialComponent.prototype, "filterGroups", {
        get: function () {
            return this._filterGroups;
        },
        enumerable: true,
        configurable: true
    });
    FilterBarPartialComponent.prototype.ngOnInit = function () {
    };
    FilterBarPartialComponent.prototype.handleFilterToggle = function (filterName, slug) {
        this.toggleFilter.emit({ filterName: filterName, slug: slug });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterBarPartialComponent.prototype, "toggleFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FilterBarPartialComponent.prototype, "_filterGroups", void 0);
    FilterBarPartialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-bar-partial',
            template: __webpack_require__(/*! ./filter-bar-partial.component.html */ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterBarPartialComponent);
    return FilterBarPartialComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/partials/filter-bar-partial/filter-bar-partial.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FilterBarPartialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBarPartialModule", function() { return FilterBarPartialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _filter_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-bar-partial.component */ "./src/app/components/partials/filter-bar-partial/filter-bar-partial.component.ts");





var FilterBarPartialModule = /** @class */ (function () {
    function FilterBarPartialModule() {
    }
    FilterBarPartialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["FiltersModule"],
            ],
            exports: [
                _filter_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__["FilterBarPartialComponent"]
            ],
            declarations: [
                _filter_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__["FilterBarPartialComponent"]
            ]
        })
    ], FilterBarPartialModule);
    return FilterBarPartialModule;
}());



/***/ }),

/***/ "./src/app/components/partials/header-bar-partial/header-bar-partial.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/partials/header-bar-partial/header-bar-partial.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-page-header-bar>\n    <a logo routerLink=\"/\">\n        <img\n            alt=\"Adaptavist Library\"\n            class=\"c-page-header-bar--logo\"\n            src=\"/assets/images/logos/adaptavist-library-logo.png\"\n        >\n    </a>\n    <ng-container menu>\n        <a\n            class=\"c-library-menu--link\"\n            routerLink=\"/help\"\n        >Help\n        </a>\n        <ng-container *ngIf=\"profile.isAuthenticatedAndVerified()\">\n            <a\n                class=\"c-library-menu--link l-margin-left--gutter\"\n                routerLink=\"/library\"\n            >My Library\n            </a>\n            <a\n                (click)=\"auth.logout()\"\n                class=\"c-library-menu--link l-margin-left--gutter\" tabindex=\"0\"\n            >Log Out\n            </a>\n        </ng-container>\n        <ng-container *ngIf=\"!profile.isAuthenticated()\">\n            <a (click)=\"auth.login()\" class=\"c-library-menu--link l-margin-left--gutter\" tabindex=\"0\">Join / Log in</a>\n        </ng-container>\n    </ng-container>\n</ui-page-header-bar>\n"

/***/ }),

/***/ "./src/app/components/partials/header-bar-partial/header-bar-partial.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/partials/header-bar-partial/header-bar-partial.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HeaderBarPartialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarPartialComponent", function() { return HeaderBarPartialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");




var HeaderBarPartialComponent = /** @class */ (function () {
    function HeaderBarPartialComponent(auth, profile) {
        this.auth = auth;
        this.profile = profile;
    }
    HeaderBarPartialComponent.prototype.ngOnInit = function () {
    };
    HeaderBarPartialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-bar-partial',
            template: __webpack_require__(/*! ./header-bar-partial.component.html */ "./src/app/components/partials/header-bar-partial/header-bar-partial.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], HeaderBarPartialComponent);
    return HeaderBarPartialComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/side-bar-partial/side-bar-partial.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/partials/side-bar-partial/side-bar-partial.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let filterMenu of filterData\">\n    <ui-filter-menu [title]=\"filterMenu.title\">\n        <ul class=\"c-filter-menu--list\">\n            <li *ngFor=\"let filter of filterMenu.filters\" class=\"c-filter-menu--item\">\n                <a\n                    routerLink=\"/search\"\n                    [queryParams]=\"getParams(filterMenu.slug, filter.link)\"\n                    class=\"c-filter-menu--link\"\n                    [ngClass]=\"filter.isSelected ? 'active' : ''\"\n                >{{filter.text}}</a>\n            </li>\n        </ul>\n    </ui-filter-menu>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/partials/side-bar-partial/side-bar-partial.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/side-bar-partial/side-bar-partial.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideBarPartialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarPartialComponent", function() { return SideBarPartialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_data_filter_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/filter.data */ "./src/data/filter.data.ts");



var SideBarPartialComponent = /** @class */ (function () {
    function SideBarPartialComponent() {
        this._filterData = src_data_filter_data__WEBPACK_IMPORTED_MODULE_2__["filterData"];
    }
    Object.defineProperty(SideBarPartialComponent.prototype, "filterData", {
        get: function () {
            return this._filterData;
        },
        enumerable: true,
        configurable: true
    });
    SideBarPartialComponent.prototype.ngOnInit = function () {
    };
    SideBarPartialComponent.prototype.getParams = function (slug, link) {
        var _a;
        return _a = {}, _a[slug] = link, _a;
    };
    SideBarPartialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar-partial',
            template: __webpack_require__(/*! ./side-bar-partial.component.html */ "./src/app/components/partials/side-bar-partial/side-bar-partial.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarPartialComponent);
    return SideBarPartialComponent;
}());



/***/ }),

/***/ "./src/app/components/partials/side-bar-partial/side-bar-partial.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/partials/side-bar-partial/side-bar-partial.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SideBarPartialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarPartialModule", function() { return SideBarPartialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var library_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library-components */ "./node_modules/library-components/fesm5/library-components.js");
/* harmony import */ var _side_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar-partial.component */ "./src/app/components/partials/side-bar-partial/side-bar-partial.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SideBarPartialModule = /** @class */ (function () {
    function SideBarPartialModule() {
    }
    SideBarPartialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                library_components__WEBPACK_IMPORTED_MODULE_3__["FiltersModule"],
            ],
            exports: [
                _side_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__["SideBarPartialComponent"]
            ],
            declarations: [
                _side_bar_partial_component__WEBPACK_IMPORTED_MODULE_4__["SideBarPartialComponent"]
            ]
        })
    ], SideBarPartialModule);
    return SideBarPartialModule;
}());



/***/ }),

/***/ "./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-bar--holder\">\n    <p>\n        You have signed up but not yet verified your email! Please complete the registration\n        process to access all of our features\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: VerifyAccountMessageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountMessageBarComponent", function() { return VerifyAccountMessageBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");




var VerifyAccountMessageBarComponent = /** @class */ (function () {
    function VerifyAccountMessageBarComponent(auth, profile) {
        this.auth = auth;
        this.profile = profile;
    }
    VerifyAccountMessageBarComponent.prototype.ngOnInit = function () {
    };
    VerifyAccountMessageBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-account-message-bar',
            template: __webpack_require__(/*! ./verify-account-message-bar.component.html */ "./src/app/components/partials/verify-account-message-bar/verify-account-message-bar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], VerifyAccountMessageBarComponent);
    return VerifyAccountMessageBarComponent;
}());



/***/ }),

/***/ "./src/app/directives/app-shell-no-render.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/app-shell-no-render.directive.ts ***!
  \*************************************************************/
/*! exports provided: AppShellNoRenderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellNoRenderDirective", function() { return AppShellNoRenderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AppShellNoRenderDirective = /** @class */ (function () {
    function AppShellNoRenderDirective(viewContainer, templateRef, platformId) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.platformId = platformId;
    }
    AppShellNoRenderDirective.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    };
    AppShellNoRenderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appShellNoRender]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], Object])
    ], AppShellNoRenderDirective);
    return AppShellNoRenderDirective;
}());



/***/ }),

/***/ "./src/app/directives/app-shell-render.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/app-shell-render.directive.ts ***!
  \**********************************************************/
/*! exports provided: AppShellRenderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellRenderDirective", function() { return AppShellRenderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AppShellRenderDirective = /** @class */ (function () {
    function AppShellRenderDirective(viewContainer, templateRef, platformId) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.platformId = platformId;
    }
    AppShellRenderDirective.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    AppShellRenderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appShellRender]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], Object])
    ], AppShellRenderDirective);
    return AppShellRenderDirective;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(profile, auth) {
        this.profile = profile;
        this.auth = auth;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.profile.isAuthenticatedAndVerified() && this.profile.isAdmin()) {
            return true;
        }
        else {
            this.auth.login();
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, profile) {
        this.auth = auth;
        this.profile = profile;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.profile.isAuthenticatedAndVerified()) {
            return true;
        }
        else {
            this.auth.login();
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/http-headers.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/http-headers.interceptor.ts ***!
  \*********************************************/
/*! exports provided: HTTPHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPHeadersInterceptor", function() { return HTTPHeadersInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _services_application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/application/application.service */ "./src/app/services/application/application.service.ts");





var HTTPHeadersInterceptor = /** @class */ (function () {
    function HTTPHeadersInterceptor(auth, profile, appService) {
        this.auth = auth;
        this.profile = profile;
        this.appService = appService;
    }
    HTTPHeadersInterceptor.prototype.intercept = function (req, next) {
        var apiToken = '7d8a48df-011b-4164-aa40-3de0312c0fde';
        // Only attempt to add an `Authorization` header if running within the Client's Browser and the User is authed
        if (this.appService.isRunningInClientBrowser() && this.profile.isAuthenticated()) {
            var accessToken = this.profile.accessToken;
            if (accessToken) {
                var authedRequestClone = req.clone({
                    headers: req.headers
                        .set('Authorization', 'Bearer ' + accessToken).set('API-Token', apiToken)
                });
                return next.handle(authedRequestClone);
            }
        }
        // Always append an `API-Token` header to unlock access to the API endpoints
        var unauthedRequestClone = req.clone({
            headers: req.headers
                .set('API-Token', apiToken)
        });
        return next.handle(unauthedRequestClone);
    };
    HTTPHeadersInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            _services_application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
    ], HTTPHeadersInterceptor);
    return HTTPHeadersInterceptor;
}());



/***/ }),

/***/ "./src/app/models/admin-company.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/admin-company.model.ts ***!
  \***********************************************/
/*! exports provided: AdminCompanyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompanyModel", function() { return AdminCompanyModel; });
var AdminCompanyModel = /** @class */ (function () {
    function AdminCompanyModel() {
    }
    return AdminCompanyModel;
}());



/***/ }),

/***/ "./src/app/models/admin-feature.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/admin-feature.model.ts ***!
  \***********************************************/
/*! exports provided: AdminFeatureModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFeatureModel", function() { return AdminFeatureModel; });
var AdminFeatureModel = /** @class */ (function () {
    function AdminFeatureModel() {
    }
    return AdminFeatureModel;
}());



/***/ }),

/***/ "./src/app/models/admin-kind.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/admin-kind.model.ts ***!
  \********************************************/
/*! exports provided: AdminKindModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminKindModel", function() { return AdminKindModel; });
var AdminKindModel = /** @class */ (function () {
    function AdminKindModel() {
    }
    return AdminKindModel;
}());



/***/ }),

/***/ "./src/app/models/admin-platform.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/admin-platform.model.ts ***!
  \************************************************/
/*! exports provided: AdminPlatformModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPlatformModel", function() { return AdminPlatformModel; });
var AdminPlatformModel = /** @class */ (function () {
    function AdminPlatformModel() {
    }
    return AdminPlatformModel;
}());



/***/ }),

/***/ "./src/app/models/admin-product.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/admin-product.model.ts ***!
  \***********************************************/
/*! exports provided: AdminProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductModel", function() { return AdminProductModel; });
var AdminProductModel = /** @class */ (function () {
    function AdminProductModel() {
    }
    return AdminProductModel;
}());



/***/ }),

/***/ "./src/app/models/admin-tag.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/admin-tag.model.ts ***!
  \*******************************************/
/*! exports provided: AdminTagModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTagModel", function() { return AdminTagModel; });
var AdminTagModel = /** @class */ (function () {
    function AdminTagModel() {
    }
    return AdminTagModel;
}());



/***/ }),

/***/ "./src/app/models/app.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/app.model.ts ***!
  \*************************************/
/*! exports provided: AppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModel", function() { return AppModel; });
var AppModel = /** @class */ (function () {
    function AppModel() {
    }
    return AppModel;
}());



/***/ }),

/***/ "./src/app/models/collection.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/collection.model.ts ***!
  \********************************************/
/*! exports provided: CollectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModel", function() { return CollectionModel; });
var CollectionModel = /** @class */ (function () {
    function CollectionModel() {
        this.class = 'Collection';
        this.subscribed = false;
    }
    return CollectionModel;
}());



/***/ }),

/***/ "./src/app/models/entity.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/entity.model.ts ***!
  \****************************************/
/*! exports provided: EntityModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityModel", function() { return EntityModel; });
var EntityModel = /** @class */ (function () {
    function EntityModel() {
        this.class = 'Entity';
        this.public = false;
        this.subscribed = false;
        this.upvoted = false;
        this.has_upvoted_entity = false;
    }
    return EntityModel;
}());



/***/ }),

/***/ "./src/app/services/admin/app/admin.app.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/admin/app/admin.app.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAppService", function() { return AdminAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminAppService = /** @class */ (function () {
    function AdminAppService(http) {
        this.http = http;
    }
    AdminAppService.prototype.getApps = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/apps');
    };
    AdminAppService.prototype.createApp = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/apps', formData);
    };
    AdminAppService.prototype.updateApp = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/apps/' + id + '?use-id=true', formData);
    };
    AdminAppService.prototype.deleteApp = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/apps/' + id + '?use-id=true');
    };
    AdminAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminAppService);
    return AdminAppService;
}());



/***/ }),

/***/ "./src/app/services/admin/company/admin.company.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/admin/company/admin.company.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdminCompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCompanyService", function() { return AdminCompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminCompanyService = /** @class */ (function () {
    function AdminCompanyService(http) {
        this.http = http;
    }
    AdminCompanyService.prototype.getCompanies = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/companies');
    };
    AdminCompanyService.prototype.createCompany = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/companies', formData);
    };
    AdminCompanyService.prototype.updateCompany = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/companies/' + id + '?use-id=true', formData);
    };
    AdminCompanyService.prototype.deleteCompany = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/companies/' + id + '?use-id=true');
    };
    AdminCompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminCompanyService);
    return AdminCompanyService;
}());



/***/ }),

/***/ "./src/app/services/admin/feature/admin.feature.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/admin/feature/admin.feature.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdminFeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFeatureService", function() { return AdminFeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminFeatureService = /** @class */ (function () {
    function AdminFeatureService(http) {
        this.http = http;
    }
    AdminFeatureService.prototype.getFeatures = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/features');
    };
    AdminFeatureService.prototype.createFeature = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/features', formData);
    };
    AdminFeatureService.prototype.updateFeature = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/features/' + id + '?use-id=true', formData);
    };
    AdminFeatureService.prototype.deleteFeature = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/features/' + id + '?use-id=true');
    };
    AdminFeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminFeatureService);
    return AdminFeatureService;
}());



/***/ }),

/***/ "./src/app/services/admin/kind/admin.kind.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/admin/kind/admin.kind.service.ts ***!
  \***********************************************************/
/*! exports provided: AdminKindService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminKindService", function() { return AdminKindService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminKindService = /** @class */ (function () {
    function AdminKindService(http) {
        this.http = http;
    }
    AdminKindService.prototype.getKinds = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/kinds');
    };
    AdminKindService.prototype.createKind = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/kinds', formData);
    };
    AdminKindService.prototype.updateKind = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/kinds/' + id + '?use-id=true', formData);
    };
    AdminKindService.prototype.deleteKind = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/kinds/' + id + '?use-id=true');
    };
    AdminKindService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminKindService);
    return AdminKindService;
}());



/***/ }),

/***/ "./src/app/services/admin/platform/admin.platform.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/admin/platform/admin.platform.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdminPlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPlatformService", function() { return AdminPlatformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminPlatformService = /** @class */ (function () {
    function AdminPlatformService(http) {
        this.http = http;
    }
    AdminPlatformService.prototype.getPlatforms = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/platforms');
    };
    AdminPlatformService.prototype.updatePlatform = function (id, data) {
        var formData = new FormData();
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/platforms/' + id + '?use-id=true', formData);
    };
    AdminPlatformService.prototype.deletePlatform = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/platforms/' + id + '?use-id=true');
    };
    AdminPlatformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminPlatformService);
    return AdminPlatformService;
}());



/***/ }),

/***/ "./src/app/services/admin/product/admin.product.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/admin/product/admin.product.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdminProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductService", function() { return AdminProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminProductService = /** @class */ (function () {
    function AdminProductService(http) {
        this.http = http;
    }
    AdminProductService.prototype.getProducts = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/products');
    };
    AdminProductService.prototype.createProduct = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/products', formData);
    };
    AdminProductService.prototype.updateProduct = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/products/' + id + '?use-id=true', formData);
    };
    AdminProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/products/' + id + '?use-id=true');
    };
    AdminProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminProductService);
    return AdminProductService;
}());



/***/ }),

/***/ "./src/app/services/admin/tag/admin.tag.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/admin/tag/admin.tag.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminTagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTagService", function() { return AdminTagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminTagService = /** @class */ (function () {
    function AdminTagService(http) {
        this.http = http;
    }
    AdminTagService.prototype.getTags = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags');
    };
    AdminTagService.prototype.createTag = function (data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags', formData);
    };
    AdminTagService.prototype.updateTag = function (id, data) {
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('shortcode', data.shortcode);
        formData.append('removeFile', data.removeFile);
        if (data.file && data.file.name) {
            formData.append('file', data.file, data.file.name);
        }
        // Lumen doesn't handle http.put request when sending up formData. Send the data up as http.post and set the _method to PUT
        formData.append('_method', 'PUT');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags/' + id + '?use-id=true', formData);
    };
    AdminTagService.prototype.deleteTag = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags/' + id + '?use-id=true');
    };
    AdminTagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminTagService);
    return AdminTagService;
}());



/***/ }),

/***/ "./src/app/services/application/application.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/application/application.service.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/services/profile/profile.service.ts");
/* harmony import */ var _segment_segment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../segment/segment.service */ "./src/app/services/segment/segment.service.ts");

/* tslint:disable:max-line-length */






var ApplicationService = /** @class */ (function () {
    function ApplicationService(platformId, router, profile) {
        this.platformId = platformId;
        this.router = router;
        this.profile = profile;
        this.renderFeedbackForm = false;
    }
    ApplicationService.prototype.isRunningOnServer = function () {
        return !Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
    };
    ApplicationService.prototype.isRunningInClientBrowser = function () {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
    };
    ApplicationService.prototype.primeSegmentAnalytics = function () {
        var segmentAnalytics = "!function () {\n                var analytics = window.analytics = window.analytics || [];\n                if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error(\"Segment snippet included twice.\"); else {\n                    analytics.invoked = !0; analytics.methods = [\"trackSubmit\", \"trackClick\", \"trackLink\", \"trackForm\", \"pageview\", \"identify\", \"reset\", \"group\", \"track\", \"ready\", \"alias\", \"debug\", \"page\", \"once\", \"off\", \"on\"];\n                    analytics.factory = function (t) {\n                        return function () {\n                            var e = Array.prototype.slice.call(arguments);\n                            e.unshift(t);\n                            analytics.push(e);\n                            return analytics\n                        }\n                    };\n                    for (var t = 0; t < analytics.methods.length; t++) {\n                        var e = analytics.methods[t];\n                        analytics[e] = analytics.factory(e)\n                    }\n                    analytics.load = function (t, e) {\n                        var n = document.createElement(\"script\");\n                        n.type = \"text/javascript\";\n                        n.async = !0;\n                        n.src = \"https://cdn.segment.com/analytics.js/v1/\" + t + \"/analytics.min.js\";\n                        var a = document.getElementsByTagName(\"script\")[0];\n                        a.parentNode.insertBefore(n, a);\n                        analytics._loadOptions = e\n                    };\n                    analytics.SNIPPET_VERSION = \"4.1.0\";\n                }\n            }();";
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.text = segmentAnalytics;
        head.appendChild(script);
        // Only enable Segment analytics if running within the Client's Browser and within Production env
        if (this.isRunningInClientBrowser() && _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            window.analytics.load('Be382NH8pmWA3haW4dW9tAZJoedotwlR');
        }
        else if (this.isRunningInClientBrowser()) {
            window.analytics.load('ozq09LoupQAbtxeyVvCOAae206glpxWM');
        }
    };
    ApplicationService.prototype.primeSurveyMonkey = function () {
        this.setRenderFeedbackForm();
    };
    ApplicationService.prototype.primeNavigationEventsListener = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.scrollTop();
                _this.resetClasses();
                _this.resetAdminTemplate();
                _this.resetEmbedTemplate();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Only send Segment events if running within the Client's Browser and within Production env
                // `event.urlAfterRedirects` can be used to capture final NavigationEnd page URL variable
                if (_this.isRunningInClientBrowser()) {
                    _segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].page({ logged_in: _this.profile.isAuthenticatedAndVerified() });
                }
            }
        });
    };
    ApplicationService.prototype.handleError = function (error) {
        if (error.status === 404) {
            this.router.navigateByUrl('/error-404', { skipLocationChange: true });
        }
        else if (error.status === 401) {
            this.router.navigateByUrl('/error-401', { skipLocationChange: true });
        }
        else {
            this.router.navigateByUrl('/error-500', { skipLocationChange: true });
        }
    };
    ApplicationService.prototype.getApplicationWrapperClass = function () {
        return this.applicationWrapperClass;
    };
    ApplicationService.prototype.getRouterOutletWrapperClass = function () {
        return this.routerOutletWrapperClass;
    };
    ApplicationService.prototype.setErrorPageClasses = function () {
        this.setApplicationWrapperClass('flex-column');
        this.setRouterOutletWrapperClass('flex-grow background--pineapple error-page--holder');
    };
    ApplicationService.prototype.setAdminTemplate = function () {
        this.adminTemplate = true;
    };
    ApplicationService.prototype.resetAdminTemplate = function () {
        this.adminTemplate = false;
    };
    ApplicationService.prototype.isAdminTemplate = function () {
        return this.adminTemplate;
    };
    ApplicationService.prototype.setEmbedTemplate = function () {
        this.embedTemplate = true;
    };
    ApplicationService.prototype.resetEmbedTemplate = function () {
        this.embedTemplate = false;
    };
    ApplicationService.prototype.isEmbedTemplate = function () {
        return this.embedTemplate;
    };
    ApplicationService.prototype.setRenderFeedbackForm = function () {
        this.renderFeedbackForm = true;
    };
    ApplicationService.prototype.canRenderFeedbackForm = function () {
        return this.renderFeedbackForm;
    };
    ApplicationService.prototype.scrollTop = function () {
        // Only attempt to scroll the page via the window object if running within the Client's Browser
        if (this.isRunningInClientBrowser()) {
            window.scroll(0, 0);
        }
    };
    ApplicationService.prototype.resetClasses = function () {
        this.applicationWrapperClass = '';
        this.routerOutletWrapperClass = '';
    };
    ApplicationService.prototype.setApplicationWrapperClass = function (classString) {
        this.applicationWrapperClass = classString;
    };
    ApplicationService.prototype.setRouterOutletWrapperClass = function (classString) {
        this.routerOutletWrapperClass = classString;
    };
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth0.config */ "./src/app/services/auth/auth0.config.ts");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _segment_segment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../segment/segment.service */ "./src/app/services/segment/segment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/services/profile/profile.service.ts");









window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(platformId, http, profile) {
        this.platformId = platformId;
        this.http = http;
        this.profile = profile;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_5__["WebAuth"]({
            clientID: _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].clientID,
            domain: _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].client_domain,
            responseType: 'token',
            redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appUrl + _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].callbackURL,
            audience: _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].audience,
            scope: 'openid profile email'
        });
    }
    /**
     * Called during Angular's Initialization Process via APP_INITIALIZER within "app.module"
     */
    AuthService.prototype.init = function () {
        // If the application is running within the browser and the auth token hasn't expired, refresh it
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) && this.profile.isAuthenticated()) {
            return this.renewToken();
        }
    };
    /**
     * Called from the "/callback" Page upon a User being returned to the app having completed the Auth0 authentication process
     */
    AuthService.prototype.handleAuthenticationCallback = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth0.parseHash(function (err, authResult) {
                if (authResult && authResult.accessToken) {
                    // Clear Auth0 hash from the URL
                    window.location.hash = '';
                    // Fetch User Profile details
                    return resolve(_this.authWrappedGetProfile(authResult));
                }
                else if (err) {
                    _this.clearSession();
                    // @TODO: Improve Error Handling
                    console.log("Error handling authentication: " + err.error);
                    reject(err);
                }
                resolve(_auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].loginActionFailRoute);
            });
        });
    };
    AuthService.prototype.login = function () {
        if (!this.profile.isAuthenticated()) {
            this.storeCurrentURL();
            this.auth0.authorize();
        }
    };
    AuthService.prototype.signUp = function () {
        if (!this.profile.isAuthenticated()) {
            this.storeCurrentURL();
            this.auth0.authorize({
                mode: 'signUp'
            });
        }
    };
    AuthService.prototype.logout = function () {
        this.clearSession();
        this.auth0.logout({
            clientId: _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].clientID,
            returnTo: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appUrl + _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].logoutActionRoute
        });
    };
    AuthService.prototype.renewToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth0.checkSession({}, function (err, authResult) {
                if (authResult && authResult.accessToken) {
                    resolve(_this.renewWrappedGetProfile(authResult));
                }
                else {
                    _this.clearSession();
                    // @TODO: Improve Error Handling
                    console.log("Error refreshing session: " + err.error);
                    reject(err);
                }
            });
        });
    };
    AuthService.prototype.authWrappedGetProfile = function (authResult) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var nextPage, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getProfile(authResult)];
                    case 1:
                        nextPage = _a.sent();
                        this.profile.getUserMeta().subscribe(this.identifyUser());
                        return [2 /*return*/, nextPage];
                    case 2:
                        err_1 = _a.sent();
                        console.log("Error loading user meta: " + err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.identifyUser = function () {
        var _this = this;
        var profile = this.profile.profile;
        return function (data) { return _segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].identify(profile.sub, {
            identify: {
                userId: profile.sub,
                email: profile.email,
                firstName: profile.firstName,
                lastName: profile.lastName,
                nickname: profile.nickname,
            }
        }, null, _this.trackAuth(data)); };
    };
    AuthService.prototype.trackAuth = function (data) {
        return function () { return _segment_segment_service__WEBPACK_IMPORTED_MODULE_6__["Segment"].track('Authenticated', {
            script_count: data.entity_count,
            collection_count: data.collection_count,
        }); };
    };
    AuthService.prototype.renewWrappedGetProfile = function (authResult) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getProfile(authResult).then(function (nextPage) { return resolve(nextPage); })
                .catch(function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getProfile = function (authResult) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Use Access Token to retrieve User's Auth0 Profile and then configure the User's session
            _this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
                if (profile) {
                    // After storing the User's profile against the current session
                    _this.setSession(authResult);
                    _this.setProfileData(authResult, profile);
                    // Resolve with the "Redirect To" URL when available for use as the "nextPage" within
                    // the "/callback" route handler as appropriate
                    var nextPage = localStorage.getItem('redirect_to');
                    localStorage.removeItem('redirect_to'); // Don't allow the value to persist beyond its first use
                    resolve(nextPage);
                }
                else if (err) {
                    // @TODO: Improve Error Handling
                    console.log("Error retrieving profile: " + err.error);
                    reject(err);
                }
            });
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        // Persist the Auth0 Access Token's "session expiry" timestamp within local storage
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.setProfileData = function (authResult, profile) {
        this.profile.accessToken = authResult.accessToken;
        this.profile.profile = profile;
    };
    AuthService.prototype.clearSession = function () {
        localStorage.removeItem('expires_at');
        localStorage.removeItem('redirect_to');
    };
    AuthService.prototype.storeCurrentURL = function () {
        // Retain the current URL so that the User may be redirected to the same page they left upon returning
        // from the Auth0 Authentication process
        var currentURLPath = window.location.pathname;
        // However, ensure that a User is never returned to any of the following routes
        var blacklist = [
            '/callback',
            _auth0_config__WEBPACK_IMPORTED_MODULE_4__["AUTH_CONFIG"].loginActionFailRoute
        ];
        if (blacklist.indexOf(currentURLPath) > -1) {
            currentURLPath = '/'; // In these cases, simply return the User to the homepage route instead
        }
        localStorage.setItem('redirect_to', currentURLPath);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth0.config.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth0.config.ts ***!
  \***********************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'oeJGsH3q49J9GWBTTuOIKP8FQpdE0bKH',
    client_domain: 'adaptavist.eu.auth0.com',
    audience: 'https://dex-api.adaptavist.com/',
    callbackURL: '/callback',
    loginActionFailRoute: '/failed-login',
    logoutActionRoute: '/',
};


/***/ }),

/***/ "./src/app/services/collection/collection.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/collection/collection.service.ts ***!
  \***********************************************************/
/*! exports provided: CollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionService", function() { return CollectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_collection_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/collection.model */ "./src/app/models/collection.model.ts");
/* harmony import */ var _request_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../request/request.service */ "./src/app/services/request/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CollectionService = /** @class */ (function () {
    function CollectionService(request, http) {
        this.request = request;
        this.http = http;
    }
    CollectionService.prototype.getCollectionItem = function (slug) {
        return this.getCollectionItemRequest("/v2/collection/" + slug, [
            { key: 'with', value: 'entities' },
            { key: 'merge', value: 'more_by_owner' }
        ]);
    };
    CollectionService.prototype.getCollectionList = function (params) {
        if (params === void 0) { params = null; }
        return this.getCollectionListRequest('/v2/collection', params);
    };
    CollectionService.prototype.getMyCollectionList = function (params) {
        if (params === void 0) { params = null; }
        return this.getCollectionListRequest('/v2/user/collection', params);
    };
    CollectionService.prototype.getCollectionsBy = function (owner) {
        return this.getCollectionListRequest("/v2/collection/user/" + owner, [{ key: 'limit', value: '4' }]);
    };
    CollectionService.prototype.getPopularCollections = function (limit) {
        if (limit === void 0) { limit = 5; }
        return this.getCollectionListRequest('/v2/collection', [
            { key: 'order-by', value: 'updated_at' },
            { key: 'limit', value: limit.toString() },
        ]);
    };
    CollectionService.prototype.getNewestCollections = function (limit) {
        if (limit === void 0) { limit = 5; }
        return this.getCollectionListRequest('/v2/collection', [
            { key: 'order-by', value: 'created_at' },
            { key: 'limit', value: limit.toString() },
        ]);
    };
    CollectionService.prototype.createCollection = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections', data);
    };
    CollectionService.prototype.updateCollection = function (id, data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '?use-id=true', data);
    };
    CollectionService.prototype.deleteCollection = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '?use-id=true');
    };
    CollectionService.prototype.assignEntity = function (id, entityID) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '/entities?use-id=true', { entityID: entityID });
    };
    CollectionService.prototype.unAssignEntity = function (id, entityID) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '/entities/' + entityID + '?use-id=true');
    };
    CollectionService.prototype.assignCompany = function (id, companyID) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '/companies?use-id=true', { companyID: companyID });
    };
    CollectionService.prototype.unAssignCompany = function (id, companyID) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/collections/' + id + '/companies/' + companyID + '?use-id=true');
    };
    CollectionService.prototype.getCollectionListRequest = function (endpoint, params) {
        if (params === void 0) { params = null; }
        return this.request.get(endpoint, params, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return response.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (collections) { return collections.map(function (c) { return Object.assign(new _models_collection_model__WEBPACK_IMPORTED_MODULE_4__["CollectionModel"](), c); }); }));
    };
    CollectionService.prototype.getCollectionItemRequest = function (endpoint, params, prefix) {
        if (endpoint === void 0) { endpoint = ''; }
        if (params === void 0) { params = null; }
        if (prefix === void 0) { prefix = ''; }
        return this.request.get(endpoint, params, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return response.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (collection) { return Object.assign(new _models_collection_model__WEBPACK_IMPORTED_MODULE_4__["CollectionModel"](), collection); }));
    };
    CollectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_request_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CollectionService);
    return CollectionService;
}());



/***/ }),

/***/ "./src/app/services/cookie/cookie.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/cookie/cookie.service.ts ***!
  \***************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/services/profile/profile.service.ts");





var CookieService = /** @class */ (function () {
    function CookieService(http, profile) {
        this.http = http;
        this.profile = profile;
    }
    CookieService.get = function (key) {
        var decodedCookie = decodeURIComponent(document.cookie);
        var pairs = decodedCookie.split(/;\s*/);
        var prefix = key + "=";
        for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
            var pair = pairs_1[_i];
            if (pair.indexOf(prefix) === 0) {
                return pair.substring(prefix.length);
            }
        }
        return '';
    };
    CookieService.prototype.set = function (key, value, expires) {
        var cookieValue = key + "=" + value;
        if (expires) {
            cookieValue += ";expires='" + expires.toUTCString() + "'";
        }
        document.cookie = cookieValue;
    };
    CookieService.prototype.createCookieConsent = function (customisedCookies, chosenCookies) {
        var formData = new FormData();
        formData.append('customised-cookies', customisedCookies);
        chosenCookies.forEach(function (cookie) {
            formData.append('gdpr[]', cookie);
        });
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/consent', formData).subscribe();
    };
    CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/entity/entity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/entity/entity.service.ts ***!
  \***************************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_entity_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/entity.model */ "./src/app/models/entity.model.ts");
/* harmony import */ var _application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _request_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../request/request.service */ "./src/app/services/request/request.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var EntityService = /** @class */ (function () {
    function EntityService(request, http, appService) {
        this.request = request;
        this.http = http;
        this.appService = appService;
    }
    EntityService.prototype.getEntityItem = function (slug) {
        return this.getEntityItemRequest("/v2/entity/" + slug, [
            { key: 'with', value: 'apps,type' },
            { key: 'merge', value: 'platforms,products' }
        ]);
    };
    EntityService.prototype.getEntityList = function () {
        return this.getEntityListRequest('/v2/entity');
    };
    EntityService.prototype.getPopularInAppEntityList = function (app) {
        return this.getEntityListRequest("/v2/entity/popular/" + app);
    };
    EntityService.prototype.getRelatedEntityList = function (slug) {
        return this.getEntityListRequest("/v2/entity/related/" + slug);
    };
    EntityService.prototype.getMyEntityList = function (type) {
        return this.getEntityListRequest('/v2/user/entity', [{ key: 'type', value: type }]);
    };
    EntityService.prototype.extractCategories = function (entity) {
        var _this = this;
        return ['apps', 'products', 'platforms']
            .reduce(function (arr, category) { return arr.concat(entity[category].map(function (ec) { return _this.makeLinkData(category, ec); })); }, []);
    };
    EntityService.prototype.putAddToMyLibrary = function () {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/");
    };
    // Todo: add endpoint
    EntityService.prototype.getEntityListRequest = function (endpoint, params) {
        if (params === void 0) { params = null; }
        return this.request.get(endpoint, params, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (entities) { return entities.map(function (e) { return Object.assign(new _models_entity_model__WEBPACK_IMPORTED_MODULE_3__["EntityModel"](), e); }); }));
    };
    EntityService.prototype.getEntityItemRequest = function (endpoint, params) {
        if (endpoint === void 0) { endpoint = ''; }
        if (params === void 0) { params = null; }
        return this.request.get(endpoint, params, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (entity) { return Object.assign(new _models_entity_model__WEBPACK_IMPORTED_MODULE_3__["EntityModel"](), entity); }));
    };
    EntityService.prototype.makeLinkData = function (category, entityCategory) {
        var _a;
        return {
            link: '/search',
            text: entityCategory.name.charAt(0).toUpperCase() + entityCategory.name.slice(1),
            params: (_a = {}, _a[category] = this.makeSlug(entityCategory), _a),
        };
    };
    EntityService.prototype.makeSlug = function (entityCategory) {
        return entityCategory.shortcode || entityCategory.name.toLowerCase().replace(' ', '-');
    };
    EntityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_request_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "./src/app/services/profile/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ProfileService = /** @class */ (function () {
    function ProfileService(platformId, http) {
        this.platformId = platformId;
        this.http = http;
        this._admin = null;
        this._accessToken = null;
    }
    Object.defineProperty(ProfileService.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        set: function (profile) {
            this._profile = {
                sub: profile.sub,
                roles: profile['https://adaptavist:eu:auth0:com/roles'],
                firstName: profile['https://adaptavist:eu:auth0:com/first_name'],
                lastName: profile['https://adaptavist:eu:auth0:com/last_name'],
                email: profile.email,
                nickname: profile.nickname,
                email_verified: profile.email_verified
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileService.prototype, "admin", {
        get: function () {
            if (this._admin === null) {
                this._admin = this.hasRole('Library Admin');
            }
            return this._admin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileService.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        set: function (accessToken) {
            this._accessToken = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    ProfileService.prototype.isAuthenticated = function () {
        // If the application is running on the server, a User may never be authenticated
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformServer"])(this.platformId)) {
            return false;
        }
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    ProfileService.prototype.isVerified = function () {
        return (typeof this._profile !== 'undefined' && this._profile.email_verified);
    };
    ProfileService.prototype.isAuthenticatedAndVerified = function () {
        return this.isAuthenticated() && this.isVerified();
    };
    ProfileService.prototype.isAdmin = function () {
        return this.admin;
    };
    ProfileService.prototype.getUserMeta = function () {
        if (!this.isAuthenticatedAndVerified()) {
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error('Unauthenticated'));
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/users/meta');
    };
    ProfileService.prototype.hasRole = function (role) {
        var roles = this._profile.roles || [];
        return roles.includes(role);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/request/request.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/request/request.service.ts ***!
  \*****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application/application.service */ "./src/app/services/application/application.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var RequestService = /** @class */ (function () {
    function RequestService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    // Todo: make { key: string, value: string }[] a model.
    RequestService.prototype.get = function (endpoint, parameters, authData) {
        if (endpoint === void 0) { endpoint = ''; }
        if (parameters === void 0) { parameters = null; }
        if (authData === void 0) { authData = false; }
        var parameterString;
        if (authData && this.appService.isRunningOnServer()) {
            parameterString = this.createParamString(parameters.concat([{ key: 'unauthed', value: null }]));
        }
        else {
            parameterString = this.createParamString(parameters);
        }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + endpoint + parameterString);
    };
    RequestService.prototype.createParamString = function (params) {
        return params ? params.reduce(function (str, p, i) {
            str += i !== 0 ? '&' : '';
            str += p.value ? p.key + "=" + p.value : p.key;
            return str;
        }, '?') : '';
    };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/search/filter-group.collection.ts":
/*!************************************************************!*\
  !*** ./src/app/services/search/filter-group.collection.ts ***!
  \************************************************************/
/*! exports provided: FilterGroupCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterGroupCollection", function() { return FilterGroupCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FilterGroupCollection = /** @class */ (function () {
    function FilterGroupCollection(name) {
        this._name = name;
        this._filters = [];
    }
    Object.defineProperty(FilterGroupCollection.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterGroupCollection.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    FilterGroupCollection.prototype.hasSelectedFilters = function () {
        return typeof this.filters.find(function (f) { return f.isSelected; }) !== 'undefined';
    };
    FilterGroupCollection.prototype.addFilter = function (filter) {
        this._filters.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, filter, { isSelected: false }));
    };
    FilterGroupCollection.prototype.selectFilter = function (slug) {
        try {
            this._filters.find(function (f) { return f.slug === slug; }).isSelected = true;
        }
        catch (e) {
            return false;
        }
        return true;
    };
    FilterGroupCollection.prototype.deselectFilter = function (slug) {
        try {
            this._filters.find(function (f) { return f.slug === slug; }).isSelected = false;
        }
        catch (e) {
            return false;
        }
        return true;
    };
    FilterGroupCollection.prototype.toggleFilter = function (slug) {
        try {
            var filter = this._filters.find(function (f) { return f.slug === slug; });
            filter.isSelected = !filter.isSelected;
        }
        catch (e) {
            return false;
        }
        return true;
    };
    // Todo: Could move parameter handlers somewhere else
    FilterGroupCollection.prototype.getParameterStringWithNames = function () {
        return this._name.toLowerCase() + "[]=" + (this.createSelectedFilterStringFromNames());
    };
    FilterGroupCollection.prototype.createSelectedFilterString = function (key) {
        return this._filters
            .filter(function (f) { return f.isSelected; })
            .reduce(function (str, f, i) { return str + (i === 0 ? '' : ',') + f[key]; }, '');
    };
    FilterGroupCollection.prototype.createSelectedFilterStringFromSlugs = function () {
        return this.createSelectedFilterString('slug');
    };
    FilterGroupCollection.prototype.createSelectedFilterStringFromNames = function () {
        return this.createSelectedFilterString('name');
    };
    FilterGroupCollection.prototype.getSelected = function () {
        return this._filters.filter(function (f) { return f.isSelected; });
    };
    return FilterGroupCollection;
}());



/***/ }),

/***/ "./src/app/services/search/search-filter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/search/search-filter.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterService", function() { return SearchFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _filter_group_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-group.collection */ "./src/app/services/search/filter-group.collection.ts");
/* harmony import */ var _unique_filter_group_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unique-filter-group.collection */ "./src/app/services/search/unique-filter-group.collection.ts");




var SearchFilterService = /** @class */ (function () {
    function SearchFilterService() {
        this._filterGroups = [];
    }
    Object.defineProperty(SearchFilterService.prototype, "filterGroups", {
        get: function () {
            return this._filterGroups;
        },
        enumerable: true,
        configurable: true
    });
    SearchFilterService.prototype.addFilterGroup = function (name, filters, unique) {
        var filterGroup = unique ? new _unique_filter_group_collection__WEBPACK_IMPORTED_MODULE_3__["UniqueFilterGroupCollection"](name) : new _filter_group_collection__WEBPACK_IMPORTED_MODULE_2__["FilterGroupCollection"](name);
        filters.map(function (f) { return filterGroup.addFilter(f); });
        this._filterGroups.push(filterGroup);
        return this;
    };
    SearchFilterService.prototype.hasFilters = function () {
        // Todo: find a better way of doing this, it has to loop for each comparison.
        return typeof this.filterGroups.find(function (fg) { return fg.hasSelectedFilters(); }) !== 'undefined';
    };
    SearchFilterService.prototype.resetFilters = function () {
        this._filterGroups = [];
    };
    SearchFilterService.prototype.getFilterGroup = function (name) {
        return this._filterGroups.find(function (f) { return f.name === name; });
    };
    SearchFilterService.prototype.getQueryStringWithNames = function () {
        return this._filterGroups.reduce(function (str, fg, i) { return fg.hasSelectedFilters()
            ? str + (i === 0 ? '' : '&') + fg.getParameterStringWithNames()
            : str; }, '');
    };
    SearchFilterService.prototype.getParams = function () {
        return this._filterGroups.filter(function (fg) { return fg.hasSelectedFilters(); }).reduce(function (obj, fg) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, (_a = {}, _a[fg.name.toLowerCase()] = fg.createSelectedFilterStringFromSlugs(), _a)));
        }, {});
    };
    SearchFilterService.prototype.selectFiltersFromQueryParams = function (params) {
        this.filterGroups.map(function (fg) {
            params
                .filter(function (p) { return fg.name.toLowerCase() === p.paramName; })
                .map(function (p) { return p.value.split(',')
                .map(function (f) { return fg.toggleFilter(f); }); });
        });
    };
    SearchFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchFilterService);
    return SearchFilterService;
}());



/***/ }),

/***/ "./src/app/services/search/search-term.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/search/search-term.service.ts ***!
  \********************************************************/
/*! exports provided: SearchTermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTermService", function() { return SearchTermService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SearchTermService = /** @class */ (function () {
    function SearchTermService() {
        this._searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    Object.defineProperty(SearchTermService.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        enumerable: true,
        configurable: true
    });
    SearchTermService.prototype.getSearchTermQueryString = function () {
        return this.searchTerm.getValue() ? "searchTerm=" + this.searchTerm.getValue() : '';
    };
    SearchTermService.prototype.clearSearchTerm = function () {
        this.searchTerm.next('');
    };
    SearchTermService.prototype.addSearchTerm = function (params) {
        var searchTerm = params.find(function (p) { return p.paramName === 'searchTerm'; });
        if (typeof searchTerm !== 'undefined') {
            this._searchTerm.next(searchTerm.value);
        }
    };
    SearchTermService.prototype.getParams = function () {
        return this.searchTerm.getValue() ? { searchTerm: this.searchTerm.getValue() } : null;
    };
    SearchTermService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchTermService);
    return SearchTermService;
}());



/***/ }),

/***/ "./src/app/services/search/unique-filter-group.collection.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/search/unique-filter-group.collection.ts ***!
  \*******************************************************************/
/*! exports provided: UniqueFilterGroupCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFilterGroupCollection", function() { return UniqueFilterGroupCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _filter_group_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-group.collection */ "./src/app/services/search/filter-group.collection.ts");


var UniqueFilterGroupCollection = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UniqueFilterGroupCollection, _super);
    function UniqueFilterGroupCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueFilterGroupCollection.prototype.selectFilter = function (slug) {
        try {
            this._filters.map(function (f) { return f.isSelected = f.slug === slug; });
        }
        catch (e) {
            return false;
        }
        return true;
    };
    UniqueFilterGroupCollection.prototype.deselectFilter = function (slug) {
        try {
            this._filters.map(function (f) { return f.isSelected = false; });
        }
        catch (e) {
            return false;
        }
        return true;
    };
    UniqueFilterGroupCollection.prototype.toggleFilter = function (slug) {
        console.log('1');
        try {
            this._filters.map(function (f) { return f.isSelected = f.slug === slug ? !f.isSelected : false; });
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return UniqueFilterGroupCollection;
}(_filter_group_collection__WEBPACK_IMPORTED_MODULE_1__["FilterGroupCollection"]));



/***/ }),

/***/ "./src/app/services/segment/segment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/segment/segment.service.ts ***!
  \*****************************************************/
/*! exports provided: Segment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return Segment; });
/* harmony import */ var _cookie_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookie/cookie.service */ "./src/app/services/cookie/cookie.service.ts");

var Segment = /** @class */ (function () {
    function Segment() {
    }
    Segment.identify = function (id, data, options, callback) {
        if (options === void 0) { options = null; }
        if (callback === void 0) { callback = null; }
        if (!this.trackingIsAllowed()) {
            return null;
        }
        return window.analytics.identify(id, data, options, callback);
    };
    Segment.track = function (name, data) {
        if (!this.trackingIsAllowed()) {
            return null;
        }
        return window.analytics.track(name, data);
    };
    Segment.page = function (data) {
        if (!this.trackingIsAllowed()) {
            return null;
        }
        return window.analytics.page(data);
    };
    Segment.trackingIsAllowed = function () {
        return typeof window.analytics !== 'undefined' &&
            _cookie_cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"].get('cookieControlPrefs').includes('analytics');
    };
    return Segment;
}());



/***/ }),

/***/ "./src/data/filter.data.ts":
/*!*********************************!*\
  !*** ./src/data/filter.data.ts ***!
  \*********************************/
/*! exports provided: filterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterData", function() { return filterData; });
var filterData = [
    {
        title: 'Discover',
        slug: 'discover',
        filters: [
            {
                text: 'Most Popular',
                link: 'most-popular',
                isSelected: false
            },
            {
                text: 'Most Viewed',
                link: 'most-viewed',
                isSelected: false
            },
            {
                text: 'Top Picks',
                link: 'top-picks',
                isSelected: false
            },
            {
                text: 'Recently Updated',
                link: 'recently-updated',
                isSelected: false
            }
        ]
    },
    {
        title: 'Products',
        slug: 'products',
        filters: [
            {
                text: 'Jira Software',
                link: 'jira-software',
                isSelected: false
            },
            {
                text: 'Jira',
                link: 'jira',
                isSelected: false
            },
            {
                text: 'Confluence',
                link: 'confluence',
                isSelected: false
            },
            {
                text: 'Bitbucket',
                link: 'bitbucket',
                isSelected: false
            }
        ]
    },
    {
        title: 'Apps',
        slug: 'apps',
        filters: [
            {
                text: 'ScriptRunner',
                link: 'scriptrunner',
                isSelected: false
            },
            {
                text: 'Test Management',
                link: 'test-management',
                isSelected: false
            }
        ]
    },
    {
        title: 'Platforms',
        slug: 'platforms',
        filters: [
            {
                text: 'Cloud',
                link: 'cloud',
                isSelected: false
            },
            {
                text: 'Server',
                link: 'server',
                isSelected: false
            },
            {
                text: 'Data Centre',
                link: 'data-centre',
                isSelected: false
            }
        ]
    },
];


/***/ }),

/***/ "./src/data/home-banner.data.ts":
/*!**************************************!*\
  !*** ./src/data/home-banner.data.ts ***!
  \**************************************/
/*! exports provided: homeBannerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeBannerData", function() { return homeBannerData; });
var homeBannerData = {
    title: 'Explore Adaptavist Script Library',
    image: {
        src: 'https://placehold.it/500x355',
        alt: 'alt description'
    },
};


/***/ }),

/***/ "./src/data/requirements.data.ts":
/*!***************************************!*\
  !*** ./src/data/requirements.data.ts ***!
  \***************************************/
/*! exports provided: requirementsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requirementsData", function() { return requirementsData; });
var requirementsData = [
    {
        text: 'BitBucket',
        link: '#',
        icon: {
            src: '/assets/images/atlassian-icons/bitbucket.png',
            alt: '#'
        }
    },
    {
        text: 'Bamboo',
        link: '#',
        icon: {
            src: '/assets/images/atlassian-icons/bamboo.png',
            alt: '#'
        }
    }
];


/***/ }),

/***/ "./src/data/tab.data.ts":
/*!******************************!*\
  !*** ./src/data/tab.data.ts ***!
  \******************************/
/*! exports provided: tabData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabData", function() { return tabData; });
var tabData = [
    {
        text: 'Tab One',
        link: '#',
        isSelected: true
    },
    {
        text: 'Tab Two',
        link: '#',
        isSelected: false
    },
    {
        text: 'Tab Three',
        link: '#',
        isSelected: false
    }
];


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
var environment = {
    production: false,
    appUrl: 'http://localhost:4200',
    apiUrl: 'http://localhost',
};


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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/seancooper/Code/adaptavist-library-fe/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/seancooper/Code/adaptavist-library-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map