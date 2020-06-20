(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/html-loader/index.js!../node_modules/markdown-loader/index.js!./src/doc.md":
/*!********************************************************************************!*\
  !*** ../node_modules/html-loader!../node_modules/markdown-loader!./src/doc.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 id=\"usage\">Usage</h3>\n<pre><code class=\"language-typescript\">import { FileSelectDirective, FileDropDirective, FileUploader } from &#39;ng2-file-upload/ng2-file-upload&#39;;</code></pre>\n<h3 id=\"annotations\">Annotations</h3>\n<pre><code class=\"language-typescript\">// class FileSelectDirective\n@Directive({ selector: &#39;[ng2FileSelect]&#39; })</code></pre>\n<pre><code class=\"language-typescript\">// class FileDropDirective\n@Directive({ selector: &#39;[ng2FileDrop]&#39; })</code></pre>\n<h2 id=\"fileselect-api\">FileSelect API</h2>\n<h3 id=\"properties\">Properties</h3>\n<ul>\n<li><p><code>uploader</code> - (<code>FileUploader</code>) - uploader object. See using in <a href=\"https://github.com/valor-software/ng2-file-upload/blob/master/demo/components/file-upload/simple-demo.ts\">demo</a></p>\n<p>Parameters supported by this object:</p>\n</li>\n</ul>\n<ol>\n<li><code>url</code> - URL of File Uploader&#39;s route</li>\n<li><code>authToken</code> - auth token that will be applied as &#39;Authorization&#39; header during file send.</li>\n<li><code>disableMultipart</code> - If &#39;true&#39;, disable using a multipart form for file upload and instead stream the file. Some APIs (e.g. Amazon S3) may expect the file to be streamed rather than sent via a form. Defaults to false.</li>\n<li><code>itemAlias</code> - item alias (form name redefenition)</li>\n<li><code>formatDataFunction</code> - Function to modify the request body. &#39;DisableMultipart&#39; must be &#39;true&#39; for this function to be called.</li>\n<li><code>formatDataFunctionIsAsync</code> - Informs if the function sent in &#39;formatDataFunction&#39; is asynchronous. Defaults to false.</li>\n<li><code>parametersBeforeFiles</code> - States if additional parameters should be appended before or after the file. Defaults to false.</li>\n</ol>\n<h3 id=\"events\">Events</h3>\n<ul>\n<li><code>onFileSelected</code> - fires when files are selected and added to the uploader queue</li>\n</ul>\n<h2 id=\"filedrop-api\">FileDrop API</h2>\n<h3 id=\"properties-1\">Properties</h3>\n<ul>\n<li><code>uploader</code> - (<code>FileUploader</code>) - uploader object. See using in <a href=\"https://github.com/valor-software/ng2-file-upload/blob/master/demo/components/file-upload/simple-demo.ts\">demo</a></li>\n</ul>\n<h3 id=\"events-1\">Events</h3>\n<ul>\n<li><code>fileOver</code> - it fires during &#39;over&#39; and &#39;out&#39; events for Drop Area; returns <code>boolean</code>: <code>true</code> if file is over Drop Area, <code>false</code> in case of out.\nSee using in <a href=\"https://github.com/valor-software/ng2-file-upload/blob/master/demo/components/file-upload/simple-demo.ts\">ts demo</a> and\n<a href=\"https://github.com/valor-software/ng2-file-upload/blob/master/demo/components/file-upload/simple-demo.html\">html demo</a></li>\n<li><code>onFileDrop</code> - it fires after a file has been dropped on a Drop Area; you can pass in <code>$event</code> to get the list of files that were dropped. i.e. <code>(onFileDrop)=&quot;dropped($event)&quot;</code></li>\n</ul>\n";

/***/ }),

/***/ "../node_modules/html-loader/index.js!../node_modules/markdown-loader/index.js!./src/getting-started.md":
/*!********************************************************************************************!*\
  !*** ../node_modules/html-loader!../node_modules/markdown-loader!./src/getting-started.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"getting-started\">Getting started</h1>\n<h2 id=\"first-of-all-welcome\">First of all, Welcome!</h2>\n<h3 id=\"install\">Install</h3>\n<p>Install the components</p>\n<pre><code>npm install ng2-file-upload --save</code></pre>";

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload-section.html":
/*!********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload-section.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section [attr.id]=\"name.toLowerCase()\">\n  <div class=\"row\">\n    <tabset>\n      <tab *ngFor=\"let desc of tabs\" heading=\"{{desc.heading}}\" (select)=\"select($event)\">\n        <div class=\"card card-block panel panel-default panel-body\">\n\n          <simple-demo></simple-demo>\n\n  \n        </div>\n      </tab>\n    </tabset>\n  </div>\n\n</section>\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/file-catcher.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/file-catcher.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*eslint-disable*/\nvar express = require('express');\nvar multer = require('multer');\nvar fs = require('fs');\nvar app = express();\n\nvar DIR = '/External/upload';\n\n\n\n\nvar storage = multer.diskStorage({\n  destination: function(req, file, cb) {\n      cb(null, DIR);\n   },\n  filename: function (req, file, cb) {\n      cb(null , file.originalname);\n  }\n});\n\n\n\n\nvar upload = multer({ storage: storage }).any()\n\napp.use(function (req, res, next) {\n  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');\n  res.setHeader('Access-Control-Allow-Methods', 'POST');\n  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');\n  res.setHeader('Access-Control-Allow-Credentials', true);\n  next();\n});\n\napp.use(upload);\n\n\n\napp.get('/api', function (req, res) {\n  res.end('file catcher example');\n});\n\napp.post('/api', function (req, res) {\n\n  upload(req, res, function (err) {\n    console.log(req )\n    if (err) {\n      return res.end(err.toString());\n    }\n\n    res.end('File is uploaded');\n  });\n});\n\n\nvar PORT = process.env.PORT || 3000;\n\napp.listen(PORT, function () {\n  console.log('Working on port ' + PORT);\n});\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.html":
/*!************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .my-drop-zone { border: dotted 3px lightgray; }\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n    .another-file-over-class { border: dotted 3px green; }\n\n    html, body { height: 100%; }\n</style>\n\n\n\n    <div class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href>Upload all you want and leave it clear!</a>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-3\">\n\n            <h3>Select files</h3>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                 (fileOver)=\"fileOverBase($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Drope the files here\n            </div>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n                 (fileOver)=\"fileOverAnother($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Another drop zone\n            </div>\n\n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  />    <br/>\n\n            Single\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.options.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n\n        </div>\n\n    </div>\n\n    <br><br>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Response</div>\n                <div class=\"panel-body\">\n                  {{ response }}\n                </div>\n            </div>\n        </div>\n    </div>\n\n");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.ts":
/*!**********************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { FileUploader } from 'ng2-file-upload';\n\n// const URL = '/api/';\nconst URL = 'http://93.49.6.246:3002/api';\n\n@Component({\n  selector: 'simple-demo',\n  templateUrl: './simple-demo.html'\n})\nexport class SimpleDemoComponent {\n\n  uploader:FileUploader;\n  hasBaseDropZoneOver:boolean;\n  hasAnotherDropZoneOver:boolean;\n  response:string;\n\n  constructor (){\n    this.uploader = new FileUploader({url: URL});\n\n    this.hasBaseDropZoneOver = false;\n    this.hasAnotherDropZoneOver = false;\n\n    this.response = '';\n\n    this.uploader.response.subscribe( res => this.response = res );\n   // public uploader:FileUploader = new FileUploader({url: URL});\n\n  }\n\n  public fileOverBase(e:any):void {\n    this.hasBaseDropZoneOver = e;\n  }\n\n  public fileOverAnother(e:any):void {\n    this.hasAnotherDropZoneOver = e;\n  }\n}\n");

/***/ }),

/***/ "../scripts/polyfills.ts":
/*!*******************************!*\
  !*** ../scripts/polyfills.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ts_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-helpers */ "../node_modules/ts-helpers/index.js");
/* harmony import */ var ts_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_helpers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/symbol */ "../node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/object */ "../node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/function */ "../node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-int */ "../node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/parse-float */ "../node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/number */ "../node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/math */ "../node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/string */ "../node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/date */ "../node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/array */ "../node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/regexp */ "../node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/map */ "../node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/set */ "../node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es6/reflect */ "../node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/es7/reflect */ "../node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! zone.js/dist/zone */ "../node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classlist-polyfill */ "../node_modules/classlist-polyfill/src/index.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_17__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.




















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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let gettingStarted = __webpack_require__(/*! html-loader!markdown-loader!../getting-started.md */ "../node_modules/html-loader/index.js!../node_modules/markdown-loader/index.js!./src/getting-started.md");
let AppComponent = class AppComponent {
    constructor() {
        this.gettingStarted = gettingStarted;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            if (typeof PR !== 'undefined') {
                // google code-prettify
                PR.prettyPrint();
            }
        }, 150);
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app',
        template: `


  <div class="container">
   
  

    <file-upload-section class="col-md-12"></file-upload-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"> This page is maintained by Tomas Mali.</p>
    </div>
  </footer>
  `
    })
], AppComponent);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "../node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_file_upload_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/file-upload-section */ "./src/app/components/file-upload-section.ts");
/* harmony import */ var _components_file_upload_simple_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/file-upload/simple-demo */ "./src/app/components/file-upload/simple-demo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_file_upload_section__WEBPACK_IMPORTED_MODULE_7__["FileUploadSectionComponent"], _components_file_upload_simple_demo__WEBPACK_IMPORTED_MODULE_8__["SimpleDemoComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/file-upload-section.ts":
/*!***************************************************!*\
  !*** ./src/app/components/file-upload-section.ts ***!
  \***************************************************/
/*! exports provided: FileUploadSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadSectionComponent", function() { return FileUploadSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let doc = __webpack_require__(/*! html-loader!markdown-loader!../../doc.md */ "../node_modules/html-loader/index.js!../node_modules/markdown-loader/index.js!./src/doc.md");
let tabDesc = [
    {
        heading: 'Simple',
        ts: __webpack_require__(/*! !raw-loader!./file-upload/simple-demo.ts */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.ts").default,
        html: __webpack_require__(/*! !raw-loader!./file-upload/simple-demo.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.html").default,
        js: __webpack_require__(/*! !raw-loader!./file-upload/file-catcher.js */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/file-catcher.js").default
    }
];
let FileUploadSectionComponent = class FileUploadSectionComponent {
    constructor() {
        this.name = 'File Upload';
        this.currentHeading = 'Simple';
        this.doc = doc;
        this.tabs = tabDesc;
    }
    select(e) {
        if (e.heading) {
            this.currentHeading = e.heading;
        }
    }
};
FileUploadSectionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'file-upload-section',
        template: __importDefault(__webpack_require__(/*! raw-loader!./file-upload-section.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload-section.html")).default
    })
], FileUploadSectionComponent);



/***/ }),

/***/ "./src/app/components/file-upload/simple-demo.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/file-upload/simple-demo.ts ***!
  \*******************************************************/
/*! exports provided: SimpleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDemoComponent", function() { return SimpleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "../node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// const URL = '/api/';
const URL = 'http://93.49.6.246:3002/api';
let SimpleDemoComponent = class SimpleDemoComponent {
    constructor() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.response = '';
        this.uploader.response.subscribe(res => this.response = res);
        // public uploader:FileUploader = new FileUploader({url: URL});
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
};
SimpleDemoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'simple-demo',
        template: __importDefault(__webpack_require__(/*! raw-loader!./simple-demo.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/components/file-upload/simple-demo.html")).default
    }),
    __metadata("design:paramtypes", [])
], SimpleDemoComponent);



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
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
/* harmony import */ var _scripts_polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/polyfills.ts */ "../scripts/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomas/Desktop/uploadFromRaspberry/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map